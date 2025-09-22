import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Users, BarChart3, Shield } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEO/SEOHead";
import pharmacyImage from "@/assets/pharmacy-management-software.jpg";

export default function PharmacyManagementSoftware() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Pharmacy Management Software",
    "applicationCategory": "HealthcareApplication",
    "description": "Comprehensive pharmacy management solution for inventory control, prescription processing, billing automation, and regulatory compliance.",
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
        title="Pharmacy Management Software | Complete Solution | KNSOFT Technologies"
        description="Advanced pharmacy management software for inventory control, prescription processing, billing automation, and compliance. Streamline pharmacy operations with our comprehensive solution."
        keywords="pharmacy management software, prescription management, pharmacy inventory, medical billing, pharmacy POS, drug inventory system"
        canonical="https://knsoft.dev/products/pharmacy-management-software"
        structuredData={structuredData}
      />
      <Header />
      
      <main className="pt-20">
        {/* Back Navigation */}
        <section className="py-4 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Button asChild variant="ghost" size="sm">
              <Link to="/products/healthcare-medical" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Healthcare Products
              </Link>
            </Button>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Pharmacy Management Software
              </h1>
              <div className="mb-8">
                <img 
                  src={pharmacyImage} 
                  alt="Pharmacy Management Software Dashboard" 
                  className="w-full max-w-3xl mx-auto rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6 text-center">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our Pharmacy Management Software is a comprehensive solution designed to streamline pharmaceutical operations, from inventory management to prescription processing. This robust platform integrates seamlessly with existing healthcare systems, providing pharmacies with advanced tools for medication tracking, patient management, billing automation, and regulatory compliance. Whether you're running a single pharmacy or managing a chain, our software adapts to your specific needs, ensuring efficient operations, reduced errors, and improved patient safety through automated drug interaction checks and expiry date monitoring.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Context & Objective */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6 text-center">Context & Objective</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                A regional pharmacy chain with 15 locations was struggling with manual inventory tracking, leading to frequent stockouts and expired medications. The implementation of our Pharmacy Management Software transformed their operations, creating a unified system that connects all locations with real-time inventory updates, automated reordering, and comprehensive reporting capabilities.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Main Objectives:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Eliminate medication stockouts and reduce expired inventory waste by 80% through intelligent forecasting and automated reordering systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Streamline prescription processing workflow to reduce average customer wait time from 15 minutes to under 5 minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Implement comprehensive compliance tracking to maintain 100% regulatory adherence and simplify audit preparations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Integrate with insurance networks and PBMs to automate claims processing and improve reimbursement accuracy by 95%</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Implementation Highlights */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6 text-center">Implementation Highlights</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The deployment was executed in three phases over 4 months, beginning with the flagship location as a pilot site. Our implementation team provided comprehensive training to all pharmacy staff, established data migration protocols from legacy systems, and ensured seamless integration with existing POS hardware and insurance networks. The rollout included 24/7 technical support during the transition period and ongoing system optimization based on user feedback.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Implementation Details:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Deployed core modules including inventory management, prescription processing, patient records, and billing systems with full integration to existing pharmacy hardware</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Migration timeline consisted of 2 weeks pilot testing, 6 weeks phased rollout across all locations, and 4 weeks of optimization and staff training</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Comprehensive support package included on-site training for 120 staff members, detailed user manuals, video tutorials, and dedicated help desk support</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Data migration successfully transferred 50,000 patient records, 25,000 prescription histories, and complete inventory data with zero data loss</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Outcomes & Benefits */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6 text-center">Outcomes & Benefits</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The implementation delivered remarkable improvements in operational efficiency, customer satisfaction, and financial performance. Within six months of deployment, the pharmacy chain achieved a 45% reduction in inventory carrying costs, 60% faster prescription processing times, and 90% improvement in insurance claim accuracy. Customer satisfaction scores increased from 3.2 to 4.7 out of 5, with particular praise for reduced wait times and improved medication availability.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Impact Across Departments:</h3>
              <ul className="space-y-3 text-muted-foreground mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Pharmacy Operations: 75% reduction in medication errors, 80% decrease in expired inventory, and 50% improvement in inventory turnover rates</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Customer Service: Average prescription wait time reduced from 15 to 4 minutes, 95% prescription availability rate, and 40% increase in customer retention</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Financial Management: 30% improvement in cash flow, 25% reduction in operating costs, and 95% accuracy in insurance reimbursements</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">User Feedback:</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Positive Reviews:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>"The automated inventory alerts have completely eliminated our stockout issues. We never run out of essential medications anymore." - Pharmacy Manager</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>"Processing prescriptions is so much faster now. The drug interaction warnings have prevented several potential medication conflicts." - Senior Pharmacist</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>"Insurance claims processing is seamless. We rarely have rejected claims anymore, and reimbursements come through much faster." - Billing Coordinator</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-orange-600">Areas for Improvement:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>"The initial learning curve was steep. It took about 3 weeks for our staff to become fully comfortable with the new interface." - Staff Pharmacist</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>"Some reports take longer to generate than expected, especially during peak hours when the system is busy." - Store Manager</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>"The mobile app functionality could be expanded. We'd like more features available for remote access and management." - Regional Director</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Lessons Learned */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6 text-center">Key Lessons Learned</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-600">Strengths to Replicate:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Comprehensive staff training before system launch proved essential for smooth adoption and reduced resistance to change</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Phased rollout approach allowed for system optimization based on real-world feedback before full deployment</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-red-600">Risks & Challenges:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Underestimating the time needed for data migration and legacy system integration can delay project timelines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Insufficient backup systems during transition periods can pose risks to critical pharmacy operations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6 text-center">Recommendations</h2>
              
              <ol className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                  <span>Conduct thorough workflow analysis before implementation to identify all integration points and customize the system accordingly for optimal efficiency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                  <span>Invest in comprehensive staff training programs, including hands-on workshops and ongoing support, to ensure user adoption and maximize system benefits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                  <span>Establish robust data backup and recovery procedures before migration to protect critical pharmacy data and ensure business continuity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">4</span>
                  <span>Plan for a gradual rollout starting with pilot locations to identify and resolve issues before full-scale deployment across all pharmacy locations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">5</span>
                  <span>Maintain dedicated technical support channels during the first 90 days post-implementation to address user questions and system optimization needs</span>
                </li>
              </ol>
            </motion.div>
          </div>
        </section>

        {/* Summary Table */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6 text-center">Summary Table</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 rounded-lg">
                  <thead>
                    <tr className="bg-secondary/50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Area</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Observations & Insights</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Modules Covered</td>
                      <td className="border border-gray-300 px-4 py-3 text-muted-foreground">Inventory management, prescription processing, patient records, billing automation, insurance claims, compliance tracking, and reporting analytics across 15 pharmacy locations</td>
                    </tr>
                    <tr className="bg-secondary/20">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Positive Feedback</td>
                      <td className="border border-gray-300 px-4 py-3 text-muted-foreground">Significant reduction in medication errors, elimination of stockouts, faster prescription processing, improved customer satisfaction, and streamlined insurance claims processing</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">User Complaints</td>
                      <td className="border border-gray-300 px-4 py-3 text-muted-foreground">Initial learning curve challenges, slower report generation during peak hours, limited mobile app functionality, and occasional system response delays</td>
                    </tr>
                    <tr className="bg-secondary/20">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Best Practices</td>
                      <td className="border border-gray-300 px-4 py-3 text-muted-foreground">Phased implementation approach, comprehensive staff training, robust data backup strategies, dedicated support during transition, and continuous system optimization based on user feedback</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6 text-center">Conclusion</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Pharmacy Management Software demonstrates exceptional potential for transforming pharmacy operations, delivering measurable improvements in efficiency, accuracy, and customer satisfaction. Success factors include thorough planning, comprehensive staff training, phased implementation, and ongoing support. However, organizations must be prepared for initial learning curves, invest in adequate training resources, and maintain realistic timelines for full system adoption. When implemented correctly with proper change management, this solution can deliver significant ROI and competitive advantages in the rapidly evolving pharmaceutical retail landscape.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-white">
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
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Contact us to learn more about our Pharmacy Management Software and schedule a personalized demonstration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="secondary" size="lg">
                  <Link to="/contact">
                    Get Started <Calendar className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  <Link to="/products/healthcare-medical">View More Healthcare Products</Link>
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