"use client";

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
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

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border/40">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          {/* Logo */}

  <img 
    src="/images-removebg-preview.png" 
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
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
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
                  {servicesDropdown.map((service, index) => (
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
            isOpen ? "max-h-[500px] pb-6" : "max-h-0"
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
            
            <Button asChild variant="gradient" size="sm" className="mt-4 w-full">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
