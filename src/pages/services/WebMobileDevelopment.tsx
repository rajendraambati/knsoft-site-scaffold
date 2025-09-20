import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Smartphone, Globe, CheckCircle, Zap, Layers, Users } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEO/SEOHead";

const keyBenefits = [
  "Full-stack web development expertise",
  "Progressive Web Applications (PWA)",
  "Responsive design across all devices",
  "Modern frameworks and technologies",
  "API development and integration",
  "Cloud-native applications",
  "Performance optimization",
  "Ongoing maintenance and support"
];

const technologies = [
  { name: "React & Vue.js", icon: Code },
  { name: "Node.js & Python", icon: Layers },
  { name: "Mobile Development", icon: Smartphone },
  { name: "Cloud Platforms", icon: Globe }
];

export default function WebMobileDevelopment() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web & Mobile Development Services",
    "description": "Professional web and mobile application development services including full-stack development, PWAs, and responsive design solutions.",
    "provider": {
      "@type": "Organization",
      "name": "KNSOFT Technologies",
      "url": "https://knsoft.dev"
    },
    "serviceType": "Web Development",
    "areaServed": "Global"
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Web & Mobile Development Services | KNSOFT Technologies"
        description="Expert web and mobile application development services. Full-stack development, progressive web apps, responsive design, and modern frameworks. Transform your digital presence today."
        keywords="web development, mobile development, full-stack development, progressive web apps, responsive design, React, Vue.js, Node.js, mobile apps"
        canonical="https://knsoft.dev/services/web-mobile-development"
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
                Web & Mobile Development Services
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Transform your digital presence with cutting-edge web and mobile applications. 
                We deliver scalable, user-friendly solutions that drive business growth and enhance customer experience.
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
                  Comprehensive Digital Solutions
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our expert team specializes in creating robust web applications and mobile solutions 
                  using modern frameworks and technologies. From concept to deployment, we ensure your 
                  digital products are scalable, secure, and user-centric.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you need a responsive website, progressive web app, or native mobile application, 
                  we deliver solutions that meet your business objectives and exceed user expectations.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {technologies.map((tech, index) => (
                  <Card key={index} className="text-center p-4 card-glow hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                        <tech.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-sm">{tech.name}</h3>
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
                Discover why businesses choose our web and mobile development services for their digital transformation.
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
                Ready to Build Your Digital Solution?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Let's discuss your web and mobile development needs and create a solution that drives your business forward.
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