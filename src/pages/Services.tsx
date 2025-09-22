import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Settings, 
  ShoppingCart, 
  Database, 
  Code, 
  TestTube, 
  Globe,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  MessageCircle,
  Bot,
  Sun,
  Battery,
  Home,
  Calendar,
  Phone,
  Hospital
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEO/SEOHead";

const coreServices = [
  {
    icon: Code,
    title: "Web & Mobile Development",
    description: "Transform your digital presence with cutting-edge web and mobile applications. Full-stack development, progressive web apps, and responsive design solutions that drive business growth.",
    url: "/services/web-mobile-development"
  },
  {
    icon: Database,
    title: "SAP Modernization & ERP",
    description: "Modernize your SAP infrastructure and streamline business processes with comprehensive ERP solutions. S/4HANA migration, system integration, and custom implementations.",
    url: "/services/sap-modernization"
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Portals",
    description: "Build powerful online stores and marketplaces that drive sales. Custom ecommerce development, payment integration, and mobile commerce solutions for business growth.",
    url: "/services/ecommerce-portals"
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Harness the power of artificial intelligence and automation to streamline operations. Chatbots, RPA, machine learning, and intelligent process automation solutions.",
    url: "/services/ai-automation"
  },
  {
    icon: Settings,
    title: "IT Consulting",
    description: "Navigate digital transformation with expert IT consulting services. Strategic planning, technology assessment, infrastructure optimization, and ongoing strategic support.",
    url: "/services/it-consulting"
  }
];

const specializedServices = [
  {
    icon: Battery,
    title: "Solar Energy Storage",
    description: "Advanced battery storage solutions to maximize solar energy utilization and provide backup power."
  },
  {
    icon: Home,
    title: "Smart Solar Integration",
    description: "IoT-enabled solar systems with intelligent monitoring and automated energy management."
  },
  {
    icon: Zap,
    title: "Agile Software Development",
    description: "Collaborative, adaptive, and efficient development approach focused on delivering working software quickly."
  },
  {
    icon: Shield,
    title: "Blockchain Development", 
    description: "Secure, distributed ledger solutions for modern digital asset management and transactions."
  },
  {
    icon: MessageCircle,
    title: "Chatbot Development",
    description: "Intelligent conversational interfaces for enhanced customer service and automation."
  },
  {
    icon: Bot,
    title: "RPA Solutions",
    description: "Robotic Process Automation to streamline business operations and increase efficiency."
  }
];

export default function Services() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KNSOFT Technologies",
    "url": "https://knsoft.dev",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Solutions & Solar Energy Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IT Consulting",
            "description": "Professional IT consulting services for digital transformation and infrastructure optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Solar Power Solutions",
            "description": "Complete solar energy services including design, installation, and monitoring for commercial and residential properties"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Software Development",
            "description": "Custom software development and enterprise application solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Application Development",
            "description": "Full-stack web development and progressive web applications"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="IT Solutions & Solar Energy Services | KNSOFT Technologies"
        description="Expert IT consulting, software development, web applications & solar power solutions. Transform your business with advanced technology and renewable energy services. Get consultation today."
        keywords="IT solutions, software development, solar power installation, solar energy systems, IT consulting, web development, ERP systems, renewable energy, commercial solar, residential solar"
        canonical="https://knsoft.dev/services"
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
                IT Solutions & Solar Energy Services
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Comprehensive technology solutions and renewable energy services designed to accelerate your business growth and sustainability goals.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button asChild variant="cta" size="xl" className="text-lg">
                  <Link to="/contact" className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Call
                  </Link>
                </Button>
                <Button asChild variant="hero" size="xl" className="text-lg">
                  <Link to="#services" className="flex items-center">
                    View Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Top CTA Banner */}
        <section className="py-12 bg-secondary/30 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-card rounded-2xl p-8 shadow-elegant"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-left md:text-left">
                  <h3 className="text-2xl font-bold mb-2">
                    Ready to Transform Your Business?
                  </h3>
                  <p className="text-muted-foreground">
                    Schedule a free consultation to discuss your project requirements and get expert recommendations.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild variant="gradient" size="lg" className="whitespace-nowrap">
                    <Link to="/contact" className="flex items-center">
                      <Phone className="mr-2 h-4 w-4" />
                      Book a Call
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="whitespace-nowrap">
                    <Link to="/contact" className="flex items-center">
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Services */}
        <section id="services" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Core <span className="text-gradient">Services</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                End-to-end technology and renewable energy services tailored to meet your business and sustainability requirements.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {coreServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  id={service.title.toLowerCase().includes('it consulting') ? 'it-consulting' : 
                      service.title.toLowerCase().includes('web') ? 'web-applications' : 
                      service.title.toLowerCase().includes('sap') ? 'erp-development' : 
                      service.title.toLowerCase().includes('ecommerce') ? 'software-development' : ''}
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
                      <CardDescription className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button asChild variant="ghost" className="p-0 h-auto text-primary hover:text-primary-glow">
                        <Link to={service.url} className="flex items-center">
                          Learn More <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Anchor sections for footer links */}
            <div className="hidden">
              <div id="software-development"></div>
            </div>
          </div>
        </section>

        {/* Specialized Services */}
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
                Specialized <span className="text-gradient">Expertise</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Advanced technology and energy solutions for modern business challenges and sustainability goals.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {specializedServices.map((service, index) => (
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
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Let's discuss your project requirements and create a custom solution that drives your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="cta" size="xl" className="bg-white text-primary hover:bg-white/90 shadow-elegant hover:shadow-glow">
                  <Link to="/contact" className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Call
                  </Link>
                </Button>
                <Button asChild variant="hero" size="xl">
                  <Link to="/contact" className="flex items-center">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="hero" size="xl">
                  <Link to="/about">Learn About Us</Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="xl" 
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  onClick={() => {
                    window.open("https://knsofttech.com/products", "_blank", "noopener,noreferrer");
                    window.location.href = "/products/hospital-management-pro";
                  }}
                >
                  <Hospital className="mr-2 h-5 w-5" />
                  Hospital Management Pro
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