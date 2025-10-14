import { Zap } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        {/* Icon with gradient background */}
        <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center shadow-medium">
          <Zap className="h-6 w-6 text-accent-foreground" />
        </div>
        
        {/* Animated ring */}
        <div className="absolute inset-0 rounded-lg border-2 border-accent/30 animate-pulse"></div>
      </div>
      
      {/* Company name */}
      <div className="font-heading font-bold text-xl text-primary">
        <span className="text-primary">Innovate</span>
        <span className="text-accent">Consult</span>
      </div>
    </div>
  );
};

export default Logo;