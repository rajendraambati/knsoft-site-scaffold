import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Users, BarChart3, Shield } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEO/SEOHead";
import clinicImage from "@/assets/clinic-management-software.jpg";

export default function ClinicManagementSoftware() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Clinic Management Software",
    "applicationCategory": "HealthcareApplication",
    "description": "Comprehensive clinic management solution for appointment scheduling, patient records, billing automation, and healthcare workflow optimization.",
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
        title="Clinic Management Software | Complete Solution | KNSOFT Technologies"
        description="Advanced clinic management software for appointment scheduling, patient records, billing automation, and healthcare workflow optimization. Streamline clinic operations with our comprehensive solution."
        keywords="clinic management software, appointment scheduling, patient records, medical billing, healthcare management, clinic automation"
        canonical="https://knsoft.dev/products/clinic-management-software"
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
                Clinic Management Software
              </h1>
              <div className="mb-8">
                <img 
                  src={clinicImage} 
                  alt="Clinic Management Software Dashboard" 
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
                Our Clinic Management Software is an all-in-one healthcare solution designed to optimize clinic operations and enhance patient care delivery. This comprehensive platform integrates appointment scheduling, electronic health records, billing management, and clinical workflows into a unified system. Built specifically for medical practices of all sizes, the software streamlines administrative tasks, reduces paperwork, improves patient engagement, and ensures compliance with healthcare regulations. From small family practices to multi-specialty clinics, our solution adapts to your unique requirements while maintaining the highest standards of data security and patient privacy.
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
                A multi-specialty clinic network with 8 locations and 45 healthcare providers was experiencing significant operational challenges due to fragmented systems, manual scheduling processes, and disconnected patient records. The implementation of our Clinic Management Software created a centralized platform that unified all clinic operations, improved patient satisfaction, and enabled data-driven decision making across the entire network.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Main Objectives:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Reduce patient wait times by 60% through intelligent appointment scheduling and real-time queue management systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Digitize patient records completely, eliminating paper-based documentation and improving information accessibility across all clinic locations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Streamline billing processes to reduce claim processing time by 70% and improve collection rates to above 95%</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Enhance patient engagement through online portals, automated reminders, and telehealth capabilities for improved health outcomes</span>
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
                The deployment strategy focused on minimal disruption to patient care while ensuring comprehensive system adoption. Implementation began with the main clinic as a pilot site, followed by a systematic rollout to all locations over 5 months. Our team provided extensive training to 120+ staff members including physicians, nurses, administrators, and support staff. The transition included complete data migration from legacy systems, integration with existing laboratory and imaging systems, and establishment of new clinical workflows optimized for digital operations.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Implementation Details:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Core system deployment included EHR, appointment scheduling, billing management, patient portal, and clinical decision support modules with full HIPAA compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Phased rollout timeline consisted of 3 weeks pilot testing, 12 weeks location-by-location deployment, and 8 weeks of system optimization and workflow refinement</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Comprehensive support infrastructure included role-specific training sessions, detailed user guides, video tutorials, and dedicated 24/7 technical support hotline</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Data migration successfully transferred 75,000 patient records, 200,000 appointment histories, and complete billing data with 99.9% accuracy and zero patient data loss</span>
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
                The system transformation delivered exceptional results across all operational metrics within the first year of implementation. Patient satisfaction scores improved dramatically from 3.4 to 4.6 out of 5, with significant improvements in appointment scheduling convenience and reduced wait times. The clinic network achieved a 40% increase in patient throughput, 55% reduction in administrative overhead, and 90% improvement in billing accuracy, resulting in substantial revenue growth and operational efficiency gains.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Impact Across Departments:</h3>
              <ul className="space-y-3 text-muted-foreground mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Clinical Operations: 65% reduction in patient wait times, 80% improvement in documentation speed, and 90% increase in clinical protocol adherence</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Administrative Services: 70% decrease in appointment scheduling errors, 85% reduction in paperwork processing time, and 95% improvement in patient communication efficiency</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Financial Management: 50% faster billing cycles, 25% increase in collection rates, and 90% reduction in billing errors and insurance claim rejections</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">User Feedback:</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Positive Reviews:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>"The integrated scheduling system has transformed our workflow. Double bookings are now impossible, and we can see real-time availability across all locations." - Clinic Administrator</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>"Having complete patient histories at my fingertips has dramatically improved the quality of care I can provide. The clinical decision support is invaluable." - Primary Care Physician</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>"Billing has become so much simpler. Insurance verifications are automatic, and claim rejections have practically disappeared." - Billing Manager</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-orange-600">Areas for Improvement:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>"The system can be slow during peak hours, especially when generating complex reports. Performance optimization would be beneficial." - Office Manager</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>"Some older physicians found the transition challenging. More specialized training for less tech-savvy users would have helped." - Medical Director</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>"The patient portal could use more features. Patients want more self-service options for appointment management and test results." - Patient Relations Coordinator</span>
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
                      <span>Physician engagement from the early planning stages ensured clinical workflows were optimized and user adoption was accelerated</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Gradual rollout with intensive support during each phase allowed for real-time problem resolution and system refinement</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-red-600">Risks & Challenges:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Inadequate hardware infrastructure can bottleneck system performance and negatively impact user experience during peak operations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Resistance to change from established practitioners requires dedicated change management strategies and personalized support approaches</span>
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
                  <span>Engage key physicians and clinical staff as system champions early in the planning process to ensure clinical workflow optimization and user buy-in</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                  <span>Invest in robust hardware infrastructure and network capabilities to support system performance during peak usage periods and future scalability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                  <span>Develop comprehensive training programs tailored to different user roles and technical comfort levels, with ongoing support and refresher sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">4</span>
                  <span>Plan for extensive data validation and backup procedures during migration to ensure patient information integrity and regulatory compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">5</span>
                  <span>Establish continuous improvement processes with regular user feedback collection and system optimization to maximize long-term benefits and user satisfaction</span>
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
                      <td className="border border-gray-300 px-4 py-3 text-muted-foreground">Electronic health records, appointment scheduling, billing management, patient portal, clinical decision support, and reporting analytics across 8 clinic locations with 45 healthcare providers</td>
                    </tr>
                    <tr className="bg-secondary/20">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Positive Feedback</td>
                      <td className="border border-gray-300 px-4 py-3 text-muted-foreground">Dramatic reduction in wait times, elimination of scheduling conflicts, improved clinical documentation, streamlined billing processes, and enhanced patient communication capabilities</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">User Complaints</td>
                      <td className="border border-gray-300 px-4 py-3 text-muted-foreground">System performance issues during peak hours, challenging transition period for less tech-savvy users, limited patient portal features, and occasional report generation delays</td>
                    </tr>
                    <tr className="bg-secondary/20">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Best Practices</td>
                      <td className="border border-gray-300 px-4 py-3 text-muted-foreground">Early physician engagement, gradual implementation approach, comprehensive training programs, robust data migration procedures, and continuous system optimization with user feedback integration</td>
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
                The Clinic Management Software represents a transformative solution for healthcare practices seeking to modernize operations and improve patient care outcomes. The platform's comprehensive feature set and proven implementation methodology can deliver substantial operational improvements and patient satisfaction gains. Success depends on strategic planning, robust infrastructure investment, comprehensive training programs, and strong change management practices. While initial implementation challenges around system performance and user adaptation are common, the long-term benefits of improved efficiency, reduced costs, and enhanced patient care make this solution a valuable investment for progressive healthcare organizations.
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
                Ready to Transform Your Clinic Operations?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Contact us to learn more about our Clinic Management Software and schedule a personalized demonstration.
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