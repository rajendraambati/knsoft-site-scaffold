import { SEOHead } from "@/components/SEO/SEOHead";

export default function PsychometricTest() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Psychometric Test | KNSOFT Technologies"
        description="Take our psychometric assessment to discover your behavioural traits, cognitive abilities, and personality profile for smarter career decisions."
        keywords="psychometric test, personality assessment, career assessment, behavioural traits"
        canonical="https://knsoft.dev/services/training/psychometric"
      />
      <main className="h-screen">
        <iframe
          src="https://potential-plot.lovable.app"
          title="Psychometric Test"
          className="w-full h-full border-0"
          allow="clipboard-write"
        />
      </main>
    </div>
  );
}
