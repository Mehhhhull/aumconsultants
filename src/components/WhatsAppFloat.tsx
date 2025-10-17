import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about your consulting services. Could we schedule a consultation?");
    const phoneNumber = "9910972300"; // Replace with actual WhatsApp number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Chat with us on WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
      
      {/* Pulse ring */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
    </button>
  );
};

export default WhatsAppFloat;