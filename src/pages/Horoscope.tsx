import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  ArrowRight, 
  Moon, 
  Sparkles, 
  Zap, 
  Heart, 
  Briefcase, 
  Coins, 
  Shield, 
  ChevronDown,
  CalendarDays
} from 'lucide-react';
import { useSearchParams, Link } from 'react-router-dom';
import { HOROSCOPES } from '../data/mockData';

const Horoscope: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [selected, setSelected] = useState<string | null>(searchParams.get('sign') ? 
    searchParams.get('sign')!.charAt(0).toUpperCase() + searchParams.get('sign')!.slice(1) : 
    null
  );
  const [timeframe, setTimeframe] = useState<'today' | 'tomorrow' | 'weekly'>('today');

  return (
    <div className="pb-24 max-w-7xl mx-auto px-4 md:px-8 pt-8">
      {/* ── Immersive Page Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/5 border border-accent/10 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-[10px] font-black text-accent uppercase tracking-[0.3em]">Cosmic Insights</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
          Celestial <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-500">Forecasting</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
          Navigate your path with precision using daily planetary alignments and zodiac wisdom.
        </p>

        {/* Timeframe Tabs */}
        <div className="flex items-center justify-center gap-2 mt-12 p-1.5 bg-white/5 border border-white/5 rounded-2xl w-fit mx-auto backdrop-blur-xl">
          {['today', 'tomorrow', 'weekly'].map((t) => (
            <button
              key={t}
              onClick={() => setTimeframe(t as any)}
              className={`px-8 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
                timeframe === t 
                  ? 'bg-accent text-white shadow-lg shadow-accent/20' 
                  : 'text-gray-500 hover:text-white hover:bg-white/5'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </motion.div>

      {/* ── Zodiac Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {HOROSCOPES.map((h, i: number) => {
          const isSelected = selected === h.sign;
          return (
            <motion.div
              key={h.sign}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              layout
              onClick={() => setSelected(isSelected ? null : h.sign)}
              className={`group relative cursor-pointer glass-card p-6 transition-all duration-500 ${
                isSelected 
                  ? 'lg:col-span-2 lg:row-span-1 border-accent/40 bg-accent/[0.03]' 
                  : 'hover:border-white/20 hover:bg-white/[0.04]'
              }`}
            >
              {/* Background Glow for Selected */}
              {isSelected && (
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-[32px] pointer-events-none" />
              )}

              <div className="flex items-start justify-between relative z-10">
                <div className="flex gap-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${h.color} flex items-center justify-center text-3xl border border-white/10 group-hover:scale-110 transition-transform shadow-2xl`}>
                    {h.emoji}
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-white">{h.sign}</h2>
                    <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">{h.date}</p>
                  </div>
                </div>
                {isSelected && (
                  <motion.div initial={{ rotate: -90 }} animate={{ rotate: 0 }}>
                    <Star className="w-5 h-5 text-accent fill-accent" />
                  </motion.div>
                )}
              </div>

              {/* Collapsed/Expanded Content */}
              <AnimatePresence mode="wait">
                {isSelected ? (
                  <motion.div
                    key="expanded"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-8 pt-8 border-t border-white/5 space-y-6"
                  >
                    <p className="text-gray-300 text-lg leading-relaxed font-medium italic">
                      "{h.message}"
                    </p>

                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { icon: Heart, label: 'Love', val: '98%', color: 'text-rose-500' },
                        { icon: Coins, label: 'Wealth', val: '85%', color: 'text-amber-500' },
                        { icon: Briefcase, label: 'Career', val: '92%', color: 'text-blue-500' },
                      ].map((stat: any) => (
                        <div key={stat.label} className="p-3 bg-white/5 rounded-2xl border border-white/5 text-center">
                          <stat.icon className={`w-4 h-4 mx-auto mb-2 ${stat.color}`} />
                          <p className="text-[10px] font-black text-gray-500 uppercase tracking-tighter mb-1">{stat.label}</p>
                          <p className="text-sm font-black text-white">{stat.val}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-accent" />
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Lucky No: 7</span>
                      </div>
                      <button className="flex items-center gap-2 text-[10px] font-black text-accent uppercase tracking-widest group/btn">
                        Get Personal Report <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="collapsed"
                    className="mt-6 flex items-center justify-between text-gray-600 group-hover:text-gray-400 transition-colors"
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest">View Reading</span>
                    <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* ── Detailed Insights Footer ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="glass-card p-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform">
            <Moon className="w-32 h-32" />
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
              <CalendarDays className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-2xl font-black text-white">Monthly Outlook</h3>
          </div>
          <p className="text-gray-400 font-medium leading-relaxed mb-8">
            The transition of Jupiter into Gemini this month brings a significant shift in global communication and learning patterns.
          </p>
          <button className="btn-outline w-fit px-8 py-3 rounded-2xl">Read Full Analysis</button>
        </div>

        <div className="glass-card p-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform">
            <Shield className="w-32 h-32" />
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-black text-white">Expert Guidance</h3>
          </div>
          <p className="text-gray-400 font-medium leading-relaxed mb-8">
            General readings provide a map, but a personal reading provides the destination. Connect with our Vedic masters.
          </p>
          <Link to="/astrologers">
            <button className="btn-accent w-fit px-8 py-3 rounded-2xl">Consult an Expert</button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Horoscope;
