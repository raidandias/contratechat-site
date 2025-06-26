
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import PlatformsSection from "@/components/PlatformsSection";
import ProcessSection from "@/components/ProcessSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <PlatformsSection />
      <ProcessSection />
      <BenefitsSection />
      <PricingSection />
      <SuccessStoriesSection />
      <Footer />
    </div>
  );
};

export default Index;
