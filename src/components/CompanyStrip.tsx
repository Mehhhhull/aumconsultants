import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bigoLogo from '@/assets/bigo-live-seeklogo.png';
import denaLogo from '@/assets/DeNA_logo (1).png';
import kwaiLogo from '@/assets/kwai-seeklogo.png';
import pocochaLogo from '@/assets/Pococha_logo.png';
import pvrLogo from '@/assets/PVRlogo.png';
import urbanCompanyLogo from '@/assets/urban-company-logo-png.png';
import yoozooLogo from '@/assets/yoozoo.png';

gsap.registerPlugin(ScrollTrigger);

const CompanyStrip = () => {
  const stripRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  // Company logos
  const companies = [
    { name: 'Urban Company', logo: urbanCompanyLogo },
    { name: 'DeNA', logo: denaLogo },
    { name: 'BIGO Live', logo: bigoLogo },
    { name: 'Kwai', logo: kwaiLogo },
    { name: 'PVR Cinemas', logo: pvrLogo },
    { name: 'Pococha', logo: pocochaLogo },
    { name: 'Yoozoo', logo: yoozooLogo },
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
            className="flex-shrink-0 transition-all duration-300 hover:scale-105 bg-white rounded-lg p-4 shadow-md hover:shadow-lg"
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
