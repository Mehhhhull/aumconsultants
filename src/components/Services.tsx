import {
  Users,
  Smartphone,
  TrendingUp,
  Building,
  ArrowRight,
  Lightbulb,
  Shield,
  Zap,
  BookOpen,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate service cards on scroll
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 100,
              rotateX: -30,
              scale: 0.9,
            },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
              duration: 0.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
                once: true
              },
            }
          );

          // Hover animation
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              scale: 1.05,
              y: -10,
              duration: 0.2,
              ease: "power2.out",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              scale: 1,
              y: 0,
              duration: 0.2,
              ease: "power2.out",
            });
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Strategic Content Consulting",
      description:
        "We help brands craft content strategies that convert insight into growth.",
      features: [
        "Brand Storytelling",
        "Content Planning",
        "Communication Frameworks",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Design & Experience Strategy",
      description:
        "We design meaningful digital experiences that strengthen brand identity.",
      features: [
        "Social & Campaign Creatives",
        "Visual Identity",
        "Website & Marketing Design",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Analytics & Intelligence",
      description: "Transform numbers into narratives.",
      features: ["ROI Measurement", "SEO & Analytics", "Content Performance"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Consulting & Digital Transformation",
      description:
        "Integrating creativity and technology for next-generation growth.",
      features: [
        "AI Content Consulting",
        "Brand Positioning",
        "Transformation Roadmap",
      ],
      color: "from-orange-500 to-orange-600",
    },
  ];

  const additionalServices = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Startups",
      description: "Startups seeking strategic brand direction.",
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "SMEs",
      description: "SMEs scaling visibility and growth.",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Creators & Cultural Organizations",
      description: "Creator, cultural & educational organizations.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Heritage & Social-Impact Brands",
      description:
        "Heritage and social-impact brands embracing digital transformation.",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} id="services" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Solutions for Modern Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At AUM Consultants, we combine data-driven insights, creativity, and
            strategic consulting to help brands evolve into purpose-driven,
            future-ready organizations. By bridging strategy, storytelling, and
            technology, we create measurable impact for every client.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="service-card"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex items-start space-x-6">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Service Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start text-sm text-foreground"
                      >
                        <span className="mt-1 w-2 h-2 bg-accent rounded-full mr-2 flex-shrink-0"></span>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    className="btn-outline"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-secondary/50 rounded-2xl p-8 md:p-12">
          <h3 className="font-heading text-2xl font-bold text-foreground text-center mb-8">
            Industries We Empower
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-up border border-primary/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-accent rounded-lg text-accent-foreground">
                  {service.icon}
                </div>

                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-up">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help your business thrive in the
            digital age. Get started with a free consultation today.
          </p>
          <Button
            onClick={scrollToContact}
            className="btn-primary text-lg px-8 py-4"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
