import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';

const Post2 = () => {
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const paragraphs = contentRef.current.querySelectorAll('p, h2, h3, ul, blockquote');
      gsap.fromTo(paragraphs,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out'
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner */}
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80" 
          alt="AI for Business"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-max px-4">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center max-w-4xl mx-auto">
              How AI Can Help Local Businesses Grow
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="section-padding">
        <div className="max-w-4xl mx-auto px-4">
          {/* Meta Info */}
          <div className="flex items-center gap-6 mb-8 pb-6 border-b border-border">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-5 h-5" />
              <span>March 10, 2024</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5" />
              <span>6 min read</span>
            </div>
          </div>

          {/* Article Body */}
          <div ref={contentRef} className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Artificial Intelligence (AI) has evolved from a futuristic concept to a practical business tool accessible to companies of all sizes. For local businesses, AI presents unprecedented opportunities to compete more effectively, serve customers better, and grow sustainably.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-6">
              Demystifying AI for Small Businesses
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              When most people think of AI, they imagine complex algorithms and massive data centers. However, modern AI tools are designed to be user-friendly and affordable, even for businesses with limited technical resources. From chatbots to predictive analytics, AI can help automate tasks, gain insights, and enhance customer experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The key is understanding which AI applications make sense for your specific business needs and implementing them strategically. You don't need to transform your entire operation overnight—small, focused AI implementations can deliver significant returns.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-6">
              Practical AI Applications for Local Businesses
            </h2>

            <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
              1. Customer Service Automation
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              AI-powered chatbots can handle routine customer inquiries 24/7, providing instant responses to common questions about hours, services, pricing, and more. This frees up your staff to focus on complex issues that require human attention while ensuring customers always get timely support.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Modern chatbots use natural language processing to understand customer intent and provide relevant, conversational responses. They can be integrated into your website, social media channels, and messaging apps, creating a seamless customer experience across all touchpoints.
            </p>

            <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
              2. Personalized Marketing
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              AI enables hyper-personalized marketing at scale. By analyzing customer data—purchase history, browsing behavior, preferences—AI systems can create targeted campaigns that resonate with individual customers. This level of personalization was once available only to large corporations with massive marketing budgets.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Email marketing platforms now use AI to optimize send times, subject lines, and content for each recipient. Social media advertising platforms leverage AI to identify and target your ideal customers with precision, maximizing your return on ad spend.
            </p>

            <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
              3. Inventory and Demand Forecasting
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For retail and product-based businesses, AI-powered forecasting tools can predict demand patterns, helping you optimize inventory levels. This reduces waste from overstocking, prevents lost sales from stockouts, and improves cash flow management.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              These systems analyze historical sales data, seasonal trends, market conditions, and even weather patterns to provide accurate demand forecasts. This intelligence enables smarter purchasing decisions and more efficient operations.
            </p>

            <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
              4. Financial Management and Fraud Detection
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              AI-powered accounting tools can automate bookkeeping, categorize expenses, and generate financial reports with minimal manual input. They can also identify unusual patterns that might indicate errors or fraudulent transactions, protecting your business from financial losses.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              These systems learn your business's typical financial patterns and flag anomalies for review, providing an extra layer of oversight without requiring dedicated fraud detection personnel.
            </p>

            <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
              5. Content Creation and Social Media Management
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              AI writing assistants can help create social media posts, product descriptions, blog content, and marketing copy. While human oversight remains essential, these tools can dramatically speed up content creation and ensure consistent posting schedules.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              AI-powered social media management platforms can suggest optimal posting times, recommend hashtags, and even generate content ideas based on trending topics and your audience's interests.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-6">
              Getting Started with AI: A Step-by-Step Guide
            </h2>

            <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
              Step 1: Identify Pain Points
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Start by identifying specific challenges in your business operations. Are customers frequently asking the same questions? Is inventory management consuming too much time? Are you struggling to personalize customer communications? These pain points are prime candidates for AI solutions.
            </p>

            <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
              Step 2: Research Available Solutions
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Explore AI tools designed for small businesses in your industry. Many providers offer free trials, allowing you to test solutions before committing. Look for platforms with strong customer support and user-friendly interfaces—you shouldn't need a data scientist on staff to implement AI.
            </p>

            <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
              Step 3: Start with a Pilot Project
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Choose one AI application to implement as a pilot project. This focused approach allows you to learn, adjust, and demonstrate value before expanding AI use across your business. Set clear success metrics so you can evaluate the impact objectively.
            </p>

            <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
              Step 4: Train Your Team
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ensure your team understands how to work with AI tools effectively. This includes knowing when to rely on AI and when human judgment is necessary. Create guidelines for reviewing AI outputs and making adjustments as needed.
            </p>

            <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
              Step 5: Measure and Refine
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Continuously monitor the performance of your AI implementations. Are they delivering the expected benefits? What adjustments could improve results? Use these insights to refine your approach and identify additional opportunities for AI integration.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-6">
              Real-World Success Stories
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A local retail store implemented an AI chatbot on their website and saw a 40% reduction in routine customer service calls, allowing staff to focus on in-store customers. The chatbot handled after-hours inquiries, effectively extending their customer service hours without additional labor costs.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A restaurant used AI-powered demand forecasting to optimize ingredient orders, reducing food waste by 25% while ensuring popular items were always available. The system paid for itself within three months through reduced waste and improved customer satisfaction.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A local services business leveraged AI for personalized email marketing, seeing their email engagement rates double and generating 30% more repeat business. The AI system identified the best times to reach each customer and recommended services based on their history.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-6">
              Addressing Common Concerns
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Many business owners worry about the cost, complexity, and ethical implications of AI. Here's the reality:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3 text-muted-foreground">
              <li><strong className="text-foreground">Cost:</strong> Many AI tools operate on affordable subscription models, often costing less than hiring additional staff. The ROI can be significant when you factor in time savings and improved efficiency.</li>
              <li><strong className="text-foreground">Complexity:</strong> Modern AI platforms are designed for business users, not data scientists. If you can use a smartphone, you can probably use most AI business tools.</li>
              <li><strong className="text-foreground">Job Displacement:</strong> AI should augment human capabilities, not replace workers. Use AI to handle repetitive tasks so your team can focus on creative, strategic work that drives growth.</li>
              <li><strong className="text-foreground">Data Privacy:</strong> Choose AI providers with strong data security and privacy practices. Ensure compliance with relevant regulations and be transparent with customers about how you use their data.</li>
            </ul>

            <blockquote className="border-l-4 border-accent pl-6 italic text-lg text-muted-foreground my-8">
              "AI is not about replacing the human touch in local business—it's about enhancing it. By automating routine tasks, AI frees you to focus on what truly differentiates your business: personal relationships and exceptional service."
            </blockquote>

            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-6">
              The Competitive Advantage
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Local businesses that embrace AI gain a significant competitive edge. They can provide faster service, more personalized experiences, and operate more efficiently—all while maintaining the personal touch that makes local businesses special.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The AI revolution is democratizing access to powerful business tools. Small businesses no longer need massive budgets to compete with larger competitors. With the right AI implementations, you can punch above your weight class.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At InnovateConsult, we help local businesses identify and implement AI solutions that deliver real results. Our approach is practical, affordable, and focused on your unique needs. Let's explore how AI can help your business grow.
            </p>
          </div>

          {/* Back Button */}
          <div className="mt-16 pt-8 border-t border-border">
            <Button 
              onClick={() => navigate('/blog')}
              variant="outline"
              className="group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Button>
          </div>
        </div>
      </article>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Post2;
