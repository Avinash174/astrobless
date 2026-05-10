import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  Star, 
  MessageSquare,
  History,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { astrologers, testimonials, zodiacSigns } from '../data/mockData';
import AstrologerCard from '../components/AstrologerCard';
import Skeleton from '../components/Skeleton';

const LandingPage: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="overflow-hidden">
      {/* ── Hero Section ── */}
      <section className="relative min-h-[90vh] flex items-center pt-12 md:pt-0 pb-20 px-4 overflow-hidden">
        {/* Advanced Cosmic Background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-20%,#1F2E0A_0%,#192309_60%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" 
          />
          {/* Star particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ 
                x: Math.random() * 2000 - 1000, 
                y: Math.random() * 2000 - 1000,
                opacity: Math.random() 
              }}
              animate={{ 
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{ 
                duration: 2 + Math.random() * 3, 
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              style={{ left: '50%', top: '50%' }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 mb-8 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs font-black uppercase tracking-widest text-gray-300">Unlock your cosmic potential</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[120px] font-black mb-8 leading-[0.9] tracking-tighter"
          >
            Divine <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-400 to-amber-500 drop-shadow-[0_10px_20px_rgba(253,125,0,0.3)]">
              Alignment
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
          >
            India's most trusted Vedic experts, available 24/7 for personalized guidance on love, career, and destiny.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/astrologers">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(253,125,0,0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="btn-accent text-lg px-14 py-5 rounded-3xl flex items-center gap-3 shadow-[0_15px_30px_rgba(253,125,0,0.25)] group"
              >
                Consult Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <motion.button 
              whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.08)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 px-14 py-5 rounded-3xl font-black text-sm uppercase tracking-widest flex items-center gap-3 transition-all text-white"
            >
              <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                <Play className="w-3 h-3 text-accent fill-accent ml-0.5" />
              </div>
              How it Works
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-20 flex flex-col items-center gap-4"
          >
             <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#192309] bg-secondary-surface overflow-hidden shadow-lg">
                  <img src={`https://i.pravatar.cc/80?u=${i + 10}`} alt="user" />
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs font-black uppercase tracking-[0.2em]">Trusted by 10M+ Seekers</p>
          </motion.div>
        </div>
      </section>

      {/* ── Zodiac Horoscope Section ── */}
      <section className="py-24 px-4 bg-secondary-surface/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4">Daily <span className="text-accent">Horoscope</span></h2>
            <p className="text-gray-400 font-medium">Select your sign to discover what stars have for you today.</p>
          </div>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {isLoading ? (
              Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="glass-card p-6 flex flex-col items-center space-y-4">
                   <Skeleton variant="circle" width={48} height={48} />
                   <Skeleton variant="text" width="60%" />
                </div>
              ))
            ) : (
              zodiacSigns.map((sign) => (
                <motion.div
                  key={sign.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, backgroundColor: 'rgba(253,125,0,0.1)', borderColor: 'rgba(253,125,0,0.3)' }}
                  className="glass-card p-6 flex flex-col items-center text-center cursor-pointer transition-all duration-300"
                >
                  <span className="text-4xl mb-4 grayscale hover:grayscale-0 transition-all">{sign.icon}</span>
                  <h4 className="text-sm font-black text-white mb-1">{sign.name}</h4>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">{sign.date}</p>
                </motion.div>
              ))
            )}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/horoscope">
               <button className="text-accent font-black text-xs uppercase tracking-widest hover:underline flex items-center gap-2 mx-auto">
                 Detailed Yearly Report <ArrowRight className="w-4 h-4" />
               </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Main Services ── */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MessageSquare, title: 'Chat Consult', desc: 'Real-time guidance via instant messaging.', link: '/astrologers', color: 'from-blue-500' },
              { icon: Phone, title: 'Call Consult', desc: 'Voice connection with top-rated experts.', link: '/astrologers', color: 'from-emerald-500' },
              { icon: History, title: 'Kundli Matching', desc: 'Comprehensive compatibility reports.', link: '/kundli', color: 'from-amber-500' },
              { icon: Sparkles, title: 'AI Predictions', desc: 'Next-gen cosmic insights powered by AI.', link: '/ai-chat', color: 'from-purple-500' },
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-8 group relative overflow-hidden flex flex-col h-full"
              >
                <div className={`absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br ${service.color} opacity-0 blur-2xl group-hover:opacity-20 transition-opacity`} />
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{service.title}</h3>
                <p className="text-gray-400 font-medium text-sm leading-relaxed mb-8 flex-1">{service.desc}</p>
                <Link to={service.link}>
                  <button className="text-accent font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    Explore <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Top Astrologers Section ── */}
      <section className="py-32 px-4 overflow-hidden bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 text-accent mb-4">
                <div className="w-8 h-px bg-accent" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Featured Experts</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-4 leading-tight">Elite <span className="text-accent">Astrologers</span></h2>
              <p className="text-gray-400 text-lg font-medium max-w-xl">Curated selection of India's most accurate spiritual consultants, verified by millions.</p>
            </div>
            <Link to="/astrologers">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:border-accent/40 transition-all text-white"
              >
                Explore All Experts <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>

          <div className="flex gap-8 overflow-x-auto pb-16 snap-x no-scrollbar -mx-4 px-4 md:-mx-0 md:px-0">
            {isLoading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="snap-center shrink-0 w-[300px] md:w-[350px] glass-card p-6 rounded-[32px] border-white/5 space-y-4">
                   <Skeleton height={200} />
                   <Skeleton height={24} width="70%" />
                   <Skeleton height={16} width="40%" />
                </div>
              ))
            ) : (
              astrologers.map((astrologer) => (
                <div key={astrologer.id} className="snap-center shrink-0 w-[300px] md:w-[350px]">
                  <AstrologerCard astrologer={astrologer} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ── Testimonials Section ── */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Divine <span className="text-accent">Stories</span></h2>
             <p className="text-gray-400 font-medium max-w-lg mx-auto text-lg">Real experiences from people who found clarity through our platform.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((t) => (
              <motion.div 
                key={t.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-12 relative overflow-hidden flex flex-col md:flex-row gap-8 items-start hover:border-accent/30 transition-all"
              >
                <div className="w-20 h-20 bg-accent/20 rounded-[32px] shrink-0 flex items-center justify-center overflow-hidden border-2 border-accent/20 shadow-2xl">
                   <img src={`https://i.pravatar.cc/100?u=${t.name}`} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex gap-1.5 mb-5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-xl font-medium text-gray-200 mb-8 leading-relaxed font-['Outfit'] italic">"{t.comment}"</p>
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <span className="font-black text-white text-base tracking-widest uppercase">— {t.name}</span>
                    <div className="bg-accent/10 px-3 py-1 rounded-full text-[10px] font-black text-accent border border-accent/20">VERIFIED SEEKER</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="px-4 py-32 bg-primary-bg relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_80%,rgba(253,125,0,0.1)_0%,transparent_50%)]" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-gradient-to-br from-accent via-orange-600 to-amber-600 rounded-[48px] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(253,125,0,0.4)]"
        >
          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter">Your Destiny <br />is Calling.</h2>
            <p className="text-white/80 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
              Join 10M+ others who found peace and direction. Start your journey with a personalized reading today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/astrologers">
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: '#FFFFFF', color: '#FD7D00' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-accent font-black text-xl px-16 py-6 rounded-[32px] shadow-2xl transition-all"
                >
                  Get Started Free
                </motion.button>
              </Link>
              <button className="text-white font-black text-sm uppercase tracking-widest border border-white/30 hover:border-white px-10 py-6 rounded-[32px] transition-all">
                Talk to Support
              </button>
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/10 rounded-full blur-[100px]" />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default LandingPage;
