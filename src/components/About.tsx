import { Award, Users, Target, CheckCircle } from "lucide-react";
import founderImage from "@/assets/founder-portrait.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content slide in from left
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true
          },
        }
      );

      // Image reveal with rotation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8, rotateY: -30 },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true
          },
        }
      );

      // Parallax effect on image
      gsap.to(imageRef.current, {
        y: -30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Industry Recognition",
      description:
        "Certified digital strategy and transformation specialist with proven expertise.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Client Success",
      description:
        "50+ brands empowered with measurable growth and impactful digital strategies.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Results-Driven",
      description:
        "Delivered average 40% improvement in operational efficiency and brand performance.",
    },
  ];

  const expertise = [
    "Strategic Content & Brand Consulting",
    "Design & Experience Strategy",
    "Analytics & Performance Intelligence",
    "Digital Transformation & AI Integration",
    "MSME Growth & Business Consulting",
    "Industry-Specific Strategy & Guidance",
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding bg-secondary/30"
    >
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            About AUM Consultants
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AUM Consultants is a strategic consulting firm helping brands
            transform how they communicate, grow, and connect in a digital
            world.​ We specialize in building digital presence with purpose,
            combining research, cultural intelligence, and design strategy to
            deliver measurable results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div ref={contentRef}>
            {/* Company Story */}
            <div className="mb-12">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                Our Story & Expertise
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                AUM Consultants is a strategic consulting firm helping
                organizations transform how they communicate, grow, and connect
                in a digital world. We specialize in crafting purpose-driven
                digital strategies that merge human creativity with AI
                intelligence — enabling brands to achieve sustainable,
                measurable results.
              </p>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Founded by Jitesh Sabharwal, a leader with 12+ years of
                experience across Urban Company, DeNA, BIGO, Kwai, and PVR
                Cinemas, AUM bridges business growth and cultural understanding
                through storytelling, content strategy, and technology adoption.
              </p>

              {/* Expertise Areas */}
              <div className="mb-8">
                <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
                  Areas of Expertise
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {expertise.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent mr-3" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-accent rounded-lg text-accent-foreground">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Founder Section */}
          <div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 border border-primary/20 p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 text-center">
              <div className="relative mb-6">
                <img
                  ref={imageRef}
                  src={founderImage}
                  alt="Founder and CEO of InnovateConsult"
                  className="w-48 h-48 rounded-2xl mx-auto object-cover shadow-medium"
                  style={{ transformStyle: "preserve-3d" }}
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-accent text-accent-foreground px-4 py-2 rounded-lg font-medium shadow-medium">
                  Founder & Principal Consultant
                </div>
              </div>

              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                Jitesh Sabharwal
              </h3>

              <p className="text-accent font-medium mb-4">
                Founder & Principal Consultant, AUM Consultants
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                With over a decade of leadership across the internet and
                technology industries, Jitesh brings deep expertise in business
                development, content strategy, and digital transformation. At
                AUM, he applies cross-functional experience to help
                organizations move beyond vanity metrics and achieve sustainable
                digital growth
              </p>

              {/* Founder Achievements */}
              <div className="space-y-3 text-left">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-3" />
                  <span className="text-sm text-foreground">
                    12+ Years in Digital & Business Strategy
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-3" />
                  <span className="text-sm text-foreground">
                    Expertise in Creator Ecosystems & Brand Consulting
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-3" />
                  <span className="text-sm text-foreground">
                    Delivered Measurable Digital Impact for Clients
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
