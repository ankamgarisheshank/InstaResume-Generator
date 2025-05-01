
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <div className="relative h-10 w-10 mr-2">
            <div className="absolute inset-0 bg-resume-primary rounded-md rotate-45 transform transition-transform group-hover:rotate-[30deg]"></div>
            <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-sm flex items-center justify-center">
              <span className="text-lg font-bold text-resume-primary">IR</span>
            </div>
          </div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">InstaResume</h1>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">About</Button>
          <Button variant="ghost" size="sm">Templates</Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
