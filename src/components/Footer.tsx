import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Business Consulting",
    "Digital Transformation",
    "AI Integration",
    "Government Schemes",
    "Strategy Planning"
  ];

  const scrollToSection = (href: string) => {
    const elementId = href.replace('#', '');
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="font-heading font-bold text-2xl mb-4">
              InnovateConsult
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Empowering MSMEs and local businesses through strategic digital transformation, 
              AI adoption, and practical consulting solutions that deliver measurable results.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <a href="mailto:hello@innovateconsult.in" className="hover:text-accent transition-colors">
                  hello@innovateconsult.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <a href="tel:+919876543210" className="hover:text-accent transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="#" 
                className="p-3 bg-white/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-white/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-white/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-primary-foreground/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-white/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading font-semibold text-lg mb-2">
                Stay Updated
              </h3>
              <p className="text-primary-foreground/80">
                Get the latest insights on digital transformation and business growth strategies.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              />
              <button className="btn-accent px-6 py-3 rounded-lg font-medium hover:shadow-medium transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center text-primary-foreground/60 mb-4">
            <div className="text-sm">
              © {currentYear} InnovateConsult. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
          
          <div className="text-center text-sm text-primary-foreground/40 border-t border-white/10 pt-4">
            Designed and developed by <span className="text-accent hover:text-accent/80 transition-colors">ThreesixtySpace</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;