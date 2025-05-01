import { Github, Linkedin, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 py-12 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        {/* Developer Info Section */}
        <div className="flex flex-col items-center text-center">
          {/* Developer Image */}
          <div className="w-40 h-40 md:w-48 md:h-48 mb-4 rounded-full overflow-hidden border-4 border-resume-primary">
            <img
              src="https://res.cloudinary.com/dnbqgzh4t/image/upload/v1746033325/qds3xba9ww3ni7ir9ohw.jpg"
              alt="Developer"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-2 font-medium">
            This application was developed by
          </p>
          <p className="text-gray-900 dark:text-white text-lg font-semibold mb-4">
            ANKAMGARI SHESHANK GOUD
          </p>

          {/* Links Section */}
          <div className="flex space-x-3">
            {/* Portfolio Button */}
            <Button
              asChild
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <a href="http://ankamgarisheshank-profile.netlify.app" target="_blank" rel="noopener noreferrer">
                <User className="h-4 w-4" />
                <span className="sr-only">Portfolio</span>
              </a>
            </Button>

            {/* LinkedIn Button */}
            <Button
              asChild
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <a href="https://www.linkedin.com/in/ankamgari-sheshank/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>

            {/* GitHub Button */}
            <Button
              asChild
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <a href="https://github.com/ankamgarisheshank" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Footer Text Section */}
        <div className="mt-8 text-center border-t border-gray-200 dark:border-gray-800 pt-4">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
            InstaResume
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
            Create. Click. Career.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            © {currentYear} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}