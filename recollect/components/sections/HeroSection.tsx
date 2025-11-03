'use client';

import { Button } from '@/components/ui/button';
import { GradientText } from '@/components/ui/GradientText';
import { PhoneMockup } from '@/components/ui/PhoneMockup';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-pink-purple opacity-10" />

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-brand-yellow opacity-30 blur-2xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-brand-blue opacity-30 blur-2xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <AnimatedSection className="text-center lg:text-left">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Your Network is Your{' '}
              <GradientText>Most Powerful Asset</GradientText>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Stop treating your network like a junk drawer. Re:connect is your{' '}
              <span className="font-bold text-foreground">second brain</span> for managing
              relationships that matter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="h-16 px-8 text-lg gradient-pink-purple text-white hover:opacity-90 transition-opacity font-bold rounded-full"
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join the Waitlist
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-16 px-8 text-lg font-bold rounded-full border-2"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </motion.div>
          </AnimatedSection>

          {/* Right: Phone Mockup */}
          <AnimatedSection delay={0.3} className="flex justify-center">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <PhoneMockup className="animate-float" />
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
