import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Search, Wallet, Menu, X, ChevronDown, User, LogOut, Settings } from 'lucide-react';

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

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="h-20 flex items-center justify-between px-4 md:px-12 bg-primary-bg/80 backdrop-blur-xl border-b border-white/[0.05] sticky top-0 z-50">
      {/* Brand & Logo */}
      <div className="flex items-center gap-12">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-accent rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
            <img src="/assets/logo.png" alt="Logo" className="w-8 h-8 object-contain relative z-10" />
          </div>
          <span className="text-xl font-black text-white tracking-tight hidden sm:block">
            Astro<span className="text-accent">Bless</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-accent ${
                isActive(link.to) ? 'text-accent' : 'text-gray-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Search Bar - Desktop Centered or Right */}
      <div className="hidden xl:flex items-center gap-3 bg-white/[0.03] border border-white/10 px-4 py-2.5 rounded-2xl w-full max-w-xs group focus-within:border-accent/40 transition-all">
        <Search className="w-4 h-4 text-gray-500 group-focus-within:text-accent" />
        <input 
          type="text" 
          placeholder="Search..." 
          className="bg-transparent border-none outline-none text-xs text-white placeholder:text-gray-700 w-full font-bold"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        {/* Wallet */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/wallet')}
          className="hidden md:flex items-center gap-2.5 px-4 py-2.5 bg-accent/10 border border-accent/20 rounded-2xl hover:bg-accent/20 transition-all"
        >
          <Wallet className="w-4 h-4 text-accent" />
          <span className="text-sm font-black text-accent tracking-tight">₹540.50</span>
        </motion.button>

        {/* Notifications */}
        <button className="relative p-3 bg-white/[0.03] border border-white/10 rounded-2xl text-gray-500 hover:text-white transition-all">
          <Bell className="w-5 h-5" />
          <span className="absolute top-3 right-3 w-2 h-2 bg-accent rounded-full border-2 border-[#0d1204]" />
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 pl-1 pr-3 py-1 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-white/[0.06] transition-all"
          >
            <div className="w-8 h-8 rounded-xl overflow-hidden border border-white/10">
              <img src="https://i.pravatar.cc/100?u=Arjun" alt="User" className="w-full h-full object-cover" />
            </div>
            <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isProfileOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-3 w-56 bg-secondary-surface border border-white/10 rounded-3xl p-3 shadow-2xl z-50 backdrop-blur-xl"
              >
                <div className="px-4 py-3 border-b border-white/5 mb-2">
                  <p className="text-xs font-black text-white">Arjun Sharma</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">Premium Plan</p>
                </div>
                <div className="space-y-1">
                  {[
                    { label: 'My Profile', icon: User, to: '/profile' },
                    { label: 'Settings', icon: Settings, to: '/settings' },
                    { label: 'Sign Out', icon: LogOut, to: '/login', color: 'text-rose-500' },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={() => setIsProfileOpen(false)}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white/5 transition-all ${item.color || 'text-gray-400'}`}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-3 bg-accent text-white rounded-2xl shadow-lg shadow-accent/20"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-20 left-0 right-0 bg-secondary-surface border-b border-white/10 p-6 z-40 lg:hidden overflow-hidden"
          >
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-black text-white flex items-center justify-between"
                >
                  {link.label}
                  <ChevronDown className="w-5 h-5 -rotate-90 text-gray-600" />
                </Link>
              ))}
              <div className="h-px bg-white/5 my-2" />
              <div className="flex items-center justify-between p-4 bg-accent/10 rounded-2xl border border-accent/20">
                <div className="flex items-center gap-3">
                  <Wallet className="w-5 h-5 text-accent" />
                  <span className="text-sm font-black text-white">Wallet Balance</span>
                </div>
                <span className="text-sm font-black text-accent">₹540.50</span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
