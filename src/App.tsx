import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import SolarServices from "./pages/SolarServices";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import CareerDetail from "./pages/CareerDetail";
import NotFound from "./pages/NotFound";
// Service subpages
import WebMobileDevelopment from "./pages/services/WebMobileDevelopment";
import SapModernization from "./pages/services/SapModernization";
import EcommercePortals from "./pages/services/EcommercePortals";
import AiAutomation from "./pages/services/AiAutomation";
import ItConsulting from "./pages/services/ItConsulting";
// Product category pages
import HealthcareMedical from "./pages/products/HealthcareMedical";
import EducationLearning from "./pages/products/EducationLearning";
import BusinessErpCrm from "./pages/products/BusinessErpCrm";
import EcommerceRetail from "./pages/products/EcommerceRetail";
import NgoCrowdfunding from "./pages/products/NgoCrowdfunding";
import FinanceMicrofinance from "./pages/products/FinanceMicrofinance";
import SolarRenewable from "./pages/products/SolarRenewable";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-mobile-development" element={<WebMobileDevelopment />} />
          <Route path="/services/sap-modernization" element={<SapModernization />} />
          <Route path="/services/ecommerce-portals" element={<EcommercePortals />} />
          <Route path="/services/ai-automation" element={<AiAutomation />} />
          <Route path="/services/it-consulting" element={<ItConsulting />} />
          <Route path="/products" element={<Work />} />
          <Route path="/products/healthcare-medical" element={<HealthcareMedical />} />
          <Route path="/products/education-learning" element={<EducationLearning />} />
          <Route path="/products/business-erp-crm" element={<BusinessErpCrm />} />
          <Route path="/products/ecommerce-retail" element={<EcommerceRetail />} />
          <Route path="/products/ngo-crowdfunding" element={<NgoCrowdfunding />} />
          <Route path="/products/finance-microfinance" element={<FinanceMicrofinance />} />
          <Route path="/products/solar-renewable" element={<SolarRenewable />} />
          <Route path="/solar-services" element={<SolarServices />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:slug" element={<CareerDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
