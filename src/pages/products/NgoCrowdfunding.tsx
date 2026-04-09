import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Church, ExternalLink } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEO/SEOHead";

const products = [
  { name: "Crowdfunding Software For NGO", icon: Heart, type: "Standard", description: "Complete crowdfunding platform designed specifically for NGOs with donation tracking, campaign management, and donor engagement." },
  { name: "Crowdfunding Software For NGO Pro", icon: Heart, type: "Pro", description: "Advanced NGO crowdfunding solution with enhanced features, analytics dashboard, and multi-currency support." },
  { name: "Crowdfunding Software For NGO Pro 2", icon: Heart, type: "Pro", description: "Second generation professional NGO platform with improved user interface and mobile optimization." },
  { name: "Professional Crowdfunding Software For NGO", icon: Heart, type: "Professional", description: "Enterprise-grade crowdfunding solution for large NGOs with advanced reporting and integration capabilities." },
  { name: "Matrimonial CMS Website", icon: Heart, type: "Standard", description: "Matrimonial platform for community building with profile matching, communication tools, and event management." },
  { name: "Matrimonial Portal Website", icon: Heart, type: "Standard", description: "Comprehensive matrimonial portal with advanced search, privacy controls, and family connections." },
  { name: "Church Management Software", icon: Church, type: "Standard", description: "Church administration platform with member management, event scheduling, and donation tracking." },
  { name: "Crowdfunding System TSF", icon: Heart, type: "TSF", description: "TSF certified crowdfunding platform with compliance features and enhanced security protocols." }
];

export default function NgoCrowdfunding() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProductCategory",
    "name": "NGO & Crowdfunding Platforms",
    "description": "Specialized software solutions for NGOs, crowdfunding campaigns, community platforms, and social organization management systems.",
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
        title="NGO & Crowdfunding Platforms | KNSOFT Technologies"
        description="Specialized software solutions for NGOs, crowdfunding campaigns, matrimonial platforms, and community organization management systems."
        keywords="NGO software, crowdfunding platform, donation management, matrimonial portal, church management software, community platform"
        canonical="https://knsoft.dev/products/ngo-crowdfunding"
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
                🧑‍🤝‍🧑 NGO & Crowdfunding Platforms
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Specialized platforms for NGOs, crowdfunding campaigns, and community organizations 
                designed to facilitate social impact, manage donations, and build meaningful connections.
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
                Social Impact <span className="text-gradient">Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our platforms designed to empower social organizations and facilitate community engagement.
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
                            Request Demo <ExternalLink className="ml-1 h-3 w-3" />
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
                Ready to Amplify Your Social Impact?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Launch your crowdfunding campaign or community platform with our specialized solutions designed for social organizations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="gradient" size="lg">
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
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