import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, BookOpen, FileText, School, UserCheck, ExternalLink } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEO/SEOHead";

const products = [
  { name: "Online Learning and Examination Management Software", icon: GraduationCap, type: "Standard", description: "Comprehensive e-learning platform with course management, online exams, and student tracking." },
  { name: "Library Management Software", icon: BookOpen, type: "Standard", description: "Complete library management solution with book cataloging, member management, and circulation tracking." },
  { name: "Online Examination, Mock Test & Quiz Management Software", icon: FileText, type: "Standard", description: "Advanced examination system with automated grading, analytics, and anti-cheating features." },
  { name: "Pro School Management Software", icon: School, type: "Pro", description: "Comprehensive school management system with student information, academics, and administrative modules." },
  { name: "School Management Software 1", icon: School, type: "Standard", description: "Essential school management features for small to medium educational institutions." },
  { name: "Library Management Software 2", icon: BookOpen, type: "Standard", description: "Enhanced library management with digital catalog and member portal features." },
  { name: "Library Management Software Pro", icon: BookOpen, type: "Pro", description: "Advanced library solution with RFID integration, digital resources, and analytics dashboard." },
  { name: "Academy Learning Management System", icon: GraduationCap, type: "Standard", description: "Professional learning management system for training academies and coaching centers." },
  { name: "Online Exam System", icon: FileText, type: "Standard", description: "Robust online examination platform with secure test delivery and real-time monitoring." },
  { name: "Online Election System TSF", icon: UserCheck, type: "TSF", description: "Secure digital election platform for student councils and organizational voting." },
  { name: "Online Exam System TSF", icon: FileText, type: "TSF", description: "TSF certified examination system with enhanced security and compliance features." },
  { name: "College Management System TSF", icon: GraduationCap, type: "TSF", description: "Comprehensive college management platform with academic and administrative modules." }
];

export default function EducationLearning() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProductCategory",
    "name": "Education & Learning Systems",
    "description": "Educational software solutions including school management systems, online learning platforms, library management, and examination systems.",
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
        title="Education & Learning Management Systems | KNSOFT Technologies"
        description="Educational software solutions including school management systems, online learning platforms, library management, and examination systems for educational institutions."
        keywords="education software, school management system, learning management system, library management, online examination system, e-learning platform"
        canonical="https://knsoft.dev/products/education-learning"
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
                🏫 Education & Learning Systems
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Comprehensive educational technology solutions designed to enhance learning experiences, 
                streamline academic operations, and improve educational outcomes for institutions of all sizes.
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
                Educational <span className="text-gradient">Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our comprehensive range of educational software designed to modernize learning and administration.
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
                Ready to Modernize Your Educational Institution?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Discover how our educational software solutions can transform your institution's learning and administrative processes.
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