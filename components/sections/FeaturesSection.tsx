'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { BentoCard } from '@/components/ui/BentoCard';
import { GradientText } from '@/components/ui/GradientText';
import { Share2, Sparkles, Search } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      title: 'Swap Contacts Instantly',
      description: "Tap phones together. Done. No 'What's your number?' No typing. Works on any phone - iPhone, Android, even if they don't have the app.",
      icon: <Share2 size={48} />,
      gradient: 'pink-purple' as const
    },
    {
      title: 'Add Context',
      description: "After you meet: 10-second voice note. 'Met at tech conference. Interested in AI.' Done. We transcribe and remember everything.",
      icon: <Sparkles size={48} />,
      gradient: 'blue-teal' as const
    },
    {
      title: 'Search Anything',
      description: "Can't remember her name? Search 'UPenn girl, XYZ conference, mentioned studying abroad' and instantly find her. No perfect recall needed.",
      icon: <Search size={48} />,
      gradient: 'orange-yellow' as const
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Your Contacts, <GradientText>Supercharged</GradientText>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Import everyone you know from LinkedIn, Gmail, and your phone. Then actually remember who they are.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <BentoCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                gradient={feature.gradient}
                className="h-full"
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
