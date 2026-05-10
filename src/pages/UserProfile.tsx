import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wallet,
  Heart,
  Settings,
  LogOut,
  ChevronRight,
  CreditCard,
  History as HistoryIcon,
  Bell,
  ShieldCheck,
  Star,
  Phone,
  Calendar,
  Share2,
  Trophy,
  Gift,
  ArrowRight,
  LayoutDashboard,
  FileText,
  Clock,
  Plus,
  Trash2,
  ExternalLink,
  MapPin,
  MessageSquare,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';

const USER = {
  name: 'Arjun Sharma',
  email: 'user@example.com',
  joined: 'Jan 2024',
  location: 'Mumbai, India',
  phone: '+91 98765 43210',
  bio: 'Exploring the cosmic connections between the stars and our daily lives.',
};

const UserProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'activity' | 'orders' | 'saved' | 'kundlis' | 'refer' | 'help'>('activity');

  const stats = [
    { icon: HistoryIcon, label: 'Chats', value: '12', color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { icon: Heart, label: 'Saved', value: '05', color: 'text-rose-400', bg: 'bg-rose-400/10' },
    { icon: Star, label: 'Reviews', value: '08', color: 'text-amber-400', bg: 'bg-amber-400/10' },
    { icon: Phone, label: 'Calls', value: '03', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
  ];

  const recentConsultations = [
    { name: 'Acharya Vamsi', date: 'Yesterday, 10:30 PM', duration: '15 min', cost: '₹375', status: 'Completed', type: 'Chat' },
    { name: 'Guru Daksh', date: '25 Apr, 04:15 PM', duration: '10 min', cost: '₹500', status: 'Completed', type: 'Call' },
    { name: 'Astro Sneha', date: '20 Apr, 06:00 PM', duration: '20 min', cost: '₹400', status: 'Completed', type: 'Chat' },
  ];

  const tabs = [
    { id: 'activity', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'orders', label: 'Consultations', icon: Clock },
    { id: 'saved', label: 'Favorites', icon: Heart },
    { id: 'kundlis', label: 'My Kundlis', icon: FileText },
    { id: 'refer', label: 'Refer & Earn', icon: Gift },
    { id: 'help', label: 'Help & Support', icon: Phone },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-8 md:py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-8 pb-32">
      {/* ── Page Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
      >
        <div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            My <span className="text-accent">Astro Universe</span>
          </h1>
          <div className="flex items-center gap-3 mt-2 text-gray-400 text-sm font-medium">
            <span className="flex items-center gap-1.5 px-2 py-0.5 bg-white/5 rounded-md border border-white/10">
              <Calendar className="w-3.5 h-3.5 text-accent" />
              Member Since {USER.joined}
            </span>
            <span className="w-1 h-1 bg-gray-600 rounded-full" />
            <span className="flex items-center gap-1.5 px-2 py-0.5 bg-white/5 rounded-md border border-white/10 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Account
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/notifications">
            <button className="glass-card p-3 text-gray-400 hover:text-white transition-all relative group">
              <Bell className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-accent rounded-full border-2 border-[#192309] animate-pulse" />
            </button>
          </Link>
          <Link to="/edit-profile">
            <button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-accent/20 transition-all flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Edit Profile
            </button>
          </Link>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ── Left Column: Identity & Navigation ── */}
        <div className="lg:col-span-4 space-y-6">
          {/* Identity Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-8 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-accent/50 via-accent to-accent/50" />
            
            <div className="relative group mx-auto mb-6 w-32 h-32">
              <div className="absolute inset-0 bg-accent blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative w-full h-full bg-secondary-surface border-4 border-white/5 rounded-[40px] overflow-hidden shadow-2xl transition-transform group-hover:scale-105 duration-500">
                <img src="https://i.pravatar.cc/150?u=Arjun" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>

            <h2 className="text-2xl font-black text-white mb-1 tracking-tight">{USER.name}</h2>
            <p className="text-gray-400 font-medium text-sm mb-6">{USER.email}</p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-8">
               <span className="px-3 py-1.5 bg-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-400 border border-white/5 flex items-center gap-1.5">
                 <MapPin className="w-3 h-3 text-accent" /> {USER.location}
               </span>
               <span className="px-3 py-1.5 bg-accent/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-accent border border-accent/20">
                 Elite Member
               </span>
            </div>

            <div className="space-y-2">
              <Link to="/edit-profile" className="flex items-center justify-between w-full p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all text-left border border-white/5 group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-accent/10 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-xs font-black text-white uppercase tracking-wider">Privacy & Security</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-600 group-hover:translate-x-1 transition-all" />
              </Link>
              <button className="flex items-center gap-4 w-full p-4 text-rose-400/80 hover:text-rose-400 hover:bg-rose-500/5 rounded-2xl transition-all group">
                <div className="w-8 h-8 rounded-xl bg-rose-500/10 flex items-center justify-center">
                  <LogOut className="w-4 h-4" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest">Logout Session</span>
              </button>
            </div>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="glass-card p-4"
          >
             <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4 ml-4">Navigation Menu</h3>
             <div className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center justify-between w-full p-4 rounded-2xl transition-all group ${
                      activeTab === tab.id 
                      ? 'bg-accent text-white shadow-xl shadow-accent/20' 
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-xl transition-colors ${activeTab === tab.id ? 'bg-white/20' : 'bg-white/5 group-hover:bg-white/10'}`}>
                        <tab.icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-black uppercase tracking-wider">{tab.label}</span>
                    </div>
                    {activeTab === tab.id && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                  </button>
                ))}
             </div>
          </motion.div>
        </div>

        {/* ── Right Column: Tab Content ── */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            {activeTab === 'activity' && (
              <motion.div
                key="activity"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="space-y-6"
              >
                {/* Wallet Hero */}
                <motion.div variants={itemVariants} className="relative bg-gradient-to-br from-[#1F2E0A] to-[#192309] border border-white/10 rounded-[40px] p-8 md:p-10 text-white overflow-hidden group shadow-2xl">
                  {/* Decorative Elements */}
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-[80px] group-hover:bg-accent/30 transition-all duration-700" />
                  <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />
                  
                  <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left space-y-6">
                      <div>
                        <div className="flex items-center gap-2 text-accent mb-3 justify-center md:justify-start">
                           <Wallet className="w-5 h-5" />
                           <p className="text-xs font-black uppercase tracking-[0.2em]">Available Balance</p>
                        </div>
                        <h3 className="text-5xl md:text-7xl font-black tracking-tight text-white">₹500.00</h3>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        <Link to="/add-money">
                          <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-accent/20 transition-all flex items-center gap-2">
                            <Plus className="w-4 h-4" /> Top Up Wallet
                          </button>
                        </Link>
                        <Link to="/wallet">
                          <button className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest border border-white/10 transition-all">
                            History
                          </button>
                        </Link>
                      </div>
                    </div>
                    
                    <div className="relative">
                       <div className="w-40 h-40 bg-white/5 rounded-[48px] flex items-center justify-center backdrop-blur-2xl border border-white/10 shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                          <div className="w-24 h-24 bg-accent/20 rounded-[32px] flex items-center justify-center">
                             <CreditCard className="w-12 h-12 text-accent opacity-80" />
                          </div>
                       </div>
                       {/* Floating Badges */}
                       <div className="absolute -top-4 -right-4 bg-[#1F2E0A] border border-white/10 px-3 py-1 rounded-full text-[10px] font-black text-accent shadow-xl">
                         PREMIUM
                       </div>
                    </div>
                  </div>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {stats.map((s, i) => (
                    <motion.div 
                      key={i} 
                      variants={itemVariants}
                      whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.05)' }}
                      className="glass-card flex flex-col items-center gap-1 text-center py-8 px-4 transition-all duration-300"
                    >
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${s.bg} mb-3`}>
                        <s.icon className={`w-5 h-5 ${s.color}`} />
                      </div>
                      <p className="text-3xl font-black text-white leading-none mb-1">{s.value}</p>
                      <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">{s.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Recent Activity */}
                <motion.div variants={itemVariants} className="glass-card p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-xl font-black text-white tracking-tight">Recent Activity</h3>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Latest consultations</p>
                    </div>
                    <button 
                      onClick={() => setActiveTab('orders')}
                      className="text-accent text-xs font-black uppercase tracking-widest hover:underline flex items-center gap-2 group"
                    >
                      Full History <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  <div className="space-y-3">
                    {recentConsultations.map((item, i) => (
                      <div
                        key={i}
                        className="flex flex-col sm:flex-row items-center justify-between p-5 rounded-3xl bg-white/5 border border-transparent hover:border-white/10 hover:bg-white/10 transition-all group"
                      >
                        <div className="flex items-center gap-4 w-full sm:w-auto mb-4 sm:mb-0">
                          <div className="w-14 h-14 bg-secondary-surface rounded-2xl flex items-center justify-center border border-white/5 overflow-hidden group-hover:scale-105 transition-transform">
                             <img src={`https://i.pravatar.cc/80?u=${item.name}`} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-black text-white group-hover:text-accent transition-colors">{item.name}</p>
                              <span className={`px-2 py-0.5 rounded-md text-[8px] font-black uppercase ${item.type === 'Chat' ? 'bg-blue-500/10 text-blue-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
                                {item.type}
                              </span>
                            </div>
                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight mt-1">{item.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full sm:w-auto sm:gap-12">
                          <div className="text-left sm:text-right">
                             <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest">{item.status}</p>
                             <p className="text-[10px] text-gray-500 font-bold uppercase">{item.duration}</p>
                          </div>
                          <p className="text-xl font-black text-white">{item.cost}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}

            {activeTab === 'orders' && (
              <motion.div
                key="orders"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                className="glass-card p-8 min-h-[600px]"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                  <div>
                    <h3 className="text-2xl font-black text-white tracking-tight">Order History</h3>
                    <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-1">Manage your transactions</p>
                  </div>
                  <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/10">
                    {['All', 'Chats', 'Calls'].map((filter) => (
                      <button 
                        key={filter}
                        className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${filter === 'All' ? 'bg-accent text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[...recentConsultations, ...recentConsultations].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="p-6 rounded-[32px] bg-white/5 border border-white/5 hover:border-accent/30 hover:bg-white/10 transition-all group"
                    >
                      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex gap-5 w-full md:w-auto">
                          <div className="w-16 h-16 bg-secondary-surface rounded-2xl flex items-center justify-center border border-white/5 overflow-hidden group-hover:scale-105 transition-transform shrink-0">
                             <img src={`https://i.pravatar.cc/100?u=${item.name + i}`} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1.5">
                              <h4 className="text-lg font-black text-white group-hover:text-accent transition-colors">{item.name}</h4>
                              <span className="px-2 py-0.5 bg-accent/10 text-accent text-[8px] font-black uppercase rounded tracking-widest border border-accent/20">Certified</span>
                            </div>
                            <div className="flex flex-wrap items-center gap-4">
                               <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest flex items-center gap-1.5">
                                 <Calendar className="w-3 h-3 text-accent" /> {item.date}
                               </p>
                               <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest flex items-center gap-1.5">
                                 <Clock className="w-3 h-3 text-accent" /> {item.duration}
                               </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full md:w-auto md:flex-col md:items-end gap-3 border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
                          <div className="md:text-right">
                            <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Fee Paid</p>
                            <p className="text-2xl font-black text-white">{item.cost}</p>
                          </div>
                          <button className="px-6 py-2.5 bg-white/10 hover:bg-accent text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-xl transition-all flex items-center gap-2 border border-white/10">
                            Invoice <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'saved' && (
              <motion.div
                key="saved"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="glass-card p-8 min-h-[600px]"
              >
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <h3 className="text-2xl font-black text-white tracking-tight">Favorite Experts</h3>
                    <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-1">Quick access to top picks</p>
                  </div>
                  <button className="text-accent text-xs font-black uppercase tracking-widest hover:underline">Clear All</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { name: 'Acharya Vamsi', exp: '15+ Years', rating: '4.9', category: 'Vedic Astrology', price: '₹25/min', img: 'https://i.pravatar.cc/100?u=vamsi' },
                    { name: 'Guru Daksh', exp: '12+ Years', rating: '4.8', category: 'Palmistry', price: '₹50/min', img: 'https://i.pravatar.cc/100?u=daksh' },
                    { name: 'Astro Sneha', exp: '8+ Years', rating: '4.7', category: 'Tarot Reader', price: '₹30/min', img: 'https://i.pravatar.cc/100?u=sneha' },
                  ].map((astro, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white/5 border border-white/10 rounded-[32px] p-6 hover:border-accent/40 hover:bg-white/10 transition-all group"
                    >
                      <div className="flex items-center gap-5 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-secondary-surface overflow-hidden border border-white/5 shadow-xl group-hover:scale-105 transition-transform shrink-0">
                          <img src={astro.img} alt={astro.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg font-black text-white truncate group-hover:text-accent transition-colors">{astro.name}</h4>
                          <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest truncate">{astro.category}</p>
                        </div>
                        <button className="p-2.5 bg-rose-500/10 text-rose-500 rounded-xl hover:bg-rose-500/20 transition-colors">
                           <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between bg-black/20 p-4 rounded-2xl border border-white/5 mb-6">
                         <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 text-amber-500 rounded-xl">
                            <Star className="w-3.5 h-3.5 fill-amber-500" />
                            <span className="text-xs font-black">{astro.rating}</span>
                         </div>
                         <div className="text-right">
                           <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest">Pricing</p>
                           <p className="text-lg font-black text-white">{astro.price}</p>
                         </div>
                      </div>
                      
                      <button className="w-full bg-accent hover:bg-accent/90 text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-accent/20 transition-all flex items-center justify-center gap-2">
                        <HistoryIcon className="w-4 h-4" /> Start Reading
                      </button>
                    </motion.div>
                  ))}
                  
                  {/* Empty Slot */}
                  <div className="border-2 border-dashed border-white/10 rounded-[32px] p-6 flex flex-col items-center justify-center text-center opacity-40 hover:opacity-100 transition-opacity cursor-pointer group">
                     <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Plus className="w-6 h-6 text-gray-400" />
                     </div>
                     <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Discover More Experts</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'kundlis' && (
              <motion.div
                key="kundlis"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="glass-card p-8 min-h-[600px]"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                  <div>
                    <h3 className="text-2xl font-black text-white tracking-tight">Saved Kundlis</h3>
                    <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-1">Birth charts & predictions</p>
                  </div>
                  <button className="bg-accent hover:bg-accent/90 text-white px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-accent/20 transition-all flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Create New Chart
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: 'Self Profile', date: '15 May 1995', time: '10:30 AM', location: 'New York, US' },
                    { name: 'Sister - Ria', date: '22 Dec 2001', time: '04:15 PM', location: 'London, UK' },
                  ].map((kundli, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ scale: 1.02 }}
                      className="p-6 bg-white/5 border border-white/10 rounded-[32px] hover:border-accent/40 hover:bg-white/10 transition-all group relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                         <Trash2 className="w-4 h-4 text-rose-400 cursor-pointer hover:scale-110 transition-transform" />
                      </div>
                      
                      <div className="flex gap-5 mb-6">
                        <div className="w-16 h-16 rounded-[24px] bg-accent/10 flex items-center justify-center border border-accent/20 group-hover:rotate-6 transition-transform">
                          <FileText className="w-8 h-8 text-accent" />
                        </div>
                        <div>
                          <h4 className="text-lg font-black text-white mb-1 group-hover:text-accent transition-colors">{kundli.name}</h4>
                          <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest flex items-center gap-1.5">
                            <MapPin className="w-3 h-3" /> {kundli.location}
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 mb-6">
                         <div className="bg-black/20 p-3 rounded-2xl border border-white/5">
                            <p className="text-[8px] text-gray-500 uppercase font-black mb-1">Date</p>
                            <p className="text-[11px] font-black text-white">{kundli.date}</p>
                         </div>
                         <div className="bg-black/20 p-3 rounded-2xl border border-white/5">
                            <p className="text-[8px] text-gray-500 uppercase font-black mb-1">Time</p>
                            <p className="text-[11px] font-black text-white">{kundli.time}</p>
                         </div>
                      </div>
                      
                      <button className="w-full bg-white/5 hover:bg-white/10 text-white py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-white/10 transition-all flex items-center justify-center gap-2">
                        View Detailed Chart <ChevronRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'refer' && (
              <motion.div
                key="refer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="space-y-6"
              >
                <div className="glass-card p-10 md:p-14 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
                  
                  <div className="relative z-10">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 12 }}
                      className="w-24 h-24 bg-gradient-to-br from-accent to-orange-600 rounded-[40px] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-accent/40"
                    >
                      <Trophy className="w-12 h-12 text-white" />
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Spread the <span className="text-accent text-glow">Magic</span></h2>
                    <p className="text-gray-400 max-w-lg mx-auto mb-12 text-sm leading-relaxed font-medium">
                      Invite your friends to AstroBless. When they complete their first consultation, you both earn <span className="text-white font-black">₹100 Bonus Credits</span> instantly.
                    </p>
                    
                    <div className="max-w-md mx-auto p-2.5 bg-black/40 rounded-3xl border border-white/10 flex items-center mb-16 backdrop-blur-xl group hover:border-accent/40 transition-all">
                      <span className="flex-1 font-black text-white tracking-[0.3em] pl-6 text-lg uppercase">ASTRO-777</span>
                      <button className="bg-white text-[#192309] px-8 py-4 rounded-[20px] font-black text-xs uppercase tracking-widest shadow-xl hover:bg-accent hover:text-white transition-all">Copy</button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                      {[
                        { step: '01', title: 'Share Code', icon: Share2, desc: 'Send your code to friends', color: 'text-blue-400', bg: 'bg-blue-400/10' },
                        { step: '02', title: 'They Join', icon: CreditCard, desc: 'Friend recharges wallet', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
                        { step: '03', title: 'Get Reward', icon: Gift, desc: 'Both get ₹100 bonus', color: 'text-amber-400', bg: 'bg-amber-400/10' },
                      ].map((s, i) => (
                        <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                          <div className={`w-12 h-12 ${s.bg} ${s.color} rounded-2xl flex items-center justify-center mb-5`}>
                            <s.icon className="w-6 h-6" />
                          </div>
                          <p className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-1">Step {s.step}</p>
                          <h4 className="text-base font-black text-white mb-2 uppercase">{s.title}</h4>
                          <p className="text-[11px] text-gray-500 font-medium leading-relaxed">{s.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="glass-card p-8">
                   <h3 className="text-xl font-black text-white tracking-tight mb-8">Earning Summary</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex gap-5 items-center p-8 bg-white/5 rounded-[32px] border border-white/10">
                         <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
                            <Trophy className="w-7 h-7 text-accent" />
                         </div>
                         <div>
                            <p className="text-3xl font-black text-white tracking-tight">₹1,200</p>
                            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-1">Total Rewards Earned</p>
                         </div>
                      </div>
                      <div className="flex gap-5 items-center p-8 bg-white/5 rounded-[32px] border border-white/10">
                         <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center shrink-0">
                            <Share2 className="w-7 h-7 text-emerald-400" />
                         </div>
                         <div>
                            <p className="text-3xl font-black text-white tracking-tight">12</p>
                            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-1">Friends Successfully Joined</p>
                         </div>
                      </div>
                   </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'help' && (
              <motion.div
                key="help"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="glass-card p-8 min-h-[600px]"
              >
                <div className="mb-10">
                  <h3 className="text-2xl font-black text-white tracking-tight">Help & Support</h3>
                  <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-1">We're here to guide you</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                   {[
                     { title: 'Contact Support', desc: 'Chat with our team 24/7', icon: MessageSquare, color: 'text-blue-400', bg: 'bg-blue-400/10' },
                     { title: 'Email Us', desc: 'support@example.com', icon: Mail, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
                     { title: 'FAQs', desc: 'Quick answers to common questions', icon: FileText, color: 'text-amber-400', bg: 'bg-amber-400/10' },
                     { title: 'Service Status', desc: 'All systems operational', icon: ShieldCheck, color: 'text-purple-400', bg: 'bg-purple-400/10' },
                   ].map((item, i) => (
                     <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-accent/40 transition-all group cursor-pointer">
                        <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                           <item.icon className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-black text-white mb-1">{item.title}</h4>
                        <p className="text-xs text-gray-500 font-medium">{item.desc}</p>
                     </div>
                   ))}
                </div>

                <div className="bg-accent/5 border border-accent/10 rounded-[32px] p-8 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-8 opacity-10">
                      <Phone className="w-24 h-24 text-accent" />
                   </div>
                   <h4 className="text-xl font-black text-white mb-2">Priority Call Support</h4>
                   <p className="text-sm text-gray-400 mb-6 max-w-md">Elite members get access to instant callback within 5 minutes for any platform issues.</p>
                   <button className="bg-accent text-white px-8 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-accent/20 transition-all">
                      Request Callback
                   </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
