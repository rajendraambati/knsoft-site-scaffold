import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Pill, Globe, BarChart3, Shield, Smartphone, Truck, CheckCircle, Target, TrendingUp, Clock, DollarSign, Users, Brain, Zap, Package } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEO/SEOHead";
import pharmacyManagementProGDImage from "@/assets/pharmacy-management-pro-gd.jpg";

const features = [
  { icon: Globe, title: "Centralized Multi-Branch Management", description: "Unified dashboard for monitoring all branches and distributors" },
  { icon: Package, title: "Inventory & Distribution Module", description: "Real-time stock tracking, expiry alerts, and automated wholesale-to-retail workflows" },
  { icon: Shield, title: "Compliance Engine", description: "Configurable for FDA, EMA, and local regulatory requirements" },
  { icon: Brain, title: "Analytics & Forecasting", description: "AI-powered demand prediction to optimize inventory planning" },
  { icon: Users, title: "Customer Experience", description: "Loyalty programs, mobile ordering, and e-prescription integrations" },
  { icon: Truck, title: "Distribution Automation", description: "Automated wholesale distribution with logistics optimization" }
];

const outcomes = [
  { metric: "65%", description: "Faster order processing", icon: Zap },
  { metric: "43%", description: "Reduction in drug expiries", icon: Package },
  { metric: "37%", description: "Better inter-branch coordination", icon: Globe },
  { metric: "34%", description: "Growth in customer loyalty", icon: Users }
];

const implementationPhases = [
  { phase: "Phase 1", duration: "0-3 months", tasks: "Requirement gathering and compliance mapping" },
  { phase: "Phase 2", duration: "3-6 months", tasks: "Core modules for inventory and branch operations" },
  { phase: "Phase 3", duration: "6-9 months", tasks: "Distribution workflows and compliance integration" },
  { phase: "Phase 4", duration: "9-12 months", tasks: "Customer engagement tools and global rollout" }
];

const keyFeatures = [
  "Multi-branch and distributor management",
  "AI-driven demand forecasting",
  "Automated wholesale distribution",
  "Real-time inventory with batch and expiry tracking",
  "Customer apps for loyalty and e-prescriptions"
];

const lessonsLearned = [
  "Centralization is vital for global-scale pharmacy operations",
  "AI-based demand forecasting reduces losses and optimizes logistics",
  "Regulatory flexibility ensures smooth multi-country deployment",
  "Customer engagement modules strengthen brand loyalty"
];

const complianceFeatures = [
  "HIPAA, GDPR, FDA, and EMA compliance",
  "Blockchain-based audit trails",
  "End-to-end encrypted communications",
  "Role-based access control and multi-level approvals"
];

export default function PharmacyManagementProGD() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Pharmacy Management Software PRO GD",
    "description": "Enterprise-grade pharmacy management system for large chains and global distributors with 65% faster order processing and 43% reduction in drug expiries.",
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
        title="Pharmacy Management Software PRO GD | KNSOFT Technologies"
        description="Enterprise-grade pharmacy management system for large chains and global distributors. AI-powered demand forecasting, multi-branch management, and regulatory compliance across regions."
        keywords="pharmacy management software, pharmaceutical distribution, global pharmacy chain, inventory management, drug distribution, pharmacy compliance, AI forecasting, pharmaceutical software"
        canonical="https://knsoft.dev/products/pharmacy-management-pro-gd"
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
                💊 Pharmacy Management Software PRO GD
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Developed to serve the needs of large pharmacy chains and global distributors, 
                centralizing operations, enhancing supply chain efficiency, and ensuring regulatory compliance across multiple regions.
              </p>
              <div className="mb-8">
                <img 
                  src={pharmacyManagementProGDImage} 
                  alt="Pharmacy Management Software PRO GD - Global pharmaceutical distribution network with AI-powered analytics and multi-branch management"
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
                  <strong>Pharmacy Management Software PRO GD</strong> was developed to serve the needs of large pharmacy chains 
                  and global distributors (GD – Global Distribution). It centralizes operations, enhances supply chain efficiency, 
                  and ensures regulatory compliance across multiple regions. After deployment, organizations experienced 
                  <strong> 65% faster order processing</strong>, <strong>43% reduction in drug expiries</strong>, and 
                  <strong> 37% better inter-branch coordination</strong>, leading to improved profitability and customer satisfaction.
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
                Exceptional <span className="text-gradient">Results</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Outstanding improvements achieved within the first 12 months of global deployment
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
                    <strong>Context:</strong> Large-scale pharmacy chains and distributors often struggled with siloed systems, 
                    poor inventory visibility, and compliance challenges across countries. These inefficiencies created bottlenecks 
                    in distribution and financial losses due to wastage.
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Pain Points</h3>
                  <ul className="space-y-2">
                    <li>Poor coordination between branches and warehouses</li>
                    <li>Delays in wholesale-to-retail drug distribution</li>
                    <li>Non-compliance with varied regional regulations</li>
                    <li>High stock expiries due to lack of predictive demand planning</li>
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
                    "Build a scalable global pharmacy management system",
                    "Improve drug distribution and reduce stock wastage",
                    "Streamline compliance with international and local regulations",
                    "Enhance customer engagement and loyalty"
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
                Enterprise-grade features designed for global pharmacy chains and distributors
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

        {/* Key Features & Compliance */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8">
                  Key <span className="text-gradient">Features</span>
                </h2>
                <div className="space-y-4">
                  {keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8">
                  Security & <span className="text-gradient">Compliance</span>
                </h2>
                <div className="space-y-4">
                  {complianceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
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
                Structured global rollout approach with compliance integration and customer engagement focus
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
                      <strong>Frontend:</strong> Angular/React for web, Flutter mobile apps
                    </div>
                    <div>
                      <strong>Backend:</strong> Node.js/NestJS microservices with GraphQL APIs
                    </div>
                    <div>
                      <strong>Database:</strong> PostgreSQL for structured data, Cassandra for distributed logs
                    </div>
                    <div>
                      <strong>Infrastructure:</strong> Kubernetes on AWS and Azure for multi-region availability
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-glow">
                  <CardHeader>
                    <CardTitle>Global Scale Features</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-primary" />
                      <span>Multi-region deployment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-primary" />
                      <span>AI-powered demand forecasting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4 text-primary" />
                      <span>Automated distribution workflows</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-primary" />
                      <span>Real-time analytics and reporting</span>
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
                  "IoT-enabled cold chain monitoring",
                  "Drone delivery pilots for urgent medicines",
                  "Advanced AI for predictive compliance and fraud detection",
                  "Expansion into hospital pharmacy integrations"
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
                Ready to Scale Your Pharmacy Operations Globally?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join leading pharmacy chains that have achieved 65% faster order processing and 43% reduction in drug expiries 
                with our enterprise-grade global distribution platform.
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