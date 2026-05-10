import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Star, 
  MessageSquare, 
  Phone, 
  Shield, 
  Award, 
  Languages, 
  ArrowLeft,
  Share2,
  Heart,
  BadgeCheck,
  TrendingUp,
  Clock,
  Briefcase,
  ChevronRight
} from 'lucide-react';
import { astrologers } from '../data/mockData';

const AstrologerProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const astrologer = astrologers.find(a => a.id === id);

  if (!astrologer) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card max-w-md w-full p-10 text-center"
        >
          <div className="w-20 h-20 bg-secondary-surface rounded-3xl flex items-center justify-center mx-auto mb-6 border border-white/10 shadow-xl">
            <span className="text-4xl">✨</span>
          </div>
          <h2 className="text-2xl font-black text-white mb-3">Expert Not Found</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">The astrologer you're looking for might have moved or the link is incorrect.</p>
          <Link to="/astrologers">
            <button className="btn-accent w-full py-4 rounded-2xl shadow-lg shadow-accent/20">Explore All Experts</button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pb-24 bg-primary-bg min-h-screen">
      {/* ── Dynamic Hero Banner ── */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary-bg to-secondary-surface" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-transparent to-black/20" />
        
        {/* Abstract Shapes */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-secondary-surface rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 flex justify-between items-start relative z-10">
          <Link to="/astrologers">
            <motion.button 
              whileHover={{ x: -4 }}
              className="group px-4 py-2.5 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 text-white flex items-center gap-2 text-sm font-black transition-all hover:bg-black/60"
            >
              <ArrowLeft className="w-4 h-4 text-accent group-hover:-translate-x-1 transition-transform" /> 
              Back to Network
            </motion.button>
          </Link>
          <div className="flex gap-3">
            <button className="p-3 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 text-white hover:text-accent transition-all hover:scale-110">
              <Share2 className="w-4.5 h-4.5" />
            </button>
            <button className="p-3 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 text-white hover:text-red-500 transition-all hover:scale-110">
              <Heart className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-32 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ── Left Sidebar: Identity & Actions ── */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-8 sticky top-24 shadow-2xl border-white/10"
            >
              <div className="relative w-40 h-40 mx-auto mb-8">
                <div className="absolute inset-0 bg-accent/30 rounded-[40px] blur-2xl animate-pulse" />
                <div className="relative w-full h-full rounded-[40px] overflow-hidden border-2 border-white/20 shadow-2xl">
                  <img src={astrologer.image} alt={astrologer.name} className="w-full h-full object-cover scale-105" />
                </div>
                {astrologer.online && (
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full border-4 border-secondary-surface shadow-xl tracking-widest flex items-center gap-2 whitespace-nowrap">
                    <span className="w-2 h-2 bg-white rounded-full animate-ping" />
                    ONLINE NOW
                  </div>
                )}
              </div>

              <div className="text-center mb-8">
                <h1 className="text-3xl font-black text-white flex items-center justify-center gap-2 mb-2">
                  {astrologer.name}
                  <BadgeCheck className="w-6 h-6 text-accent fill-accent/20" />
                </h1>
                <div className="flex items-center justify-center gap-2 px-3 py-1 bg-white/5 rounded-full w-fit mx-auto border border-white/5">
                  <TrendingUp className="w-3.5 h-3.5 text-accent" />
                  <span className="text-[11px] font-black text-gray-400 uppercase tracking-wider">Top Tier Expert</span>
                </div>
              </div>

              {/* Enhanced Stats Row */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { label: 'Rating', val: astrologer.rating, sub: 'Score' },
                  { label: 'Exp.', val: `${astrologer.experience}y`, sub: 'Practice' },
                  { label: 'Chat', val: '12k', sub: 'Clients' },
                ].map((s, i) => (
                  <div key={i} className="bg-white/5 rounded-2xl p-3.5 text-center border border-white/5 hover:border-white/10 transition-colors">
                    <p className="text-xl font-black text-white leading-none mb-1">{s.val}</p>
                    <p className="text-[9px] uppercase font-bold text-gray-500 tracking-tighter">{s.sub}</p>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-accent/5 rounded-3xl border border-accent/10 mb-8">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Pricing</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-accent" />
                    <span className="text-[10px] font-bold text-accent">Per Minute</span>
                  </div>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-white">₹{astrologer.price}</span>
                  <span className="text-gray-500 font-bold text-sm">/min</span>
                </div>
              </div>

              <div className="space-y-4">
                <Link to={`/chat/${astrologer.id}`} className="block">
                  <motion.button 
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-accent hover:shadow-[0_0_30px_rgba(253,125,0,0.4)] text-white py-4 rounded-2xl flex items-center justify-center gap-3 text-sm font-black transition-all"
                  >
                    <MessageSquare className="w-5 h-5" /> Start Live Chat
                  </motion.button>
                </Link>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white/5 hover:bg-white/10 text-white py-4 rounded-2xl flex items-center justify-center gap-3 text-sm font-black transition-all border border-white/10 group"
                >
                  <Phone className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors" /> Call Consult
                </motion.button>
              </div>
            </motion.div>

            {/* Quick Info Card */}
            <div className="glass-card p-6 border-white/5">
              <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-4">Availability</h3>
              <div className="space-y-3">
                {['Mon - Fri', 'Sat - Sun'].map((day, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                    <span className="text-sm font-bold text-gray-300">{day}</span>
                    <span className="text-xs font-black text-white">09:00 AM - 10:00 PM</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Content Area ── */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Professional Bio Section */}
            <motion.section 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-10 overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                <Briefcase className="w-48 h-48" />
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white">Professional Background</h2>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Certified & Verified Expert</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed font-medium mb-10">
                {astrologer.about}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div className="group">
                  <div className="flex items-center gap-3 mb-3 text-accent">
                    <Languages className="w-5 h-5" />
                    <span className="text-xs font-black uppercase tracking-widest text-gray-400">Communication</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {astrologer.languages.map(lang => (
                      <span key={lang} className="px-3 py-1 bg-white/5 rounded-lg text-sm font-bold text-white border border-white/5 group-hover:border-accent/20 transition-colors">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-center gap-3 mb-3 text-accent">
                    <Award className="w-5 h-5" />
                    <span className="text-xs font-black uppercase tracking-widest text-gray-400">Specializations</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {astrologer.specialties.map(spec => (
                      <span key={spec} className="px-3 py-1 bg-accent/5 rounded-lg text-sm font-bold text-accent border border-accent/10 group-hover:border-accent/30 transition-colors">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Performance Analytics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-8">
                 <h3 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] mb-8">Consultation Metrics</h3>
                 <div className="space-y-6">
                    {[
                      { label: 'Accuracy Score', val: 98, color: 'bg-accent' },
                      { label: 'Response Time', val: 95, color: 'bg-green-500' },
                      { label: 'Remedy Effectiveness', val: 92, color: 'bg-blue-500' },
                    ].map(m => (
                      <div key={m.label}>
                        <div className="flex justify-between text-xs font-black mb-2">
                          <span className="text-gray-400 uppercase tracking-tighter">{m.label}</span>
                          <span className="text-white">{m.val}%</span>
                        </div>
                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${m.val}%` }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                            className={`h-full ${m.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="glass-card p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-accent/[0.02] -skew-y-12 translate-y-12" />
                 <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-2 relative z-10">Overall Satisfaction</p>
                 <p className="text-7xl font-black text-white mb-4 relative z-10">4.9</p>
                 <div className="flex gap-1.5 mb-4 relative z-10">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-accent fill-accent" />)}
                 </div>
                 <p className="text-xs font-bold text-gray-500 relative z-10">Based on {astrologer.reviewsCount}+ sessions</p>
              </div>
            </div>

            {/* Client Testimonials */}
            <section className="glass-card p-10">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-2xl font-black text-white mb-1">Client Stories</h2>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Real experiences from our community</p>
                </div>
                <button className="flex items-center gap-1 text-[11px] font-black text-accent hover:gap-2 transition-all uppercase tracking-widest">
                  View All <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { name: 'Rahul Sharma', initial: 'R', date: '2 days ago', msg: 'The career predictions were spot on. The remedies suggested are simple yet incredibly effective in my daily routine.', rating: 5 },
                  { name: 'Priya K.', initial: 'P', date: '1 week ago', msg: 'Very calm and patient listener. Provided great clarity on my relationship concerns when I was feeling most lost.', rating: 5 },
                ].map((rev, i) => (
                  <div key={i} className="p-6 bg-white/[0.02] rounded-3xl border border-white/5 hover:border-white/10 transition-all group">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center font-black text-accent border border-accent/20 group-hover:scale-110 transition-transform">
                          {rev.initial}
                        </div>
                        <div>
                          <p className="text-sm font-black text-white">{rev.name}</p>
                          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">{rev.date}</p>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(j => (
                          <Star key={j} className="w-3 h-3 text-accent fill-accent" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed font-medium italic">
                      "{rev.msg}"
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AstrologerProfile;

