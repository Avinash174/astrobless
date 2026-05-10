import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  Star, 
  MessageSquare,
  History,
  Phone,
  ShieldCheck,
  Zap,
  Users,
  Award,
  BookOpen,
  ShoppingBag,
  TrendingUp,
  Calendar,
  User,
  ChevronRight,
  Plus,
  Minus,
  Heart,
  Smartphone,
  Apple
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  astrologers, 
  testimonials, 
  zodiacSigns, 
  shopProducts, 
  academyCourses, 
  blogPosts, 
  faqs, 
  newsLogos,
  consultationCategories
} from '../data/mockData';
import AstrologerCard from '../components/AstrologerCard';
import Skeleton from '../components/Skeleton';

const LandingPage: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [selectedSign, setSelectedSign] = React.useState<typeof zodiacSigns[0] | null>(null);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="overflow-hidden">
      {/* ── Hero Section ── */}
      <section className="relative min-h-screen flex items-center pt-24 pb-32 px-4 overflow-hidden">
        {/* Advanced Cosmic Background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-20%,#1F2E0A_0%,#192309_70%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 45, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-accent/15 rounded-full blur-[150px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, -45, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-accent/10 rounded-full blur-[180px]" 
          />
          
          {/* Animated Zodiac Ring (CSS/SVG) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite] opacity-20">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i}
                className="absolute text-white/40 text-xl font-serif"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 30}deg) translateY(-400px) rotate(-${i * 30}deg)`,
                }}
              >
                {zodiacSigns[i].icon}
              </div>
            ))}
          </div>

          {/* Star particles */}
          {[...Array(40)].map((_, i) => (
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
                scale: [1, 1.5, 1],
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
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl px-6 py-2.5 rounded-full border border-white/10 mb-10 shadow-2xl"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-primary-bg overflow-hidden shadow-lg bg-secondary-surface">
                   <img src={`https://i.pravatar.cc/50?u=${i + 50}`} alt="user" />
                </div>
              ))}
            </div>
            <div className="h-4 w-px bg-white/10 mx-1" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white">
              <span className="text-accent animate-pulse">Live:</span> 1,240 Experts Online
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-[140px] font-black mb-10 leading-[0.85] tracking-tighter"
          >
            Divine <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-400 to-amber-500 drop-shadow-[0_10px_40px_rgba(253,125,0,0.4)]">
              Alignment
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto mb-16 leading-relaxed font-medium"
          >
            India's most trusted Vedic experts, providing precise clarity on love, career, and destiny through ancient cosmic wisdom.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20"
          >
            <Link to="/astrologers" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: '0 25px 80px rgba(253,125,0,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="btn-accent w-full sm:w-auto text-xl px-16 py-6 rounded-[2.5rem] flex items-center justify-center gap-4 group"
              >
                Consult Now <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </Link>
            <motion.button 
              whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.08)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 px-16 py-6 rounded-[2.5rem] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-4 transition-all text-white w-full sm:w-auto group"
            >
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 text-accent fill-accent ml-0.5" />
              </div>
              How it Works
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-12 pt-10 border-t border-white/5"
          >
             <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-black text-white">10M+</div>
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Global Seekers</div>
             </div>
             <div className="w-px h-10 bg-white/5 hidden md:block" />
             <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-black text-white">4.9/5</div>
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Average Rating</div>
             </div>
             <div className="w-px h-10 bg-white/5 hidden md:block" />
             <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-black text-white">100%</div>
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Private & Secure</div>
             </div>
          </motion.div>
        </div>
      </section>
      
      {/* ── News / Featured In Section ── */}
      <section className="py-20 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-12">As Featured In</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {newsLogos.map((logo, i) => (
              <img key={i} src={logo.logo} alt={logo.name} className="h-8 md:h-12 w-auto object-contain" />
            ))}
          </div>
        </div>
      </section>

      {/* ── Consultation Categories ── */}
      <section className="py-24 px-4 bg-primary-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">What's on <span className="text-accent">Your Mind?</span></h2>
            <p className="text-gray-500 font-medium">Select a category to find specialized experts for your concerns.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {consultationCategories.map((cat, i) => (
              <Link key={cat.id} to={`/astrologers?category=${cat.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -8, backgroundColor: 'rgba(253,125,0,0.1)', borderColor: 'rgba(253,125,0,0.3)' }}
                  className="glass-card-sm p-6 flex flex-col items-center text-center group cursor-pointer border-white/5 transition-all"
                >
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <h4 className="text-[10px] font-black text-white uppercase tracking-widest leading-tight">{cat.name}</h4>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature Highlights (Why Choose Us) ── */}
      <section className="py-24 px-4 bg-secondary-surface/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Verified Experts', desc: 'Every astrologer goes through a rigorous 4-step verification process.' },
              { icon: Zap, title: 'Instant Connect', desc: 'Get connected to an expert in less than 60 seconds, anytime, anywhere.' },
              { icon: Award, title: 'Best Price', desc: 'Transparent pricing with consultations starting as low as ₹10/min.' }
            ].map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card-sm p-8 flex items-start gap-6 border-white/5 hover:border-accent/20 transition-all group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <f.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white mb-2 uppercase tracking-tight">{f.title}</h3>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Zodiac Horoscope Section ── */}
      <section className="py-32 px-4 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/5 blur-[120px] pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Your <span className="text-accent">Zodiac</span> Guide</h2>
              <p className="text-gray-400 text-lg font-medium">Ancient starlight decoded for your everyday journey.</p>
            </div>
            <Link to="/horoscope">
              <button className="btn-outline px-10 py-4 rounded-3xl">View All Signs</button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 mb-16">
            {isLoading ? (
              Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="glass-card p-8 flex flex-col items-center space-y-4">
                   <Skeleton variant="circle" width={56} height={56} />
                   <Skeleton variant="text" width="60%" />
                </div>
              ))
            ) : (
              zodiacSigns.map((sign, i) => (
                <motion.div
                  key={sign.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setSelectedSign(selectedSign?.name === sign.name ? null : sign)}
                  whileHover={{ y: -10, backgroundColor: 'rgba(253,125,0,0.1)', borderColor: 'rgba(253,125,0,0.3)' }}
                  className={`glass-card p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-300 ${selectedSign?.name === sign.name ? 'border-accent bg-accent/10' : 'border-white/5'}`}
                >
                  <span className="text-5xl mb-6 drop-shadow-2xl">{sign.icon}</span>
                  <h4 className="text-base font-black text-white mb-1 uppercase tracking-widest">{sign.name}</h4>
                  <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">{sign.date}</p>
                </motion.div>
              ))
            )}
          </div>

          <AnimatePresence mode="wait">
            {selectedSign && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="glass-card p-10 md:p-16 border-accent/20 relative">
                  <div className="absolute top-0 right-0 p-10 opacity-10">
                    <span className="text-[150px] leading-none select-none">{selectedSign.icon}</span>
                  </div>
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
                      <div className="w-24 h-24 bg-accent/20 rounded-3xl flex items-center justify-center text-5xl border border-accent/30">
                        {selectedSign.icon}
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-4xl md:text-5xl font-black text-white mb-2 uppercase tracking-tighter">{selectedSign.name}</h3>
                        <p className="text-accent font-black text-xs uppercase tracking-[0.3em]">{selectedSign.date} • {selectedSign.element} Element</p>
                      </div>
                    </div>
                    <div className="max-w-3xl">
                      <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mb-4">Today's Cosmic Prediction</h4>
                      <p className="text-2xl md:text-3xl text-gray-200 font-medium leading-relaxed italic">
                        "{selectedSign.prediction}"
                      </p>
                    </div>
                    <div className="mt-12 flex flex-wrap gap-6">
                      <Link to={`/horoscope?sign=${selectedSign.name.toLowerCase()}`}>
                        <button className="btn-accent px-10 py-4 rounded-2xl">Detailed Forecast</button>
                      </Link>
                      <Link to="/astrologers">
                        <button className="btn-outline px-10 py-4 rounded-2xl">Consult for {selectedSign.name}</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── Kundli & Matchmaking Section ── */}
      <section className="py-24 px-4 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
                <History className="w-4 h-4 text-accent" />
                <span className="text-[10px] font-black uppercase tracking-widest text-accent">Vedic Precision</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
                Ancient <span className="text-accent">Birth Records</span> & Compatibility
              </h2>
              <p className="text-gray-400 text-lg font-medium max-w-xl">
                Get your detailed Janam Kundli and check your compatibility score with your partner using the most accurate Vedic algorithms.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Link to="/kundli">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="glass-card p-8 border-white/5 hover:border-accent/30 transition-all cursor-pointer group"
                  >
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Zap className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight">Free Kundli</h3>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed">Detailed birth chart with 100+ pages of deep cosmic analysis.</p>
                  </motion.div>
                </Link>
                
                <Link to="/matchmaking">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="glass-card p-8 border-white/5 hover:border-accent/30 transition-all cursor-pointer group"
                  >
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Heart className="w-7 h-7 text-accent fill-accent" />
                    </div>
                    <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight">Matchmaking</h3>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed">Check 36 Guna compatibility and Manglik Dosha analysis.</p>
                  </motion.div>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-accent/10 blur-[120px] rounded-full" />
              <div className="relative glass-card p-10 md:p-16 border-white/10 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <Sparkles className="w-48 h-48 text-accent" />
                </div>
                <div className="relative z-10">
                   <div className="flex items-center gap-4 mb-10">
                      <div className="flex -space-x-3">
                         {[1, 2].map(i => (
                           <div key={i} className="w-14 h-14 rounded-full border-4 border-primary-bg overflow-hidden shadow-2xl bg-secondary-surface">
                              <img src={`https://i.pravatar.cc/100?u=${i + 100}`} alt="user" />
                           </div>
                         ))}
                      </div>
                      <div className="h-10 w-px bg-white/10 mx-2" />
                      <div>
                         <p className="text-xs font-black text-gray-500 uppercase tracking-widest">Global Users</p>
                         <p className="text-lg font-black text-white uppercase tracking-tight">8.5M+ Charts Generated</p>
                      </div>
                   </div>
                   
                   <div className="space-y-6">
                      <h4 className="text-sm font-black text-accent uppercase tracking-[0.3em]">Quick Benefits</h4>
                      <ul className="space-y-4">
                        {[
                          'Accurate Lal Kitab Remedies',
                          'Panchang & Nakshatra Details',
                          'Dashas & Planetary Transits',
                          'Detailed Manglik Analysis'
                        ].map((benefit, i) => (
                          <li key={i} className="flex items-center gap-4 text-white/80 font-medium">
                            <div className="w-5 h-5 bg-accent rounded-md flex items-center justify-center">
                              <ArrowRight className="w-3 h-3 text-white" />
                            </div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                   </div>
                   
                   <Link to="/kundli">
                     <button className="w-full mt-12 btn-accent py-5 rounded-2xl flex items-center justify-center gap-3">
                        Generate Your Chart <ArrowRight className="w-5 h-5" />
                     </button>
                   </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── First Consultation Promo ── */}
      <section className="px-4 py-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-r from-accent/20 to-orange-500/5 rounded-[40px] p-1 border border-accent/20 shadow-2xl"
          >
            <div className="bg-[#192309] rounded-[38px] px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[80px] -z-10" />
               <div className="flex items-center gap-6">
                 <div className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center shadow-lg shadow-accent/20 shrink-0">
                    <TrendingUp className="w-10 h-10 text-white" />
                 </div>
                 <div>
                    <h3 className="text-3xl font-black text-white mb-2 tracking-tight">New to AstroBless?</h3>
                    <p className="text-gray-400 font-medium">Get your first consultation for only <span className="text-white font-black text-xl">₹1</span></p>
                 </div>
               </div>
               <Link to="/astrologers">
                 <button className="btn-accent px-12 py-5 rounded-[2rem] text-sm uppercase tracking-[0.2em] shadow-2xl">
                    Claim Offer Now
                 </button>
               </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Main Services ── */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Cosmic <span className="text-accent">Services</span></h2>
             <p className="text-gray-400 text-lg font-medium max-w-xl mx-auto">Tailored astrological solutions for every dimension of your life.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MessageSquare, title: 'Chat Consult', desc: 'Real-time guidance via instant messaging with top experts.', link: '/astrologers', color: 'from-blue-500' },
              { icon: Phone, title: 'Call Consult', desc: 'Direct voice connection for deeper spiritual clarity.', link: '/astrologers', color: 'from-emerald-500' },
              { icon: History, title: 'Kundli Matching', desc: 'Precision compatibility reports for lasting relationships.', link: '/kundli', color: 'from-amber-500' },
              { icon: Sparkles, title: 'AI Insights', desc: 'Future-ready cosmic predictions powered by AI models.', link: '/ai-chat', color: 'from-purple-500' },
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12 }}
                className="glass-card p-10 group relative overflow-hidden flex flex-col h-full border-white/5"
              >
                <div className={`absolute -right-4 -top-4 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 blur-3xl group-hover:opacity-20 transition-opacity`} />
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all shadow-xl">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{service.title}</h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed mb-10 flex-1">{service.desc}</p>
                <Link to={service.link}>
                  <button className="text-accent font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 group-hover:gap-5 transition-all">
                    Explore Now <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Top Astrologers Section ── */}
      <section className="py-32 px-4 overflow-hidden bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div>
              <div className="flex items-center gap-3 text-accent mb-6">
                <div className="w-10 h-px bg-accent" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Elite Council</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter">Masters of <span className="text-accent">Destiny</span></h2>
              <p className="text-gray-400 text-xl font-medium max-w-2xl leading-relaxed">Connect with India's most accurate and verified spiritual consultants.</p>
            </div>
            <Link to="/astrologers">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 px-12 py-5 rounded-3xl font-black text-xs uppercase tracking-widest flex items-center gap-4 hover:border-accent/40 transition-all text-white shadow-2xl"
              >
                View All Council <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>

          <div className="flex gap-10 overflow-x-auto pb-20 snap-x no-scrollbar -mx-4 px-4 md:-mx-0 md:px-0">
            {isLoading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="snap-center shrink-0 w-[320px] md:w-[400px] glass-card p-8 rounded-[40px] border-white/5 space-y-6">
                   <Skeleton height={240} />
                   <Skeleton height={32} width="70%" />
                   <Skeleton height={20} width="40%" />
                </div>
              ))
            ) : (
              astrologers.map((astrologer) => (
                <div key={astrologer.id} className="snap-center shrink-0 w-[320px] md:w-[400px]">
                  <AstrologerCard astrologer={astrologer} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ── AstroShop Teaser ── */}
      <section className="py-32 px-4 relative">
        <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[600px] h-[400px] bg-accent/5 blur-[120px] pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-1 rounded-full mb-6 border border-accent/20">
                <ShoppingBag className="w-4 h-4 text-accent" />
                <span className="text-[10px] font-black uppercase tracking-widest text-accent">Divine Market</span>
             </div>
             <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Spiritual <span className="text-accent">Tools</span></h2>
             <p className="text-gray-400 text-lg font-medium max-w-xl mx-auto">Energized products to align your vibration and manifest your desires.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {shopProducts.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -10 }}
                className="glass-card overflow-hidden group border-white/5"
              >
                <div className="h-72 overflow-hidden relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-1.5">
                    <Star className="w-3 h-3 text-accent fill-accent" />
                    <span className="text-xs font-black text-white">{product.rating}</span>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-2">{product.category}</p>
                  <h3 className="text-xl font-black text-white mb-6 uppercase tracking-tight">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-white">₹{product.price.toLocaleString()}</span>
                    <Link to="/shop">
                      <button className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all">
                        <ShoppingBag className="w-5 h-5" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
             <Link to="/shop">
               <button className="btn-outline px-12 py-5 rounded-[2rem]">Visit AstroShop</button>
             </Link>
          </div>
        </div>
      </section>

      {/* ── Academy Teaser ── */}
      <section className="py-32 px-4 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-1 rounded-full mb-6 border border-accent/20">
                <BookOpen className="w-4 h-4 text-accent" />
                <span className="text-[10px] font-black uppercase tracking-widest text-accent">Learning Center</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter">Become a <br />Master of <span className="text-accent">Fate</span></h2>
              <p className="text-gray-400 text-xl font-medium mb-12 leading-relaxed">Learn ancient Vedic secrets from India's top mentors. Professional certifications designed for the modern world.</p>
              
              <div className="space-y-6 mb-12">
                {[
                  { icon: Award, title: 'Certified Courses', desc: 'Globally recognized certifications upon completion.' },
                  { icon: Users, title: 'Live Mentorship', desc: 'Direct interaction with expert astrologers.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0 border border-accent/20">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white uppercase tracking-tight">{item.title}</h4>
                      <p className="text-gray-500 text-sm font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/academy">
                <button className="btn-accent px-12 py-5 rounded-[2rem] shadow-2xl">Start Learning</button>
              </Link>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
               {academyCourses.map((course) => (
                 <motion.div 
                    key={course.id}
                    whileHover={{ y: -10 }}
                    className="glass-card overflow-hidden group border-white/5 h-fit"
                 >
                   <div className="h-56 overflow-hidden">
                     <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   </div>
                   <div className="p-8">
                     <h4 className="text-lg font-black text-white mb-4 uppercase tracking-tight leading-tight">{course.title}</h4>
                     <p className="text-xs text-gray-500 font-bold mb-6 italic">by {course.instructor}</p>
                     <div className="flex items-center justify-between pt-6 border-t border-white/5">
                        <span className="text-xs font-black text-accent uppercase tracking-widest">{course.duration}</span>
                        <span className="text-lg font-black text-white">₹{course.price.toLocaleString()}</span>
                     </div>
                   </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>
      {/* ── Testimonials Section ── */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <div className="flex items-center justify-center gap-2 mb-6">
                <Star className="w-5 h-5 text-accent fill-accent" />
                <Star className="w-5 h-5 text-accent fill-accent" />
                <Star className="w-5 h-5 text-accent fill-accent" />
                <Star className="w-5 h-5 text-accent fill-accent" />
                <Star className="w-5 h-5 text-accent fill-accent" />
             </div>
             <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">Divine <span className="text-accent">Stories</span></h2>
             <p className="text-gray-400 font-medium max-w-lg mx-auto text-xl">Real experiences from people who found clarity through AstroBless.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((t) => (
              <motion.div 
                key={t.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ borderColor: 'rgba(253,125,0,0.2)' }}
                className="glass-card p-14 relative overflow-hidden flex flex-col md:flex-row gap-10 items-start transition-all border-white/5"
              >
                <div className="w-24 h-24 bg-accent/20 rounded-[35%] shrink-0 flex items-center justify-center overflow-hidden border-2 border-accent/20 shadow-2xl rotate-12 group-hover:rotate-0 transition-transform">
                   <img src={`https://i.pravatar.cc/120?u=${t.name}`} alt={t.name} className="w-full h-full object-cover -rotate-12 group-hover:rotate-0 transition-transform" />
                </div>
                <div className="flex-1">
                  <div className="flex gap-2 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-2xl font-medium text-gray-200 mb-10 leading-relaxed font-['Outfit'] italic tracking-tight">"{t.comment}"</p>
                  <div className="flex items-center justify-between pt-8 border-t border-white/5">
                    <span className="font-black text-white text-lg tracking-widest uppercase">— {t.name}</span>
                    <div className="bg-accent/10 px-4 py-1.5 rounded-full text-[10px] font-black text-accent border border-accent/20 tracking-widest uppercase">Verified Seeker</div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/5 blur-3xl rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ── Blog / Insights Section ── */}
      <section className="py-32 px-4 relative">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-accent mb-6">
                <div className="w-10 h-px bg-accent" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Celestial Wisdom</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter">Cosmic <span className="text-accent">Insights</span></h2>
              <p className="text-gray-400 text-xl font-medium">Deep dives into planetary transits, spiritual growth, and ancient remedies.</p>
            </div>
            <Link to="/blog">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="btn-outline px-10 py-4 rounded-3xl flex items-center gap-3 group"
              >
                Explore Blog <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {blogPosts.map((post, i) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card overflow-hidden group border-white/5 flex flex-col h-full"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 bg-accent px-4 py-1.5 rounded-full shadow-xl">
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">{post.category}</span>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-1">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                      <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-accent" />
                      <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{post.author}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight leading-tight group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 font-medium text-sm leading-relaxed mb-10 flex-1">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`} className="mt-auto">
                    <button className="text-white font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 group-hover:text-accent transition-all">
                      Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      
      {/* ── FAQ Section ── */}
      <section className="py-32 px-4 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Common <span className="text-accent">Queries</span></h2>
             <p className="text-gray-400 text-lg font-medium">Everything you need to know about our services.</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* ── App Download Section ── */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/5 rounded-full blur-[150px] -z-10" />
        <div className="max-w-7xl mx-auto glass-card p-12 md:p-24 relative overflow-hidden border-accent/10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent -z-10" />
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-1 rounded-full mb-8 border border-accent/20">
                <Smartphone className="w-4 h-4 text-accent" />
                <span className="text-[10px] font-black uppercase tracking-widest text-accent">Mobile Experience</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">Your Universe <br /><span className="text-accent">In Your Pocket</span></h2>
              <p className="text-gray-400 text-xl font-medium mb-12 leading-relaxed">Experience divine guidance on the go. Get instant notifications for planetary transits and connect with experts anytime.</p>
              
              <div className="flex flex-wrap gap-6 mb-12">
                <button className="bg-black hover:bg-gray-900 border border-white/10 px-8 py-4 rounded-2xl flex items-center gap-4 transition-all group">
                  <Apple className="w-8 h-8 text-white fill-white" />
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Download on the</p>
                    <p className="text-lg font-black text-white">App Store</p>
                  </div>
                </button>
                <button className="bg-black hover:bg-gray-900 border border-white/10 px-8 py-4 rounded-2xl flex items-center gap-4 transition-all group">
                  <Play className="w-8 h-8 text-white fill-white" />
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Get it on</p>
                    <p className="text-lg font-black text-white">Google Play</p>
                  </div>
                </button>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-white p-2 rounded-2xl shadow-2xl">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://astrobless.com" alt="QR Code" className="w-full h-full" />
                </div>
                <p className="text-sm font-bold text-gray-500 max-w-[150px]">Scan to download the app instantly</p>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 w-full max-w-[400px] mx-auto perspective-1000">
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-primary-bg rounded-[3rem] border-[8px] border-secondary-surface shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden aspect-[9/19] relative"
                >
                  <img src="https://images.unsplash.com/photo-1614732414444-af9613f3f1a3?q=80&w=400&auto=format&fit=crop" alt="App UI" className="w-full h-full object-cover opacity-50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-transparent to-transparent" />
                  <div className="absolute bottom-12 left-8 right-8">
                    <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-accent/40">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Daily Horoscope</h3>
                    <p className="text-gray-400 text-sm font-medium">Your cosmic guide for today is ready. Read now.</p>
                  </div>
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-12 top-1/4 glass-card p-6 border-accent/20 shadow-2xl"
                >
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <Phone className="w-4 h-4 text-emerald-500" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-gray-500 uppercase">Consultation Live</p>
                        <p className="text-xs font-black text-white tracking-widest">Acharya Vamsi</p>
                      </div>
                   </div>
                </motion.div>
              </div>
            </div>
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
          className="max-w-7xl mx-auto bg-gradient-to-br from-accent via-orange-600 to-amber-600 rounded-[60px] p-16 md:p-32 text-center relative overflow-hidden shadow-[0_50px_120px_-20px_rgba(253,125,0,0.5)] border border-white/10"
        >
          <div className="relative z-10">
            <h2 className="text-6xl md:text-[100px] font-black text-white mb-10 leading-[0.85] tracking-tighter">Your Destiny <br />is Waiting.</h2>
            <p className="text-white/90 text-xl md:text-3xl max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
              Join millions who found their path. Start your spiritual journey with a personalized reading today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link to="/astrologers" className="w-full sm:w-auto">
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: '#FFFFFF', color: '#FD7D00' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-accent font-black text-2xl px-20 py-7 rounded-[2.5rem] shadow-2xl transition-all w-full"
                >
                  Get Started Free
                </motion.button>
              </Link>
              <button className="text-white font-black text-sm uppercase tracking-[0.3em] border-2 border-white/30 hover:border-white px-14 py-7 rounded-[2.5rem] transition-all w-full sm:w-auto backdrop-blur-xl">
                Talk to Support
              </button>
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px]" />
            <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-black/10 rounded-full blur-[120px]" />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

const FAQItem: React.FC<{ faq: { question: string; answer: string } }> = ({ faq }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <motion.div 
      className="glass-card overflow-hidden border-white/5 hover:border-white/10 transition-colors"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 flex items-center justify-between text-left group"
      >
        <span className="text-xl font-black text-white uppercase tracking-tight group-hover:text-accent transition-colors">{faq.question}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-accent text-white rotate-180' : 'bg-white/5 text-gray-400'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="p-8 pt-0 text-gray-400 font-medium leading-relaxed border-t border-white/5 bg-white/[0.01]">
          {faq.answer}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
