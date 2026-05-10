import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Users,
  MessageSquare,
  Calendar,
  Moon,
  Heart,
  Brain,
  Wallet,
  Clock,
  User,
  Settings,
  LogOut,
  ChevronRight,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoutModal from './LogoutModal';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/astrologers', label: 'Talk to Astrologers', icon: Users },
  { to: '/chat', label: 'Live Chat', icon: MessageSquare },
  { to: '/kundli', label: 'Kundli', icon: Calendar },
  { to: '/horoscope', label: 'Horoscope', icon: Moon },
  { to: '/match-making', label: 'Match Making', icon: Heart },
  { to: '/ai-chat', label: 'AI Predictions', icon: Brain },
  { to: '/wallet', label: 'Wallet', icon: Wallet },
  { to: '/history', label: 'History', icon: Clock },
  { to: '/profile', label: 'Profile', icon: User },
  { to: '/settings', label: 'Settings', icon: Settings },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-[#0a0f03] border-r border-white/[0.05]">
      {/* Brand */}
      <div className="p-8">
        <Link to="/" className="flex items-center gap-3 group" onClick={onClose}>
          <div className="w-10 h-10 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-accent rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
            <img src="/assets/logo.png" alt="Logo" className="w-full h-full object-contain relative z-10" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-white tracking-tight leading-none">
              Astro<span className="text-accent">Bless</span>
            </span>
            <span className="text-[8px] font-black text-gray-500 uppercase tracking-[0.2em] mt-1">Cosmic Guidance</span>
          </div>
        </Link>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-4 py-2 space-y-1.5 overflow-y-auto custom-scrollbar">
        {navItems.map((item) => {
          const active = isActive(item.to);
          const Icon = item.icon;
          
          return (
            <Link
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={`nav-link ${active ? 'nav-link-active' : ''}`}
            >
              <Icon className={`w-5 h-5 ${active ? 'text-accent' : 'text-gray-500'}`} />
              <span className="text-sm font-bold">{item.label}</span>
              {active && (
                <motion.div
                  layoutId="sidebarActive"
                  className="ml-auto w-1 h-4 bg-accent rounded-full"
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* User & Logout */}
      <div className="p-6 space-y-4 border-t border-white/[0.05]">
        <button
          onClick={() => setIsLogoutModalOpen(true)}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-rose-500 hover:bg-rose-500/10 transition-all font-bold text-sm group"
        >
          <LogOut className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span>Sign Out</span>
        </button>

        <Link
          to="/profile"
          onClick={onClose}
          className="flex items-center gap-3 p-3 bg-white/[0.03] border border-white/[0.05] rounded-2xl hover:bg-white/[0.06] transition-all"
        >
          <div className="w-9 h-9 rounded-xl overflow-hidden border border-white/10">
            <img src="https://i.pravatar.cc/100?u=Arjun" alt="User" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-black text-white truncate">Arjun Sharma</p>
            <p className="text-[10px] text-gray-500 font-medium">Premium</p>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-600" />
        </Link>
      </div>

      <LogoutModal 
        isOpen={isLogoutModalOpen} 
        onClose={() => setIsLogoutModalOpen(false)} 
        onConfirm={() => {
          setIsLogoutModalOpen(false);
          console.log('Logged out');
        }} 
      />
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-72 shrink-0 h-screen sticky top-0 z-40">
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[50] md:hidden"
            />
            <motion.aside
              initial={{ x: -288 }}
              animate={{ x: 0 }}
              exit={{ x: -288 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-72 z-[60] md:hidden"
            >
              <div className="relative h-full">
                <button
                  onClick={onClose}
                  className="absolute top-8 -right-12 p-2 bg-white/5 rounded-xl text-white md:hidden"
                >
                  <X className="w-6 h-6" />
                </button>
                {sidebarContent}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
