'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GradientText } from '@/components/ui/GradientText';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

export function ProblemSection() {
  const scenarios = [
    {
      emoji: '🌴',
      text: "Planning that trip to Thailand, but can't remember who said 'My sister lives there!'"
    },
    {
      emoji: '💼',
      text: "Trying to find 'that investor with blonde hair from the networking event'"
    },
    {
      emoji: '📱',
      text: 'Your network is scattered across a dozen apps like a digital junk drawer'
    }
  ];

  return (
    <section className="py-24 bg-brand-cream">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            <GradientText gradient="orange-yellow">We've All Been There</GradientText>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            You've met hundreds of people who could change your life. You just can't remember them.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {scenarios.map((scenario, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="p-8 h-full bg-white border-2 border-gray-100 hover:border-brand-orange transition-colors">
                  <div className="text-6xl mb-4">{scenario.emoji}</div>
                  <p className="text-lg leading-relaxed text-foreground">
                    {scenario.text}
                  </p>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="text-center mt-16">
          <p className="text-2xl md:text-3xl font-bold max-w-4xl mx-auto">
            The truth is, <GradientText>our network is a junk drawer</GradientText>.
            It's scattered across a dozen different apps.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
