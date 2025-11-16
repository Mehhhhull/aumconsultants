import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ShareButton from '@/components/ShareButton';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';

const Post3 = () => {
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
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80" 
          alt="Government Schemes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-max px-4">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center max-w-4xl mx-auto">
              Leveraging Government Schemes for Small Enterprises
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="section-padding">
        <div className="max-w-4xl mx-auto px-4">
          {/* Meta Info */}
          <div className="flex items-center justify-between gap-6 mb-8 pb-6 border-b border-border flex-wrap">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-5 h-5" />
                <span>March 5, 2024</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5" />
                <span>7 min read</span>
              </div>
            </div>
            <ShareButton title="Leveraging Government Schemes for Small Enterprises" />
          </div>

          {/* Article Body */}
          <div ref={contentRef} className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              The Indian government offers numerous schemes, subsidies, and support programs designed to help small enterprises thrive. However, many business owners remain unaware of these opportunities or find the application process overwhelming. This comprehensive guide will help you navigate the landscape of government support available for your business.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-6">
              Understanding the MSME Landscape
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Micro, Small, and Medium Enterprises (MSMEs) form the backbone of the Indian economy, contributing significantly to GDP, employment, and exports. Recognizing their importance, the government has created a robust ecosystem of support mechanisms to help these businesses overcome challenges and grow sustainably.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The first step in accessing government support is obtaining MSME registration through the Udyam Registration portal. This free, online process provides you with a unique identification number and unlocks access to various schemes and benefits.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-6">
              Key Government Schemes for MSMEs
            </h2>

            <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
              1. Prime Minister's Employment Generation Programme (PMEGP)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              PMEGP is a credit-linked subsidy program that provides financial assistance for setting up new micro-enterprises in the non-farm sector. The scheme offers subsidies ranging from 15% to 35% of the project cost, with the remaining amount available as bank loans at favorable terms.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground">Eligibility:</strong> Individuals above 18 years of age with at least 8th grade education for projects costing above ₹10 lakh in manufacturing and ₹5 lakh in business/service sectors.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground">Maximum Project Cost:</strong> ₹50 lakh for manufacturing and ₹20 lakh for service sectors in urban areas; ₹25 lakh for manufacturing and ₹10 lakh for service sectors in rural areas.
            </p>

            <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
              2. Credit Guarantee Fund Scheme for Micro and Small Enterprises (CGTMSE)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              One of the biggest challenges for small businesses is providing collateral for loans. CGTMSE addresses this by providing credit guarantees to banks, enabling MSMEs to access collateral-free loans up to ₹2 crore.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground">Coverage:</strong> The scheme covers 75% to 85% of the loan amount, significantly reducing the risk for lenders and making it easier for MSMEs to secure financing for both new ventures and existing business expansion.
            </p>

            <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
              3. Credit Linked Capital Subsidy Scheme (CLCSS)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              CLCSS encourages technology upgradation in MSMEs by providing a 15% capital subsidy (limited to ₹15 lakh) on institutional finance availed for technology upgradation. This scheme helps businesses modernize their operations and improve competitiveness.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground">Eligible Activities:</strong> Purchase of plant and machinery with improved technology, technical civil works, and technology-related services essential for product adaptation.
            </p>

            <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
              4. Stand-Up India Scheme
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Designed to promote entrepreneurship among women and Scheduled Castes/Scheduled Tribes, Stand-Up India facilitates bank loans between ₹10 lakh and ₹1 crore for greenfield enterprises in manufacturing, services, or trading sectors.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground">Special Features:</strong> Composite loans covering both term loan and working capital, with repayment tenures of up to 7 years. The scheme also provides handholding support through convergence with other government schemes.
            </p>

            <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
              5. Mudra Loan Scheme
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Pradhan Mantri Mudra Yojana (PMMY) provides loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises through three categories:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3 text-muted-foreground">
              <li><strong className="text-foreground">Shishu:</strong> Loans up to ₹50,000</li>
              <li><strong className="text-foreground">Kishore:</strong> Loans from ₹50,001 to ₹5 lakh</li>
              <li><strong className="text-foreground">Tarun:</strong> Loans from ₹5,00,001 to ₹10 lakh</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              These loans are collateral-free and have lower interest rates compared to conventional business loans, making them accessible to entrepreneurs at various stages of business development.
            </p>

            <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
              6. Technology and Quality Upgradation Support (TEQUP)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              TEQUP helps MSMEs improve their manufacturing capabilities through technology adoption and quality certification. The scheme provides reimbursement of up to 75% for obtaining various certifications like ISO, CE marking, and industry-specific quality standards.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-6">
              State-Specific Schemes and Incentives
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In addition to central government schemes, most states offer their own MSME support programs. These can include:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3 text-muted-foreground">
              <li><strong className="text-foreground">Capital Investment Subsidies:</strong> Partial reimbursement of capital investment in plant, machinery, and infrastructure</li>
              <li><strong className="text-foreground">Interest Subsidies:</strong> Reduction in interest rates on term loans for a specified period</li>
              <li><strong className="text-foreground">Power Tariff Subsidies:</strong> Reduced electricity rates for manufacturing units</li>
              <li><strong className="text-foreground">Stamp Duty and Registration Fee Exemptions:</strong> Waivers on property registration for industrial purposes</li>
              <li><strong className="text-foreground">Employment Generation Incentives:</strong> Financial support based on local employment created</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Check with your State Industrial Development Corporation (SIDC) or State MSME Department to understand available benefits in your location.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-6">
              How to Successfully Apply for Government Schemes
            </h2>

            <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
              Step 1: Complete Udyam Registration
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Register your enterprise on the Udyam Registration portal (udyamregistration.gov.in). This self-declaration process requires your Aadhaar number and basic business details. The registration is permanent, with lifetime validity and no renewal requirements.
            </p>

            <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
              Step 2: Prepare a Comprehensive Business Plan
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Most schemes require a detailed project report or business plan. This should include:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3 text-muted-foreground">
              <li>Executive summary of your business</li>
              <li>Market analysis and competitive landscape</li>
              <li>Product/service details and unique value proposition</li>
              <li>Financial projections for 3-5 years</li>
              <li>Implementation timeline</li>
              <li>Details of promoters and their expertise</li>
            </ul>

            <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
              Step 3: Gather Required Documentation
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Common documents required for most schemes include:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3 text-muted-foreground">
              <li>Udyam Registration certificate</li>
              <li>Identity and address proof of promoters</li>
              <li>Bank statements (6-12 months)</li>
              <li>Income tax returns (if applicable)</li>
              <li>Project report/DPR</li>
              <li>Quotations for machinery/equipment</li>
              <li>Land/building documents (owned or lease agreement)</li>
              <li>Licenses and permits relevant to your industry</li>
            </ul>

            <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
              Step 4: Submit Application and Follow Up
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Most schemes now offer online application processes. Submit your application with all required documents and maintain regular follow-up with the implementing agency. Keep copies of all submissions and note down reference numbers for tracking.
            </p>

            <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
              Step 5: Comply with Scheme Requirements
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Once approved, ensure strict compliance with scheme guidelines. This includes:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3 text-muted-foreground">
              <li>Implementing the project as per approved plan</li>
              <li>Maintaining proper accounts and records</li>
              <li>Submitting periodic progress reports</li>
              <li>Facilitating inspections and audits</li>
              <li>Using funds only for approved purposes</li>
            </ul>

            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-6">
              Common Mistakes to Avoid
            </h2>
            <ul className="list-disc pl-6 mb-6 space-y-3 text-muted-foreground">
              <li><strong className="text-foreground">Incomplete Applications:</strong> Ensure all required documents are attached and forms are completely filled before submission</li>
              <li><strong className="text-foreground">Unrealistic Projections:</strong> Provide credible, well-researched financial projections based on market reality</li>
              <li><strong className="text-foreground">Ignoring Eligibility Criteria:</strong> Carefully review scheme requirements before applying to avoid rejection</li>
              <li><strong className="text-foreground">Poor Documentation:</strong> Maintain organized, legible copies of all documents</li>
              <li><strong className="text-foreground">Lack of Follow-up:</strong> Stay engaged with the process and respond promptly to queries</li>
            </ul>

            <blockquote className="border-l-4 border-accent pl-6 italic text-lg text-muted-foreground my-8">
              "Government schemes are not handouts—they are strategic investments in India's economic future. By accessing these programs, you're not just benefiting your business; you're contributing to national growth and employment generation."
            </blockquote>

            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-6">
              Maximizing Benefits Through Strategic Planning
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Many businesses can benefit from multiple schemes simultaneously. For example, you might:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3 text-muted-foreground">
              <li>Use CGTMSE for collateral-free financing</li>
              <li>Apply for CLCSS subsidies for technology upgradation</li>
              <li>Access TEQUP support for quality certifications</li>
              <li>Leverage state-specific incentives for capital investment</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Strategic planning can help you layer multiple benefits, significantly reducing your capital requirements and improving project viability.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-6">
              Getting Expert Help
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              While many schemes can be accessed independently, professional guidance can significantly improve your success rate. Business consultants familiar with government schemes can help you:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3 text-muted-foreground">
              <li>Identify the most relevant schemes for your business</li>
              <li>Prepare comprehensive project reports and applications</li>
              <li>Navigate the approval process efficiently</li>
              <li>Ensure compliance with scheme requirements</li>
              <li>Maximize benefits through strategic scheme combinations</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At InnovateConsult, we specialize in helping MSMEs access government schemes and subsidies. Our team stays updated on the latest programs and has successfully helped numerous businesses secure funding and support. We handle the complexities so you can focus on building your business.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Government schemes represent a significant opportunity for small enterprises to overcome financial and technical barriers to growth. Don't let these opportunities go untapped—with the right approach and expert guidance, you can leverage these programs to accelerate your business success.
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

export default Post3;
