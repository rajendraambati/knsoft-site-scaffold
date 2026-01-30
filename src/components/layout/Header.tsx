"use client";

import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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
  { name: "Hospitality & Travel", href: "/products/hospitality-travel" },
  { name: "Restaurant & Food", href: "/products/restaurant-food" },
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled 
          ? "glass py-4 border-b border-white/[0.08]" 
          : "bg-transparent py-5"
      )}
      style={{ height: isScrolled ? '72px' : '80px' }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src="/fun.png" 
              alt="KNSOFT Technologies" 
              className={cn(
                "w-auto transition-all duration-300 group-hover:scale-105",
                isScrolled ? "h-9" : "h-10"
              )}
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
                "px-4 py-2.5 text-base font-medium transition-all duration-300 link-underline",
                isActive("/") 
                  ? "text-primary" 
                  : "text-white/90 hover:text-primary"
              )}
            >
              Home
            </Link>
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              ref={productsRef}
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              <button
                className="flex items-center px-4 py-2.5 text-base font-medium text-white/90 hover:text-primary transition-all duration-300"
              >
                Products
                <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform duration-300", isProductsOpen && "rotate-180")} />
              </button>
              
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-72 glass rounded-2xl shadow-2xl overflow-hidden border border-white/[0.08]"
                  >
                    <div className="p-2 max-h-[60vh] overflow-y-auto">
                      {productsDropdown.map((product) => (
                        <Link
                          key={product.name}
                          to={product.href}
                          className="block px-4 py-3 rounded-xl text-sm font-medium text-white/80 hover:text-primary hover:bg-white/[0.05] transition-colors"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Mega Menu */}
            <div 
              className="relative"
              ref={servicesRef}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                className="flex items-center px-4 py-2.5 text-base font-medium text-white/90 hover:text-primary transition-all duration-300"
              >
                Solutions
                <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform duration-300", isServicesOpen && "rotate-180")} />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 glass rounded-2xl shadow-2xl overflow-hidden border border-white/[0.08]"
                  >
                    <div className="p-2">
                      {servicesDropdown.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="flex flex-col px-4 py-3 rounded-xl hover:bg-white/[0.05] transition-colors group"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <span className="font-medium text-white group-hover:text-primary transition-colors">
                            {service.name}
                          </span>
                          <span className="text-xs text-white/50">{service.description}</span>
                        </Link>
                      ))}
                      <div className="border-t border-white/[0.08] mt-2 pt-2">
                        <Link
                          to="/services"
                          className="flex items-center justify-between px-4 py-3 rounded-xl text-primary hover:bg-primary/10 transition-colors"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <span className="font-medium">View All Solutions</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/about"
              className={cn(
                "px-4 py-2.5 text-base font-medium transition-all duration-300 link-underline",
                isActive("/about") 
                  ? "text-primary" 
                  : "text-white/90 hover:text-primary"
              )}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={cn(
                "px-4 py-2.5 text-base font-medium transition-all duration-300 link-underline",
                isActive("/contact") 
                  ? "text-primary" 
                  : "text-white/90 hover:text-primary"
              )}
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              asChild 
              className="btn-gradient rounded-xl px-7 py-5 h-auto font-semibold group"
            >
              <Link to="/contact" className="flex items-center gap-2">
                <span>Get Started</span>
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
              className="text-white hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Full Screen Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 top-0 right-0 w-full h-full bg-black/95 backdrop-blur-lg z-50 lg:hidden"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-between items-center mb-10">
                  <Link to="/" onClick={() => setIsOpen(false)}>
                    <img src="/fun.png" alt="KNSOFT" className="h-10" />
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/10"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <Link
                    to="/"
                    className="text-2xl font-semibold text-white py-3 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  
                  {/* Mobile Products */}
                  <div>
                    <button
                      className="flex items-center justify-between w-full text-2xl font-semibold text-white py-3 hover:text-primary transition-colors"
                      onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                    >
                      Products
                      <ChevronDown className={cn("h-5 w-5 transition-transform", isMobileProductsOpen && "rotate-180")} />
                    </button>
                    <AnimatePresence>
                      {isMobileProductsOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 border-l-2 border-primary/30 ml-2 space-y-2 mt-2">
                            {productsDropdown.map((item, index) => (
                              <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  to={item.href}
                                  className="block text-base text-white/70 py-2 hover:text-primary transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Mobile Services */}
                  <div>
                    <button
                      className="flex items-center justify-between w-full text-2xl font-semibold text-white py-3 hover:text-primary transition-colors"
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    >
                      Solutions
                      <ChevronDown className={cn("h-5 w-5 transition-transform", isMobileServicesOpen && "rotate-180")} />
                    </button>
                    <AnimatePresence>
                      {isMobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 border-l-2 border-primary/30 ml-2 space-y-2 mt-2">
                            {servicesDropdown.map((item, index) => (
                              <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  to={item.href}
                                  className="block text-base text-white/70 py-2 hover:text-primary transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    to="/about"
                    className="text-2xl font-semibold text-white py-3 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    to="/contact"
                    className="text-2xl font-semibold text-white py-3 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </div>

                <div className="mt-auto pb-8">
                  <Button 
                    asChild 
                    className="w-full btn-gradient rounded-xl py-6 text-lg font-semibold"
                  >
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Get Started
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
