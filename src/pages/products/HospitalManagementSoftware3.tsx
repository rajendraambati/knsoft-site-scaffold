import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Hospital, Brain, CreditCard, BarChart3, Calendar, Shield, Zap, CheckCircle, Target, TrendingUp, Clock, DollarSign, Users, Smartphone } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEO/SEOHead";
import hospitalManagement3Image from "@/assets/hospital-management-software-3.jpg";

const features = [
  { icon: Hospital, title: "EHR & Patient Management", description: "Unified digital records with OPD, IPD, and emergency modules" },
  { icon: Brain, title: "AI-Powered Analytics", description: "Predictive insights for patient volume, disease trends, and resource usage" },
  { icon: CreditCard, title: "Billing & Insurance", description: "Automated billing and claims with error reduction mechanisms" },
  { icon: Zap, title: "Pharmacy & Diagnostics", description: "Seamless integration with in-house pharmacy and labs" },
  { icon: Smartphone, title: "Patient Engagement", description: "Mobile app for appointments, telemedicine, and online payments" },
  { icon: Shield, title: "Advanced Security", description: "Blockchain-based audit logs with HIPAA & GDPR compliance" }
];

const outcomes = [
  { metric: "45%", description: "Faster patient onboarding", icon: Clock },
  { metric: "38%", description: "Reduction in admin overhead", icon: DollarSign },
  { metric: "30%", description: "Growth in operational efficiency", icon: TrendingUp },
  { metric: "28%", description: "Increase in satisfaction", icon: Users }
];

const implementationPhases = [
  { phase: "Phase 1", duration: "0-3 months", tasks: "Requirement analysis, workflow design" },
  { phase: "Phase 2", duration: "3-6 months", tasks: "Core EHR and billing modules" },
  { phase: "Phase 3", duration: "6-9 months", tasks: "AI analytics, pharmacy & diagnostics integration" },
  { phase: "Phase 4", duration: "9-12 months", tasks: "Mobile apps, patient engagement, full rollout" }
];

const keyFeatures = [
  "End-to-end EHR and workflow management",
  "AI-driven predictive analytics",
  "Automated billing & insurance with error-checking",
  "Pharmacy and diagnostic integration",
  "Mobile app for patients (appointments, telemedicine, reports)"
];

const lessonsLearned = [
  "AI-driven analytics provide actionable insights for hospital operations",
  "Unified EHR improves coordination across departments",
  "Patient-facing apps increase engagement and trust",
  "Scalability is essential for handling rising patient loads"
];

export default function HospitalManagementSoftware3() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Hospital Management Software 3",
    "description": "Modernized AI-enhanced hospital management platform with predictive analytics, achieving 45% faster patient onboarding and 38% reduction in administrative overhead.",
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
        title="Hospital Management Software 3 | KNSOFT Technologies"
        description="AI-enhanced hospital management platform with predictive analytics, scalable architecture, and patient engagement tools. Achieve 45% faster onboarding and 38% cost reduction."
        keywords="hospital management system, AI healthcare software, predictive analytics, EHR system, patient engagement, healthcare technology, hospital automation, medical software"
        canonical="https://knsoft.dev/products/hospital-management-software-3"
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
                🏥 Hospital Management Software 3
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Modernized hospital management platform designed for medium to large healthcare facilities 
                seeking enhanced scalability, AI-driven insights, and improved patient care.
              </p>
              <div className="mb-8">
                <img 
                  src={hospitalManagement3Image} 
                  alt="Hospital Management Software 3 - AI-powered hospital management with predictive analytics and patient engagement tools"
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
                  <strong>Hospital Management Software 3 (HMS 3)</strong> was introduced as a modernized hospital management 
                  platform designed for medium to large healthcare facilities seeking enhanced scalability, AI-driven insights, 
                  and improved patient care. The system integrates clinical, administrative, and financial modules into a unified 
                  framework. After deployment, hospitals reported <strong>45% faster patient onboarding</strong>, 
                  <strong>38% reduction in administrative overhead</strong>, and <strong>30% growth in operational efficiency</strong> 
                  within the first year.
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
                Exceptional outcomes achieved within the first year of implementation
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
                    <strong>Context:</strong> Healthcare institutions faced challenges managing multi-department workflows, 
                    increasing patient loads, and compliance complexities. Traditional HMS systems often lacked advanced 
                    analytics, scalability, and patient engagement features.
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Pain Points</h3>
                  <ul className="space-y-2">
                    <li>Fragmented workflows between clinical and non-clinical departments</li>
                    <li>Lack of predictive insights for patient care and hospital resource planning</li>
                    <li>Inefficient billing and insurance claims management</li>
                    <li>Limited patient engagement and self-service features</li>
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
                    "Provide an AI-enhanced HMS with predictive insights",
                    "Improve cross-departmental workflows and efficiency",
                    "Automate billing, claims, and financial operations",
                    "Enhance patient engagement with digital tools"
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
                Advanced features powered by AI and designed for scalable healthcare operations
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
                Structured rollout approach with AI integration and patient engagement focus
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
                      <strong>Frontend:</strong> Angular + Flutter apps for patients and staff
                    </div>
                    <div>
                      <strong>Backend:</strong> Node.js/NestJS microservices with GraphQL APIs
                    </div>
                    <div>
                      <strong>Database:</strong> PostgreSQL for transactional data; MongoDB for patient histories
                    </div>
                    <div>
                      <strong>Infrastructure:</strong> Kubernetes clusters on AWS with CI/CD pipelines
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
                      <span>HIPAA & GDPR aligned architecture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>TLS 1.3 encryption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>Blockchain-enabled audit logs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>Role-based access control</span>
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
                  "Integration of IoT-enabled smart medical devices",
                  "AI-powered virtual assistants for patient support",
                  "Blockchain-based patient record sharing across hospital networks",
                  "Expansion to multi-hospital group management"
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
                Ready for AI-Enhanced Hospital Management?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join forward-thinking hospitals that have achieved 45% faster patient onboarding and 30% operational efficiency 
                improvements with our AI-powered hospital management platform.
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