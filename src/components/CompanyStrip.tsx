import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CompanyStrip = () => {
  const stripRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  // Company logos - you can replace these with actual logo URLs
  const companies = [
    { name: 'Company 1', logo: 'https://via.placeholder.com/200x80/4F46E5/ffffff?text=Company+1' },
    { name: 'Company 2', logo: 'https://via.placeholder.com/200x80/7C3AED/ffffff?text=Company+2' },
    { name: 'Company 3', logo: 'https://via.placeholder.com/200x80/2563EB/ffffff?text=Company+3' },
    { name: 'Company 4', logo: 'https://via.placeholder.com/200x80/059669/ffffff?text=Company+4' },
    { name: 'Company 5', logo: 'https://via.placeholder.com/200x80/DC2626/ffffff?text=Company+5' },
    { name: 'Company 6', logo: 'https://via.placeholder.com/200x80/EA580C/ffffff?text=Company+6' },
    { name: 'Company 7', logo: 'https://via.placeholder.com/200x80/DB2777/ffffff?text=Company+7' },
  ];

  // Duplicate companies for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const stripContent = strip.querySelector('.strip-content') as HTMLElement;
    if (!stripContent) return;

    // Create the infinite scroll animation
    const createAnimation = () => {
      const stripWidth = stripContent.scrollWidth / 2; // Divide by 2 because we duplicated

      animationRef.current = gsap.to(stripContent, {
        x: -stripWidth,
        duration: 20,
        ease: 'none',
        repeat: -1,
      });

      // Pause animation initially
      animationRef.current.pause();
    };

    createAnimation();

    // ScrollTrigger to start animation when in view
    ScrollTrigger.create({
      trigger: strip,
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => animationRef.current?.play(),
      onLeave: () => animationRef.current?.pause(),
      onEnterBack: () => animationRef.current?.play(),
      onLeaveBack: () => animationRef.current?.pause(),
    });

    return () => {
      animationRef.current?.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === strip) trigger.kill();
      });
    };
  }, []);

  return (
    <div ref={stripRef} className="w-full overflow-hidden bg-white py-10 border-y-2 border-border">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-foreground/80">Trusted by Leading Brands</h3>
      </div>
      <div className="strip-content flex items-center gap-16" style={{ width: 'fit-content' }}>
        {duplicatedCompanies.map((company, index) => (
          <div
            key={index}
            className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-105 bg-white rounded-lg p-4 shadow-md hover:shadow-lg"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-16 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyStrip;
