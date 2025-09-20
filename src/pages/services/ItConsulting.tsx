import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Settings, Lightbulb, Shield, CheckCircle, Target, Users, BarChart3, Cloud } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEO/SEOHead";

const keyBenefits = [
  "Digital transformation strategy",
  "Technology assessment & planning",
  "IT infrastructure optimization",
  "Process improvement consulting",
  "Cloud migration services",
  "Cybersecurity assessments",
  "IT governance and compliance",
  "Ongoing strategic support"
];

const consultingServices = [
  { name: "Strategy Planning", icon: Target },
  { name: "Team Management", icon: Users },
  { name: "Performance Analytics", icon: BarChart3 },
  { name: "Cloud Solutions", icon: Cloud }
];

export default function ItConsulting() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IT Consulting Services",
    "description": "Professional IT consulting services including digital transformation strategy, technology assessment, infrastructure optimization, and strategic IT planning.",
    "provider": {
      "@type": "Organization",
      "name": "KNSOFT Technologies",
      "url": "https://knsoft.dev"
    },
    "serviceType": "IT Consulting",
    "areaServed": "Global"
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="IT Consulting Services | KNSOFT Technologies"
        description="Expert IT consulting services for digital transformation, technology assessment, infrastructure optimization, and strategic IT planning. Transform your business with proven expertise."
        keywords="IT consulting, digital transformation, technology strategy, IT infrastructure, cloud migration, cybersecurity, IT governance, business consulting"
        canonical="https://knsoft.dev/services/it-consulting"
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
                IT Consulting Services
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Navigate digital transformation with confidence through our expert IT consulting services. 
                We help organizations optimize technology investments, streamline processes, and achieve sustainable growth.
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
                  Strategic IT Guidance
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Accelerate your digital transformation journey with our comprehensive IT consulting services. 
                  Our experienced consultants work closely with your team to assess current capabilities, 
                  identify opportunities, and develop strategic roadmaps that drive business success.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From technology assessments to implementation support, we provide the expertise needed to 
                  make informed decisions, optimize IT investments, and ensure your technology infrastructure 
                  aligns with your business objectives and growth strategy.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {consultingServices.map((service, index) => (
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
                Unlock the full potential of your IT investments with our strategic consulting expertise.
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
                Ready to Transform Your IT Strategy?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Let's discuss your IT challenges and create a strategic roadmap for your digital transformation.
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