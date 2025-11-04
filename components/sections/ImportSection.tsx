'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GradientText } from '@/components/ui/GradientText';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Smartphone, ArrowRight } from 'lucide-react';

export function ImportSection() {
  const sources = [
    { icon: <Linkedin size={40} />, name: 'LinkedIn', color: 'text-blue-600' },
    { icon: <Mail size={40} />, name: 'Gmail', color: 'text-red-600' },
    { icon: <Smartphone size={40} />, name: 'Phone Contacts', color: 'text-green-600' }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Start With{' '}
            <GradientText gradient="blue-teal">Everyone You Already Know</GradientText>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Import 1,000+ contacts from LinkedIn, Gmail, and your phone in 15 minutes. Zero manual entry.
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {sources.map((source, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-md border-2 border-gray-100"
                whileHover={{ scale: 1.1, borderColor: 'oklch(0.7 0.22 350)' }}
                transition={{ duration: 0.2 }}
              >
                <div className={source.color}>{source.icon}</div>
                <span className="font-bold text-lg">{source.name}</span>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="flex justify-center">
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex -space-x-4">
              {sources.map((source, index) => (
                <div
                  key={index}
                  className={`w-12 h-12 rounded-full bg-white border-2 border-white flex items-center justify-center ${source.color} shadow-lg`}
                >
                  {source.icon}
                </div>
              ))}
            </div>
            <ArrowRight size={32} className="text-brand-purple" />
            <div className="w-16 h-16 rounded-full gradient-pink-purple flex items-center justify-center text-white font-extrabold text-2xl shadow-xl">
              RC
            </div>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.6} className="text-center mt-12">
          <Button
            size="lg"
            className="h-16 px-10 text-lg gradient-blue-teal text-white hover:opacity-90 transition-opacity font-bold rounded-full"
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Early Access
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
