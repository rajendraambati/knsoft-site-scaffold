import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import ChatBot from "@/components/chat/ChatBot";
import { ThreeScene } from "@/components/three/ThreeScene";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ThreeScene />
      <div className="relative" style={{ zIndex: 1 }}>
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <FeaturesSection />
          <CapabilitiesSection />
        </main>
        <Footer />
        <ChatBot />
      </div>
    </div>
  );
};

export default Index;
