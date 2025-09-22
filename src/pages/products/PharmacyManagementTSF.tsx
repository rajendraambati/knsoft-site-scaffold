import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Pill, 
  BarChart3, 
  Users, 
  Shield, 
  Clock, 
  TrendingUp,
  CheckCircle,
  Scan,
  FileText,
  Zap,
  Target,
  ShoppingCart,
  Database,
  Smartphone,
  Globe
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Badge } from "@/components/ui/badge";
import pharmacyTSFImage from "@/assets/pharmacy-management-tsf.jpg";

const coreCapabilities = [
  { 
    name: "Inventory Management", 
    icon: Database, 
    description: "Batch/expiry tracking with automated stock reordering and real-time visibility." 
  },
  { 
    name: "Prescription Handling", 
    icon: Scan, 
    description: "Barcode-driven validation with e-prescription integration for accuracy." 
  },
  { 
    name: "Billing Automation", 
    icon: ShoppingCart, 
    description: "POS integration with GST-compliant invoicing for faster transactions." 
  },
  { 
    name: "Regulatory Compliance", 
    icon: Shield, 
    description: "Audit-ready logs and controlled drug monitoring for regulations." 
  },
  { 
    name: "Customer Engagement", 
    icon: Users, 
    description: "SMS reminders, loyalty programs, and online ordering capabilities." 
  },
  { 
    name: "Mobile Integration", 
    icon: Smartphone, 
    description: "Android/iOS mobile apps for on-the-go pharmacy management." 
  }
];

const keyFeatures = [
  "Real-time inventory with expiry/batch management",
  "Automated prescription validation (barcode + e-Rx)",
  "POS with GST-compliant invoicing",
  "Regulatory compliance dashboards",
  "Online order + delivery integration",
  "Loyalty and customer reminder system"
];

const resultMetrics = [
  { metric: "Stockouts Reduced", value: "47%", icon: TrendingUp },
  { metric: "Billing Time Saved", value: "60%", icon: Clock },
  { metric: "Prescription Accuracy", value: "99.5%", icon: Target },
  { metric: "Customer Retention", value: "+32%", icon: Users },
  { metric: "Compliance Audits", value: "Zero Penalties", icon: Shield }
];

const painPoints = [
  "Inaccurate inventory records leading to expired stock and shortages",
  "Time-consuming manual billing and prescription validation",  
  "Difficulty in maintaining compliance with drug regulations",
  "Lack of customer engagement tools"
];

const implementationPhases = [
  { phase: "Phase 1", duration: "0–2 months", description: "Requirement analysis, compliance mapping" },
  { phase: "Phase 2", duration: "2–5 months", description: "Inventory, POS, and prescription modules" },
  { phase: "Phase 3", duration: "5–8 months", description: "Compliance dashboard, reporting tools, pilot run" },
  { phase: "Phase 4", duration: "8–12 months", description: "Mobile apps, customer engagement, go-live" }
];

const futureRoadmap = [
  "AI-based demand prediction for medicines",
  "Integration with telemedicine platforms", 
  "Blockchain-based drug authenticity tracking",
  "Expansion into hospital pharmacy chains"
];

