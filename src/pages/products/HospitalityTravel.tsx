import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Bed, Plane } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEO/SEOHead";

const products = [
  { name: "Hotel Booking Software", icon: Bed, type: "Standard", description: "Complete hotel booking platform with real-time availability, reservation management, and payment processing." },
  { name: "Hotel Management Software Pro", icon: Bed, type: "Pro", description: "Comprehensive hotel management solution with property management, housekeeping, and guest services." },
  { name: "Hotel Management Software Pro 2", icon: Bed, type: "Pro", description: "Advanced hotel management with multi-property support, revenue management, and analytics dashboard." },
  { name: "Hotel, Flight, Travels Booking Website", icon: Plane, type: "Standard", description: "Integrated booking platform for hotels, flights, and travel packages with dynamic pricing." },
  { name: "Multi Hotel Management Software", icon: Bed, type: "Pro", description: "Centralized management system for multiple hotel properties with unified reporting and controls." },
  { name: "Tour and Travels Website Software", icon: Plane, type: "Standard", description: "Complete tour operator solution with package management, itinerary builder, and booking engine." },
  { name: "Hotel Management - Room Booking System TSF", icon: Bed, type: "TSF", description: "TSF certified hotel and room booking system with enhanced security and compliance features." }
];

export default function HospitalityTravel() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProductCategory",
    "name": "Hospitality, Travel & Booking Systems",
    "description": "Hotel management, booking systems, and travel software solutions for hospitality industry.",
    "numberOfItems": products.length,
    "provider": {
      "@type": "Organization",
      "name": "KNSOFT Technologies"
    }
  };

  return (
    <>
      <SEOHead 
        title="Hospitality, Travel & Booking Software Solutions | KNSOFT Technologies"
        description="Comprehensive hotel management, booking systems, and travel software. Streamline property management, reservations, and guest services."
        keywords="hotel management software, booking system, travel software, property management, hospitality solutions"
        structuredData={structuredData}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Hospitality, Travel & Booking Solutions
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Comprehensive software solutions for hotels, travel agencies, and tourism businesses. 
                  Streamline operations, enhance guest experiences, and maximize revenue.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Products Grid */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <product.icon className="w-8 h-8 text-primary" />
                          </div>
                          <span className={`text-xs px-3 py-1 rounded-full ${
                            product.type === 'Pro' ? 'bg-accent text-accent-foreground' : 
                            product.type === 'TSF' ? 'bg-primary text-primary-foreground' : 
                            'bg-secondary text-secondary-foreground'
                          }`}>
                            {product.type}
                          </span>
                        </div>
                        <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                        <CardDescription>{product.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-2">
                          <Button variant="default" className="flex-1">
                            Request Demo
                          </Button>
                          <Button variant="outline" className="flex-1">
                            Learn More
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
          <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto"
              >
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Hospitality Business?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Contact us today to learn how our solutions can streamline your operations and enhance guest satisfaction.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link to="/contact">
                      Get Started <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/products">View All Products</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
