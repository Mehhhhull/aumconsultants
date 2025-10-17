const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      {/* Logo image */}
      <img
        src="src\assets\logo.jpg" // replace with your logo path
        alt="AUM Consultants Logo"
        className="w-10 h-12 object-contain"
      />

      {/* Company name */}
      <div className="font-heading font-bold text-xl text-black">
        <span className="text-primary">AUM</span>
        <span>{' '}</span>
        <span className="text-accent">Consultants</span>
      </div>
    </div>
  );
};

export default Logo;
