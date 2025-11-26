import { Target, Eye, CheckCircle, Award, Lightbulb, Users2 } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CompanyStrip from './CompanyStrip';

gsap.registerPlugin(ScrollTrigger);

const VisionMission = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<(HTMLDivElement | null)[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate value cards with 3D flip effect
      valuesRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { 
              opacity: 0, 
              x: -50
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
              },
              delay: index * 0.1
            }
          );

          // Hover effect
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -15,
              rotateX: 5,
              scale: 1.05,
              duration: 0.2,
              ease: 'power2.out'
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              rotateX: 0,
              scale: 1,
              duration: 0.2,
              ease: 'power2.out'
            });
          });
        }
      });

      // Counter animation for stats
      if (statsRef.current) {
        const statNumbers = statsRef.current.querySelectorAll('.stat-number');
        statNumbers.forEach((stat) => {
          gsap.fromTo(stat,
            { innerHTML: 0 },
            {
              innerHTML: stat.getAttribute('data-value') || 0,
              duration: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: statsRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
                once: true
              },
              snap: { innerHTML: 1 },
              onUpdate: function() {
                const value = Math.ceil(this.targets()[0].innerHTML);
                const originalText = stat.getAttribute('data-original') || '';
                stat.innerHTML = originalText.replace(/\d+/, value.toString());
              }
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  const coreValues = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Trusted",
      description: "Building relationships through honest guidance and proven results you can depend on.",
      color: "bg-blue-500"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Transparent",
      description: "Clear communication, honest pricing, and open processes at every step of your journey.",
      color: "bg-green-500"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Scalable",
      description: "Solutions that grow with your business, from startup to enterprise level success.",
      color: "bg-purple-500"
    },
    {
      icon: <Users2 className="h-6 w-6" />,
      title: "Practical",
      description: "Real-world solutions that work within your budget, timeline, and business constraints.",
      color: "bg-orange-500"
    }
  ];

  const visionMission = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Our Vision",
      description: "To transform how brands connect, communicate, and create impact — through research-driven creativity, cultural intelligence, and digital strategy consulting."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Our Mission", 
      description: "To empower organizations with authentic, measurable growth strategies — blending data precision with human insight."
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built on Trust, Driven by Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
           At AUM Consultants, we blend data-driven insights, creativity, and strategic consulting to transform organizations into purpose-driven, future-ready brands. We bridge strategy with storytelling, technology with emotion, and insight with execution to deliver measurable impact for every client.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {visionMission.map((item, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-100 to-purple-100 border border-primary/20 p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 text-center group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl text-primary-foreground mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Core Values Section */}
        <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 md:p-12 shadow-elegant border border-primary/20">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every solution we deliver
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                ref={(el) => (valuesRef.current[index] = el)}
                className="group p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 ${value.color} rounded-xl text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                
                <h4 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="mt-20 bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
          <div className="grid md:grid-cols-3 gap-8 text-primary-foreground">
            <div>
              <div className="stat-number text-4xl md:text-5xl font-bold mb-2" data-value="15" data-original="15+">15+</div>
              <div className="text-lg opacity-90">Businesses Transformed</div>
            </div>
            <div>
              <div className="stat-number text-4xl md:text-5xl font-bold mb-2" data-value="96" data-original="96%">96%</div>
              <div className="text-lg opacity-90">Client Satisfaction Rate</div>
            </div>
            <div>
              <div className="stat-number text-4xl md:text-5xl font-bold mb-2" data-value="2" data-original="₹2Cr+">₹2Cr+</div>
              <div className="text-lg opacity-90">Revenue Generated for Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Logo Strip */}
      <CompanyStrip />
    </section>
  );
};

export default VisionMission;