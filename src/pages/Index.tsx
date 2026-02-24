import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { TrustSignalsSection } from "@/components/sections/TrustSignalsSection";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import ChatBot from "@/components/chat/ChatBot";
import FloatingAssessmentButton from "@/components/FloatingAssessmentButton";
import { SEOHead } from "@/components/SEO/SEOHead";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "KNSOFT Technologies - Top Software Company in Hyderabad, India",
    "description": "Leading software development company in Hyderabad offering custom software, web apps, mobile apps, ERP solutions & IT consulting. 500+ clients, 10+ years experience.",
    "url": "https://knsoft.dev/",
    "mainEntity": {
      "@type": "SoftwareCompany",
      "name": "KNSOFT Technologies",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "addressCountry": "India"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <SEOHead 
        title="KNSOFT Technologies | Top Software Company in Hyderabad, India - Custom Software Development"
        description="KNSOFT Technologies is a leading software company in Hyderabad, India. Custom software development, web applications, mobile apps, ERP systems & IT consulting. 500+ clients | 10+ years | ISO certified."
        keywords="software company in Hyderabad, software companies in India, best software company Hyderabad, IT companies in Hyderabad, software development company India, custom software development, web development company, mobile app development, ERP software company, IT services"
        canonical="https://knsoft.dev/"
        structuredData={structuredData}
      />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TrustSignalsSection />
        <ServicesSection />
        <FeaturesSection />
        <CapabilitiesSection />
      </main>
      <Footer />
      <ChatBot />
      <FloatingAssessmentButton />
    </div>
  );
};

export default Index;
