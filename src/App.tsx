import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import { PageLoader } from "./components/ui/loading-spinner";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import SolarServices from "./pages/SolarServices";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import Careers from "./pages/Careers";
import CareerDetail from "./pages/CareerDetail";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
// Service subpages
import WebMobileDevelopment from "./pages/services/WebMobileDevelopment";
import SapModernization from "./pages/services/SapModernization";
import EcommercePortals from "./pages/services/EcommercePortals";
import AiAutomation from "./pages/services/AiAutomation";
import ItConsulting from "./pages/services/ItConsulting";
import Training from "./pages/services/Training";
// Product category pages
import HealthcareMedical from "./pages/products/HealthcareMedical";
import HospitalManagementPro from "./pages/products/HospitalManagementPro";
import PathologyLabManagement from "./pages/products/PathologyLabManagement";
import PharmacyManagementTSF from "./pages/products/PharmacyManagementTSF";
import PharmacyManagementSoftware from "./pages/products/PharmacyManagementSoftware";
import ClinicManagementSoftware from "./pages/products/ClinicManagementSoftware";
import DiagnosticLabManagement from "./pages/products/DiagnosticLabManagement";
import HospitalManagementSoftware2 from "./pages/products/HospitalManagementSoftware2";
import HospitalManagementSoftware3 from "./pages/products/HospitalManagementSoftware3";
import ClinicManagementSoftwarePro from "./pages/products/ClinicManagementSoftwarePro";
import PharmacyManagementProGD from "./pages/products/PharmacyManagementProGD";
import HospitalManagementSystemTSF from "./pages/products/HospitalManagementSystemTSF";
import EducationLearning from "./pages/products/EducationLearning";
import BusinessErpCrm from "./pages/products/BusinessErpCrm";
import EcommerceRetail from "./pages/products/EcommerceRetail";
import NgoCrowdfunding from "./pages/products/NgoCrowdfunding";
import FinanceMicrofinance from "./pages/products/FinanceMicrofinance";
import SolarRenewable from "./pages/products/SolarRenewable";
import HospitalityTravel from "./pages/products/HospitalityTravel";
import RestaurantFood from "./pages/products/RestaurantFood";
import JobPortalsClassifieds from "./pages/products/JobPortalsClassifieds";
import CivicSocial from "./pages/products/CivicSocial";
import Exam from "./pages/products/Exam";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/web-mobile-development" element={<WebMobileDevelopment />} />
              <Route path="/services/sap-modernization" element={<SapModernization />} />
              <Route path="/services/ecommerce-portals" element={<EcommercePortals />} />
              <Route path="/services/ai-automation" element={<AiAutomation />} />
              <Route path="/services/it-consulting" element={<ItConsulting />} />
              <Route path="/services/workforce-upskilling" element={<Training />} />
              <Route path="/services/training" element={<Training />} />
              <Route path="/products" element={<Work />} />
              <Route path="/products/healthcare-medical" element={<HealthcareMedical />} />
              <Route path="/products/hospital-management-pro" element={<HospitalManagementPro />} />
              <Route path="/products/pathology-lab-management" element={<PathologyLabManagement />} />
              <Route path="/products/pharmacy-management-tsf" element={<PharmacyManagementTSF />} />
              <Route path="/products/pharmacy-management-software" element={<PharmacyManagementSoftware />} />
              <Route path="/products/clinic-management-software" element={<ClinicManagementSoftware />} />
              <Route path="/products/diagnostic-lab-management" element={<DiagnosticLabManagement />} />
              <Route path="/products/hospital-management-software-2" element={<HospitalManagementSoftware2 />} />
              <Route path="/products/hospital-management-software-3" element={<HospitalManagementSoftware3 />} />
              <Route path="/products/clinic-management-software-pro" element={<ClinicManagementSoftwarePro />} />
              <Route path="/products/pharmacy-management-pro-gd" element={<PharmacyManagementProGD />} />
              <Route path="/products/hospital-management-system-tsf" element={<HospitalManagementSystemTSF />} />
              <Route path="/products/education-learning" element={<EducationLearning />} />
              <Route path="/products/business-erp-crm" element={<BusinessErpCrm />} />
              <Route path="/products/ecommerce-retail" element={<EcommerceRetail />} />
              <Route path="/products/ngo-crowdfunding" element={<NgoCrowdfunding />} />
              <Route path="/products/finance-microfinance" element={<FinanceMicrofinance />} />
              <Route path="/products/solar-renewable" element={<SolarRenewable />} />
              <Route path="/products/hospitality-travel" element={<HospitalityTravel />} />
              <Route path="/products/restaurant-food" element={<RestaurantFood />} />
              <Route path="/products/job-portals-classifieds" element={<JobPortalsClassifieds />} />
              <Route path="/products/civic-social" element={<CivicSocial />} />
              <Route path="/products/exam" element={<Exam />} />
              <Route path="/solar-services" element={<SolarServices />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/success-stories" element={<CaseStudies />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/:slug" element={<CareerDetail />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
