import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Hospital, Users, CreditCard, BarChart3, Calendar, Shield, Zap, CheckCircle, Target, TrendingUp, Clock, DollarSign } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEO/SEOHead";
import hospitalManagementImage from "@/assets/hospital-management-software-2.jpg";

const features = [
  { icon: Users, title: "Patient Management", description: "End-to-end digital records covering OPD, IPD, and emergency care" },
  { icon: CreditCard, title: "Billing & Insurance", description: "Automated, GST/insurance-ready billing with real-time claim tracking" },
  { icon: Hospital, title: "Pharmacy & Lab Integration", description: "Seamless connection with in-house pharmacy and diagnostic systems" },
  { icon: Calendar, title: "Staff & Resource Management", description: "Scheduling, payroll, and asset tracking" },
  { icon: BarChart3, title: "Analytics & Reporting", description: "Real-time dashboards for clinical, financial, and operational insights" },
  { icon: Shield, title: "Security & Compliance", description: "HIPAA-compliant with end-to-end encryption and audit trails" }
];

const outcomes = [
  { metric: "40%", description: "Faster patient admissions", icon: Clock },
  { metric: "35%", description: "Reduction in admin costs", icon: DollarSign },
  { metric: "25%", description: "Improvement in satisfaction", icon: Users },
  { metric: "32%", description: "Fewer claim rejections", icon: CheckCircle }
];

const implementationPhases = [
  { phase: "Phase 1", duration: "0-2 months", tasks: "Needs assessment and compliance mapping" },
  { phase: "Phase 2", duration: "2-5 months", tasks: "Patient management, billing, and pharmacy modules" },
  { phase: "Phase 3", duration: "5-8 months", tasks: "Insurance, lab, and staff management integration" },
  { phase: "Phase 4", duration: "8-12 months", tasks: "Dashboards, analytics, and hospital-wide rollout" }
];

const keyFeatures = [
  "Unified patient records (EHR)",
  "Integrated pharmacy and lab modules",
  "Automated billing with claim management",
  "Doctor/nurse scheduling",
  "Real-time performance dashboards",
  "Secure patient and doctor portals"
];

export default function HospitalManagementSoftware2() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Hospital Management Software 2",
    "description": "Next-generation hospital management platform integrating all departments into a unified digital ecosystem with 40% faster admissions and 35% cost reduction.",
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
        title="Hospital Management Software 2 | KNSOFT Technologies"
        description="Next-generation hospital management platform with integrated patient care, automated billing, pharmacy integration, and real-time analytics. Achieve 40% faster admissions and 35% cost reduction."
        keywords="hospital management system, HMS, healthcare software, patient management, medical billing, hospital automation, EHR system, healthcare technology"
        canonical="https://knsoft.dev/products/hospital-management-software-2"
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
                🏥 Hospital Management Software 2
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Next-generation platform designed to integrate all hospital departments into a unified digital ecosystem, 
                enhancing patient care and improving decision-making through real-time analytics.
              </p>
              <div className="mb-8">
                <img 
                  src={hospitalManagementImage} 
                  alt="Hospital Management Software 2 - Integrated digital hospital ecosystem with real-time analytics and automated workflows"
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
                  A healthcare technology firm deployed <strong>Hospital Management Software 2 (HMS 2)</strong>, a next-generation 
                  platform designed to integrate all hospital departments into a unified digital ecosystem. This system aimed to 
                  enhance patient care, automate administrative workflows, and improve decision-making through real-time analytics. 
                  Within the first year of implementation, hospitals using HMS 2 reported <strong>40% faster patient admissions</strong>, 
                  <strong>35% reduction in administrative costs</strong>, and <strong>25% improvement in overall patient satisfaction</strong>.
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
                Measurable improvements achieved within the first year of implementation
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
                      <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                        <outcome.icon className="h-6 w-6 text-white" />
                      </div>
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
                    <strong>Context:</strong> Hospitals often struggled with fragmented systems for patient records, billing, 
                    pharmacy, and diagnostics. Manual data handling caused delays, errors, and compliance risks, while poor 
                    coordination among departments impacted patient care quality.
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Pain Points</h3>
                  <ul className="space-y-2">
                    <li>Disconnected systems for different hospital functions</li>
                    <li>Delayed patient admissions and discharge processes</li>
                    <li>Inefficient billing and insurance claim processing</li>
                    <li>Lack of real-time data for clinical and managerial decisions</li>
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
                    "Build an integrated hospital-wide management solution",
                    "Streamline patient care workflows and improve efficiency",
                    "Automate billing, pharmacy, and insurance processes",
                    "Provide actionable insights through real-time dashboards"
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

        {/* Core Capabilities */}
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
                Comprehensive features designed to unify hospital operations and enhance patient care
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

        {/* Key Features */}
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
                Key <span className="text-gradient">Features</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {keyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Implementation Timeline */}
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

        {/* Architecture & Technology */}
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
                Architecture & <span className="text-gradient">Technology</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="card-glow">
                  <CardHeader>
                    <CardTitle>Technology Stack</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <strong>Frontend:</strong> Angular for web; Flutter for mobile apps
                    </div>
                    <div>
                      <strong>Backend:</strong> Node.js/Express microservices with RESTful APIs
                    </div>
                    <div>
                      <strong>Database:</strong> PostgreSQL for structured data; MongoDB for unstructured records
                    </div>
                    <div>
                      <strong>Infrastructure:</strong> Dockerized services deployed on AWS with high availability
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
                      <span>HIPAA and GDPR compliance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>TLS 1.3 with AES-256 encryption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>Role-based access control</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>Immutable compliance-ready audit trails</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Lessons Learned */}
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
                Lessons <span className="text-gradient">Learned</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  "Centralized digital systems eliminate departmental silos",
                  "Automated claims improve financial performance",
                  "Real-time dashboards empower decision-making",
                  "Patient satisfaction is linked directly to faster, smoother processes"
                ].map((lesson, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{lesson}</span>
                  </div>
                ))}
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
                  "AI-based predictive patient care analytics",
                  "IoT integration for smart medical devices",
                  "Blockchain for secure patient record sharing",
                  "Multi-hospital chain management with unified reporting"
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
                Ready to Transform Your Hospital Operations?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join leading hospitals that have achieved 40% faster admissions and 35% cost reduction 
                with our next-generation hospital management platform.
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