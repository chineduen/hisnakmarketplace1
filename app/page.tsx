import { HeroSection } from '@/components/home/hero-section';
import { StatsSection } from '@/components/home/stats-section';
import { ProductShowcase } from '@/components/home/product-showcase';
import { CommissionStructure } from '@/components/home/commission-structure';
import { AboutSection } from '@/components/home/about-section';
import { VendorSection } from '@/components/home/vendor-section';
import { AffiliateSection } from '@/components/home/affiliate-section';
import { SDGSection } from '@/components/home/sdg-section';
import { FAQSection } from '@/components/home/faq-section';
import { CTASection } from '@/components/home/cta-section';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ProductShowcase />
        <CommissionStructure />
        <AboutSection />
        <AffiliateSection />
        <VendorSection />
        <SDGSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}