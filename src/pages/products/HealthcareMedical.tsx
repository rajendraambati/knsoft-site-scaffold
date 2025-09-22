import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Hospital, TestTube, Pill, Stethoscope, ExternalLink } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEO/SEOHead";

const products = [
  { name: "Hospital Management Software Pro", icon: Hospital, type: "Pro", description: "Comprehensive hospital management solution with advanced features for patient care, billing, and operations." },
  { name: "Pathology Lab Management Software", icon: TestTube, type: "Standard", description: "Complete pathology lab solution for test management, reporting, and patient record management." },
  { name: "Pharmacy Management Software", icon: Pill, type: "Standard", description: "Efficient pharmacy operations management with inventory, billing, and prescription tracking." },
  { name: "Clinic Management Software", icon: Stethoscope, type: "Standard", description: "Streamlined clinic operations with appointment scheduling, patient records, and billing." },
  { name: "Diagnostic Lab Management Software", icon: TestTube, type: "Standard", description: "Advanced diagnostic lab management with equipment integration and report generation." },
  { name: "Hospital Management Software 2", icon: Hospital, type: "Standard", description: "Alternative hospital management solution with customizable modules and workflows." },
  { name: "Hospital Management Software 3", icon: Hospital, type: "Standard", description: "Third-generation hospital management system with enhanced user experience." },
  { name: "Clinic Management Software Pro", icon: Stethoscope, type: "Pro", description: "Advanced clinic management with telemedicine integration and analytics dashboard." },
  { name: "Pharmacy Management Software Pro GD", icon: Pill, type: "Pro", description: "Premium pharmacy solution with GD compliance and advanced inventory management." },
  { name: "Hospital Management System TSF", icon: Hospital, type: "TSF", description: "TSF edition hospital management system with specialized healthcare workflows." },
  { name: "The Pharma - Pharmacy Management System TSF", icon: Pill, type: "TSF", description: "TSF certified pharmacy management system with regulatory compliance features." }
];

export default function HealthcareMedical() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProductCategory",
    "name": "Healthcare & Medical Software",
    "description": "Comprehensive healthcare management software solutions for hospitals, clinics, pharmacies, and diagnostic laboratories.",
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
        title="Healthcare & Medical Software Solutions | KNSOFT Technologies"
        description="Comprehensive healthcare management software for hospitals, clinics, pharmacies, and diagnostic labs. Hospital management systems, pathology lab software, and clinic management solutions."
        keywords="healthcare software, hospital management system, clinic management software, pharmacy management, pathology lab software, medical software solutions"
        canonical="https://knsoft.dev/products/healthcare-medical"
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
                🏥 Healthcare & Medical Software
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Comprehensive healthcare management solutions designed to streamline operations, 
                enhance patient care, and improve efficiency across hospitals, clinics, pharmacies, and diagnostic laboratories.
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
                Healthcare <span className="text-gradient">Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our range of healthcare software products designed to meet the unique needs of medical institutions.
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
                          <Link to={product.name === "Hospital Management Software Pro" ? "/products/hospital-management-pro" : "/contact"}>
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
                Ready to Transform Your Healthcare Operations?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Contact us to learn more about our healthcare software solutions and how they can benefit your medical institution.
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