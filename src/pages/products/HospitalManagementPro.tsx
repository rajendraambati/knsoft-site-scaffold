import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Hospital, 
  Calendar, 
  Users, 
  DollarSign, 
  TestTube, 
  Pill, 
  Monitor, 
  FileText,
  CheckCircle,
  XCircle,
  Shield,
  Clock,
  AlertTriangle,
  Star,
  Lightbulb
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Badge } from "@/components/ui/badge";
import hospitalManagementImage from "@/assets/hospital-management-software-pro.jpg";

const modules = [
  { name: "Patient Registration", icon: Users, description: "Automated appointment scheduling and patient registration" },
  { name: "OPD/IPD Management", icon: Hospital, description: "Comprehensive outpatient and inpatient management" },
  { name: "Billing System", icon: DollarSign, description: "Consolidated billing for both IPD and OPD services" },
  { name: "Laboratory Integration", icon: TestTube, description: "Seamless lab operations and test management" },
  { name: "Pharmacy Management", icon: Pill, description: "Integrated pharmacy and central store operations" },
  { name: "Radiology Integration", icon: Monitor, description: "Complete radiology workflow management" },
  { name: "Financial Reporting", icon: FileText, description: "Account & finance reporting with MIS dashboards" }
];

const outcomes = [
  { title: "Administrative Efficiency", description: "Major reduction in manual errors and consolidated patient billing", impact: "85% error reduction" },
  { title: "Operational Visibility", description: "Dashboards and MIS enabled data-driven decision-making", impact: "Real-time insights" },
  { title: "Cross-Department Coordination", description: "Seamless connectivity improved departmental throughput", impact: "40% faster processes" }
];

const positiveReviews = [
  "Efficiency of the software with minimal risk of loss of data.",
  "User friendly, easy to use and understand.",
  "Smooth adoption and excellent usability across departments."
];

const challenges = [
  "Inconsistent module performance in some implementations",
  "Critical support gaps with poor post-sales service",
  "Reliability issues during power failures or network disruptions"
];

const recommendations = [
  { title: "Successful Pilot First", description: "Run a structured pilot (e.g., OPD + pharmacy) to validate workflows and support readiness" },
  { title: "Robust SLA & Support Model", description: "Ensure service-level agreements include response time guarantees and escalation paths" },
  { title: "Fallback Strategies", description: "Design offline data capture and manual override options during outages" },
  { title: "Phased Implementation", description: "Include training, on-site support, and post-go-live feedback loops" },
  { title: "Workflow Customization", description: "Engage clinicians and admin staff to validate end-to-end workflows" }
];

