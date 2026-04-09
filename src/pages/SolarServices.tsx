import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Sun, 
  Battery, 
  Zap, 
  TrendingDown, 
  Calculator, 
  CheckCircle, 
  ArrowRight,
  Home,
  Factory,
  Leaf,
  Shield,
  Award,
  Users
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEO/SEOHead";

const solarServices = [
  {
    icon: Sun,
    title: "Commercial Solar Installation",
    description: "Large-scale solar installations for businesses, warehouses, and industrial facilities. Reduce operational costs with professional-grade solar systems designed for maximum ROI.",
    features: [
      "Custom System Design & Engineering",
      "Professional Installation & Commissioning", 
      "Grid-Tied & Off-Grid Solutions",
      "Performance Monitoring & Maintenance"
    ]
  },
  {
    icon: Home,
    title: "Residential Solar Systems",
    description: "Home solar solutions that reduce electricity bills while increasing property value. From consultation to installation, we make going solar simple and affordable.",
    features: [
      "Roof Assessment & Design",
      "Battery Storage Integration",
      "Net Metering Setup",
      "Warranty & Support Services"
    ]
  },
  {
    icon: Battery,
    title: "Solar Energy Storage",
    description: "Advanced battery storage solutions to maximize solar energy utilization. Store excess energy during peak production for use during high-demand periods.",
    features: [
      "Lithium-Ion Battery Systems",
      "Smart Energy Management",
      "Backup Power Solutions",
      "Grid Independence Options"
    ]
  },
  {
    icon: Factory,
    title: "Industrial Solar Solutions",
    description: "High-capacity solar installations for manufacturing facilities and large industrial operations. Significantly reduce energy costs with scalable solar infrastructure.",
    features: [
      "MW-Scale Solar Plants",
      "Industrial-Grade Components",
      "Load Analysis & Optimization",
      "Long-Term Service Contracts"
    ]
  }
];

const solarBenefits = [
  {
    icon: TrendingDown,
    title: "Reduce Energy Costs",
    description: "Cut electricity bills by 70-90% with properly sized solar systems"
  },
  {
    icon: Leaf,
    title: "Environmental Impact",
    description: "Reduce carbon footprint and contribute to clean energy goals"
  },
  {
    icon: Shield,
    title: "Energy Independence", 
    description: "Protect against rising utility costs with your own power generation"
  },
  {
    icon: Award,
    title: "Increase Property Value",
    description: "Solar installations typically increase property values by 4-6%"
  }
];

export default function SolarServices() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Solar Power Installation Services",
    "provider": {
      "@type": "Organization",
      "name": "KNSOFT Technologies",
      "url": "https://knsoft.dev"
    },
    "description": "Professional solar power installation services for commercial, residential, and industrial properties",
    "serviceType": "Solar Energy Solutions",
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Solar Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Solar Installation",
            "description": "Large-scale solar installations for businesses and industrial facilities"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Solar Systems",
            "description": "Home solar solutions with battery storage and net metering"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Solar Power Installation Services | Commercial & Residential Solar Solutions"
        description="Professional solar power installation services for commercial, residential & industrial properties. Reduce energy costs by 70-90% with custom solar systems. Get free consultation today."
        keywords="solar power installation, commercial solar systems, residential solar panels, solar energy solutions, renewable energy, solar installation company, solar power plant, battery storage"
        canonical="https://knsoft.dev/solar-services"
        structuredData={structuredData}
      />
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Solar Power Solutions
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Professional solar energy services that reduce costs, increase sustainability, and provide energy independence for your property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Link to="/contact">
                    Get Free Solar Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solar Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Solar <span className="text-gradient">Services</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solar energy solutions from consultation to installation and maintenance.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {solarServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full card-glow hover:shadow-glow transition-all duration-500 group">
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild variant="ghost" className="p-0 h-auto text-primary hover:text-primary-glow">
                        <Link to="/contact" className="flex items-center">
                          Get Quote <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose <span className="text-gradient">Solar Energy</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Solar power offers immediate and long-term benefits for property owners and businesses.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solarBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center p-6 card-glow hover:shadow-glow transition-all duration-500 group">
                    <CardContent className="p-0">
                      <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Go Solar?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Get a free consultation and custom solar system design for your property. Start saving on energy costs today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="gradient" size="lg">
                  <Link to="/contact">
                    Get Free Solar Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/products">View Solar Projects</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}