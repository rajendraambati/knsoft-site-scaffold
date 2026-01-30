"use client";

import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Success Stories", href: "/success-stories" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const servicesDropdown = [
  { name: "Web & Mobile Development", href: "/services/web-mobile-development", description: "Custom apps for web & mobile" },
  { name: "SAP Modernization", href: "/services/sap-modernization", description: "Enterprise SAP solutions" },
  { name: "eCommerce Portals", href: "/services/ecommerce-portals", description: "Online store development" },
  { name: "AI & Automation", href: "/services/ai-automation", description: "Smart automation solutions" },
  { name: "IT Consulting", href: "/services/it-consulting", description: "Strategic IT guidance" },
  { name: "Workforce Upskilling", href: "/services/workforce-upskilling", description: "Training & development" },
];

const productsDropdown = [
  { name: "Healthcare & Medical", href: "/products/healthcare-medical" },
  { name: "Education & Learning", href: "/products/education-learning" },
  { name: "Business, ERP & CRM", href: "/products/business-erp-crm" },
  { name: "E-Commerce & Retail", href: "/products/ecommerce-retail" },
  { name: "NGO & Crowdfunding", href: "/products/ngo-crowdfunding" },
  { name: "Finance & Microfinance", href: "/products/finance-microfinance" },
  { name: "Hospitality, Travel & Booking", href: "/products/hospitality-travel" },
  { name: "Restaurant & Food Ordering", href: "/products/restaurant-food" },
  { name: "Job Portals & Classifieds", href: "/products/job-portals-classifieds" },
  { name: "Civic, Social & Miscellaneous", href: "/products/civic-social" },
  { name: "Solar Energy & Renewable", href: "/products/solar-renewable" },
  { name: "Exam", href: "/products/exam" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const productsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  // Track scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileProductsOpen(false);
  }, [location.pathname]);

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => setIsServicesOpen(false), 150);
  };

  const handleProductsMouseEnter = () => {
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    setIsProductsOpen(true);
  };

  const handleProductsMouseLeave = () => {
    productsTimeoutRef.current = setTimeout(() => setIsProductsOpen(false), 150);
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-border/50" 
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src="/fun.png" 
              alt="KNSOFT Technologies - Leading IT Solutions & Software Development Company Logo" 
              className="h-10 lg:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              width="120"
              height="40"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                isActive("/") 
                  ? "text-primary bg-primary/10" 
                  : isScrolled ? "text-foreground hover:text-primary hover:bg-muted" : "text-white/90 hover:text-white hover:bg-white/10"
              )}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                isActive("/about") 
                  ? "text-primary bg-primary/10" 
                  : isScrolled ? "text-foreground hover:text-primary hover:bg-muted" : "text-white/90 hover:text-white hover:bg-white/10"
              )}
            >
              About
            </Link>
            
            {/* Services Mega Menu */}
            <div 
              className="relative"
              ref={servicesRef}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                className={cn(
                  "flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  isScrolled ? "text-foreground hover:text-primary hover:bg-muted" : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                Services
                <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform duration-200", isServicesOpen && "rotate-180")} />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl overflow-hidden"
                  >
                    <div className="p-2">
                      {servicesDropdown.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="flex flex-col px-4 py-3 rounded-xl hover:bg-muted transition-colors group"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {service.name}
                          </span>
                          <span className="text-xs text-muted-foreground">{service.description}</span>
                        </Link>
                      ))}
                      <div className="border-t border-border mt-2 pt-2">
                        <Link
                          to="/services"
                          className="flex items-center justify-between px-4 py-3 rounded-xl text-primary hover:bg-primary/10 transition-colors"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <span className="font-medium">View All Services</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Products Dropdown */}
            <div 
              className="relative"
              ref={productsRef}
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              <button
                className={cn(
                  "flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  isScrolled ? "text-foreground hover:text-primary hover:bg-muted" : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                Products
                <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform duration-200", isProductsOpen && "rotate-180")} />
              </button>
              
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl max-h-[70vh] overflow-y-auto"
                  >
                    <div className="p-2">
                      {productsDropdown.map((product) => (
                        <Link
                          key={product.name}
                          to={product.href}
                          className="block px-4 py-2.5 rounded-xl text-sm font-medium text-foreground hover:text-primary hover:bg-muted transition-colors"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          {product.name}
                        </Link>
                      ))}
                      <div className="border-t border-border mt-2 pt-2">
                        <Link
                          to="/products"
                          className="flex items-center justify-between px-4 py-3 rounded-xl text-primary hover:bg-primary/10 transition-colors"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          <span className="font-medium">View All Products</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/success-stories"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                isActive("/success-stories") 
                  ? "text-primary bg-primary/10" 
                  : isScrolled ? "text-foreground hover:text-primary hover:bg-muted" : "text-white/90 hover:text-white hover:bg-white/10"
              )}
            >
              Success Stories
            </Link>
            <Link
              to="/careers"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                isActive("/careers") 
                  ? "text-primary bg-primary/10" 
                  : isScrolled ? "text-foreground hover:text-primary hover:bg-muted" : "text-white/90 hover:text-white hover:bg-white/10"
              )}
            >
              Careers
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              asChild 
              variant="ghost"
              className={cn(
                "transition-all duration-200",
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:bg-white/10"
              )}
            >
              <Link to="/contact">Contact</Link>
            </Button>
            <Button 
              asChild 
              className="btn-gradient shadow-elegant group"
            >
              <Link to="/contact" className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Get a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "transition-colors",
                isScrolled ? "text-foreground" : "text-white"
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-xl rounded-2xl mt-2 mb-4 border border-border shadow-2xl"
            >
              <div className="flex flex-col p-4 space-y-1">
                <Link
                  to="/"
                  className={cn(
                    "px-4 py-3 rounded-xl font-medium transition-colors",
                    isActive("/") ? "text-primary bg-primary/10" : "text-foreground hover:bg-muted"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={cn(
                    "px-4 py-3 rounded-xl font-medium transition-colors",
                    isActive("/about") ? "text-primary bg-primary/10" : "text-foreground hover:bg-muted"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                
                {/* Mobile Services Accordion */}
                <div className="flex flex-col">
                  <button
                    className="flex items-center justify-between px-4 py-3 rounded-xl font-medium text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  >
                    Services
                    <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isMobileServicesOpen && "rotate-180")} />
                  </button>
                  
                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col space-y-1 pl-4 mt-1 border-l-2 border-primary/20 ml-4">
                          {servicesDropdown.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="px-4 py-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                          <Link
                            to="/services"
                            className="px-4 py-2.5 text-sm font-medium text-primary"
                            onClick={() => setIsOpen(false)}
                          >
                            View All Services →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Products Accordion */}
                <div className="flex flex-col">
                  <button
                    className="flex items-center justify-between px-4 py-3 rounded-xl font-medium text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  >
                    Products
                    <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isMobileProductsOpen && "rotate-180")} />
                  </button>
                  
                  <AnimatePresence>
                    {isMobileProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col space-y-1 pl-4 mt-1 border-l-2 border-primary/20 ml-4 max-h-64 overflow-y-auto">
                          {productsDropdown.slice(0, 6).map((product) => (
                            <Link
                              key={product.name}
                              to={product.href}
                              className="px-4 py-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {product.name}
                            </Link>
                          ))}
                          <Link
                            to="/products"
                            className="px-4 py-2.5 text-sm font-medium text-primary"
                            onClick={() => setIsOpen(false)}
                          >
                            View All Products →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/success-stories"
                  className={cn(
                    "px-4 py-3 rounded-xl font-medium transition-colors",
                    isActive("/success-stories") ? "text-primary bg-primary/10" : "text-foreground hover:bg-muted"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Success Stories
                </Link>
                <Link
                  to="/careers"
                  className={cn(
                    "px-4 py-3 rounded-xl font-medium transition-colors",
                    isActive("/careers") ? "text-primary bg-primary/10" : "text-foreground hover:bg-muted"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Careers
                </Link>
                
                {/* Mobile CTA */}
                <div className="pt-4 border-t border-border mt-2">
                  <Button 
                    asChild 
                    className="w-full btn-gradient"
                  >
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Get a Free Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}