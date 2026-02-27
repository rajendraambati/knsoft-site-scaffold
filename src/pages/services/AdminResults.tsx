import { useEffect } from "react";
import { SEOHead } from "@/components/SEO/SEOHead";

export default function AdminResults() {
  useEffect(() => {
    window.open("https://snug-settings.lovable.app", "_blank", "noopener,noreferrer");
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-background text-foreground">
      <SEOHead
        title="Admin Results | KNSOFT Technologies"
        description="Login to the admin dashboard to view and manage psychometric and learning assessment results."
        keywords="admin results, assessment results, psychometric results, learning assessment results"
        canonical="https://knsoft.dev/services/training/admin-results"
      />
      <h1 className="text-2xl font-bold">Admin Results Dashboard</h1>
      <p className="text-muted-foreground">The admin dashboard has been opened in a new tab.</p>
      <a
        href="https://snug-settings.lovable.app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline font-medium"
      >
        Click here if it didn't open automatically
      </a>
    </div>
  );
}
