const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      {/* Logo image */}
      <img
        src="/path-to-your-logo.png" // replace with your logo path
        alt="AUM Consultants Logo"
        className="w-10 h-10 object-contain"
      />

      {/* Company name */}
      <div className="font-heading font-bold text-xl text-black">
        AUM Consultants
      </div>
    </div>
  );
};

export default Logo;
