import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Database, Settings, Zap, CheckCircle, Cloud, Shield, BarChart3, Cog } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEO/SEOHead";

const keyBenefits = [
  "SAP implementation & customization",
  "Legacy system modernization",
  "ERP system integration",
  "Business process automation",
  "Data migration & analytics",
  "Cloud migration services",
  "Performance optimization",
  "24/7 support and maintenance"
];

const services = [
  { name: "SAP S/4HANA Migration", icon: Database },
  { name: "Process Automation", icon: Cog },
  { name: "Cloud Integration", icon: Cloud },
  { name: "Analytics & Reporting", icon: BarChart3 }
];

export default function SapModernization() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SAP Modernization & ERP Services",
    "description": "Comprehensive SAP modernization services including S/4HANA migration, ERP implementation, and business process automation solutions.",
    "provider": {
      "@type": "Organization",
      "name": "KNSOFT Technologies",
      "url": "https://knsoft.dev"
    },
    "serviceType": "ERP Development",
    "areaServed": "Global"
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="SAP Modernization & ERP Services | KNSOFT Technologies"
        description="Expert SAP modernization and ERP services. S/4HANA migration, system integration, business process automation, and comprehensive ERP solutions for enterprise growth."
        keywords="SAP modernization, ERP services, S/4HANA migration, SAP implementation, business process automation, system integration, enterprise software"
        canonical="https://knsoft.dev/services/sap-modernization"
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
                SAP Modernization & ERP Services
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Modernize your SAP infrastructure and streamline business processes with our comprehensive 
                ERP solutions. From S/4HANA migration to custom implementations, we optimize your enterprise systems for peak performance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Enterprise-Grade ERP Solutions
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Transform your business operations with modernized SAP systems and comprehensive ERP solutions. 
                  Our expert team specializes in seamless migrations, custom implementations, and ongoing optimization 
                  to ensure your enterprise systems drive maximum efficiency.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you're migrating to S/4HANA, integrating multiple systems, or implementing new ERP modules, 
                  we provide end-to-end solutions that align with your business objectives and growth strategy.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {services.map((service, index) => (
                  <Card key={index} className="text-center p-4 card-glow hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-sm">{service.name}</h3>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
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
                Key <span className="text-gradient">Benefits</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Leverage our SAP expertise to modernize your enterprise systems and accelerate digital transformation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-card rounded-lg border"
                >
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit}</span>
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
                Ready to Modernize Your SAP Infrastructure?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Let's discuss your ERP modernization needs and create a roadmap for your digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="gradient" size="lg">
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services">View All Services</Link>
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