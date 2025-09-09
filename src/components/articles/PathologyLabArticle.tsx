import { motion } from "framer-motion";
import { X, TestTube, Clock, Shield, Users, BarChart3, CheckCircle, TrendingUp } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PathologyLabArticleProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PathologyLabArticle({ isOpen, onClose }: PathologyLabArticleProps) {
  const features = [
    {
      icon: TestTube,
      title: "End-to-End Sample Management",
      description: "Barcode-based tracking from collection to reporting with real-time status updates"
    },
    {
      icon: Users,
      title: "White-Label Reporting & Portals",
      description: "Branded reports for hospitals and corporate clients with separate client portals"
    },
    {
      icon: Shield,
      title: "Analyzer Integration",
      description: "Direct connection with lab instruments for automatic test result flow"
    },
    {
      icon: BarChart3,
      title: "Analytics & Business Insights",
      description: "Dashboard for TAT, test volumes, error rates, and profitability analysis"
    }
  ];

  const benefits = [
    "Faster Reports - Reduce turnaround times",
    "Fewer Errors - Automated tracking cuts mistakes",
    "Happier Clients - White-labeling retains B2B contracts",
    "Lower Costs - Save on manpower and wastage",
    "Compliance Ready - Be audit-prepared every day",
    "Scalable - Works for single lab or nationwide network"
  ];

  const successMetrics = [
    { metric: "Turnaround Time", before: "11 hours", after: "6.5 hours" },
    { metric: "Error Reduction", before: "3%", after: "0.8%" },
    { metric: "New B2B Clients", value: "7 new clients" },
    { metric: "Revenue Growth", value: "+8% test volume" },
    { metric: "ROI", value: "300%+ in first year" }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-background">
        <DialogHeader className="border-b border-border pb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-orange-50 dark:bg-orange-950/20">
                <TestTube size={32} className="text-[#FF6600]" strokeWidth={1.5} />
              </div>
              <div>
                <DialogTitle className="text-3xl font-bold text-foreground mb-2">
                  Pathology Lab Management Software
                </DialogTitle>
                <p className="text-lg text-muted-foreground">
                  Comprehensive solution for modern pathology labs
                </p>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-8">
          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/10 dark:to-orange-900/10 rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">Why Labs Need It</h2>
            <p className="text-muted-foreground leading-relaxed">
              Running a pathology lab means juggling many moving parts — patient samples, test orders, doctor requests, 
              billing, corporate contracts, quality checks, and compliance. Our Pathology Lab Management Software is 
              designed to solve these problems while preparing labs for growth.
            </p>
          </motion.section>

          {/* Key Features */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-950/20">
                          <IconComponent size={24} className="text-[#FF6600]" strokeWidth={1.5} />
                        </div>
                        <CardTitle className="text-lg text-foreground">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </motion.section>

          {/* Benefits */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Success Metrics */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/10 dark:to-emerald-950/10 rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp size={28} className="text-green-600" />
              <h2 className="text-2xl font-bold text-foreground">Success Snapshot</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {successMetrics.map((item, index) => (
                <Card key={index} className="bg-white/50 dark:bg-gray-800/50 border-green-200 dark:border-green-800">
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold text-foreground mb-2">{item.metric}</h3>
                    {item.before && item.after ? (
                      <div className="space-y-1">
                        <div className="text-sm text-red-600">Before: {item.before}</div>
                        <div className="text-sm text-green-600 font-bold">After: {item.after}</div>
                      </div>
                    ) : (
                      <div className="text-lg font-bold text-green-600">{item.value}</div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Who Can Use It */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">Who Can Use It</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Standalone Labs → Automate operations and compete with bigger brands",
                "Diagnostic Chains → Manage multiple centers under one system",
                "Hospitals → Offer in-house pathology with branded reports",
                "Corporate Health Programs → Simplify employee health checkups"
              ].map((use, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    {index + 1}
                  </Badge>
                  <span className="text-muted-foreground">{use}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg p-6 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Transform Your Lab Operations</h2>
            <p className="text-white/90 text-lg mb-6">
              Move from manual, error-prone processes to faster reporting, error-free operations, 
              and stronger client relationships.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Fast Implementation
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Ongoing Support
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Scalable Pricing
              </Badge>
            </div>
          </motion.section>
        </div>
      </DialogContent>
    </Dialog>
  );
}