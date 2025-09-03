import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Blog() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
              <p className="text-white/90 text-lg">
                Insights, updates, and stories. Articles will appear here soon.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Posts List (placeholder) */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              {[1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Post Title Placeholder #{i}</CardTitle>
                      <CardDescription>
                        Short description of the upcoming article topic.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video rounded-md bg-muted mb-4" aria-hidden />
                      <p className="text-muted-foreground">
                        We’ll publish engineering and product notes here. Stay tuned.
                      </p>
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
