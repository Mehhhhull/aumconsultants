import logo from '@/assets/logo.jpg'; // make sure path is correct

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      {/* Logo image */}
      <img
        src={logo}
        alt="AUM Consultants Logo"
        className="w-10 h-12 object-contain"
      />

      {/* Company name */}
      <div className="font-heading font-bold text-xl text-black">
        <span>AUM</span>
        <span>{' '}</span>
        <span>Consultants</span>
      </div>
    </div>
  );
};

export default Logo;
