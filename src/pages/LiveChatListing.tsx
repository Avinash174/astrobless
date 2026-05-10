import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  MessageSquare, 
  Users, 
  Zap, 
  Activity,
  Award,
  Video
} from 'lucide-react';
import { astrologers } from '../data/mockData';
import AstrologerCard from '../components/AstrologerCard';
import { Link } from 'react-router-dom';

const LiveChatListing: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter for ONLY online/live masters for this specific view
  const liveMasters = useMemo(() => {
    return astrologers.filter(a => 
      a.online && (a.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      a.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())))
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-primary-bg pb-32">
      {/* ── Live Studio Header ── */}
      <section className="relative pt-24 pb-16 px-6 overflow-hidden">
        {/* Neon Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="flex items-center gap-2 px-3 py-1 bg-rose-500/10 border border-rose-500/20 rounded-full">
                  <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.6)]" />
                  <span className="text-[10px] font-black text-rose-500 uppercase tracking-[0.2em]">Live Studio</span>
                </div>
                <div className="h-px w-12 bg-white/10" />
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Real-time Cosmic Counsel</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6"
              >
                Instant <span className="text-accent">Connection.</span>
              </motion.h1>
              <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
                Connect with India's top Vedic masters in under 60 seconds. No appointments, no waiting—just instant spiritual clarity.
              </p>
            </div>

            {/* Live Stats */}
            <div className="flex items-center gap-6 p-6 glass-card border-white/5 rounded-[32px]">
               <div className="text-center">
                  <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">Available Now</p>
                  <p className="text-2xl font-black text-white">{liveMasters.length}</p>
               </div>
               <div className="w-px h-10 bg-white/10" />
               <div className="text-center">
                  <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">Avg. Wait</p>
                  <p className="text-2xl font-black text-emerald-500">&lt; 45s</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Search & Filter Bar ── */}
      <div className="sticky top-20 z-40 px-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-2 rounded-[32px] border-white/5 shadow-2xl flex items-center gap-4">
            <div className="flex-1 flex items-center gap-4 pl-6">
              <Search className="w-5 h-5 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search masters for instant chat..." 
                className="bg-transparent border-none focus:ring-0 text-white font-bold w-full text-sm py-4"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="hidden md:flex items-center gap-4 pr-4">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 rounded-2xl border border-white/5">
                <Activity className="w-4 h-4 text-accent" />
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Priority Queue Enabled</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Live Masters Grid ── */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          {liveMasters.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {liveMasters.map((master, index) => (
                <motion.div
                  key={master.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="relative group"
                >
                  {/* Live Pulsing Border */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-rose-500/20 via-accent/20 to-rose-500/20 rounded-[42px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative">
                    <AstrologerCard astrologer={master} />
                    
                    {/* Live Interaction Overlay */}
                    <div className="absolute top-4 left-4 z-30">
                       <div className="px-3 py-1 bg-rose-500 text-white rounded-lg text-[8px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-lg shadow-rose-500/20">
                          <Activity className="w-2.5 h-2.5 animate-pulse" />
                          Chatting Now
                       </div>
                    </div>

                    <Link to={`/chat/${master.id}`} className="absolute inset-x-7 bottom-7 z-30 pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                       <button className="w-full bg-white text-black py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-2xl hover:bg-accent hover:text-white transition-colors">
                          <MessageSquare className="w-3.5 h-3.5" /> Start Instant Chat
                       </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 glass-card rounded-[40px] border-white/5">
              <Users className="w-16 h-16 text-gray-700 mx-auto mb-6" />
              <h3 className="text-2xl font-black text-white mb-2">No Active Streams</h3>
              <p className="text-gray-500 font-medium">All masters are currently in sessions. Try again in a few minutes.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Features Footer ── */}
      <section className="mt-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { icon: Zap, title: '60s Connectivity', desc: 'Average connection time for premium masters.' },
             { icon: Award, title: 'Elite Masters', desc: 'Only top-tier experts are available for live chat.' },
             { icon: Video, title: 'Private Sessions', desc: 'Secure, encrypted, and completely confidential.' },
           ].map((feature, i) => (
             <div key={i} className="glass-card p-10 rounded-[40px] border-white/5 hover:border-white/10 transition-all text-center group">
                <div className="w-16 h-16 bg-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                   <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-xl font-black text-white mb-4 tracking-tight">{feature.title}</h4>
                <p className="text-gray-500 font-medium leading-relaxed">{feature.desc}</p>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default LiveChatListing;
