import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope, Calendar, CreditCard, Users, Shield, Smartphone, CheckCircle, Target, TrendingUp, Clock, DollarSign, FileText, Brain, Video } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEO/SEOHead";
import clinicManagementProImage from "@/assets/clinic-management-software-pro.jpg";

const features = [
  { icon: Users, title: "Patient Management", description: "Digital medical records, history, and visit tracking" },
  { icon: Calendar, title: "Appointments & Scheduling", description: "Automated booking and reminders via SMS/email" },
  { icon: CreditCard, title: "Billing & Insurance", description: "Automated invoices and claim management" },
  { icon: Stethoscope, title: "Doctor & Staff Module", description: "Scheduling, payroll, and task tracking" },
  { icon: Smartphone, title: "Patient Engagement", description: "Online portals for booking, teleconsultation, and report downloads" },
  { icon: Shield, title: "Security & Compliance", description: "HIPAA compliance with role-based access and audit logs" }
];

const outcomes = [
  { metric: "52%", description: "Faster patient check-ins", icon: Clock },
  { metric: "40%", description: "Reduction in manual paperwork", icon: FileText },
  { metric: "29%", description: "Improvement in appointment adherence", icon: Calendar },
  { metric: "100%", description: "HIPAA compliance achieved", icon: Shield }
];

const implementationPhases = [
  { phase: "Phase 1", duration: "0-2 months", tasks: "Requirements and workflow mapping" },
  { phase: "Phase 2", duration: "2-5 months", tasks: "Core scheduling, patient records, and billing" },
  { phase: "Phase 3", duration: "5-8 months", tasks: "Patient portals, teleconsultation, and staff management" },
  { phase: "Phase 4", duration: "8-12 months", tasks: "Analytics, optimization, and full deployment" }
];

const keyFeatures = [
  "End-to-end patient management",
  "Automated scheduling and reminders",
  "Integrated billing and claims",
  "Telemedicine and patient portals",
  "Staff and payroll management"
];

const lessonsLearned = [
  "Even small clinics benefit significantly from digital transformation",
  "Automated reminders improve adherence rates",
  "Integration with telemedicine expands clinic reach",
  "Compliance-first design builds patient trust"
];

export default function ClinicManagementSoftwarePro() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Clinic Management Software Pro",
    "description": "Advanced clinic management platform with patient management, automated scheduling, billing, and telemedicine integration. Achieve 52% faster check-ins and 40% paperwork reduction.",
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
        title="Clinic Management Software Pro | KNSOFT Technologies"
        description="Advanced clinic management platform with patient management, automated scheduling, billing, telemedicine integration, and patient portals. Reduce paperwork by 40% and improve check-in speed by 52%."
        keywords="clinic management software, medical practice software, patient management system, medical billing, appointment scheduling, telemedicine, healthcare technology, EHR system"
        canonical="https://knsoft.dev/products/clinic-management-software-pro"
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
                🩺 Clinic Management Software Pro
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Streamline operations of small to mid-sized clinics by integrating patient management, 
                billing, scheduling, and medical record systems into a single digital platform.
              </p>
              <div className="mb-8">
                <img 
                  src={clinicManagementProImage} 
                  alt="Clinic Management Software Pro - Digital clinic management with patient portals, automated scheduling, and telemedicine integration"
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
                  <strong>Clinic Management Software Pro</strong> was developed to streamline the operations of small to 
                  mid-sized clinics by integrating patient management, billing, scheduling, and medical record systems into 
                  a single digital platform. The solution aimed to reduce administrative burdens, enhance patient satisfaction, 
                  and ensure regulatory compliance. Post-implementation, clinics experienced <strong>52% faster patient check-ins</strong>, 
                  <strong>40% reduction in manual paperwork</strong>, and <strong>29% improvement in appointment adherence</strong>.
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
                Outstanding improvements achieved in the first year of implementation
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
                    <strong>Context:</strong> Many clinics operated with fragmented systems or relied on manual processes 
                    for appointments, billing, and patient records. This caused inefficiencies, billing errors, and poor patient experience.
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Pain Points</h3>
                  <ul className="space-y-2">
                    <li>Manual scheduling and patient tracking</li>
                    <li>Billing errors and delays in insurance claims</li>
                    <li>Poor communication between clinic staff and patients</li>
                    <li>Compliance risks in maintaining medical records</li>
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
                    "Digitize clinic operations with a unified system",
                    "Improve scheduling, billing, and patient record management",
                    "Enhance communication between doctors and patients",
                    "Ensure compliance with healthcare regulations"
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
                Comprehensive features designed to streamline clinic operations and enhance patient care
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
                Structured rollout approach with telemedicine integration and patient engagement focus
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
                      <strong>Frontend:</strong> React.js for web; Flutter for patient and doctor mobile apps
                    </div>
                    <div>
                      <strong>Backend:</strong> Node.js/NestJS with REST APIs
                    </div>
                    <div>
                      <strong>Database:</strong> PostgreSQL for structured data; MongoDB for unstructured notes
                    </div>
                    <div>
                      <strong>Infrastructure:</strong> Cloud-native (AWS) with containerized deployment
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
                      <span>HIPAA & GDPR compliant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>TLS 1.3 encryption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>RBAC and multi-factor authentication</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>Immutable audit logs for compliance</span>
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
              <div className="grid md:grid-cols-2 gap-6">
                {lessonsLearned.map((lesson, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <Brain className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{lesson}</span>
                  </motion.div>
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
                  "AI-powered patient triage and symptom checkers",
                  "IoT integration for real-time patient monitoring",
                  "Cloud-based multi-clinic chain support",
                  "Advanced analytics for patient outcomes"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-left"
                  >
                    <TrendingUp className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.div>
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
                Ready to Transform Your Clinic Operations?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join successful clinics that have achieved 52% faster check-ins and 40% paperwork reduction 
                with our comprehensive clinic management platform.
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