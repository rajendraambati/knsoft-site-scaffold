import { Link } from "react-router-dom";
import { Mail, MapPin, Code2, Linkedin, Twitter, Github } from "lucide-react";

const services = [
  { name: "IT Consulting", href: "/services/it-consulting" },
  { name: "Software Development", href: "/services/web-mobile-development" },
  { name: "Web Applications", href: "/services/web-mobile-development" },
  { name: "ERP Development", href: "/services/sap-modernization" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Our Work", href: "/products" },
  { name: "Contact", href: "/contact" },
];

const legal = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border" itemScope itemType="https://schema.org/Organization">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gradient" itemProp="name">KNSOFT TECHNOLOGIES</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md" itemProp="description">
              KNSOFT TECHNOLOGIES PVT LTD is a leading software company in Hyderabad, India, specializing in IT Services, Custom Software Development, Web and Mobile App Development. Trusted by 500+ clients across India and USA for innovative IT solutions.
            </p>
            
            {/* Contact Information - India Office */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground">India Office (Hyderabad)</h4>
              <div className="flex items-start space-x-3" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p itemProp="streetAddress">Hitech City</p>
                  <p><span itemProp="addressLocality">Hyderabad</span>, <span itemProp="addressRegion">Telangana</span> <span itemProp="postalCode">500081</span></p>
                  <p itemProp="addressCountry">India</p>
                </div>
              </div>
              
              <h4 className="text-sm font-semibold text-foreground mt-4">USA Office</h4>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>1812 High Falls Lane,</p>
                  <p>Pearland, Texas, 77581</p>
                  <p>United States</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a 
                  href="mailto:info@knsofttech.com" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  itemProp="email"
                >
                  info@knsofttech.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="font-semibold text-foreground mb-3 mt-6">Legal</h4>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} KNSOFT TECHNOLOGIES PVT LTD. All rights reserved.
            </p>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}