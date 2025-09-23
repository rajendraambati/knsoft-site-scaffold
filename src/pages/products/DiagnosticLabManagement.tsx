import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TestTube, Users, Shield, BarChart3, Calendar, FileText, Zap, CheckCircle, Target, TrendingUp } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEO/SEOHead";
import diagnosticLabImage from "@/assets/diagnostic-lab-management.jpg";

const features = [
  { icon: TestTube, title: "Sample Management", description: "Barcode-based tracking from collection to reporting" },
  { icon: Zap, title: "Automated Reporting", description: "Integration with lab equipment for error-free results" },
  { icon: Users, title: "Patient & Doctor Portal", description: "Secure access to reports, history, and downloads" },
  { icon: FileText, title: "Billing Integration", description: "GST-compliant billing with insurance claim support" },
  { icon: Shield, title: "Compliance Tools", description: "Audit-ready logs, consent tracking, and secure storage" },
  { icon: BarChart3, title: "Analytics Dashboard", description: "Real-time insights into lab performance and metrics" }
];

const outcomes = [
  { metric: "56%", description: "Faster test reporting" },
  { metric: "42%", description: "Reduction in errors" },
  { metric: "33%", description: "Growth in patient satisfaction" },
  { metric: "Zero", description: "Compliance penalties" }
];

const implementationPhases = [
  { phase: "Phase 1", duration: "0-2 months", tasks: "Requirement gathering, workflow mapping" },
  { phase: "Phase 2", duration: "2-5 months", tasks: "Sample tracking, reporting, and billing modules" },
  { phase: "Phase 3", duration: "5-8 months", tasks: "Patient/doctor portal, compliance integration" },
  { phase: "Phase 4", duration: "8-12 months", tasks: "Analytics, automation, and go-live" }
];

export default function DiagnosticLabManagement() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Diagnostic Lab Management Software",
    "description": "Comprehensive diagnostic laboratory management solution with automated reporting, patient portals, and regulatory compliance features.",
    "applicationCategory": "Healthcare Software",
    "operatingSystem": "Web-based",
    "provider": {
      "@type": "Organization",
      "name": "KNSOFT Technologies",
      "url": "https://knsoft.dev"
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Diagnostic Lab Management Software | KNSOFT Technologies"
        description="Advanced diagnostic laboratory management solution with automated reporting, patient portals, barcode tracking, and regulatory compliance. Reduce errors by 42% and improve reporting speed by 56%."
        keywords="diagnostic lab software, laboratory management system, pathology lab management, medical lab software, LIMS, lab automation, healthcare software"
        canonical="https://knsoft.dev/products/diagnostic-lab-management"
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
                🧪 Diagnostic Lab Management Software
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Optimize workflows in pathology and diagnostic laboratories with automated reporting, 
                secure patient portals, and comprehensive compliance tools.
              </p>
              <div className="mb-8">
                <img 
                  src={diagnosticLabImage} 
                  alt="Diagnostic Lab Management Software - Modern laboratory with digital equipment and automated reporting systems"
                  className="rounded-xl shadow-2xl mx-auto max-w-2xl w-full"
                />
              </div>
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
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Executive <span className="text-gradient">Summary</span>
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  A healthcare IT solutions provider implemented a <strong>Diagnostic Lab Management Software</strong> to optimize 
                  workflows in pathology and diagnostic laboratories. The goal was to digitize sample tracking, automate reporting, 
                  and ensure regulatory compliance while improving patient engagement. The platform delivered <strong>56% faster test reporting</strong>, 
                  <strong>42% reduction in errors</strong>, and <strong>33% growth in patient satisfaction</strong> by providing secure online report access.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Outcomes Grid */}
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
                Proven <span className="text-gradient">Results</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Measurable improvements achieved in the first year of implementation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center card-glow">
                    <CardContent className="pt-6">
                      <div className="text-4xl font-bold text-gradient mb-2">
                        {outcome.metric}
                      </div>
                      <p className="text-muted-foreground">
                        {outcome.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Context & Problem */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">
                  Context & <span className="text-gradient">Problem</span>
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-6">
                    <strong>Context:</strong> Diagnostic labs faced challenges with manual sample handling, delayed test reporting, 
                    and inefficient communication with patients and doctors. Regulatory requirements demanded higher accuracy and traceability.
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Pain Points</h3>
                  <ul className="space-y-2">
                    <li>Manual entry errors in sample processing</li>
                    <li>Delayed reporting and poor communication</li>
                    <li>Lack of integration with hospital/clinic systems</li>
                    <li>Compliance difficulties in maintaining audit trails</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">
                  <Target className="inline-block mr-2 h-6 w-6 text-primary" />
                  Objectives
                </h3>
                <div className="space-y-4">
                  {[
                    "Digitize the end-to-end diagnostic lab workflow",
                    "Improve reporting speed and accuracy",
                    "Enable secure patient and doctor access to reports",
                    "Ensure compliance with medical data regulations"
                  ].map((objective, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{objective}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
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
                Core <span className="text-gradient">Capabilities</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive features designed to streamline laboratory operations and enhance patient care
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {feature.title}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Implementation <span className="text-gradient">Timeline</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Structured rollout approach ensuring smooth adoption and minimal disruption
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {implementationPhases.map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-8"
                  >
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                    </div>
                    <Card className="flex-1 card-glow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold">{phase.phase}</h3>
                          <Badge variant="secondary">{phase.duration}</Badge>
                        </div>
                        <p className="text-muted-foreground">{phase.tasks}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Architecture & <span className="text-gradient">Technology</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="card-glow">
                  <CardHeader>
                    <CardTitle>Technology Stack</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <strong>Frontend:</strong> React.js for web; Flutter mobile apps
                    </div>
                    <div>
                      <strong>Backend:</strong> Node.js/NestJS microservices with REST APIs
                    </div>
                    <div>
                      <strong>Database:</strong> PostgreSQL for structured records; MongoDB for reports
                    </div>
                    <div>
                      <strong>Infrastructure:</strong> AWS-based containerized services with auto-scaling
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-glow">
                  <CardHeader>
                    <CardTitle>Security & Compliance</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>HIPAA and GDPR compliant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>End-to-end encrypted patient data</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>Role-based access control</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>Immutable audit trails</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Future Roadmap */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Future <span className="text-gradient">Roadmap</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "AI-powered anomaly detection in lab results",
                  "Integration with wearable health devices",
                  "Cloud-based lab collaboration for multi-branch networks",
                  "Telemedicine integration for result-based consultations"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-left">
                    <TrendingUp className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
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
                Ready to Transform Your Diagnostic Lab?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join leading diagnostic laboratories that have improved their reporting speed by 56% and reduced errors by 42% 
                with our comprehensive lab management solution.
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