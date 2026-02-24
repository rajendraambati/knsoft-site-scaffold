import { Header } from "@/components/layout/Header";
import { SEOHead } from "@/components/SEO/SEOHead";

export default function LearningAssessment() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Learning Assessment | KNSOFT Technologies"
        description="Evaluate your current knowledge and skill levels to identify gaps and get tailored learning path recommendations."
        keywords="learning assessment, skill evaluation, knowledge test, learning path"
        canonical="https://knsoft.dev/services/training/learning-assessment"
      />
      <Header />
      <main className="pt-20 h-screen">
        <iframe
          src="https://know-your-learner.lovable.app"
          title="Learning Assessment"
          className="w-full h-[calc(100vh-80px)] border-0"
          allow="clipboard-write"
        />
      </main>
    </div>
  );
}
