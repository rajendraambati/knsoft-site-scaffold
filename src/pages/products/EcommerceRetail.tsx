import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingCart, ShoppingBag, Store, Shirt, ExternalLink } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEO/SEOHead";

const products = [
  { name: "Multi Vendor E-Commerce Website", icon: ShoppingCart, type: "Standard", description: "Complete multi-vendor marketplace platform with seller management, commission tracking, and payment processing." },
  { name: "Buy Sell Classified Ads CMS Software", icon: ShoppingCart, type: "Standard", description: "Classified advertisements platform for buying and selling products with advanced search and filtering." },
  { name: "Buy Sell Classified Ads CMS Software 2", icon: ShoppingCart, type: "Standard", description: "Enhanced classified ads system with improved user interface and mobile responsiveness." },
  { name: "Multivendor E-Commerce CMS Website", icon: ShoppingCart, type: "Standard", description: "Professional multi-vendor e-commerce solution with comprehensive admin and vendor dashboards." },
  { name: "Single Vendor E-Commerce Website Pro", icon: ShoppingBag, type: "Pro", description: "Premium single vendor e-commerce platform with advanced marketing tools and analytics." },
  { name: "Grocery Multi Vendor E-commerce Website Pro 6 Am", icon: Store, type: "Pro", description: "Specialized grocery marketplace with inventory management, delivery scheduling, and multi-payment options." },
  { name: "Grocery Multi Vendor E-commerce Website Pro 2 Nest", icon: Store, type: "Pro", description: "Advanced grocery e-commerce platform with vendor management and customer loyalty programs." },
  { name: "Super Shop E-Commerce Website", icon: Store, type: "Standard", description: "Comprehensive retail e-commerce solution with product catalog, order management, and customer support." },
  { name: "E-Commerce Website Single Vendor Garments", icon: Shirt, type: "Standard", description: "Fashion and garments focused e-commerce platform with size charts, color variants, and style categories." },
  { name: "Zairito - Laravel E-Commerce System Single Vendor", icon: ShoppingBag, type: "Standard", description: "Laravel-based e-commerce solution with modern architecture and scalable design patterns." },
  { name: "Royal Laravel Ecommerce System with Physical and Digital Product Selling", icon: ShoppingCart, type: "Standard", description: "Versatile e-commerce platform supporting both physical products and digital downloads." },
  { name: "Single Vendor E-Commerce Website 4", icon: ShoppingBag, type: "Standard", description: "Fourth-generation single vendor e-commerce solution with enhanced performance and security." },
  { name: "ODASS E-Commerce Website", icon: ShoppingBag, type: "Standard", description: "ODASS branded e-commerce platform with custom features and industry-specific functionality." },
  { name: "E-Commerce 1032", icon: ShoppingCart, type: "Standard", description: "Streamlined e-commerce solution with essential features for small to medium businesses." },
  { name: "E-Commerce 1033", icon: ShoppingCart, type: "Standard", description: "Advanced e-commerce platform with enhanced user experience and conversion optimization." },
  { name: "E-Commerce System TSF", icon: ShoppingCart, type: "TSF", description: "TSF certified e-commerce system with compliance features and enterprise-grade security." },
  { name: "Zaika Single Vendor E-Commerce", icon: ShoppingBag, type: "Standard", description: "Food and restaurant focused e-commerce platform with menu management and delivery integration." }
];

export default function EcommerceRetail() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProductCategory",
    "name": "E-Commerce & Retail Platforms",
    "description": "Comprehensive e-commerce and retail software solutions including multi-vendor marketplaces, single vendor stores, and specialized retail platforms.",
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
        title="E-Commerce & Retail Platforms | KNSOFT Technologies"
        description="E-commerce and retail software solutions including multi-vendor marketplaces, online stores, classified ads platforms, and specialized retail management systems."
        keywords="e-commerce platform, online store, multi-vendor marketplace, retail software, classified ads platform, shopping cart system"
        canonical="https://knsoft.dev/products/ecommerce-retail"
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
                🛒 E-Commerce & Retail Platforms
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Comprehensive e-commerce solutions from single vendor stores to multi-vendor marketplaces, 
                designed to drive online sales, enhance customer experience, and scale your retail business.
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
                E-Commerce <span className="text-gradient">Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our comprehensive range of e-commerce platforms designed for businesses of all sizes and industries.
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
                Ready to Launch Your Online Store?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Start your e-commerce journey with our proven platforms designed to maximize sales and customer satisfaction.
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