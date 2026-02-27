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
      <div className="bg-muted/50 px-4 py-2 text-center text-sm border-b flex items-center justify-center gap-2">
        <span>Having trouble signing in?</span>
        <a
          href="https://snug-settings.lovable.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline font-medium"
        >
          Open Admin Dashboard in a new tab
        </a>
      </div>
      <main className="flex-1">
        <iframe
          src="https://snug-settings.lovable.app"
          title="Admin Results Dashboard"
          className="w-full h-[calc(100vh-40px)] border-0"
          allow="clipboard-write"
        />
      </main>
    </div>
  );
}
