import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Linkedin, Twitter, ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { name: "IT Consulting", href: "/services/it-consulting" },
  { name: "Software Development", href: "/services/web-mobile-development" },
  { name: "Web Applications", href: "/services/web-mobile-development" },
  { name: "ERP Development", href: "/services/sap-modernization" },
  { name: "AI & Automation", href: "/services/ai-automation" },
];

const products = [
  { name: "Healthcare & Medical", href: "/products/healthcare-medical" },
  { name: "Education & Learning", href: "/products/education-learning" },
  { name: "Business ERP & CRM", href: "/products/business-erp-crm" },
  { name: "E-Commerce", href: "/products/ecommerce-retail" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Success Stories", href: "/success-stories" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const legal = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#030303] border-t border-white/5" itemScope itemType="https://schema.org/Organization">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* CTA Section */}
      <div className="relative border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">Ready to Start Your Project?</h3>
              <p className="text-white/50 text-lg">Let's discuss how we can help transform your business.</p>
            </div>
            <Button asChild size="lg" className="btn-gradient rounded-full group">
              <Link to="/contact" className="flex items-center gap-3">
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-2">
            <Link to="/" className="inline-block mb-8">
              <img 
                src="/fun.png" 
                alt="KNSOFT Technologies" 
                className="h-12"
              />
            </Link>
            <p className="text-white/50 mb-8 max-w-sm leading-relaxed" itemProp="description">
              Leading software company in Hyderabad, India. Delivering innovative IT solutions, custom software, and digital transformation services to 500+ clients worldwide.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/30 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/30 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/30 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-sm text-white/50 hover:text-primary transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Products</h4>
            <ul className="space-y-4">
              {products.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-sm text-white/50 hover:text-primary transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-4">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-sm text-white/50 hover:text-primary transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div className="text-sm text-white/50 leading-relaxed">
                  <span itemProp="addressLocality">Hyderabad</span>, <span itemProp="addressRegion">Telangana</span><br />
                  <span itemProp="addressCountry">India</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a 
                  href="mailto:info@knsofttech.com" 
                  className="text-sm text-white/50 hover:text-primary transition-colors duration-300"
                  itemProp="email"
                >
                  info@knsofttech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} KNSOFT Technologies Pvt Ltd. All rights reserved.
            </p>
            <ul className="flex gap-8">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-sm text-white/40 hover:text-primary transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
