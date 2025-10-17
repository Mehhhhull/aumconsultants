import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      value: "aumconsultants@gmail.com",
      action: "mailto:aumconsultants@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      value: "+91 9910972300​",
      action: "tel:+919910972300"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      value: "Delhi,India",
      action: "#"
    }
  ];

  const benefits = [
    "Free initial consultation",
    "Customized solution proposals",
    "24-hour response guarantee",
    "No obligation quotes",
    "Ongoing support options"
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-primary">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Let's discuss how we can help your business thrive in the digital age. 
            Get in touch for a free consultation and personalized strategy session.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="professional-card bg-background animate-slide-left">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="professional-input"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="professional-input"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="professional-input"
                    placeholder="+91 1234567890"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="professional-input"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="professional-input resize-none"
                  placeholder="Tell us about your business and how we can help you..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full text-lg py-4"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>

            {/* Benefits */}
            <div className="mt-8 p-6 bg-secondary/30 rounded-xl">
              <h4 className="font-heading font-semibold text-foreground mb-4">
                What to Expect:
              </h4>
              <div className="space-y-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-3" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-right">
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-6">
                  Get in Touch
                </h3>
                <p className="text-primary-foreground/90 leading-relaxed mb-8">
                  We're here to help you navigate the digital transformation journey. 
                  Whether you're just starting out or looking to optimize existing processes, 
                  our team is ready to provide the guidance you need.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action}
                    className="flex items-start space-x-4 p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-accent rounded-lg text-accent-foreground group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-primary-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="text-primary-foreground/80">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Business Hours */}
              <div className="p-6 bg-white/10 rounded-xl">
                <h4 className="font-heading font-semibold text-primary-foreground mb-4">
                  Business Hours
                </h4>
                <div className="space-y-2 text-primary-foreground/80">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>11:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>By Appointment Only</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="p-6 bg-accent/20 rounded-xl border border-accent/30">
                <h4 className="font-heading font-semibold text-primary-foreground mb-2">
                  Quick Response Guaranteed
                </h4>
                <p className="text-primary-foreground/80 text-sm">
                  We typically respond to all inquiries within 2-4 hours during business hours, 
                  and within 24 hours on weekends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;