import React from 'react';
import { Star, Clock, Globe, ShieldCheck, Zap, Crown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Astrologer } from '../data/mockData';

interface AstrologerCardProps {
  astrologer: Astrologer;
}

const AstrologerCard: React.FC<AstrologerCardProps> = ({ astrologer }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative bg-secondary-surface/40 backdrop-blur-3xl rounded-[40px] overflow-hidden border border-white/5 hover:border-accent/40 transition-all duration-500 shadow-2xl"
    >
      {/* ── Immersive Image Container ── */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={astrologer.image}
          alt={astrologer.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        
        {/* Dynamic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-surface via-transparent to-black/10" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-accent/20 via-transparent to-transparent" />

        {/* Floating Status Badges */}
        <div className="absolute top-4 inset-x-4 flex justify-between items-start z-20">
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-2xl text-[9px] font-black uppercase tracking-[0.2em] backdrop-blur-xl border border-white/10 shadow-2xl ${
            astrologer.online ? 'bg-emerald-500/10 text-emerald-400' : 'bg-white/5 text-gray-500'
          }`}>
            <div className={`w-2 h-2 rounded-full ${astrologer.online ? 'bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.6)]' : 'bg-gray-500'}`} />
            {astrologer.online ? 'Live Now' : 'Offline'}
          </div>

          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-xl px-3 py-1.5 rounded-2xl border border-white/10 shadow-2xl">
            <Star className="w-3.5 h-3.5 text-accent fill-accent" />
            <span className="text-xs font-black text-white">{astrologer.rating}</span>
          </div>
        </div>

        {/* Pricing Badge */}
        <div className="absolute bottom-4 right-4 z-20">
          <div className="bg-accent/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-[0_12px_24px_rgba(253,125,0,0.4)] flex flex-col items-center">
            <span className="text-sm font-black text-white tracking-tighter">₹{astrologer.price}</span>
            <span className="text-[8px] font-black text-white/80 uppercase tracking-widest mt-0.5">per min</span>
          </div>
        </div>
      </div>

      {/* ── Content Details ── */}
      <div className="p-7">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-black text-white group-hover:text-accent transition-colors truncate">
              {astrologer.name}
            </h3>
            <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
          </div>

          {/* Dynamic Performance Badges */}
          <div className="flex gap-2 mb-3">
             {astrologer.rating >= 4.9 && (
               <div className="flex items-center gap-1 px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded-md">
                 <Crown className="w-2.5 h-2.5 text-amber-500" />
                 <span className="text-[8px] font-black text-amber-500 uppercase tracking-widest">Top Rated</span>
               </div>
             )}
             {astrologer.price <= 25 && astrologer.rating >= 4.7 && (
               <div className="flex items-center gap-1 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
                 <Zap className="w-2.5 h-2.5 text-emerald-500" />
                 <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">Best Value</span>
               </div>
             )}
          </div>
          
          <div className="flex flex-wrap gap-2">
            {astrologer.specialties.map((s, i) => (
              <span key={i} className="text-[9px] font-black text-gray-400 uppercase tracking-widest px-2.5 py-1 bg-white/5 rounded-lg border border-white/5">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Meta Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
           <div className="flex items-center gap-3">
             <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                <Clock className="w-4 h-4 text-gray-500" />
             </div>
             <div>
                <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest">Experience</p>
                <p className="text-[11px] font-black text-white">{astrologer.experience} Years</p>
             </div>
           </div>
           <div className="flex items-center gap-3">
             <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                <Globe className="w-4 h-4 text-gray-500" />
             </div>
             <div>
                <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest">Language</p>
                <p className="text-[11px] font-black text-white truncate w-16">{astrologer.languages[0]}</p>
             </div>
           </div>
        </div>

        {/* Interaction Actions */}
        <div className="grid grid-cols-2 gap-3">
           <Link to={`/chat/${astrologer.id}`} className="flex-1">
             <motion.button
               whileTap={{ scale: 0.95 }}
               className="w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest bg-white/5 border border-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-all flex items-center justify-center gap-2"
             >
               <Zap className="w-3.5 h-3.5" /> Consult
             </motion.button>
           </Link>
           <Link to={`/astrologer/${astrologer.id}`} className="flex-1">
             <motion.button
               whileTap={{ scale: 0.95 }}
               className="w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest bg-accent text-white shadow-[0_15px_30px_rgba(253,125,0,0.3)] hover:shadow-[0_20px_40px_rgba(253,125,0,0.4)] transition-all"
             >
               View Profile
             </motion.button>
           </Link>
        </div>
      </div>

      {/* Subtle Bottom Glow */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-40 h-8 bg-accent/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    </motion.div>
  );
};

export default AstrologerCard;
