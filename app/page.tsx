import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OutcomesSection from "@/components/OutcomesSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import StrategySection from "@/components/StrategySection";
import EconomicsCalculator from "@/components/EconomicsCalculator";
import LeadFormSection from "@/components/LeadFormSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F5F8FF]">
      {/* Navigation */}
      <Navbar />

      {/* Step 3: Hero Section */}
      <HeroSection />

      {/* Step 4: Business Outcomes */}
      <OutcomesSection />

      {/* Step 5: Before and After Case Study */}
      <BeforeAfterSection />

      {/* Step 6: 5-Step Admission Growth Strategy */}
      <StrategySection />

      {/* Bonus Interactive Tool: Admission Unit Economics Calculator */}
      <EconomicsCalculator />

      {/* Step 7: Lead Generation Form */}
      <LeadFormSection />

      {/* Leadership FAQs */}
      <FaqSection />

      {/* Footer & Trust Closing */}
      <Footer />

      {/* Floating Sticky Conversion Bar */}
      <StickyBar />
    </main>
  );
}
