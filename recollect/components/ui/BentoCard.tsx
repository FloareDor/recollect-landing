'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BentoCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  gradient: 'pink-purple' | 'blue-teal' | 'orange-yellow' | 'green-blue';
  className?: string;
}

export function BentoCard({
  title,
  description,
  icon,
  gradient,
  className = ''
}: BentoCardProps) {
  const gradientClass = `gradient-${gradient}`;

  return (
    <motion.div
      className={`${gradientClass} rounded-3xl p-8 text-white relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.02, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative z-10">
        <div className="mb-6">{icon}</div>
        <h3 className="text-2xl md:text-3xl font-extrabold mb-3">{title}</h3>
        <p className="text-white/90 text-lg leading-relaxed">{description}</p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
    </motion.div>
  );
}
