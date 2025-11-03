import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { UseCasesSection } from '@/components/sections/UseCasesSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { ImportSection } from '@/components/sections/ImportSection';
import { CTASection } from '@/components/sections/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <UseCasesSection />
        <StatsSection />
        <ImportSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
