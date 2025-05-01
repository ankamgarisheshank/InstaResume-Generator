
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ResumeForm from "@/components/resume/ResumeForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <ResumeForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