export default function HospitalManagementPro() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Hospital Management Software Pro",
    "applicationCategory": "Healthcare Management Software",
    "operatingSystem": "Web-based",
    "description": "Comprehensive, integrated Hospital Management System (HMS) supporting reception, billing, inpatient and outpatient management, diagnostics, pharmacy, radiology, and reporting.",
    "provider": {
      "@type": "Organization",
      "name": "KNSOFT Technologies",
      "url": "https://knsoft.dev"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD",
        "price": "Contact for pricing"
      }
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Hospital Management Software Pro - Case Study | KNSOFT Technologies"
        description="Comprehensive case study of Hospital Management Software Pro implementation in a midsize multispecialty hospital. Learn about features, outcomes, challenges, and best practices for HMS deployment."
        keywords="hospital management software, HMS implementation, healthcare management system, hospital case study, medical software, patient management system"
        canonical="https://knsoft.dev/products/hospital-management-pro"
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
              <div className="flex items-center justify-center mb-6">
                <Hospital className="h-12 w-12 mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  Hospital Management Software Pro
                </h1>
              </div>
              
              {/* Product Image */}
              <div className="mb-8">
                <img 
                  src={hospitalManagementImage} 
                  alt="Hospital Management Software Pro Dashboard Interface"
                  className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
                />
              </div>
              
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Comprehensive, integrated Hospital Management System (HMS) supporting a broad spectrum of hospital functions, 
                including reception, billing, inpatient and outpatient management, diagnostics, pharmacy, radiology, and reporting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="cta" size="lg">
                  <Link to="/contact">
                    Request Demo <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="hero" size="lg">
                  <Link to="/contact">
                    Get Quote
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overview Section */}
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
                Case Study <span className="text-gradient">Overview</span>
              </h2>
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-6 w-6 mr-2 text-primary" />
                    Implementation Context & Objective
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A midsize multispecialty hospital in India, grappling with manual record-keeping, fragmented billing, 
                    and inconsistent departmental workflows, opted to implement HMS Pro+ to:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Automate appointment scheduling and patient registration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Consolidate billing for both IPD and OPD</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Integrate pharmacy, lab, and radiology operations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Provide dashboards and MIS for administrative oversight</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Modules Section */}
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
                System <span className="text-gradient">Modules</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive modules rolled out in phases for complete hospital management
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center p-6 card-glow hover:shadow-glow transition-all duration-500 group">
                    <CardContent className="p-0">
                      <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <module.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                        {module.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {module.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">
                    <Clock className="h-6 w-6 mr-2 text-primary" />
                    Implementation Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">Core modules online within approximately 8–12 weeks</span>
                    <br />
                    Implementation involved remote support and limited on-site training, with custom setup based on departmental workflow preferences.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Outcomes Section */}
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
                Outcomes & <span className="text-gradient">Benefits</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Measurable impact across departments and operations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full card-glow hover:shadow-glow transition-all duration-500 group">
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {outcome.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{outcome.description}</p>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {outcome.impact}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* User Feedback Section */}
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
                User <span className="text-gradient">Feedback</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real user experiences from platform reviews
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-600">
                      <Star className="h-6 w-6 mr-2" />
                      Positive Reviews
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {positiveReviews.map((review, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <p className="text-muted-foreground italic">"{review}"</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-600">
                      <AlertTriangle className="h-6 w-6 mr-2" />
                      Challenges Identified
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {challenges.map((challenge, index) => (
                        <div key={index} className="flex items-start">
                          <XCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                          <p className="text-muted-foreground">{challenge}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Recommendations Section */}
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
                Key <span className="text-gradient">Recommendations</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Best practices for successful HMS deployment
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendations.map((recommendation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full card-glow hover:shadow-glow transition-all duration-500 group">
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <Lightbulb className="h-6 w-6 text-primary mr-2" />
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {recommendation.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {recommendation.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary Table Section */}
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
                Summary <span className="text-gradient">Insights</span>
              </h2>
              <Card>
                <CardContent className="p-8">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-4 font-semibold">Area</th>
                          <th className="text-left py-4 font-semibold">Observations & Insights</th>
                        </tr>
                      </thead>
                      <tbody className="space-y-4">
                        <tr className="border-b">
                          <td className="py-4 font-medium">Modules Covered</td>
                          <td className="py-4 text-muted-foreground">Broad functionality—including OPD/IPD, lab, radiology, pharmacy, finance, MIS reports.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-4 font-medium">Positive Feedback</td>
                          <td className="py-4 text-muted-foreground">Users appreciate efficiency, data safety, and usability.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-4 font-medium">User Complaints</td>
                          <td className="py-4 text-muted-foreground">Support and functionality gaps (e.g., billing/IPD failure, poor service).</td>
                        </tr>
                        <tr>
                          <td className="py-4 font-medium">Best Practices</td>
                          <td className="py-4 text-muted-foreground">Pilot testing, strong SLA, offline contingency, phased rollouts, local training needed.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Conclusion & CTA */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Conclusion
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                "HMS Pro+" exemplifies a powerful hospital software platform with potential to streamline operations 
                across departments. But its success rests heavily on execution—meticulous rollout planning, reliable support, 
                and reliable backup strategies. Without these, even the best-featured system can face resistance, 
                under-utilization, or worse, operational failure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="cta" size="xl" className="bg-white text-primary hover:bg-white/90">
                  <Link to="/contact">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Consultation
                  </Link>
                </Button>
                <Button asChild variant="hero" size="xl">
                  <Link to="/contact">
                    Request Proposal
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
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