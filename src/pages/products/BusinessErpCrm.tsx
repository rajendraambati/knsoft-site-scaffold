import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, DollarSign, Calculator, Receipt, Briefcase, ExternalLink } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEO/SEOHead";

const products = [
  { name: "Project Management, Finance, CRM Tool, Task Management Software", icon: Users, type: "Standard", description: "All-in-one business management platform with project tracking, finance, CRM, and task management." },
  { name: "MLM Software", icon: Users, type: "Standard", description: "Multi-level marketing software with genealogy tracking, commission calculations, and member management." },
  { name: "HR/Payroll Management Software", icon: Users, type: "Standard", description: "Comprehensive HR solution with payroll processing, employee management, and attendance tracking." },
  { name: "Portfolio Management Software", icon: Briefcase, type: "Standard", description: "Investment portfolio management with performance tracking, risk analysis, and reporting." },
  { name: "Deals Management CRM Software", icon: DollarSign, type: "Standard", description: "Sales CRM focused on deal pipeline management, lead tracking, and conversion optimization." },
  { name: "Business ERP Solution Product Shop Company Management", icon: Calculator, type: "Standard", description: "Complete ERP solution for retail businesses with inventory, sales, and financial management." },
  { name: "ERP / Account Management Software", icon: Calculator, type: "Standard", description: "Financial ERP system with accounting, budgeting, and financial reporting capabilities." },
  { name: "CRM Software Rise", icon: Users, type: "Standard", description: "Customer relationship management platform with sales automation and customer service tools." },
  { name: "CRM Pro - Customer Relationship Management System TSF", icon: Users, type: "TSF", description: "Advanced CRM system with AI-powered insights, automation, and comprehensive analytics." },
  { name: "Business ERP Solution Product Shop Company Management (Retail POS)", icon: Receipt, type: "Standard", description: "Retail-focused ERP with integrated POS system, inventory management, and sales analytics." }
];

export default function BusinessErpCrm() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProductCategory",
    "name": "Business, ERP & CRM Solutions",
    "description": "Enterprise resource planning, customer relationship management, and business automation software solutions for organizations of all sizes.",
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
        title="Business, ERP & CRM Solutions | KNSOFT Technologies"
        description="Enterprise resource planning, customer relationship management, and business automation software solutions. ERP systems, CRM software, and business management platforms."
        keywords="ERP software, CRM system, business management software, enterprise resource planning, customer relationship management, business automation"
        canonical="https://knsoft.dev/products/business-erp-crm"
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
                🏢 Business, ERP & CRM Solutions
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Comprehensive business management solutions including ERP systems, CRM platforms, 
                and automation tools designed to optimize operations, enhance customer relationships, and drive business growth.
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
                Business <span className="text-gradient">Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our enterprise-grade software solutions designed to streamline business operations and drive growth.
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
                Ready to Optimize Your Business Operations?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Discover how our ERP and CRM solutions can streamline your operations and accelerate business growth.
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