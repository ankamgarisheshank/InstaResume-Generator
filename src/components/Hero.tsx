
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToForm = () => {
    const formElement = document.getElementById("resume-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-20 pb-32 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-8 inline-block">
          <div className="relative h-20 w-20 mx-auto">
            <div className="absolute inset-0 bg-resume-primary rounded-2xl rotate-45 transform transition-transform hover:rotate-[30deg]"></div>
            <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center">
              <span className="text-3xl font-bold text-resume-primary">IR</span>
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-resume-primary to-resume-accent bg-clip-text text-transparent">
          InstaResume
        </h1>
        <p className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-2">
          Create. Click. Career.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">
            InstaResume is your one-click resume builder for students, professionals, and job seekers. 
            Instantly generate a professional, modern, and customized resume by entering your details. 
            No design skills needed.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="text-lg px-8 py-6 rounded-xl bg-resume-primary hover:bg-resume-accent" 
              onClick={scrollToForm}
            >
              Create Your Resume
            </Button>
            <Button 
              variant="outline"
              className="text-lg px-8 py-6 rounded-xl border-resume-primary text-resume-primary hover:bg-resume-primary/10 dark:text-white dark:hover:bg-resume-primary/20"
            >
              View Templates
            </Button>
          </div>
        </div>
        
        <div className="mt-16">
          <Button 
            variant="ghost" 
            size="icon" 
            className="animate-bounce rounded-full h-12 w-12" 
            onClick={scrollToForm}
          >
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
