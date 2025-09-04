import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JobList } from "@/components/careers/JobList";
import { motion } from "framer-motion";
import { Briefcase, Users, TrendingUp } from "lucide-react";

export default function Careers() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-primary text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                Join Our Team
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 font-body">
                Build the future of technology with us. We're looking for passionate individuals 
                who want to make a meaningful impact.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display text-primary mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
                We believe in fostering innovation, supporting growth, and creating an environment 
                where everyone can thrive.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <Briefcase className="h-12 w-12" />,
                  title: "Meaningful Work",
                  description: "Work on projects that make a real difference in the world, from AI solutions to sustainable technology."
                },
                {
                  icon: <Users className="h-12 w-12" />,
                  title: "Amazing Team",
                  description: "Collaborate with talented professionals who are passionate about technology and innovation."
                },
                {
                  icon: <TrendingUp className="h-12 w-12" />,
                  title: "Growth Opportunities",
                  description: "Continuous learning, professional development, and career advancement in a supportive environment."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="text-accent mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold font-display text-primary mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground font-body">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display text-primary mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
                Explore our current job openings and find the perfect role for your skills and career goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <JobList />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}