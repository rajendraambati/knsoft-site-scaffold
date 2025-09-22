"use client";

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Careers", href: "/careers" },
  /*{ name: "Blog", href: "/blog" },*/
  { name: "Contact", href: "/contact" },
];

const servicesDropdown = [
  { name: "Web & Mobile Development", href: "/services/web-mobile-development" },
  { name: "SAP Modernization", href: "/services/sap-modernization" },
  { name: "eCommerce Portals", href: "/services/ecommerce-portals" },
  { name: "AI & Automation", href: "/services/ai-automation" },
  { name: "IT Consulting", href: "/services/it-consulting" },
];

const productsDropdown = [
  { name: "🏥 Healthcare & Medical Software", href: "/products/healthcare-medical" },
  { name: "🏫 Education & Learning Systems", href: "/products/education-learning" },
  { name: "🏢 Business, ERP & CRM Solutions", href: "/products/business-erp-crm" },
  { name: "🛒 E-Commerce & Retail Platforms", href: "/products/ecommerce-retail" },
  { name: "🧑‍🤝‍🧑 NGO & Crowdfunding Platforms", href: "/products/ngo-crowdfunding" },
  { name: "💳 Finance & Microfinance Systems", href: "/products/finance-microfinance" },
  { name: "🏨 Hospitality, Travel & Booking Systems", href: "/products/hospitality-travel" },
  { name: "🍽️ Restaurant & Food Ordering Systems", href: "/products/restaurant-food" },
  { name: "💼 Job Portals & Classifieds", href: "/products/job-portals-classifieds" },
  { name: "🗳️ Civic, Social & Miscellaneous", href: "/products/civic-social" },
  { name: "☀️ Solar Energy & Renewable Solutions", href: "/products/solar-renewable" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const productsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const handleProductsMouseEnter = () => {
    if (productsTimeoutRef.current) {
      clearTimeout(productsTimeoutRef.current);
    }
    setIsProductsOpen(true);
  };

  const handleProductsMouseLeave = () => {
    productsTimeoutRef.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 150);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border/40">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <img 
            src="/fun.png" 
            alt="KNSOFT Technologies - Leading IT Solutions & Software Development Company Logo" 
            className="h-10 w-auto"
            width="120"
            height="40"
            loading="eager"
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              ref={servicesRef}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                className="flex items-center text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <ChevronDown 
                  className={cn(
                    "ml-1 h-4 w-4 transition-transform duration-200",
                    isServicesOpen && "rotate-180"
                  )}
                />
              </button>
              
              {/* Dropdown Menu */}
              <div
                className={cn(
                  "absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-sm border border-border/40 rounded-lg shadow-lg z-50 transition-all duration-200 origin-top",
                  isServicesOpen 
                    ? "opacity-100 scale-100 translate-y-0" 
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                )}
              >
                <div className="py-2">
                  {servicesDropdown.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-4 py-3 text-sm text-foreground hover:text-primary hover:bg-muted/50 transition-colors duration-200 font-medium"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <div className="border-t border-border/40 mt-2 pt-2">
                    <Link
                      to="/services"
                      className="block px-4 py-3 text-sm text-primary hover:text-primary-glow hover:bg-muted/50 transition-colors duration-200 font-medium"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Dropdown */}
            <div 
              className="relative"
              ref={productsRef}
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              <button
                className="flex items-center text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                Products
                <ChevronDown 
                  className={cn(
                    "ml-1 h-4 w-4 transition-transform duration-200",
                    isProductsOpen && "rotate-180"
                  )}
                />
              </button>
              
              {/* Dropdown Menu */}
              <div
                className={cn(
                  "absolute top-full left-0 mt-2 w-80 bg-background/95 backdrop-blur-sm border border-border/40 rounded-lg shadow-lg z-50 transition-all duration-200 origin-top max-h-96 overflow-y-auto",
                  isProductsOpen 
                    ? "opacity-100 scale-100 translate-y-0" 
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                )}
              >
                <div className="py-2">
                  {productsDropdown.map((product) => (
                    <Link
                      key={product.name}
                      to={product.href}
                      className="block px-4 py-3 text-sm text-foreground hover:text-primary hover:bg-muted/50 transition-colors duration-200 font-medium"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {product.name}
                    </Link>
                  ))}
                  <div className="border-t border-border/40 mt-2 pt-2">
                    <Link
                      to="/products"
                      className="block px-4 py-3 text-sm text-primary hover:text-primary-glow hover:bg-muted/50 transition-colors duration-200 font-medium"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      View All Products
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button asChild variant="gradient" size="sm">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-[600px] pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Services Dropdown */}
            <div className="flex flex-col">
              <button
                className="flex items-center justify-between text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              >
                Services
                <ChevronDown 
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    isMobileServicesOpen && "rotate-180"
                  )}
                />
              </button>
              
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  isMobileServicesOpen ? "max-h-96 mt-2" : "max-h-0"
                )}
              >
                <div className="flex flex-col space-y-2 pl-4 border-l-2 border-border/40">
                  {servicesDropdown.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobileServicesOpen(false);
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    className="text-sm text-primary hover:text-primary-glow transition-colors duration-200 font-medium py-2 border-t border-border/40 mt-2 pt-4"
                    onClick={() => {
                      setIsOpen(false);
                      setIsMobileServicesOpen(false);
                    }}
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Products Dropdown */}
            <div className="flex flex-col">
              <button
                className="flex items-center justify-between text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
              >
                Products
                <ChevronDown 
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    isMobileProductsOpen && "rotate-180"
                  )}
                />
              </button>
              
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  isMobileProductsOpen ? "max-h-96 mt-2" : "max-h-0"
                )}
              >
                <div className="flex flex-col space-y-2 pl-4 border-l-2 border-border/40 max-h-64 overflow-y-auto">
                  {productsDropdown.map((product) => (
                    <Link
                      key={product.name}
                      to={product.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobileProductsOpen(false);
                      }}
                    >
                      {product.name}
                    </Link>
                  ))}
                  <Link
                    to="/products"
                    className="text-sm text-primary hover:text-primary-glow transition-colors duration-200 font-medium py-2 border-t border-border/40 mt-2 pt-4"
                    onClick={() => {
                      setIsOpen(false);
                      setIsMobileProductsOpen(false);
                    }}
                  >
                    View All Products
                  </Link>
                </div>
              </div>
            </div>
            
            <Button asChild variant="gradient" size="sm" className="mt-4 w-full">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
