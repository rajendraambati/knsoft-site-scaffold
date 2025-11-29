import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";

const Exam = () => {
  return (
    <>
      <SEOHead 
        title="Exam - KNSOFT Technologies"
        description="Explore our exam management solutions and products at KNSOFT Technologies."
        canonical="/products/exam"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">
          <iframe 
            src="https://chaos-java-54403268.figma.site"
            className="w-full h-screen border-0"
            title="Exam Management System"
            allow="fullscreen"
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Exam;
