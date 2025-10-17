import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<(HTMLButtonElement | null)[]>([]);
  const isBlogPage = typeof window !== 'undefined' && window.location.pathname.includes('/blog');

  useEffect(() => {
    const ctx = gsap.context(() => {
      linksRef.current.forEach((link, index) => {
        if (link) {
          gsap.fromTo(
            link,
            { opacity: 0, y: -20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
              delay: index * 0.05 + 0.1,
              ease: 'power2.out',
            }
          );
        }
      });

      gsap.to(navRef.current, {
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
        scrollTrigger: {
          trigger: document.body,
          start: '100px top',
          end: '101px top',
          toggleActions: 'play none none reverse',
        },
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50 transition-all duration-300"
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div onClick={() => (window.location.href = '/')} className="cursor-pointer">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              ref={(el) => (linksRef.current[0] = el)}
              onClick={() => (window.location.href = '/')}
              className="nav-link"
            >
              Home
            </button>

            {!isBlogPage && (
              <>
                <button
                  ref={(el) => (linksRef.current[1] = el)}
                  onClick={() => scrollToSection('about')}
                  className="nav-link"
                >
                  About
                </button>
                <button
                  ref={(el) => (linksRef.current[2] = el)}
                  onClick={() => scrollToSection('services')}
                  className="nav-link"
                >
                  Services
                </button>
                <button
                  ref={(el) => (linksRef.current[3] = el)}
                  onClick={() => scrollToSection('contact')}
                  className="nav-link"
                >
                  Contact
                </button>
              </>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex space-x-4">
            <Button
              ref={(el) => (linksRef.current[4] = el as HTMLButtonElement | null)}
              onClick={() => (window.location.href = '/blog')}
              className="btn-accent text-white transition-all duration-300"
              style={{ backgroundColor: '#203A60' }}
            >
              Blog
            </Button>

            <Button
              ref={(el) => (linksRef.current[5] = el as HTMLButtonElement | null)}
              onClick={() => scrollToSection('contact')}
              className="btn-accent"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="px-4 py-4 space-y-4">
            <button
              onClick={() => (window.location.href = '/')}
              className="block w-full text-left nav-link"
            >
              Home
            </button>

            {!isBlogPage && (
              <>
                <button
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left nav-link"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="block w-full text-left nav-link"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left nav-link"
                >
                  Contact
                </button>
              </>
            )}

            <Button
              onClick={() => {
                window.location.href = '/blog';
                setIsOpen(false);
              }}
              className="w-full btn-accent text-white transition-all duration-300"
              style={{ backgroundColor: '#203A60' }}
            >
              Blog
            </Button>

            <Button
              onClick={() => scrollToSection('contact')}
              className="btn-accent w-full mt-2"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
