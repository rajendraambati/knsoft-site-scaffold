"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Settings, 
  ShoppingCart, 
  Database, 
  Code, 
  TestTube, 
  Globe,
  ArrowRight 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Settings,
    title: "IT Consulting",
    description: "KNSoft IT consulting division provides assistance to the Clients for their changing IT Environments to improve their Effectiveness and efficiency by adopting advanced technologies and Methodologies.",
    href: "/services/it-consulting"
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce",
    description: "KNSoft will bring together a professional team of experts in Ecommerce and Web Development to develop an Ecommerce website that will grab the growing market. Create a presence for your business on internet with software applications to support online transactions, Advertising, Product procurement and order management.",
    href: "/services/ecommerce-portals"
  },
  {
    icon: Database,
    title: "ERP Application Development",
    description: "We can modernize your existing SAP application infrastructure, build SAP-based solutions from scratch or seamlessly integrate applications with your current enterprise systems and SAP products.",
    href: "/services/sap-modernization"
  },
  {
    icon: Code,
    title: "Software Development",
    description: "KNSoft want to reach optimal efficiency in the organization of your your system projects? is a complete end-to-end suite developed and delivered by us, or there is a need to further develop the capabilities for your systems, our team of experience locally-based system analysts and developers will be able to meet your various needs ranging from Enterprise Software, Consumer Facing Web Applications to Mobile Applications.",
    href: "/services/web-mobile-development"
  },
  {
    icon: TestTube,
    title: "Software testing service",
    description: "Our team of experienced locally-based system analysts and developers will be able to meet your various needs ranging from Enterprise Software, Consumer Facing Web Applications to Mobile Applications with comprehensive testing services.",
    href: "/services/web-mobile-development"
  },
  {
    icon: Globe,
    title: "Web application",
    description: "We work on business models our clients want us to. We have unparalleled expertise at developing web solutions any technology platform our clients want us to. Our adroitly talented web app developers have clear-cut understanding of various framework or technologies such as PHP Framework, Zend PHP Framework, Symfony, Phalcon, CodeIgniter, .NET Framework, Ruby on Rails, Django etc.",
    href: "/services/web-mobile-development"
  },
];

export function ServicesSection() {
  return (
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
            Services We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-glow hover:shadow-glow transition-all duration-500 group">
                <CardHeader>
                  <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button asChild variant="ghost" className="p-0 h-auto text-primary hover:text-primary-glow">
                    <Link to={service.href} className="flex items-center">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button asChild variant="gradient" size="lg">
            <Link to="/services">
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}