import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    id: 1,
    title: "How AI Is Transforming Content Strategy in 2025",
    description: "Discover how leading organizations combine human creativity with AI intelligence to drive measurable growth in 2025.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    date: "October 17, 2025",
    readTime: "6 min read",
    route: "/blog/ai-content-strategy"
  },
  {
    id: 2,
    title: "Top SEO Trends 2025–26 — From Zero-Click to E-E-A-T, What Matters Now",
    description: "SEO in 2025–26 is about credibility, context, and trust, not just keywords. Practical insights from AUM Consultants on next-gen search.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_7z1VAJHcD4f5LJ1oquYuUOXjdxG_Y9Y07jHVXkUEIz9A8q7WL2oHZgKg-QQD35r32wM&usqp=CAU",
    date: "October 30, 2025",
    readTime: "8 min read",
    route: "/blog/top-seo-trends"
  },
  {
    id: 3,
    title: "Building Brand Differentiation in a Saturated Digital Market — A Strategic Approach for 2025–26",
    description: "In a crowded digital world, standing out is about thinking smarter, not louder.",
    image: "data:image/jpeg;base64,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",
    date: "2025",
    readTime: "X min read",
    route: "/blog/government-schemes"
  }
];

const Blog = () => {
  const navigate = useNavigate();
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
              delay: index * 0.1,
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-background pt-32 pb-20">
        <div className="container-max relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Latest Insights & Resources
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 font-light">
              Stay updated with expert articles on AI, digital transformation, and strategies for business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="professional-card group cursor-pointer"
                onClick={index <= 1 ? () => navigate(post.route) : undefined} // first two clickable
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {post.description}
                </p>

                {/* Read More Button */}
                <div
                  className={`flex items-center gap-2 text-primary font-medium transition-all ${
                    index <= 1
                      ? 'cursor-pointer group-hover:gap-3'
                      : 'cursor-default opacity-70 group-hover:gap-2 group-hover:text-primary'
                  }`}
                  onClick={index <= 1 ? () => navigate(post.route) : undefined} // only first clickable
                >
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Blog;
