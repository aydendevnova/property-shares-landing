import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/sections/hero";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { WhyPropertySharesSection } from "@/components/sections/why-property-shares";
import { FeaturedOpportunitiesSection } from "@/components/sections/featured-opportunities";
import { TrustComplianceSection } from "@/components/sections/trust-compliance";
import { FAQSection } from "@/components/sections/faq";
import { FinalCTASection } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <WhyPropertySharesSection />
        <FeaturedOpportunitiesSection />
        <TrustComplianceSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
