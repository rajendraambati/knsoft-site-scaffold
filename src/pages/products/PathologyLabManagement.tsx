import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  TestTube, 
  BarChart3, 
  Users, 
  Shield, 
  Clock, 
  TrendingUp,
  CheckCircle,
  Microscope,
  FileText,
  Zap,
  Target
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Badge } from "@/components/ui/badge";
import pathologyLabImage from "@/assets/pathology-lab-system.jpg";

const features = [
  { 
    name: "End-to-End Sample Management", 
    icon: TestTube, 
    description: "Barcode-based tracking from collection to reporting with real-time status updates." 
  },
  { 
    name: "White-Label Reporting & Portals", 
    icon: FileText, 
    description: "Give hospitals and corporate clients branded reports with their logo and separate portals." 
  },
  { 
    name: "Analyzer Integration", 
    icon: Microscope, 
    description: "Direct connection with lab instruments for automatic test result flow into the system." 
  },
  { 
    name: "Billing & Finance", 
    icon: BarChart3, 
    description: "Generate patient and corporate invoices instantly with GST compliance." 
  },
  { 
    name: "Inventory & Quality Control", 
    icon: Shield, 
    description: "Real-time reagent tracking with expiry alerts and built-in QC rules." 
  },
  { 
    name: "Compliance Made Simple", 
    icon: CheckCircle, 
    description: "Automated audit trails and digital QC logs for NABL/ISO audits." 
  },
  { 
    name: "Patient & Doctor Access", 
    icon: Users, 
    description: "Secure web portals and apps with SMS, email, or WhatsApp delivery." 
  },
  { 
    name: "Analytics & Business Insights", 
    icon: TrendingUp, 
    description: "Dashboard for TAT, test volumes, error rates, and profitability analysis." 
  }
];

const benefits = [
  "Faster Reports – Reduce turnaround times and deliver results faster than competitors",
  "Fewer Errors – Automated tracking cuts sample mislabeling and manual mistakes",
  "Happier Clients – White-labeling helps retain and grow B2B contracts",
  "Lower Costs – Save on manpower, paper, and reagent wastage",
  "Compliance Ready – Be audit-prepared every day",
  "Scalable – Works for a single lab or a nationwide network"
];

const successMetrics = [
  { metric: "Turnaround Time", before: "11 hours", after: "6.5 hours", icon: Clock },
  { metric: "Error Reduction", before: "3%", after: "0.8%", icon: Target },
  { metric: "New B2B Clients", value: "7 new clients", icon: Users },
  { metric: "Revenue Growth", value: "+8% test volume", icon: TrendingUp },
  { metric: "ROI", value: "300%+ in first year", icon: Zap }
];

const targetUsers = [
  "Standalone Labs → Automate operations and compete with bigger brands",
  "Diagnostic Chains → Manage multiple centers under one system",
  "Hospitals → Offer in-house pathology with branded reports",
  "Corporate Health Programs → Simplify employee health checkups"
];

export default function PathologyLabManagement() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Pathology Lab Management Software",
    "description": "Comprehensive pathology lab management solution with barcode tracking, white-label reporting, analyzer integration, and compliance features.",
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
        title="Pathology Lab Management Software | KNSOFT Technologies"
        description="Comprehensive pathology lab management software with barcode tracking, white-label reporting, analyzer integration, billing, and compliance features. Reduce errors and improve efficiency."
        keywords="pathology lab software, lab management system, LIMS, lab information system, pathology software, diagnostic lab management, medical lab software"
        canonical="https://knsoft.dev/products/pathology-lab-management"
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
                <TestTube className="h-16 w-16 mx-auto mb-6 text-white" />
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Pathology Lab Management Software
                </h1>
              </div>
              
              {/* Product Image */}
              <div className="mb-8">
                <img 
                  src={pathologyLabImage} 
                  alt="Pathology Lab Management Software Dashboard showing improved metrics and analytics"
                  className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
                />
              </div>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Comprehensive pathology lab management solution designed to solve operational challenges 
                while preparing labs for growth through automation, compliance, and superior client service.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Labs Need It */}
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
                Why Labs <span className="text-gradient">Need It</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Running a pathology lab means juggling many moving parts — patient samples, test orders, doctor requests, 
                billing, corporate contracts, quality checks, and compliance. Without the right system, labs face delays 
                in report delivery, frequent errors in sample handling, struggles to maintain accreditation, difficulty 
                serving B2B clients with white-label reports, and rising operational costs due to manual processes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
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
                What the Software <span className="text-gradient">Offers</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive features designed to streamline every aspect of pathology lab operations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
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
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors mb-2">
                        {feature.name}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
                Key <span className="text-gradient">Benefits</span> for Your Lab
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground leading-relaxed">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
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
                Success <span className="text-gradient">Snapshot</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real results from a client case study showing measurable improvements.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {successMetrics.map((metric, index) => (
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
                      {metric.before && metric.after ? (
                        <div className="space-y-1">
                          <div className="text-xs text-muted-foreground line-through">{metric.before}</div>
                          <div className="text-lg font-bold text-primary">→ {metric.after}</div>
                        </div>
                      ) : (
                        <div className="text-lg font-bold text-primary">{metric.value}</div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Users */}
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
                Who Can <span className="text-gradient">Use It</span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {targetUsers.map((user, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="card-glow hover:shadow-glow transition-all duration-500 group">
                      <CardContent className="p-6">
                        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                          {user}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="text-gradient">Us</span>
              </h2>
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  Proven success with labs of all sizes
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  Fast implementation (weeks, not months)
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  Ongoing support and training
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  Scalable pricing that grows with your business
                </Badge>
              </div>
            </motion.div>
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
                Transform Your Lab Operations Today
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Move from manual, error-prone processes to a future of faster reporting, 
                error-free operations, and stronger client relationships.
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