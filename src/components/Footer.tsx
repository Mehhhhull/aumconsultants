import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
    { name: "Blogs", href: "#blogs" },
  ];

  const services = [
    "Strategic Content Consulting",
    "Design & Experience Strategy",
    "Analytics & Intelligence",
    "Consulting & Digital Transformation",
  ];

  const scrollToSection = (href: string) => {
    const elementId = href.replace("#", "");
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
              AUM Consultants
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              AUM Consultants blends research, creativity, and digital
              intelligence to help brands build influence, trust, and measurable
              growth.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <a
                  href="mailto:info.aumconsultants@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  info.aumconsultants@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <a
                  href="tel:+919910972300"
                  className="hover:text-accent transition-colors"
                >
                  +91 9910972300
                  <br />
                  +91 9999632739
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span>Delhi, India</span>
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

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center text-primary-foreground/60 mb-4">
            <div className="text-sm">
              © {currentYear} AUM Consultants. All rights reserved.
            </div>
          </div>

          {/* Developer Credit with Insta + LinkedIn */}
          <div className="flex items-center justify-center gap-2 text-xs text-primary-foreground/40 border-t border-white/10 pt-2">
            <span>
              Designed & developed by{"  "}
              <span className="text-accent hover:text-accent/80 transition-colors">
                MKS
              </span>
            </span>

            <div className="flex items-center gap-1">
              <a
                href="https://www.instagram.com/mehulkumarsinghh?igsh=Z28zZXlqMmlwdmV2"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 bg-white/10 rounded-md hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-3 w-3" />
              </a>

              <a
                href="https://www.linkedin.com/in/mehul-kumar-singh-655b5432b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 bg-white/10 rounded-md hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
