import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import VisionMission from '@/components/VisionMission';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <VisionMission />
      <Services />
      <About />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
