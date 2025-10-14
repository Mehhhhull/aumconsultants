import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-consulting.jpg';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation - split text reveal
      const titleWords = titleRef.current?.querySelectorAll('span');
      if (titleWords) {
        gsap.fromTo(titleWords,
          { opacity: 0, y: 50, rotateX: -90 },
          { 
            opacity: 1, 
            y: 0, 
            rotateX: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power4.out'
          }
        );
      }

      // Subtitle fade in
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.3, ease: 'power3.out' }
      );

      // Buttons slide up
      gsap.fromTo(buttonsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.4, delay: 0.5, ease: 'back.out(1.7)' }
      );

      // Image parallax and reveal
      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 1.3, rotateY: -20 },
        { 
          opacity: 1, 
          scale: 1, 
          rotateY: 0,
          duration: 0.7, 
          delay: 0.2,
          ease: 'power3.out'
        }
      );

      // Parallax scroll effect for image
      gsap.to(imageRef.current, {
        y: 100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });

      // Floating shapes animation
      const shapes = document.querySelectorAll('.floating-shape');
      shapes.forEach((shape, index) => {
        gsap.to(shape, {
          y: 'random(-30, 30)',
          x: 'random(-20, 20)',
          rotation: 'random(-15, 15)',
          duration: 'random(3, 5)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.5
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} id="hero" className="min-h-screen flex items-center hero-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Shapes with GSAP */}
        <div className="floating-shape absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full backdrop-blur-sm"></div>
        <div className="floating-shape absolute top-40 right-20 w-16 h-16 bg-white/5 rounded-full backdrop-blur-sm"></div>
        <div className="floating-shape absolute bottom-40 left-20 w-24 h-24 bg-accent/5 rounded-full backdrop-blur-sm"></div>
        <div className="floating-shape absolute bottom-20 right-40 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm"></div>
        <div className="floating-shape absolute top-1/2 left-1/3 w-32 h-32 bg-primary/5 rounded-full backdrop-blur-sm"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse-slow"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4 text-accent animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Trusted by 50+ Growing Businesses</span>
            </div>

            <h1 ref={titleRef} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" style={{ perspective: '1000px' }}>
              <span className="block">Empowering Local</span>
              <span className="block">Businesses & MSMEs to</span>
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Thrive in the Digital Era
              </span>
            </h1>
            
            <p ref={subtitleRef} className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              We help offline businesses embrace digital tools, leverage AI, and explore new opportunities – 
              with <span className="text-accent font-semibold">guidance you can trust</span>.
            </p>

            {/* CTA Buttons */}
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                className="relative btn-accent text-lg px-10 py-5 animate-pulse-gentle overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>
              
              <Button 
                onClick={scrollToServices}
                variant="outline"
                className="relative bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-primary text-lg px-10 py-5 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 pt-8 border-t border-white/20">
              <p className="text-white/70 text-sm mb-6 flex items-center justify-center lg:justify-start">
                <Sparkles className="h-4 w-4 mr-2 text-accent" />
                Trusted by businesses across India
              </p>
              <div className="grid grid-cols-3 gap-8 text-white/80">
                <div className="text-center group">
                  <div className="font-bold text-3xl md:text-4xl text-accent mb-1 group-hover:scale-110 transition-transform">50+</div>
                  <div className="text-sm opacity-80">Businesses Helped</div>
                </div>
                <div className="text-center group">
                  <div className="font-bold text-3xl md:text-4xl text-accent mb-1 group-hover:scale-110 transition-transform">95%</div>
                  <div className="text-sm opacity-80">Success Rate</div>
                </div>
                <div className="text-center group">
                  <div className="font-bold text-3xl md:text-4xl text-accent mb-1 group-hover:scale-110 transition-transform">₹2Cr+</div>
                  <div className="text-sm opacity-80">Revenue Generated</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-fade-in order-first lg:order-last relative">
            <div className="relative">
              {/* Main Image */}
              <img 
                ref={imageRef}
                src={heroImage} 
                alt="Professional consulting team helping businesses with digital transformation"
                className="rounded-3xl shadow-strong w-full max-w-md mx-auto h-[350px] object-cover"
                style={{ transformStyle: 'preserve-3d' }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl"></div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;