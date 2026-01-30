"use client";

import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Products", hasDropdown: true },
  { name: "Solutions", hasDropdown: true },
  { name: "Customers", href: "/success-stories" },
  { name: "Learn", hasDropdown: true },
  { name: "Company", hasDropdown: true },
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
  { name: "Finance & Microfinance", href: "/products/finance-microfinance" },
  { name: "Hospitality & Travel", href: "/products/hospitality-travel" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled 
          ? "glass-dark py-3" 
          : "bg-transparent py-4"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src="/fun.png" 
              alt="KNSOFT Technologies" 
              className={cn(
                "w-auto transition-all duration-300 group-hover:opacity-90",
                isScrolled ? "h-9" : "h-10"
              )}
              width="120"
              height="40"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                {item.href ? (
                  <Link
                    to={item.href}
                    className="flex items-center px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button className="flex items-center px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className={cn(
                        "ml-1 h-4 w-4 transition-transform duration-200",
                        activeDropdown === item.name && "rotate-180"
                      )} />
                    )}
                  </button>
                )}

                {/* Dropdown for Products */}
                {item.name === "Products" && (
                  <AnimatePresence>
                    {activeDropdown === "Products" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-72 glass-dark rounded-2xl shadow-2xl overflow-hidden"
                      >
                        <div className="p-2">
                          {productsDropdown.map((product) => (
                            <Link
                              key={product.name}
                              to={product.href}
                              className="block px-4 py-3 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                            >
                              {product.name}
                            </Link>
                          ))}
                          <div className="border-t border-white/10 mt-2 pt-2">
                            <Link
                              to="/products"
                              className="flex items-center justify-between px-4 py-3 rounded-xl text-primary hover:bg-primary/10 transition-colors"
                            >
                              <span className="text-sm font-medium">View All Products</span>
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {/* Dropdown for Solutions */}
                {item.name === "Solutions" && (
                  <AnimatePresence>
                    {activeDropdown === "Solutions" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 glass-dark rounded-2xl shadow-2xl overflow-hidden"
                      >
                        <div className="p-2">
                          {servicesDropdown.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="flex flex-col px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group"
                            >
                              <span className="font-medium text-white group-hover:text-primary transition-colors">
                                {service.name}
                              </span>
                              <span className="text-xs text-white/50">{service.description}</span>
                            </Link>
                          ))}
                          <div className="border-t border-white/10 mt-2 pt-2">
                            <Link
                              to="/services"
                              className="flex items-center justify-between px-4 py-3 rounded-xl text-primary hover:bg-primary/10 transition-colors"
                            >
                              <span className="text-sm font-medium">View All Services</span>
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {/* Dropdown for Company */}
                {item.name === "Company" && (
                  <AnimatePresence>
                    {activeDropdown === "Company" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 glass-dark rounded-2xl shadow-2xl overflow-hidden"
                      >
                        <div className="p-2">
                          <Link to="/about" className="block px-4 py-3 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                            About Us
                          </Link>
                          <Link to="/careers" className="block px-4 py-3 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                            Careers
                          </Link>
                          <Link to="/contact" className="block px-4 py-3 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                            Contact
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {/* Dropdown for Learn */}
                {item.name === "Learn" && (
                  <AnimatePresence>
                    {activeDropdown === "Learn" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 glass-dark rounded-2xl shadow-2xl overflow-hidden"
                      >
                        <div className="p-2">
                          <Link to="/blog" className="block px-4 py-3 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                            Blog
                          </Link>
                          <Link to="/success-stories" className="block px-4 py-3 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                            Case Studies
                          </Link>
                          <Link to="/services/workforce-upskilling" className="block px-4 py-3 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                            Training
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="p-2 text-white/60 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/contact" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              Sign In
            </Link>
            <Button asChild className="btn-gradient rounded-xl px-5">
              <Link to="/contact">Contact us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10"
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
              className="lg:hidden overflow-hidden glass-dark rounded-2xl mt-4"
            >
              <div className="flex flex-col p-4 space-y-1">
                <Link to="/" className="px-4 py-3 rounded-xl font-medium text-white hover:bg-white/5" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link to="/about" className="px-4 py-3 rounded-xl font-medium text-white hover:bg-white/5" onClick={() => setIsOpen(false)}>
                  About
                </Link>
                <Link to="/services" className="px-4 py-3 rounded-xl font-medium text-white hover:bg-white/5" onClick={() => setIsOpen(false)}>
                  Services
                </Link>
                <Link to="/products" className="px-4 py-3 rounded-xl font-medium text-white hover:bg-white/5" onClick={() => setIsOpen(false)}>
                  Products
                </Link>
                <Link to="/success-stories" className="px-4 py-3 rounded-xl font-medium text-white hover:bg-white/5" onClick={() => setIsOpen(false)}>
                  Success Stories
                </Link>
                <Link to="/careers" className="px-4 py-3 rounded-xl font-medium text-white hover:bg-white/5" onClick={() => setIsOpen(false)}>
                  Careers
                </Link>
                
                <div className="pt-4 border-t border-white/10 mt-2">
                  <Button asChild className="w-full btn-gradient rounded-xl">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Contact Us
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
