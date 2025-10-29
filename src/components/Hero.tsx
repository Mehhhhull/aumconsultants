import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
      );
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.2, ease: "power3.out" }
      );
      gsap.fromTo(
        buttonsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.4, ease: "back.out(1.5)" }
      );
      gsap.to(".floating-shape", {
        y: "random(-20, 20)",
        x: "random(-15, 15)",
        duration: "random(3,5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex items-center justify-center min-h-[90vh] px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-primary/90 to-primary/80 overflow-hidden"
    >
      {/* Floating shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-shape absolute top-10 left-5 w-16 h-16 bg-accent/10 rounded-full backdrop-blur-sm"></div>
        <div className="floating-shape absolute bottom-10 right-5 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm"></div>
        <div className="floating-shape absolute top-1/2 left-1/3 w-20 h-20 bg-primary/5 rounded-full backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-4xl w-full text-center lg:text-left">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 mb-4 sm:mb-6 mx-auto lg:mx-0 text-sm sm:text-base">
          <Sparkles className="h-4 w-4 text-accent animate-pulse" />
          <span className="text-white/90 font-medium">
            Trusted by Growing Businesses
          </span>
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-snug sm:leading-tight mb-4 sm:mb-6"
        >
          Transform Your Digital Presence Into​{" "}
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            Strategic Impact
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0"
        >
          AUM Consultants blends research, creativity, and digital intelligence
          to help brands build trust, influence, and measurable growth.
        </p>

        {/* CTA Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <Button
            onClick={scrollToContact}
            className="relative btn-accent text-sm sm:text-base md:text-lg px-6 sm:px-10 py-3 sm:py-4 group overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center">
              Book Your Free Brand Strategy Assessment
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Button>

          <Button
            onClick={scrollToServices}
            variant="outline"
            className="relative bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-primary text-sm sm:text-base md:text-lg px-6 sm:px-10 py-3 sm:py-4 group overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center">
              Explore Our Services
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
