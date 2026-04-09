import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface JobCardProps {
  job: {
    id: string;
    title: string;
    slug: string;
    description: string;
    location: string;
    type: string;
    created_at: string;
  };
}

export function JobCard({ job }: JobCardProps) {
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

  return (
    <Card className="h-full hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] border-border/50">
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <CardTitle className="text-xl text-primary font-display">
              {job.title}
            </CardTitle>
            <div className="flex items-center gap-4 mt-2 text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{job.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span className="text-sm">
                  {new Date(job.created_at).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
          <Badge variant={getJobTypeColor(job.type) as any}>
            {formatJobType(job.type)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground/80 mb-6 line-clamp-3">
          {job.description}
        </CardDescription>
        <Button asChild variant="cta" className="w-full">
          <Link to={`/careers/${job.slug}`}>
            View Details & Apply
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}