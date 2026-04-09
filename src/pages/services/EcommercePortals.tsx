import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingCart, CreditCard, Truck, CheckCircle, Globe, Shield, BarChart3, Smartphone } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEO/SEOHead";

const keyBenefits = [
  "Custom ecommerce development",
  "Payment gateway integration",
  "Inventory management systems",
  "Mobile commerce solutions",
  "Multi-vendor marketplace",
  "SEO-optimized platforms",
  "Analytics and reporting",
  "24/7 technical support"
];

const features = [
  { name: "Payment Solutions", icon: CreditCard },
  { name: "Order Management", icon: Truck },
  { name: "Mobile Commerce", icon: Smartphone },
  { name: "Analytics Dashboard", icon: BarChart3 }
];

export default function EcommercePortals() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Ecommerce Portal Development",
    "description": "Professional ecommerce portal development services including custom online stores, payment integration, and mobile commerce solutions.",
    "provider": {
      "@type": "Organization",
      "name": "KNSOFT Technologies",
      "url": "https://knsoft.dev"
    },
    "serviceType": "Ecommerce Development",
    "areaServed": "Global"
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Ecommerce Portal Development | KNSOFT Technologies"
        description="Professional ecommerce portal development services. Custom online stores, payment gateway integration, mobile commerce, and scalable ecommerce solutions for business growth."
        keywords="ecommerce development, online store, payment gateway integration, mobile commerce, shopping cart, ecommerce portal, online marketplace"
        canonical="https://knsoft.dev/services/ecommerce-portals"
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
                Ecommerce Portal Development
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Build powerful online stores and marketplaces that drive sales and enhance customer experience. 
                Our ecommerce solutions are designed to scale with your business and maximize conversions.
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
                  Complete Ecommerce Solutions
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Create a compelling online presence with our comprehensive ecommerce development services. 
                  From custom online stores to complex multi-vendor marketplaces, we build solutions that 
                  drive engagement and boost revenue.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our expert team specializes in creating user-friendly, secure, and scalable ecommerce platforms 
                  with seamless payment integration, advanced inventory management, and mobile-optimized experiences 
                  that convert visitors into customers.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {features.map((feature, index) => (
                  <Card key={index} className="text-center p-4 card-glow hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-sm">{feature.name}</h3>
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
                Discover why businesses choose our ecommerce solutions to drive online sales and customer engagement.
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
                Ready to Launch Your Online Store?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Let's build an ecommerce solution that drives sales and provides exceptional customer experiences.
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