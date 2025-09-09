import { motion } from "framer-motion";
import { Building, Search, Users, DollarSign, BarChart3, Star, Smartphone, CheckCircle, TrendingUp, Clock } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DirectoryListingArticleProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DirectoryListingArticle({ isOpen, onClose }: DirectoryListingArticleProps) {
  const challenges = [
    "Outdated Information - Old addresses, phone numbers, and hours",
    "Difficult Management - Manual updates were slow and error-prone", 
    "Low Engagement - Business owners had little control over listings",
    "No Monetization Model - Free listings with no steady revenue",
    "Poor User Experience - Limited filters and slow search results"
  ];

  const features = [
    {
      icon: Search,
      title: "Advanced Search & Filters",
      description: "Location, category, ratings, and price filters for better user experience"
    },
    {
      icon: Users,
      title: "Business Dashboards", 
      description: "Owners can claim and manage listings, update details, and respond to reviews"
    },
    {
      icon: DollarSign,
      title: "Monetization Options",
      description: "Paid premium listings, featured spots, and subscription plans"
    },
    {
      icon: Star,
      title: "Review & Rating System",
      description: "Encouraged user engagement and trust-building"
    },
    {
      icon: Smartphone,
      title: "Mobile-Ready Platform",
      description: "Responsive design with optional mobile app integration"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description: "Insights on listing views, clicks, leads generated, and ROI"
    }
  ];

  const results = [
    { metric: "Traffic Growth", value: "40% increase", description: "in organic visitors within 3 months" },
    { metric: "User Engagement", value: "3x increase", description: "in searches and profile visits" },
    { metric: "Business Participation", value: "65%", description: "of businesses claimed their profiles" },
    { metric: "Revenue Streams", value: "25% new", description: "monthly revenue from premium features" },
    { metric: "Operational Efficiency", value: "70% reduction", description: "in admin workload" }
  ];

  const timelineSteps = [
    { weeks: "1-2", task: "Directory structure setup and data migration" },
    { weeks: "3-5", task: "Business dashboards and review modules" },
    { weeks: "6-8", task: "Monetization features enabled" },
    { weeks: "9-10", task: "SEO optimization and mobile responsiveness" },
    { weeks: "11-12", task: "Go-live with marketing and business onboarding" }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-background">
        <DialogHeader className="border-b border-border pb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-orange-50 dark:bg-orange-950/20">
                <Building size={32} className="text-[#FF6600]" strokeWidth={1.5} />
              </div>
              <div>
                <DialogTitle className="text-3xl font-bold text-foreground mb-2">
                  Directory Listing Software
                </DialogTitle>
                <p className="text-lg text-muted-foreground">
                  Transforming local business discovery platforms
                </p>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-8">
          {/* Client Background */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/10 dark:to-indigo-950/10 rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">Client Background</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Challenge</h3>
                <p className="text-muted-foreground">
                  A growing online services company needed a centralized platform for users to search, 
                  discover, and connect with local businesses across multiple categories.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">20,000+</Badge>
                  <span className="text-sm text-muted-foreground">business listings</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Multiple</Badge>
                  <span className="text-sm text-muted-foreground">categories (restaurants, healthcare, real estate)</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Challenges Faced */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">Challenges Faced</h2>
            <div className="grid gap-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-950/10 rounded-lg">
                  <div className="w-6 h-6 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-red-600">{index + 1}</span>
                  </div>
                  <span className="text-muted-foreground">{challenge}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Core Features */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">Core Features Delivered</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-950/20">
                          <IconComponent size={24} className="text-[#FF6600]" strokeWidth={1.5} />
                        </div>
                        <CardTitle className="text-sm text-foreground">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </motion.section>

          {/* Implementation Timeline */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/10 dark:to-pink-950/10 rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock size={28} className="text-purple-600" />
              <h2 className="text-2xl font-bold text-foreground">Implementation Timeline</h2>
            </div>
            <div className="space-y-4">
              {timelineSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Badge variant="outline" className="bg-white/50 dark:bg-gray-800/50 border-purple-200 dark:border-purple-800">
                    Week {step.weeks}
                  </Badge>
                  <span className="text-muted-foreground">{step.task}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Results */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/10 dark:to-emerald-950/10 rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp size={28} className="text-green-600" />
              <h2 className="text-2xl font-bold text-foreground">Business Impact</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.map((result, index) => (
                <Card key={index} className="bg-white/50 dark:bg-gray-800/50 border-green-200 dark:border-green-800">
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold text-foreground mb-1">{result.metric}</h3>
                    <div className="text-2xl font-bold text-green-600 mb-1">{result.value}</div>
                    <div className="text-sm text-muted-foreground">{result.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Why It Worked */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">Why It Worked</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users size={20} className="text-[#FF6600]" />
                    For Users
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Reliable, fast, and engaging search experience</p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Building size={20} className="text-[#FF6600]" />
                    For Businesses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Direct control over visibility with promotional options</p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <DollarSign size={20} className="text-[#FF6600]" />
                    For Platform Owners
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Monetization and reduced management overhead</p>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* Future Plans */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg p-6 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Looking Ahead</h2>
            <p className="text-white/90 text-lg mb-6">
              The client now plans to add AI-powered recommendations, chat and booking integrations, 
              and expand into multi-city directories with localized branding.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                AI Recommendations
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Chat Integration
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Multi-City Expansion
              </Badge>
            </div>
          </motion.section>
        </div>
      </DialogContent>
    </Dialog>
  );
}