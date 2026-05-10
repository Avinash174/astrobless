import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Users, 
  Star, 
  Sparkles, 
  X,
  ChevronRight,
  Zap,
  ArrowUpDown,
  Award,
  Crown,
  ChevronDown
} from 'lucide-react';
import { astrologers } from '../data/mockData';
import AstrologerCard from '../components/AstrologerCard';
import Skeleton from '../components/Skeleton';
import { Link } from 'react-router-dom';

const LANGUAGES = ['All', 'Hindi', 'English', 'Marathi'];
const SPECIALTIES = ['All', 'Vedic', 'Tarot', 'Palmistry', 'Numerology', 'Vastu'];

const STATS = [
  { icon: Users, label: 'Masters Online', value: '1,200+' },
  { icon: Star, label: 'User Satisfaction', value: '4.8/5' },
  { icon: Zap, label: 'Avg. Response', value: '< 2 min' },
];

const SORT_OPTIONS = [
  { label: 'Popularity', value: 'popularity' },
  { label: 'Rating: High to Low', value: 'rating' },
  { label: 'Experience: High to Low', value: 'exp' },
  { label: 'Price: Low to High', value: 'price_low' },
  { label: 'Price: High to Low', value: 'price_high' },
];

const AstrologerListing: React.FC = () => {
  const [search, setSearch] = useState('');
  const [lang, setLang] = useState('All');
  const [spec, setSpec] = useState('All');
  const [sortBy, setSortBy] = useState('popularity');
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredAndSorted = useMemo(() => {
    let result = astrologers.filter((a) => {
      const matchName = a.name.toLowerCase().includes(search.toLowerCase());
      const matchLang = lang === 'All' || a.languages.includes(lang);
      const matchSpec = spec === 'All' || a.specialties.includes(spec);
      return matchName && matchLang && matchSpec;
    });

    switch (sortBy) {
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      case 'exp': result.sort((a, b) => b.experience - a.experience); break;
      case 'price_low': result.sort((a, b) => a.price - b.price); break;
      case 'price_high': result.sort((a, b) => b.price - a.price); break;
      default: result.sort((a, b) => b.reviewsCount - a.reviewsCount);
    }
    return result;
  }, [search, lang, spec, sortBy]);

  const featured = astrologers.filter(a => a.rating >= 4.9).slice(0, 3);

  return (
    <div className="pb-32 max-w-7xl mx-auto px-4 md:px-8 pt-10">
      
      {/* ── Dynamic Page Header ── */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-accent/5 border border-accent/10 rounded-full mb-8">
            <Crown className="w-4 h-4 text-accent" />
            <span className="text-[10px] font-black text-accent uppercase tracking-[0.4em]">The Elite Circle</span>
          </div>
          <h1 className="text-6xl md:text-[90px] font-black mb-8 leading-[0.8] tracking-tighter">
            Consult the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-400 to-amber-500">Divine Masters</span>
          </h1>
          <p className="text-gray-400 text-xl font-medium leading-relaxed max-w-xl">
            Direct access to globally verified Vedic practitioners, Nadi experts, and spiritual guides.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="grid grid-cols-3 gap-6 w-full lg:w-auto"
        >
          {STATS.map((s, i) => (
            <div key={i} className="glass-card p-8 flex flex-col items-center text-center group hover:border-accent/40 transition-all cursor-default shadow-2xl">
              <div className="w-14 h-14 bg-white/5 rounded-3xl flex items-center justify-center mb-5 text-accent/80 group-hover:scale-110 transition-transform border border-white/5 shadow-inner">
                <s.icon className="w-6 h-6" />
              </div>
              <p className="text-3xl font-black text-white mb-1.5 tracking-tighter leading-none">{s.value}</p>
              <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest leading-tight">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Featured Spotlight: Horizontal Carousel ── */}
      <div className="mb-24 relative">
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-accent/10 rounded-2xl flex items-center justify-center border border-accent/20">
               <Award className="w-5 h-5 text-accent" />
             </div>
             <div>
               <h2 className="text-sm font-black text-white uppercase tracking-[0.3em] mb-0.5">Divine Spotlight</h2>
               <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Highest Rated Masters of the Month</p>
             </div>
          </div>
          <Link to="/astrologers" className="text-[10px] font-black text-accent uppercase tracking-widest flex items-center gap-2 group">
            View All <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {isLoading ? (
             [1, 2, 3].map((i) => (
               <div key={i} className="glass-card p-6 rounded-[32px] border-white/5 space-y-4">
                 <Skeleton height={200} />
                 <Skeleton height={24} width="70%" />
                 <Skeleton height={16} width="40%" />
               </div>
             ))
           ) : (
             featured.map((astro) => (
               <AstrologerCard key={astro.id} astrologer={astro} />
             ))
           )}
        </div>
      </div>

      {/* ── Professional Navigation & Control Engine ── */}
      <div className="sticky top-6 z-40 mb-16">
        <div className="glass-card p-5 flex flex-col xl:flex-row gap-5 items-center shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] border-white/10 backdrop-blur-3xl">
          
          {/* Search Engine */}
          <div className="relative w-full xl:w-[400px] group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-accent transition-colors" />
            <input
              type="text"
              placeholder="Search by name, expertise or discipline..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/5 rounded-[24px] pl-16 pr-6 py-5 text-sm font-bold text-white placeholder:text-gray-700 focus:outline-none focus:border-accent/40 focus:bg-white/[0.08] transition-all shadow-inner"
            />
          </div>

          <div className="hidden xl:block w-px h-10 bg-white/5 mx-2" />

          {/* Precision Filters */}
          <div className="flex-1 w-full overflow-x-auto no-scrollbar flex items-center gap-10">
            <div className="flex items-center gap-4 min-w-max">
              <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Language</span>
              <div className="flex gap-2">
                {LANGUAGES.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${
                      lang === l 
                        ? 'bg-accent text-white shadow-2xl shadow-accent/40' 
                        : 'text-gray-500 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-px h-6 bg-white/5" />

            <div className="flex items-center gap-4 min-w-max">
              <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Category</span>
              <div className="flex gap-2">
                {SPECIALTIES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSpec(s)}
                    className={`px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all border ${
                      spec === s 
                        ? 'bg-accent/10 text-accent border-accent/20' 
                        : 'text-gray-500 hover:text-white hover:bg-white/5 border-white/5'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-px h-6 bg-white/5" />

            {/* Sort Engine */}
            <div className="flex items-center gap-4 min-w-max">
              <div className="relative group">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white/5 border border-white/5 rounded-2xl pl-12 pr-10 py-3 text-[11px] font-black uppercase tracking-widest text-gray-400 focus:outline-none focus:border-accent/40 hover:text-white transition-all cursor-pointer"
                >
                  {SORT_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ArrowUpDown className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
              </div>
            </div>
          </div>

          {(lang !== 'All' || spec !== 'All' || search || sortBy !== 'popularity') && (
            <button
              onClick={() => { setSearch(''); setLang('All'); setSpec('All'); setSortBy('popularity'); }}
              className="px-8 py-5 rounded-2xl bg-white/5 text-gray-400 hover:text-rose-400 transition-colors flex items-center gap-3 group shrink-0 border border-white/5"
            >
              <X className="w-4 h-4 group-hover:rotate-90 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-widest">Clear All</span>
            </button>
          )}
        </div>
      </div>

      {/* ── Main Network Grid ── */}
      <AnimatePresence mode="popLayout">
        {filteredAndSorted.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
          >
            {isLoading ? (
              Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="glass-card p-6 rounded-[32px] border-white/5 space-y-4">
                  <Skeleton height={180} />
                  <Skeleton height={20} width="60%" />
                  <Skeleton height={14} width="30%" />
                </div>
              ))
            ) : (
              filteredAndSorted.map((astro) => (
                <motion.div
                  key={astro.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <AstrologerCard astrologer={astro} />
                </motion.div>
              ))
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-40 flex flex-col items-center text-center"
          >
            <div className="w-32 h-32 bg-white/5 rounded-[48px] flex items-center justify-center mb-10 border border-white/5 shadow-2xl overflow-hidden relative group">
               <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
               <Search className="w-12 h-12 text-gray-700 relative z-10" />
            </div>
            <h3 className="text-4xl font-black text-white mb-4 tracking-tighter">No Masters Found</h3>
            <p className="text-gray-500 font-medium max-w-sm mx-auto mb-12 text-lg">Our experts are currently out of reach for these specific filters. Try expanding your search.</p>
            <button
              onClick={() => { setSearch(''); setLang('All'); setSpec('All'); setSortBy('popularity'); }}
              className="btn-accent px-14 py-5 rounded-3xl text-xs uppercase tracking-[0.2em]"
            >
              Reset Discovery Engine
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Smart Concierge Banner ── */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 glass-card p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden group shadow-2xl"
      >
         <div className="absolute top-0 right-0 p-16 opacity-[0.02] rotate-12 group-hover:rotate-45 transition-transform duration-1000">
            <Crown className="w-72 h-72" />
         </div>
         <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-3 mb-6 text-accent">
               <Zap className="w-5 h-5 fill-accent" />
               <span className="text-[10px] font-black uppercase tracking-[0.4em]">AI Celestial concierge</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-none">Find your perfect spiritual match.</h3>
            <p className="text-gray-400 font-medium text-lg leading-relaxed">Not sure who can help? Our advanced AI analyzes your birth chart and current planetary transits to match you with the most compatible master for your needs.</p>
         </div>
         <motion.button 
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
           className="bg-accent text-white px-14 py-6 rounded-3xl text-xs font-black uppercase tracking-[0.2em] relative z-10 shadow-[0_20px_50px_rgba(253,125,0,0.4)] hover:shadow-[0_25px_60px_rgba(253,125,0,0.5)] transition-all flex items-center gap-3"
         >
           <Sparkles className="w-5 h-5" /> Start AI Discovery
         </motion.button>
      </motion.div>
    </div>
  );
};

export default AstrologerListing;
