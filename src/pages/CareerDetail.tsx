import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JobApplicationForm } from "@/components/careers/JobApplicationForm";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowLeft, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

interface Job {
  id: string;
  title: string;
  slug: string;
  description: string;
  location: string;
  type: string;
  created_at: string;
}

export default function CareerDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchJob() {
      if (!slug) return;

      try {
        const { data, error } = await supabase
          .from('jobs')
          .select('*')
          .eq('slug', slug)
          .single();

        if (error) throw error;
        setJob(data);
      } catch (error) {
        console.error('Error fetching job:', error);
        setError('Job not found or failed to load.');
      } finally {
        setLoading(false);
      }
    }

    fetchJob();
  }, [slug]);

  const formatJobType = (type: string) => {
    return type
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const getJobTypeColor = (type: string) => {
    switch (type) {
      case 'full-time':
        return 'default';
      case 'part-time':
        return 'secondary';
      case 'contract':
        return 'outline';
      default:
        return 'default';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="space-y-6">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-12 w-3/4" />
            <div className="flex gap-4">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-20" />
            </div>
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-96 w-full" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>
              {error || "Job not found."}
            </AlertDescription>
          </Alert>
          <Button asChild variant="outline">
            <Link to="/careers">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Careers
            </Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/careers">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Careers
            </Link>
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Job Details */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold font-display text-primary mb-4">
                  {job.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 mb-6 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Posted {new Date(job.created_at).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    <Badge variant={getJobTypeColor(job.type) as any}>
                      {formatJobType(job.type)}
                    </Badge>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold font-display text-primary mb-4">Job Description</h2>
                  <div className="whitespace-pre-wrap text-foreground font-body leading-relaxed">
                    {job.description}
                  </div>
                </div>

                {/* Additional job details could be added here */}
                <div className="mt-8 p-6 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-bold font-display text-primary mb-4">What We Offer</h3>
                  <ul className="space-y-2 text-foreground font-body">
                    <li>• Competitive salary and equity package</li>
                    <li>• Comprehensive health, dental, and vision coverage</li>
                    <li>• Flexible work arrangements and remote options</li>
                    <li>• Professional development and learning opportunities</li>
                    <li>• Collaborative and innovative work environment</li>
                    <li>• Opportunity to work on cutting-edge technology</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <JobApplicationForm jobId={job.id} jobTitle={job.title} />
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}