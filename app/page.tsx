import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PlatformLogos from "@/components/PlatformLogos";
import OutcomesSection from "@/components/OutcomesSection";
import CollegeShowcase from "@/components/CollegeShowcase";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import StrategySection from "@/components/StrategySection";
import EconomicsCalculator from "@/components/EconomicsCalculator";
import LeadFormSection from "@/components/LeadFormSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F5F8FF]">
      {/* Navigation */}
      <Navbar />

      {/* Step 3: Hero Section with Real Campus Photography */}
      <HeroSection />

      {/* Certified Marketing Partners & Education CRM Ecosystem */}
      <PlatformLogos />

      {/* Section 2: Business Outcomes */}
      <OutcomesSection />

      {/* Section 3: The 5 Execution Modules We Deploy & Full-Funnel Architecture */}
      <StrategySection />

      {/* Section 4: Performance Ads & CRM in Action for Higher Education & EdTech */}
      <CollegeShowcase />

      {/* Section 5: Before and After Case Study */}
      <BeforeAfterSection />

      {/* Social Proof: Education Leader Testimonials */}
      <TestimonialsSection />

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
