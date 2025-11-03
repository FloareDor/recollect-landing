import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  gradient?: 'pink-purple' | 'orange-yellow' | 'blue-teal';
  className?: string;
}

export function GradientText({
  children,
  gradient = 'pink-purple',
  className = ''
}: GradientTextProps) {
  const gradientClass = `text-gradient-${gradient}`;

  return (
    <span className={`${gradientClass} ${className}`}>
      {children}
    </span>
  );
}
