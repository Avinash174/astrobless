import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Search, Star, ShieldCheck, Filter, ArrowRight, User } from 'lucide-react';

const Chat = () => {
  const astrologers = [
    { name: 'Acharya Krishiv', expert: 'Vedic, Lal Kitab', rating: 4.8, count: '12k', price: '₹21/min', status: 'Online' },
    { name: 'Tarot Merakii', expert: 'Tarot, Reiki', rating: 4.9, count: '8k', price: '₹20/min', status: 'Online' },
    { name: 'Dr. Aditya Sharma', expert: 'Vedic, Vastu', rating: 5.0, count: '25k', price: '₹25/min', status: 'Busy' },
    { name: 'Maanya Gupta', expert: 'Tarot, Psychic', rating: 4.7, count: '5k', price: '₹15/min', status: 'Online' },
    { name: 'Guru Raghav', expert: 'Numerology', rating: 5.0, count: '18k', price: '₹50/min', status: 'Online' },
    { name: 'Sonalika Ved', expert: 'KP Astrology', rating: 4.6, count: '9k', price: '₹20/min', status: 'Offline' },
    { name: 'Pandit Somnath', expert: 'Vedic, Puja', rating: 4.9, count: '15k', price: '₹30/min', status: 'Online' },
    { name: 'Tarot Gitanjali', expert: 'Tarot, Healing', rating: 4.8, count: '7k', price: '₹20/min', status: 'Online' },
  ];

  return (
    <main className="bg-light min-h-screen pb-20">
      {/* Search & Filter Header */}
      <section className="bg-white border-b border-gray-100 sticky top-[72px] md:top-[124px] z-40 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 w-full relative group">
            <input 
              type="text" 
              placeholder="Search by name, skill, or language..." 
              className="w-full bg-light border-2 border-transparent focus:border-primary/30 rounded-2xl px-12 py-4 outline-none font-bold text-secondary transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-secondary" size={20} />
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-light px-6 py-4 rounded-2xl font-black text-secondary hover:bg-secondary hover:text-white transition-all border-2 border-transparent hover:border-secondary">
              <Filter size={20} />
              Filter
            </button>
            <div className="flex-1 md:flex-none bg-primary/20 px-6 py-4 rounded-2xl flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-secondary shadow-sm">
                <Star size={18} fill="currentColor" />
              </div>
              <div>
                <p className="text-[10px] text-secondary/60 font-black uppercase leading-none mb-1">Wallet Balance</p>
                <p className="text-lg font-black text-secondary leading-none">₹500.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Astrologer Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-3xl font-black text-secondary">Available Astrologers</h1>
          <div className="flex gap-4">
            {['All', 'Vedic', 'Tarot', 'Numerology', 'Vastu'].map((cat, i) => (
              <button key={cat} className={`px-5 py-2 rounded-full font-black text-xs uppercase tracking-widest transition-all ${i === 0 ? 'bg-secondary text-white' : 'bg-white text-secondary/60 hover:bg-light border border-gray-100'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {astrologers.map((astro, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-6 rounded-[2.5rem] premium-shadow border-2 border-transparent hover:border-primary transition-all relative group"
            >
              {/* Status Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[9px] font-black uppercase flex items-center gap-1.5 shadow-sm ${
                astro.status === 'Online' ? 'bg-green-100 text-green-600' : 
                astro.status === 'Busy' ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-500'
              }`}>
                <div className={`w-1.5 h-1.5 rounded-full ${
                  astro.status === 'Online' ? 'bg-green-500 animate-pulse' : 
                  astro.status === 'Busy' ? 'bg-orange-500' : 'bg-gray-400'
                }`}></div>
                {astro.status}
              </div>

              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-light rounded-2xl overflow-hidden border-2 border-primary/20 shrink-0 group-hover:scale-110 transition-transform">
                  <div className="w-full h-full bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center">
                    <User size={32} className="text-secondary/20" />
                  </div>
                </div>
                <div>
                  <h4 className="font-black text-secondary leading-none mb-1 group-hover:text-accent transition-colors">{astro.name}</h4>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{astro.expert}</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-light/50 p-3 rounded-2xl text-center">
                  <div className="flex items-center justify-center gap-1 text-primary mb-1">
                    <Star size={12} fill="currentColor" />
                    <span className="text-xs font-black text-secondary">{astro.rating}</span>
                  </div>
                  <p className="text-[9px] text-gray-400 font-bold uppercase leading-none">Rating</p>
                </div>
                <div className="bg-light/50 p-3 rounded-2xl text-center">
                  <p className="text-xs font-black text-secondary mb-1">{astro.count}</p>
                  <p className="text-[9px] text-gray-400 font-bold uppercase leading-none">Consults</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-6 px-2">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase leading-none mb-1">Rate</p>
                  <p className="text-xl font-black text-secondary">{astro.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] text-red-500 font-black uppercase leading-none mb-1 animate-pulse">Wait Time</p>
                  <p className="text-xs font-black text-secondary">~5 min</p>
                </div>
              </div>

              <button className={`w-full py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl ${
                astro.status === 'Online' ? 'bg-secondary text-white hover:bg-accent shadow-secondary/20' : 
                astro.status === 'Busy' ? 'bg-orange-500 text-white shadow-orange-200 cursor-not-allowed' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}>
                <MessageCircle size={18} />
                {astro.status === 'Online' ? 'Start Chat' : astro.status === 'Busy' ? 'Waitlist' : 'Offline'}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white p-10 rounded-[3rem] premium-shadow border border-gray-50 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-secondary">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-secondary">Safe & Confidential</h3>
              <p className="text-gray-500 font-medium">Your conversations are 100% private and secure.</p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-light text-secondary px-8 py-4 rounded-2xl font-black hover:bg-secondary hover:text-white transition-all group">
            Learn About Security
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Chat;
