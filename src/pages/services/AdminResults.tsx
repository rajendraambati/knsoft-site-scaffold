import { SEOHead } from "@/components/SEO/SEOHead";

export default function AdminResults() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Admin Results | KNSOFT Technologies"
        description="Login to the admin dashboard to view and manage psychometric and learning assessment results."
        keywords="admin results, assessment results, psychometric results, learning assessment results"
        canonical="https://knsoft.dev/services/training/admin-results"
      />
      <main className="flex-1">
        <iframe
          src="https://snug-settings.lovable.app"
          title="Admin Results Dashboard"
          className="w-full h-screen border-0"
          allow="clipboard-write"
        />
      </main>
    </div>
  );
}
