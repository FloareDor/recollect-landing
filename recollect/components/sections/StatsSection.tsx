'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GradientText } from '@/components/ui/GradientText';
import { Users, TrendingUp, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

export function StatsSection() {
  const stats = [
    {
      icon: <Users size={48} />,
      value: '129M',
      label: 'Users Need This',
      description: 'Students and young professionals in the US alone',
      gradient: 'pink-purple' as const
    },
    {
      icon: <DollarSign size={48} />,
      value: '$34.1B',
      label: 'Market Size',
      description: 'Total addressable market opportunity',
      gradient: 'blue-teal' as const
    },
    {
      icon: <TrendingUp size={48} />,
      value: '15 min',
      label: 'To Get Started',
      description: 'Import your entire network instantly',
      gradient: 'orange-yellow' as const
    }
  ];

  return (
    <section className="py-24 bg-brand-beige">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            The <GradientText gradient="pink-purple">Opportunity</GradientText> is Massive
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                className="bg-white rounded-3xl p-8 text-center h-full shadow-lg border-2 border-gray-100"
                whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-center mb-4">
                  <div className={`gradient-${stat.gradient} p-4 rounded-2xl text-white`}>
                    {stat.icon}
                  </div>
                </div>
                <div className="text-5xl md:text-6xl font-extrabold mb-2">
                  <GradientText gradient={stat.gradient}>{stat.value}</GradientText>
                </div>
                <div className="text-xl font-bold mb-3">{stat.label}</div>
                <p className="text-muted-foreground">{stat.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
