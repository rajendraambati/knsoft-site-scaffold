import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sun, Factory, Battery, Zap, TreePine, Warehouse, Calculator, Leaf, TrendingDown, Home, ExternalLink } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEO/SEOHead";

const products = [
  { name: "Commercial Rooftop Solar Installation - 500kW", icon: Sun, type: "Commercial", description: "Large-scale commercial rooftop solar system designed for businesses and industrial facilities." },
  { name: "Industrial Solar Power Plant - 2MW", icon: Factory, type: "Industrial", description: "Industrial-grade solar power plant with advanced monitoring and grid integration capabilities." },
  { name: "Residential Solar System with Battery Storage", icon: Battery, type: "Residential", description: "Complete home solar solution with battery backup for energy independence and cost savings." },
  { name: "Smart Solar Grid Integration System", icon: Zap, type: "Smart Grid", description: "Intelligent solar system with grid-tie functionality and smart energy management." },
  { name: "Solar Farm Development Project - 10MW", icon: TreePine, type: "Utility", description: "Utility-scale solar farm development with comprehensive project management and implementation." },
  { name: "Warehouse Solar Installation - 1.5MW", icon: Warehouse, type: "Commercial", description: "Warehouse and distribution center solar installation optimized for large roof spaces." },
  { name: "Solar ROI Calculator & Management Platform", icon: Calculator, type: "Software", description: "Digital platform for calculating solar ROI, system sizing, and performance monitoring." },
  { name: "Green Energy Monitoring Dashboard", icon: Leaf, type: "Software", description: "Comprehensive monitoring solution for tracking solar energy production and environmental impact." },
  { name: "Solar Installation Cost Estimator Tool", icon: TrendingDown, type: "Software", description: "Professional cost estimation tool for solar installers and project developers." },
  { name: "Community Solar Project Management System", icon: Home, type: "Community", description: "Management platform for community solar projects with subscriber management and billing." }
];

export default function SolarRenewable() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProductCategory",
    "name": "Solar Energy & Renewable Solutions",
    "description": "Comprehensive solar energy solutions including residential, commercial, and utility-scale installations, plus solar management software and monitoring systems.",
    "numberOfItems": products.length,
    "provider": {
      "@type": "Organization",
      "name": "KNSOFT Technologies",
      "url": "https://knsoft.dev"
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Solar Energy & Renewable Solutions | KNSOFT Technologies"
        description="Comprehensive solar energy solutions including residential, commercial, and utility-scale installations, solar management software, and renewable energy monitoring systems."
        keywords="solar energy, renewable energy, solar installation, solar power plant, solar monitoring, green energy, solar management software"
        canonical="https://knsoft.dev/products/solar-renewable"
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
                ☀️ Solar Energy & Renewable Solutions
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Comprehensive solar energy solutions from residential installations to utility-scale projects, 
                including advanced monitoring software and management platforms for sustainable energy systems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
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
                Solar <span className="text-gradient">Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our comprehensive range of solar energy products and services designed for sustainable energy generation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full card-glow hover:shadow-glow transition-all duration-500 group">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <product.icon className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {product.type}
                        </span>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors mb-2">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {product.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex gap-2">
                        <Button asChild variant="outline" size="sm" className="flex-1">
                          <Link to="/contact">
                            Request Quote <ExternalLink className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                        <Button asChild variant="ghost" size="sm">
                          <Link to="/contact">
                            Learn More
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Harness Solar Energy?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Start your renewable energy journey with our comprehensive solar solutions designed for efficiency and sustainability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="gradient" size="lg">
                  <Link to="/contact">
                    Get Solar Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/products">View All Products</Link>
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