import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, 
  MessageSquare, 
  Wallet, 
  Star, 
  ChevronRight, 
  Search, 
  Filter,
  CheckCheck,
  Zap,
  Info,
  Trash2
} from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'chat', label: 'Consultations' },
  { id: 'wallet', label: 'Wallet' },
  { id: 'system', label: 'Updates' },
];

const NOTIFICATIONS = [
  {
    id: 1,
    category: 'chat',
    icon: MessageSquare,
    title: 'Chat Request Accepted',
    desc: 'Acharya Vamsi is ready for your consultation. Join the room now for your session.',
    time: '2 mins ago',
    unread: true,
    color: 'bg-blue-500/20 text-blue-400',
  },
  {
    id: 2,
    category: 'wallet',
    icon: Wallet,
    title: 'Payment Successful',
    desc: '₹500 has been added to your wallet. Your new balance is ₹1,250.',
    time: '1 hour ago',
    unread: false,
    color: 'bg-emerald-500/20 text-emerald-400',
  },
  {
    id: 3,
    category: 'chat',
    icon: Star,
    title: 'Review your session',
    desc: 'How was your experience with Guru Daksh? Your feedback helps us improve.',
    time: 'Yesterday',
    unread: false,
    color: 'bg-amber-500/20 text-amber-400',
  },
  {
    id: 4,
    category: 'system',
    icon: Zap,
    title: 'Daily Horoscope Ready',
    desc: 'Check what the stars have in store for you today. Your lucky color is Orange!',
    time: 'Today, 8:00 AM',
    unread: true,
    color: 'bg-purple-500/20 text-purple-400',
  },
  {
    id: 5,
    category: 'system',
    icon: Info,
    title: 'Service Maintenance',
    desc: 'We will be undergoing brief maintenance tonight at 2 AM IST.',
    time: '3 hours ago',
    unread: false,
    color: 'bg-gray-500/20 text-gray-400',
  },
];

const Notifications: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [notifications, setNotifications] = useState(NOTIFICATIONS);

  const filteredNotifications = activeCategory === 'all' 
    ? notifications 
    : notifications.filter(n => n.category === activeCategory);

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div className="py-12 px-4 md:px-8 max-w-5xl mx-auto space-y-10 pb-32">
      {/* ── Header Section ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-accent/10 rounded-[22px] flex items-center justify-center shadow-2xl shadow-accent/10 border border-accent/20 relative group">
              <div className="absolute inset-0 bg-accent/20 rounded-[22px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Bell className="w-7 h-7 text-accent relative z-10" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">Alerts</h1>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.2em] mt-2 ml-1">Universal Hub</p>
            </div>
          </div>
          <p className="text-gray-400 text-lg font-medium max-w-md ml-1 leading-relaxed">
            Stay aligned with your cosmic updates, transaction alerts, and consultation requests.
          </p>
        </motion.div>
        
        <div className="flex items-center gap-3">
          <div className="relative group hidden sm:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-accent transition-colors" />
            <input 
              type="text" 
              placeholder="Search alerts..." 
              className="bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-sm text-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all w-80 font-medium"
            />
          </div>
          <button className="bg-white/5 hover:bg-white/10 text-white p-4 rounded-2xl border border-white/10 transition-all shadow-xl">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* ── Action Bar ── */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-6 border-y border-white/5">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar max-w-full">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all border ${
                activeCategory === cat.id 
                  ? 'bg-accent border-accent text-white shadow-lg shadow-accent/20' 
                  : 'bg-white/5 border-white/5 text-gray-500 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-4 shrink-0">
          <button 
            onClick={markAllRead}
            className="text-accent text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-accent/5 px-5 py-3 rounded-xl transition-all border border-accent/10 whitespace-nowrap"
          >
            <CheckCheck className="w-4 h-4" /> Mark all read
          </button>
          <button 
            onClick={() => setNotifications([])}
            className="text-gray-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-rose-500/5 hover:text-rose-500 px-5 py-3 rounded-xl transition-all border border-transparent whitespace-nowrap"
          >
            <Trash2 className="w-4 h-4" /> Clear All
          </button>
        </div>
      </div>

      {/* ── Notifications List ── */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredNotifications.map((notif, index) => (
            <motion.div
              layout
              key={notif.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`glass-card p-6 md:p-8 flex items-start gap-6 group cursor-pointer transition-all hover:bg-white/[0.04] border-l-[6px] relative overflow-hidden ${
                notif.unread ? 'border-l-accent' : 'border-l-transparent opacity-80 hover:opacity-100'
              }`}
            >
              {notif.unread && (
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]" />
              )}

              <div className={`w-16 h-16 rounded-[22px] flex items-center justify-center shrink-0 shadow-2xl border border-white/10 relative z-10 ${notif.color}`}>
                <notif.icon className="w-7 h-7" />
              </div>
              
              <div className="flex-1 min-w-0 pt-1.5 relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <h3 className={`font-black text-xl tracking-tight ${notif.unread ? 'text-white' : 'text-gray-400'}`}>
                      {notif.title}
                    </h3>
                    {notif.unread && (
                      <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest whitespace-nowrap bg-black/20 px-3 py-1 rounded-lg w-fit">
                    {notif.time}
                  </span>
                </div>
                
                <p className={`text-base leading-relaxed mb-8 max-w-2xl font-medium ${notif.unread ? 'text-gray-300' : 'text-gray-500'}`}>
                  {notif.desc}
                </p>
                
                <div className="flex items-center gap-8">
                  {notif.unread && (
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setNotifications(notifications.map(n => n.id === notif.id ? { ...n, unread: false } : n));
                      }}
                      className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                    >
                      <CheckCheck className="w-3.5 h-3.5" /> Mark Read
                    </button>
                  )}
                  <button className="text-[10px] font-black uppercase tracking-[0.2em] text-accent hover:text-orange-400 transition-colors flex items-center gap-2 group/btn">
                    Details <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteNotification(notif.id);
                    }}
                    className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600 hover:text-rose-500 transition-colors ml-auto"
                  >
                    Dismiss
                  </button>
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="w-4 h-4 border-t-2 border-r-2 border-accent/20 rounded-tr-xl" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredNotifications.length === 0 && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-40 glass-card border-dashed border-2 border-white/5 bg-white/[0.01]"
        >
          <div className="w-32 h-32 bg-white/5 rounded-[48px] flex items-center justify-center mx-auto mb-10 border border-white/5 relative group">
            <div className="absolute inset-0 bg-accent/10 rounded-[48px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <Bell className="w-14 h-14 text-gray-700 relative z-10" />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent/20 rounded-full blur-xl" />
          </div>
          <h3 className="text-4xl font-black text-white mb-4 tracking-tight">Cosmic Silence</h3>
          <p className="text-gray-500 max-w-sm mx-auto text-base font-medium leading-relaxed">
            Your universe is currently peaceful. We'll manifest an alert as soon as the stars align!
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory('all')}
            className="mt-12 px-10 py-4 bg-accent text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-2xl shadow-accent/20 transition-all"
          >
            Refresh History
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default Notifications;

