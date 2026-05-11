import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  FileText, 
  Search, 
  User
} from 'lucide-react';

const LOGO_URL = "/splash_logo.png";

const Header = () => {
  return (
    <header className="bg-secondary sticky top-0 z-50 shadow-md border-b border-white/5">
      {/* Top Row: Logo & Buttons */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center p-1 shadow-lg">
            <img src={LOGO_URL} alt="AstroBless Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-4xl font-black text-white tracking-tighter font-display">AstroBless</span>
        </Link>

        {/* Buttons Section */}
        <div className="flex items-center gap-2 lg:gap-3">
          <Link to="/chat" className="hidden lg:flex items-center gap-2 bg-primary text-secondary px-6 py-3 rounded-full font-black text-xs xl:text-sm shadow-xl hover:scale-105 transition-all active:scale-95">
            <MessageCircle size={18} />
            <span>Chat with Astrologer</span>
          </Link>
          
          <Link to="/numerology" className="hidden md:flex items-center gap-2 bg-primary text-secondary px-6 py-3 rounded-full font-black text-xs xl:text-sm shadow-xl hover:scale-105 transition-all active:scale-95 relative">
            <FileText size={18} />
            <span>Numerology Report</span>
            <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-accent rounded-full border-2 border-primary"></span>
          </Link>
          
          <Link to="/horoscope" className="flex items-center gap-2 bg-primary text-secondary px-6 py-3 rounded-full font-black text-xs xl:text-sm shadow-xl hover:scale-105 transition-all active:scale-95">
            <span>Horoscope</span>
          </Link>
          
          <button className="w-11 h-11 flex items-center justify-center bg-primary text-secondary rounded-full hover:scale-105 transition-all shrink-0 shadow-lg">
            <Search size={20} />
          </button>
          
          <Link to="/login" className="flex items-center gap-2 bg-white text-secondary px-5 py-2.5 rounded-full font-black text-sm shadow-xl hover:bg-gray-50 transition-all active:scale-95 shrink-0">
            <div className="w-7 h-7 rounded-full border-2 border-gray-100 flex items-center justify-center">
              <User size={16} />
            </div>
            <span>Login</span>
          </Link>
        </div>
      </div>

      {/* Bottom Row: Navigation Links */}
      <nav className="max-w-7xl mx-auto px-4 pb-4">
        <div className="flex justify-end items-center gap-8 lg:gap-12">
          {[
            { label: 'Kundli Matching', path: '/kundli-matching' },
            { label: 'View Kundli', path: '/view-kundli' },
            { label: 'Blog', path: '/blog' },
            { label: 'Live', path: '/live' }
          ].map((item) => (
            <Link 
              key={item.label} 
              to={item.path}
              className="text-gray-300 font-black text-sm hover:text-primary transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
