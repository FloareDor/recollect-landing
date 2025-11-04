'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GradientText } from '@/components/ui/GradientText';
import { WaitlistForm } from '@/components/ui/WaitlistForm';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function CTASection() {
  return (
    <section id="waitlist" className="py-24 gradient-pink-purple relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 left-10 text-yellow-300 opacity-60"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <Sparkles size={64} />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 text-yellow-300 opacity-60"
        animate={{ rotate: -360, scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <Sparkles size={48} />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-1/4 text-yellow-300 opacity-40"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Sparkles size={40} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Never Forget a Connection Again
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            The next person you meet could get you a job, an intro, or change your life. Don't let them disappear.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <WaitlistForm />
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="text-center mt-8">
          <motion.p
            className="text-white/80 text-lg"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Join 2,500+ people getting early access (launching Spring 2025)
          </motion.p>
        </AnimatedSection>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
            fillOpacity="0.1"
          />
        </svg>
      </div>
    </section>
  );
}
