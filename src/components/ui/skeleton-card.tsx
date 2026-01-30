import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface SkeletonCardProps {
  className?: string;
  showImage?: boolean;
  lines?: number;
}

export function SkeletonCard({ 
  className, 
  showImage = true, 
  lines = 3 
}: SkeletonCardProps) {
  return (
    <div className={cn("rounded-2xl border border-border/50 bg-card p-6 space-y-4", className)}>
      {showImage && (
        <Skeleton className="h-12 w-12 rounded-lg" />
      )}
      <div className="space-y-3">
        <Skeleton className="h-6 w-3/4" />
        {Array.from({ length: lines }).map((_, i) => (
          <Skeleton 
            key={i} 
            className={cn("h-4", i === lines - 1 ? "w-1/2" : "w-full")} 
          />
        ))}
      </div>
    </div>
  );
}

interface SkeletonHeroProps {
  className?: string;
}

export function SkeletonHero({ className }: SkeletonHeroProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center space-y-6 py-20", className)}>
      <Skeleton className="h-16 w-3/4 max-w-2xl rounded-lg" />
      <Skeleton className="h-6 w-1/2 max-w-xl" />
      <div className="flex gap-4 pt-4">
        <Skeleton className="h-12 w-40 rounded-xl" />
        <Skeleton className="h-12 w-40 rounded-xl" />
      </div>
    </div>
  );
}

interface SkeletonGridProps {
  className?: string;
  count?: number;
  columns?: 2 | 3 | 4;
}

export function SkeletonGrid({ 
  className, 
  count = 6, 
  columns = 3 
}: SkeletonGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={cn("grid gap-6", gridCols[columns], className)}>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

interface SkeletonFormProps {
  className?: string;
  fields?: number;
}

export function SkeletonForm({ className, fields = 4 }: SkeletonFormProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="grid md:grid-cols-2 gap-4">
        {Array.from({ length: Math.min(fields, 2) }).map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full rounded-lg" />
          </div>
        ))}
      </div>
      {fields > 2 && (
        <>
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-32 w-full rounded-lg" />
          </div>
          <Skeleton className="h-12 w-full rounded-xl" />
        </>
      )}
    </div>
  );
}

interface SkeletonTestimonialProps {
  className?: string;
}

export function SkeletonTestimonial({ className }: SkeletonTestimonialProps) {
  return (
    <div className={cn("rounded-2xl border border-border/50 bg-card p-6", className)}>
      <div className="flex items-start gap-4 mb-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
}
