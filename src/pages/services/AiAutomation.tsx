import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Zap, Brain, CheckCircle, MessageCircle, BarChart3, Cog, Workflow } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEO/SEOHead";

const keyBenefits = [
  "Intelligent process automation",
  "Custom AI model development",
  "Chatbot and virtual assistants",
  "Machine learning solutions",
  "Robotic Process Automation (RPA)",
  "Natural language processing",
  "Predictive analytics systems",
  "AI-powered decision support"
];

const aiServices = [
  { name: "Chatbot Development", icon: MessageCircle },
  { name: "Process Automation", icon: Workflow },
  { name: "Predictive Analytics", icon: BarChart3 },
  { name: "Custom AI Models", icon: Brain }
];

export default function AiAutomation() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI & Automation Solutions",
    "description": "Advanced AI and automation services including chatbot development, RPA, machine learning, and intelligent process automation solutions.",
    "provider": {
      "@type": "Organization",
      "name": "KNSOFT Technologies",
      "url": "https://knsoft.dev"
    },
    "serviceType": "AI Development",
    "areaServed": "Global"
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="AI & Automation Solutions | KNSOFT Technologies"
        description="Advanced AI and automation services. Chatbot development, RPA, machine learning, predictive analytics, and intelligent process automation to transform your business operations."
        keywords="AI solutions, automation services, chatbot development, RPA, machine learning, artificial intelligence, process automation, predictive analytics"
        canonical="https://knsoft.dev/services/ai-automation"
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
                AI & Automation Solutions
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Harness the power of artificial intelligence and automation to streamline operations, enhance decision-making, 
                and drive innovation across your organization with intelligent solutions tailored to your business needs.
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
                  Intelligent Automation Solutions
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Transform your business operations with cutting-edge AI and automation technologies. 
                  From intelligent chatbots to complex machine learning models, we develop solutions that 
                  enhance efficiency, reduce costs, and unlock new opportunities for growth.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our expert team specializes in creating custom AI solutions that integrate seamlessly with 
                  your existing systems, providing actionable insights and automating repetitive tasks to 
                  allow your team to focus on strategic initiatives.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {aiServices.map((service, index) => (
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
                Leverage AI and automation to transform your business processes and gain competitive advantages.
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
                Ready to Embrace AI & Automation?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Let's explore how AI and automation can transform your business operations and drive growth.
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