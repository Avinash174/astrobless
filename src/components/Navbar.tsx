import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Search, Wallet, Menu, X, ChevronDown, User, LogOut, Settings, Sparkles } from 'lucide-react';

const NAV_LINKS = [
  { to: '/astrologers', label: 'Consult' },
  { to: '/chat', label: 'Live Chat' },
  { to: '/kundli', label: 'Kundli' },
  { to: '/horoscope', label: 'Horoscope' },
  { to: '/ai-chat', label: 'AI Prediction' },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`h-20 flex items-center justify-between px-4 md:px-12 sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-primary-bg/90 backdrop-blur-2xl border-b border-white/10 py-4 h-16' 
          : 'bg-transparent border-b border-transparent py-6 h-20'
      }`}
    >
      {/* Brand & Logo */}
      <div className="flex items-center gap-12">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-accent rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="w-8 h-8 bg-accent/20 rounded-xl flex items-center justify-center border border-accent/30 group-hover:border-accent/60 transition-all">
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
          </div>
          <span className="text-xl font-black text-white tracking-tight hidden sm:block">
            Astro<span className="text-accent">Bless</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all relative group py-2 ${
                isActive(link.to) ? 'text-accent' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 h-px bg-accent transition-all duration-300 ${isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
        </nav>
      </div>

      {/* Search Bar - Desktop */}
      <div className="hidden xl:flex items-center gap-3 bg-white/[0.03] border border-white/5 hover:border-white/10 px-5 py-2.5 rounded-2xl w-full max-w-xs group focus-within:border-accent/40 transition-all shadow-inner">
        <Search className="w-4 h-4 text-gray-600 group-focus-within:text-accent" />
        <input 
          type="text" 
          placeholder="Search for cosmic guidance..." 
          className="bg-transparent border-none outline-none text-[11px] text-white placeholder:text-gray-700 w-full font-bold uppercase tracking-wider"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        {/* Wallet */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/wallet')}
          className="hidden md:flex items-center gap-2.5 px-5 py-2.5 bg-accent/10 border border-accent/20 rounded-2xl hover:bg-accent/20 transition-all group"
        >
          <Wallet className="w-4 h-4 text-accent group-hover:rotate-12 transition-transform" />
          <span className="text-xs font-black text-white tracking-tight">₹540.50</span>
        </motion.button>

        {/* Notifications */}
        <button className="relative p-3 bg-white/[0.03] border border-white/5 rounded-2xl text-gray-500 hover:text-white transition-all hover:bg-white/5">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-accent rounded-full border-2 border-[#192309] animate-pulse" />
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 pl-1 pr-3 py-1 bg-white/[0.03] border border-white/5 rounded-2xl hover:bg-white/[0.06] transition-all"
          >
            <div className="w-8 h-8 rounded-xl overflow-hidden border border-white/10">
              <img src="https://i.pravatar.cc/100?u=Arjun" alt="User" className="w-full h-full object-cover" />
            </div>
            <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isProfileOpen && (
              <>
                <div className="fixed inset-0 z-[-1]" onClick={() => setIsProfileOpen(false)} />
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                  className="absolute right-0 mt-4 w-64 bg-secondary-surface/95 border border-white/10 rounded-[2rem] p-4 shadow-2xl z-50 backdrop-blur-2xl"
                >
                  <div className="px-4 py-4 border-b border-white/5 mb-2">
                    <div className="flex items-center gap-3 mb-1">
                      <p className="text-sm font-black text-white">Arjun Sharma</p>
                      <span className="bg-accent/10 text-[8px] font-black text-accent px-2 py-0.5 rounded-full border border-accent/20 uppercase">Pro</span>
                    </div>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Aura Level: Master</p>
                  </div>
                  <div className="space-y-1">
                    {[
                      { label: 'Spiritual Profile', icon: User, to: '/profile' },
                      { label: 'Cosmic Settings', icon: Settings, to: '/settings' },
                      { label: 'Ethereal Exit', icon: LogOut, to: '/login', color: 'text-rose-500' },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        onClick={() => setIsProfileOpen(false)}
                        className={`flex items-center gap-4 px-4 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white/5 transition-all ${item.color || 'text-gray-400 hover:text-white'}`}
                      >
                        <item.icon className="w-4 h-4" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-3 bg-accent text-white rounded-2xl shadow-xl shadow-accent/20 active:scale-90 transition-transform"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-primary-bg z-[100] lg:hidden flex flex-col"
          >
            <div className="h-20 flex items-center justify-between px-6 border-b border-white/5">
               <span className="text-xl font-black text-white tracking-tighter uppercase">Menu</span>
               <button onClick={() => setIsMobileMenuOpen(false)} className="p-3 bg-white/5 rounded-2xl">
                 <X className="w-6 h-6 text-white" />
               </button>
            </div>
            
            <nav className="flex-1 px-6 py-12 space-y-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-black text-white flex items-center justify-between tracking-tighter"
                  >
                    {link.label}
                    <ChevronDown className="w-8 h-8 -rotate-90 text-accent" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="p-6 border-t border-white/5 bg-secondary-surface/30">
              <div className="flex items-center justify-between p-6 bg-accent rounded-[2rem] shadow-2xl shadow-accent/30">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Wallet className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-white/60 uppercase tracking-widest">Balance</p>
                    <p className="text-2xl font-black text-white tracking-tighter">₹540.50</p>
                  </div>
                </div>
                <button className="bg-white text-accent px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl">Top Up</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
