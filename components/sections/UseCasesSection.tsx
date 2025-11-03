'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { PhoneMockup } from '@/components/ui/PhoneMockup';
import { motion } from 'framer-motion';

export function UseCasesSection() {
  const useCases = [
    {
      title: 'New to a City',
      description: 'Moving somewhere new? Instantly find all your connections in that city and reconnect.',
      bgColor: 'bg-brand-purple',
      textColor: 'text-white'
    },
    {
      title: 'Job Hunting',
      description: 'Search your network for people at target companies or in your industry. Your next opportunity is in your pocket.',
      bgColor: 'bg-brand-orange',
      textColor: 'text-white'
    },
    {
      title: 'Building Your Network',
      description: 'Never forget a connection again. Add context the moment you meet someone and search by anything later.',
      bgColor: 'bg-brand-green',
      textColor: 'text-white'
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="space-y-16">
          {useCases.map((useCase, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                className={`${useCase.bgColor} ${useCase.textColor} rounded-3xl p-8 md:p-12`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
                      {useCase.title}
                    </h3>
                    <p className="text-lg md:text-xl leading-relaxed opacity-90">
                      {useCase.description}
                    </p>
                  </div>
                  <div className={`flex justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <PhoneMockup />
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
