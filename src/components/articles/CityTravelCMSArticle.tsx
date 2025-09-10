import { motion } from "framer-motion";
import { MapPin, Users, Utensils, Smartphone, Search, Star, DollarSign, Clock, TrendingUp, CheckCircle, Calendar, Target } from "lucide-react";
import cityTravelCmsImage from "@/assets/city-travel-cms-restaurant.jpg";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CityTravelCMSArticleProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CityTravelCMSArticle({ isOpen, onClose }: CityTravelCMSArticleProps) {
  const challenges = [
    "Incomplete/outdated listings - hard to find authentic/local places",
    "Inconsistent menus and hours across different platforms", 
    "Limited technical skills for restaurant owners to manage online presence",
    "High commissions from existing marketplace platforms",
    "Difficulty reaching tourists and travelers effectively",
    "Fragmented data across platforms with poor analytics"
  ];

  const personas = [
    {
      icon: Users,
      title: "Travelling Foodie",
      description: "Needs quick, reliable information: open now, neighborhood, price, menu, photos, dietary tags, reviews"
    },
    {
      icon: Utensils,
      title: "Local Diner",
      description: "Uses saved favourites, loyalty programs and recurring deals for repeat visits"
    },
    {
      icon: Target,
      title: "Restaurant Manager/Owner",
      description: "Wants fast control over listings, menu edits, reservations, analytics and affordable marketing"
    }
  ];

  const coreFeatures = [
    {
      icon: Search,
      title: "Advanced Search & Filters",
      description: "Search by cuisine, price, neighborhood, dietary needs, ambience, opening hours, and real-time availability"
    },
    {
      icon: MapPin,
      title: "Map View & Geolocation",
      description: "Map view with clustering, distance-based sorting, and 'open now' + 'near me' filters"
    },
    {
      icon: Utensils,
      title: "Rich Listing Pages",
      description: "Photos, full menu, hours, contact, reservation links, reviews, and social proof badges"
    },
    {
      icon: Calendar,
      title: "CMS for Restaurant Owners",
      description: "Visual editor for menus, photos, hours, events, promotions, and booking integrations"
    },
    {
      icon: Star,
      title: "Reviews & Social Proof",
      description: "Rating system with community picks, verified badges, and recent owner activity indicators"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Progressive web app with offline caching, saved lists, and shareable itineraries for travellers"
    }
  ];

  const roadmapPhases = [
    { 
      phase: "MVP (0-3 months)", 
      features: "Core searchable listings, owner claim & basic CMS, menu upload, map & mobile basics, SEO optimization" 
    },
    { 
      phase: "v1 (3-6 months)", 
      features: "Reservations integration, reviews & rating system, promoted listings, analytics dashboard" 
    },
    { 
      phase: "v2 (6-9 months)", 
      features: "White-label mode, multi-city support, loyalty & gift-cards, advanced filtering (dietary, ambience)" 
    },
    { 
      phase: "v3 (9-12 months)", 
      features: "Demand forecasting, recommendation engine, real-time occupancy/wait time, full partner API" 
    }
  ];

  const businessMetrics = [
    { metric: "Listing Density", value: "80%", description: "of mid-tier restaurants in target neighborhoods listed" },
    { metric: "Owner Participation", value: "60%", description: "of listings claimed by restaurant owners" },
    { metric: "User Engagement", value: ">20%", description: "DAU/MAU ratio for engaged user base" },
    { metric: "Conversion Rate", value: "3-7%", description: "from listing view to booking/call" },
    { metric: "SEO Traffic", value: ">50%", description: "of organic acquisition from menu and local queries" }
  ];

  const monetizationStreams = [
    {
      icon: DollarSign,
      title: "Freemium Listings",
      description: "Basic free listings with premium subscriptions for analytics, promotions, priority placement"
    },
    {
      icon: TrendingUp,
      title: "Promoted Listings",
      description: "CPC/CPM model for placement in top search results and featured spots"
    },
    {
      icon: CheckCircle,
      title: "Booking Referrals",
      description: "Revenue share or fixed fee per successful booking/order through the platform"
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-background">
        <DialogHeader className="border-b border-border pb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-orange-50 dark:bg-orange-950/20">
                <MapPin size={32} className="text-[#FF6600]" strokeWidth={1.5} />
              </div>
              <div>
                <DialogTitle className="text-3xl font-bold text-foreground mb-2">
                  City Travel CMS (Restaurant-focused)
                </DialogTitle>
                <p className="text-lg text-muted-foreground">
                  Verticalized directory platform for restaurant discovery and management
                </p>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-8">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-64 rounded-lg overflow-hidden"
          >
            <img 
              src={cityTravelCmsImage} 
              alt="City Travel CMS Restaurant Discovery Platform"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Executive Summary */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/10 dark:to-indigo-950/10 rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">Executive Summary</h2>
            <p className="text-muted-foreground leading-relaxed">
              A City Travel CMS for restaurants is a verticalized directory and listing platform that helps travellers 
              discover dining options while giving restaurant owners an easy-to-use CMS to manage listings, menus, offers, 
              reservations and analytics. This solution balances consumer discovery with restaurant owner self-service, 
              creating recurring revenue through subscriptions, promoted listings and data services.
            </p>
          </motion.section>

          {/* Target Users & Personas */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">Target Users & Personas</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {personas.map((persona, index) => {
                const IconComponent = persona.icon;
                return (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-950/20">
                          <IconComponent size={24} className="text-[#FF6600]" strokeWidth={1.5} />
                        </div>
                        <CardTitle className="text-lg text-foreground">{persona.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{persona.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </motion.section>

          {/* Key Problems & Pain Points */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">Key Problems & Pain Points</h2>
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
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">Core Features Delivered</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreFeatures.map((feature, index) => {
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

          {/* Roadmap */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/10 dark:to-pink-950/10 rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock size={28} className="text-purple-600" />
              <h2 className="text-2xl font-bold text-foreground">Implementation Roadmap</h2>
            </div>
            <div className="space-y-4">
              {roadmapPhases.map((phase, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Badge variant="outline" className="bg-white/50 dark:bg-gray-800/50 border-purple-200 dark:border-purple-800 flex-shrink-0">
                    {phase.phase}
                  </Badge>
                  <span className="text-muted-foreground">{phase.features}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Success Metrics & KPIs */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/10 dark:to-emerald-950/10 rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp size={28} className="text-green-600" />
              <h2 className="text-2xl font-bold text-foreground">Success Metrics & KPIs</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {businessMetrics.map((result, index) => (
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

          {/* Monetization Strategy */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">Monetization Strategy</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {monetizationStreams.map((stream, index) => {
                const IconComponent = stream.icon;
                return (
                  <Card key={index} className="border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <IconComponent size={20} className="text-[#FF6600]" />
                        {stream.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{stream.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </motion.section>

          {/* Future Vision */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg p-6 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Strategic Recommendation</h2>
            <p className="text-white/90 text-lg mb-6">
              A restaurant-focused City Travel CMS succeeds by solving two linked problems: up-to-date discovery for diners 
              and low-friction, cost-effective digital presence for restaurant owners. Start small, win density in a neighborhood, 
              use partnerships to scale, and build recurring revenue through subscriptions and promoted placement.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Structured Data Priority
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Fast Search Experience
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Owner-First CMS
              </Badge>
            </div>
          </motion.section>
        </div>
      </DialogContent>
    </Dialog>
  );
}