export default function PharmacyManagementTSF() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "The Pharma - Pharmacy Management System (TSF)",
    "description": "Comprehensive pharmacy management system for retail and wholesale operations with inventory tracking, prescription validation, billing automation, and regulatory compliance.",
    "provider": {
      "@type": "Organization",
      "name": "KNSOFT Technologies",
      "url": "https://knsoft.dev"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="The Pharma - Pharmacy Management System (TSF) | KNSOFT Technologies"
        description="Complete pharmacy management system for retail and wholesale operations. Reduce stockouts by 47%, achieve 99.5% prescription accuracy, and automate billing with TSF compliance."
        keywords="pharmacy management system, TSF pharmacy software, retail pharmacy software, wholesale pharmacy management, prescription validation, inventory management, pharmacy billing"
        canonical="https://knsoft.dev/products/pharmacy-management-tsf"
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
              <div className="mb-8">
                <Pill className="h-16 w-16 mx-auto mb-6 text-white" />
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  The Pharma - Pharmacy Management System (TSF)
                </h1>
              </div>
              
              {/* Product Image */}
              <div className="mb-8">
                <img 
                  src={pharmacyTSFImage} 
                  alt="Pharmacy Management System TSF Dashboard showing improved metrics and automation"
                  className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
                />
              </div>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Digitize and streamline retail and wholesale pharmacy operations. Improve inventory accuracy, 
                automate prescription handling, and ensure compliance with healthcare regulations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Executive <span className="text-gradient">Summary</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                A mid-sized healthcare IT provider launched The Pharma – Pharmacy Management System (TSF) to digitize 
                and streamline retail and wholesale pharmacy operations. The platform helped pharmacies reduce stockouts 
                by 47%, cut manual billing time by 60%, and achieve 99.5% prescription accuracy through barcode-driven 
                workflows and integrated e-prescriptions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Problem & Pain Points */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Client Context & <span className="text-gradient">Problem</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
                Pharmacies faced challenges managing fast-moving drugs, expiry dates, billing, and regulatory compliance. 
                Manual systems caused errors, revenue leakage, and customer dissatisfaction.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-8 text-center">Pain Points</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {painPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="h-6 w-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-destructive" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
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
                Core <span className="text-gradient">Capabilities</span> Delivered
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive features designed to address every aspect of pharmacy operations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreCapabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full card-glow hover:shadow-glow transition-all duration-500 group">
                    <CardHeader>
                      <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                        <capability.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors mb-2">
                        {capability.name}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {capability.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Metrics */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Results <span className="text-gradient">(First Year)</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Measurable improvements across all key performance indicators.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {resultMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center card-glow hover:shadow-glow transition-all duration-500 group">
                    <CardHeader className="pb-2">
                      <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto mb-3">
                        <metric.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-sm group-hover:text-primary transition-colors">
                        {metric.metric}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="text-2xl font-bold text-primary">{metric.value}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Key <span className="text-gradient">Features</span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {keyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground leading-relaxed">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Architecture & Technology */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Architecture & <span className="text-gradient">Technology</span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle className="text-xl mb-4">Reference Stack</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Badge variant="secondary" className="mb-2">Frontend</Badge>
                      <p className="text-sm text-muted-foreground">Angular/React-based web interface + Android/iOS mobile apps</p>
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">Backend</Badge>
                      <p className="text-sm text-muted-foreground">Node.js/Express with REST APIs</p>
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">Database</Badge>
                      <p className="text-sm text-muted-foreground">PostgreSQL + Redis (caching); MongoDB for audit logs</p>
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">Security</Badge>
                      <p className="text-sm text-muted-foreground">HIPAA-compliant, TLS 1.3 encryption, RBAC, secure audit trails</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Implementation <span className="text-gradient">Timeline</span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {implementationPhases.map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="card-glow hover:shadow-glow transition-all duration-500">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold">{index + 1}</span>
                          </div>
                          <div className="flex-grow">
                            <h3 className="font-semibold text-lg">{phase.phase}</h3>
                            <p className="text-sm text-primary font-medium">{phase.duration}</p>
                            <p className="text-muted-foreground mt-1">{phase.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Future Roadmap */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Future <span className="text-gradient">Roadmap</span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {futureRoadmap.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="card-glow hover:shadow-glow transition-all duration-500 group">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3">
                          <Globe className="h-5 w-5 text-primary flex-shrink-0" />
                          <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                            {item}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
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
                Ready to Transform Your Pharmacy Operations?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We deliver compliance-focused pharmacy management systems with automation, 
                accuracy, and patient engagement at the core.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="gradient" size="lg">
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/products/healthcare-medical">View All Healthcare Products</Link>
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