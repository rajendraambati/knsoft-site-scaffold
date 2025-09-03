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
  Bot
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const mainServices = [
  {
    icon: Settings,
    title: "IT Consulting",
    description: "KNSoft IT consulting division provides assistance to the Clients for their changing IT Environments to improve their Effectiveness and efficiency by adopting advanced technologies and Methodologies.",
    features: [
      "Digital Transformation Strategy",
      "Technology Assessment & Planning",
      "IT Infrastructure Optimization",
      "Process Improvement Consulting"
    ]
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce",
    description: "KNSoft will bring together a professional team of experts in Ecommerce and Web Development to develop an Ecommerce website that will grab the growing market. Create a presence for your business on internet with software applications to support online transactions, Advertising, Product procurement and order management.",
    features: [
      "Custom Ecommerce Development",
      "Payment Gateway Integration",
      "Inventory Management Systems",
      "Mobile Commerce Solutions"
    ]
  },
  {
    icon: Database,
    title: "ERP Application Development",
    description: "We can modernize your existing SAP application infrastructure, build SAP-based solutions from scratch or seamlessly integrate applications with your current enterprise systems and SAP products.",
    features: [
      "SAP Implementation & Customization",
      "ERP System Integration",
      "Business Process Automation",
      "Data Migration & Analytics"
    ]
  },
  {
    icon: Code,
    title: "Software Development",
    description: "KNSoft want to reach optimal efficiency in the organization of your your system projects? is a complete end-to-end suite developed and delivered by us, or there is a need to further develop the capabilities for your systems, our team of experience locally-based system analysts and developers will be able to meet your various needs ranging from Enterprise Software, Consumer Facing Web Applications to Mobile Applications.",
    features: [
      "Custom Software Solutions",
      "Enterprise Application Development",
      "API Development & Integration",
      "Cloud-Native Applications"
    ]
  },
  {
    icon: TestTube,
    title: "Software Testing Service",
    description: "Our team of experienced locally-based system analysts and developers will be able to meet your various needs ranging from Enterprise Software, Consumer Facing Web Applications to Mobile Applications with comprehensive testing services.",
    features: [
      "Automated Testing Solutions", 
      "Performance & Load Testing",
      "Security Testing & Audits",
      "Quality Assurance Consulting"
    ]
  },
  {
    icon: Globe,
    title: "Web Application",
    description: "We work on business models our clients want us to. We have unparalleled expertise at developing web solutions any technology platform our clients want us to. Our adroitly talented web app developers have clear-cut understanding of various framework or technologies such as PHP Framework, Zend PHP Framework, Symfony, Phalcon, CodeIgniter, .NET Framework, Ruby on Rails, Django etc.",
    features: [
      "Full-Stack Web Development",
      "Progressive Web Applications",
      "Responsive Design & UX/UI",
      "Web Application Maintenance"
    ]
  }
];

const specializedServices = [
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
  return (
    <div className="min-h-screen">
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
                Our Services
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Comprehensive IT solutions designed to accelerate your business growth and digital transformation journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Services */}
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
                Core <span className="text-gradient">Services</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                End-to-end technology services tailored to meet your specific business requirements.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {mainServices.map((service, index) => (
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
                          Get Started <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
                Advanced technology solutions for modern business challenges.
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
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Let's discuss your project requirements and create a custom solution that drives your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="gradient" size="lg">
                  <Link to="/contact">
                    Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Learn About Us</Link>
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