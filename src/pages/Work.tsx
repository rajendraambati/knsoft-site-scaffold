import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Work() {
  const projects = [
    {
      name: "Solar Power",
      description:
        "Designing and optimizing renewable energy solutions with a focus on efficient solar grid integration and sustainability.",
    },
    {
      name: "Artificial Intelligence",
      description:
        "Building intelligent systems that leverage machine learning models to automate workflows and enable smarter decision-making.",
    },
    {
      name: "Data Science",
      description:
        "Turning raw data into actionable insights using advanced analytics, visualization, and predictive modeling techniques.",
    },
    {
      name: "SAP ABAP",
      description:
        "Developing robust custom applications and integrations within SAP ecosystems to streamline enterprise processes.",
    },
    {
      name: "Generative AI",
      description:
        "Exploring creative AI solutions for text, image, and media generation to push the boundaries of content innovation.",
    },
    {
      name: "Agentic AI",
      description:
        "Designing autonomous agents capable of reasoning, planning, and executing complex tasks with minimal human input.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Work & Portfolio</h1>
              <p className="text-white/90 text-lg">
                Explore selected work and case studies. We’re curating highlights of our recent engagements.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>{project.name}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video rounded-md bg-muted" aria-hidden />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
