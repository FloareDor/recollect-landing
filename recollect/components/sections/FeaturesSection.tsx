'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { BentoCard } from '@/components/ui/BentoCard';
import { GradientText } from '@/components/ui/GradientText';
import { Share2, Sparkles, Search } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      title: 'Easy Exchange',
      description: "We're making that first handshake simple. It's like a universal AirDrop that works on any phone, even if they don't have the app.",
      icon: <Share2 size={48} />,
      gradient: 'pink-purple' as const
    },
    {
      title: 'Add Context',
      description: 'The moment you connect, our AI instantly enriches the contact. Add text notes or 10-second voice notes and our AI transcribes and files it.',
      icon: <Sparkles size={48} />,
      gradient: 'blue-teal' as const
    },
    {
      title: 'Search Anything',
      description: "All this rich context is now yours. You don't need to remember a name. Search by concept like 'Girl from UPenn at XYZ conference' and find her instantly.",
      icon: <Search size={48} />,
      gradient: 'orange-yellow' as const
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Your <GradientText>Second Brain</GradientText> for Relationships
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Re:connect aggregates your entire network from LinkedIn, iMessage, and Gmail
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
