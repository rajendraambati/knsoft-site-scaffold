import { motion } from "framer-motion";
import { X, CheckCircle, Shield, Users, BarChart3, Clock, Target, TrendingUp, Lock, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import onlineElectionImage from "@/assets/online-election-system-tsf.jpg";

interface OnlineElectionArticleProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OnlineElectionArticle({ isOpen, onClose }: OnlineElectionArticleProps) {
  if (!isOpen) return null;

  const features = [
    { icon: Users, title: "Voter Registration", description: "Secure registration with identity verification" },
    { icon: Shield, title: "Digital Ballot Casting", description: "Encrypted ballots and secure submission" },
    { icon: Lock, title: "Fraud Prevention", description: "Multi-factor authentication, blockchain-backed audit trails" },
    { icon: BarChart3, title: "Result & Analytics Dashboard", description: "Real-time result visualization and reporting" },
    { icon: CheckCircle, title: "Audit & Transparency", description: "Complete traceability of votes without compromising voter anonymity" }
  ];

  const results = [
    { metric: "70%", label: "Lower election administration costs" },
    { metric: "65%", label: "Faster election result processing" },
    { metric: "45%", label: "Higher voter participation" },
    { metric: "30%", label: "Improvement in election transparency" }
  ];

  const technologies = [
    "React.js & Flutter",
    "Node.js with Blockchain",
    "PostgreSQL with Encryption",
    "AWS/Azure Cloud Hosting",
    "End-to-end Encryption",
    "Biometric/OTP Authentication"
  ];

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-6xl bg-card rounded-lg shadow-2xl"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 hover:bg-background/20"
            >
              <X className="h-4 w-4" />
            </Button>

            <div className="max-h-[90vh] overflow-y-auto">
              {/* Hero Section */}
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={onlineElectionImage}
                  alt="Online Election System TSF"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <Badge className="mb-4 bg-primary">TSF Certified</Badge>
                  <h1 className="text-4xl font-bold mb-2">Online Election System TSF</h1>
                  <p className="text-xl text-white/90">
                    Secure, transparent, and efficient digital voting platform
                  </p>
                </div>
              </div>

              <div className="p-8">
                {/* Executive Summary */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary">Executive Summary</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The <strong>Online Election System TSF</strong> was designed to ensure secure, transparent, and efficient voting for organizations, universities, communities, and government bodies. It provides digital voter registration, secure ballot casting, real-time result tracking, and audit trails. After implementation, clients reported a <strong>70% reduction in election administration costs</strong>, <strong>65% faster result processing</strong>, and improved voter participation by <strong>45%</strong>.
                  </p>
                </section>

                {/* Results Grid */}
                <section className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Key Results</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    {results.map((result, index) => (
                      <Card key={index} className="text-center p-4">
                        <CardContent className="p-0">
                          <div className="text-3xl font-bold text-primary mb-2">{result.metric}</div>
                          <p className="text-sm text-muted-foreground">{result.label}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* Problem & Solution */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-destructive" />
                        Challenges
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Manual vote counting and delayed results</li>
                        <li>• Risk of fraud and duplicate voting</li>
                        <li>• High administrative costs in setting up elections</li>
                        <li>• Lack of transparency and voter trust</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        Objectives
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Enable secure and accessible online voting</li>
                        <li>• Reduce administrative overhead and costs</li>
                        <li>• Increase voter turnout through easy digital access</li>
                        <li>• Ensure transparency, accuracy, and auditability of results</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Features */}
                <section className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Solution Modules</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {features.map((feature, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <feature.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-sm">{feature.title}</CardTitle>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <CardDescription className="text-xs">{feature.description}</CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* Technology Stack */}
                <section className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Technology & Architecture</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <Smartphone className="h-4 w-4" />
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        Security Features
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• End-to-end encryption for votes</li>
                        <li>• GDPR-compliant voter data handling</li>
                        <li>• Blockchain-backed transparency</li>
                        <li>• Multi-level access control</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Implementation Timeline */}
                <section className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Implementation Timeline</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full text-white text-sm font-medium">1</div>
                      <div>
                        <div className="font-medium">Phase 1 (0–2 months)</div>
                        <div className="text-sm text-muted-foreground">Requirement gathering and voter registration system</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full text-white text-sm font-medium">2</div>
                      <div>
                        <div className="font-medium">Phase 2 (2–4 months)</div>
                        <div className="text-sm text-muted-foreground">Ballot casting and encryption modules</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full text-white text-sm font-medium">3</div>
                      <div>
                        <div className="font-medium">Phase 3 (4–6 months)</div>
                        <div className="text-sm text-muted-foreground">Fraud prevention, MFA, and blockchain integration</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full text-white text-sm font-medium">4</div>
                      <div>
                        <div className="font-medium">Phase 4 (6–8 months)</div>
                        <div className="text-sm text-muted-foreground">Result dashboards and full rollout</div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Lessons Learned & Future */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        Lessons Learned
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Voter education is crucial for adoption</li>
                        <li>• Blockchain integration builds trust in results</li>
                        <li>• Multi-factor authentication reduces risks of fraud</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        Future Roadmap
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• AI-powered voter behavior analytics</li>
                        <li>• Integration with national ID systems</li>
                        <li>• Support for hybrid online and offline elections</li>
                        <li>• Advanced biometric verification</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Separator className="my-6" />

                {/* Conclusion */}
                <section className="text-center">
                  <h3 className="text-xl font-semibold mb-4">Conclusion</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The <strong>Online Election System TSF</strong> delivered a secure, transparent, and efficient voting experience. 
                    By reducing costs, speeding results, and increasing participation, it set a new benchmark for digital democracy and organizational elections.
                  </p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}