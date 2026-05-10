import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  FileText, 
  Download,
  ShieldCheck,
  ChevronRight,
  Info,
  BadgeCheck,
  Zap
} from 'lucide-react';

const KundliPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    time: '',
    location: ''
  });
  const [isGenerated, setIsGenerated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsGenerated(true);
    }, 2500);
  };

  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-12 pb-24">
      {/* ── Header ── */}
      <div className="text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full border border-accent/20 mb-6"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-xs font-black text-accent uppercase tracking-widest">Premium Vedic Calculations</span>
        </motion.div>
        <h1 className="text-4xl md:text-7xl font-black mb-4 tracking-tight leading-[0.9]">
          Unlock Your <br /><span className="text-accent">Celestial Destiny</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-lg font-medium leading-relaxed">
          Generate your highly accurate birth chart based on precise astronomical data and ancient Vedic algorithms.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* ── Left Column: Form ── */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="glass-card p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
              <Zap className="w-32 h-32 text-accent" />
            </div>

            <h2 className="text-xl font-black text-white mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                 <BadgeCheck className="w-5 h-5 text-accent" />
              </div>
              Birth Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-accent transition-colors" />
                  <input 
                    type="text" 
                    required
                    placeholder="Arjun Sharma" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-white focus:outline-none focus:border-accent/40 transition-all placeholder:text-gray-700" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Date of Birth</label>
                  <div className="relative group">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-accent transition-colors" />
                    <input 
                      type="date" 
                      required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-white focus:outline-none focus:border-accent/40 transition-all [color-scheme:dark]"
                      value={formData.dob}
                      onChange={(e) => setFormData({...formData, dob: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Time of Birth</label>
                  <div className="relative group">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-accent transition-colors" />
                    <input 
                      type="time" 
                      required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-white focus:outline-none focus:border-accent/40 transition-all [color-scheme:dark]"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Birth Location</label>
                <div className="relative group">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-accent transition-colors" />
                  <input 
                    type="text" 
                    required
                    placeholder="New Delhi, India" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-white focus:outline-none focus:border-accent/40 transition-all placeholder:text-gray-700" 
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                  />
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
                className={`w-full bg-accent text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-accent/20 hover:bg-accent/90 transition-all flex items-center justify-center gap-3 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Aligning Stars...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" /> Generate Chart
                  </>
                )}
              </motion.button>
            </form>

            <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-3 text-gray-600">
               <ShieldCheck className="w-4 h-4 text-emerald-500" />
               <span className="text-[9px] font-black uppercase tracking-[0.2em]">100% Encrypted & Private Data</span>
            </div>
          </div>

          <div className="glass-card p-6 flex gap-5 border-white/5">
             <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0 border border-accent/20">
               <Info className="w-6 h-6 text-accent" />
             </div>
             <div>
               <p className="text-sm font-black text-white mb-1">Cosmic Blueprint</p>
               <p className="text-xs text-gray-500 leading-relaxed font-medium">
                 Your Kundli is a snapshot of the celestial sky at your exact birth moment. It maps your life's path, personality, and destiny.
               </p>
             </div>
          </div>
        </motion.div>

        {/* ── Right Column: Result / Placeholder ── */}
        <div className="lg:col-span-7 h-full">
          <AnimatePresence mode="wait">
            {!isGenerated ? (
              <motion.div 
                key="empty"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="glass-card h-full min-h-[600px] flex flex-col items-center justify-center text-center p-12 border-dashed border-2 border-white/10"
              >
                <div className="relative mb-10">
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-[60px] animate-pulse" />
                  <div className="relative w-36 h-36 bg-secondary-surface rounded-[48px] flex items-center justify-center border border-white/5 shadow-2xl overflow-hidden group">
                    <Sparkles className="w-16 h-16 text-gray-700 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent" />
                  </div>
                </div>
                <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Visualize Your Destiny</h3>
                <p className="text-gray-500 text-lg max-w-sm font-medium leading-relaxed">
                  Provide your birth details to reveal your celestial map and planetary influences.
                </p>
                <div className="mt-12 flex flex-wrap justify-center gap-3 opacity-20 grayscale">
                   {['Ascendant', 'Lagna', 'Nakshatra', 'Dasha', 'Yoga'].map(tag => (
                     <span key={tag} className="px-5 py-2.5 bg-white/5 rounded-2xl text-[9px] font-black uppercase tracking-[0.2em] border border-white/10">{tag}</span>
                   ))}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="result"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card overflow-hidden h-full flex flex-col shadow-2xl border-white/10"
              >
                <div className="bg-gradient-to-r from-accent/20 via-transparent to-transparent p-8 border-b border-white/5 flex justify-between items-center">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-accent rounded-[24px] flex items-center justify-center shadow-[0_0_30px_rgba(253,125,0,0.4)]">
                      <FileText className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white">{formData.name}'s Chart</h3>
                      <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mt-1">Verified Vedic Birth Record</p>
                    </div>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(253,125,0,1)', color: '#fff' }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 bg-white/5 rounded-2xl text-gray-400 hover:text-white transition-all border border-white/10"
                  >
                    <Download className="w-5 h-5" />
                  </motion.button>
                </div>

                <div className="p-10 flex-grow">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
                    
                    <div className="relative aspect-square w-full max-w-[400px] mx-auto group">
                      <div className="absolute inset-0 bg-accent/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                      
                      <svg viewBox="0 0 400 400" className="w-full h-full relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        <rect x="10" y="10" width="380" height="380" fill="none" stroke="#FD7D00" strokeWidth="2" opacity="0.4" />
                        <line x1="10" y1="10" x2="390" y2="390" stroke="#FD7D00" strokeWidth="1" opacity="0.2" />
                        <line x1="390" y1="10" x2="10" y2="390" stroke="#FD7D00" strokeWidth="1" opacity="0.2" />
                        <line x1="200" y1="10" x2="200" y2="390" stroke="#FD7D00" strokeWidth="1" opacity="0.2" />
                        <line x1="10" y1="200" x2="390" y2="200" stroke="#FD7D00" strokeWidth="1" opacity="0.2" />
                        <path d="M200 10 L390 200 L200 390 L10 200 Z" fill="none" stroke="#FD7D00" strokeWidth="2" opacity="0.6" />
                        <g className="font-black text-[14px]" fill="#FD7D00">
                          <text x="185" y="100">Su</text>
                          <text x="210" y="100" className="text-[10px] opacity-40">10°</text>
                          <text x="80" y="180">Mo</text>
                          <text x="280" y="180">Ma</text>
                          <text x="185" y="300">Ju</text>
                          <text x="100" y="280">Ve</text>
                        </g>
                        <circle cx="200" cy="200" r="6" fill="#FD7D00" className="animate-pulse shadow-xl" />
                      </svg>

                      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[9px] font-black text-accent/50 uppercase tracking-[0.3em]">Main Birth Chart (D1)</div>
                    </div>

                    <div className="space-y-5">
                      {[
                        { label: 'Ascendant (Lagna)', val: 'Scorpio', icon: Zap },
                        { label: 'Sun Sign', val: 'Leo', icon: Sparkles },
                        { label: 'Moon Sign', val: 'Aries', icon: Calendar },
                        { label: 'Nakshatra', val: 'Rohini', icon: BadgeCheck },
                      ].map((item, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                          className="flex items-center justify-between p-5 bg-white/5 border border-white/5 rounded-[24px] hover:border-accent/40 transition-all group cursor-default"
                        >
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                                <item.icon className="w-5 h-5 text-accent" />
                             </div>
                             <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{item.label}</span>
                          </div>
                          <span className="text-xl font-black text-white">{item.val}</span>
                        </motion.div>
                      ))}
                      
                      <button className="w-full mt-6 flex items-center justify-between px-8 py-5 bg-accent/10 border border-accent/20 rounded-[28px] text-accent font-black text-[11px] uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all group shadow-xl shadow-accent/5">
                         View In-Depth Analysis
                         <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default KundliPage;
