import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Star, Compass, ShieldCheck, ArrowRight, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';

const Numerology = () => {
  return (
    <main className="bg-light min-h-screen pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="bg-secondary text-white py-24 relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl -mr-96 -mt-96 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-primary/20 px-6 py-2 rounded-full border border-primary/20 backdrop-blur-sm"
              >
                <Sparkles size={18} className="text-primary" />
                <span className="text-sm font-black uppercase tracking-[0.3em] text-primary">Power of Numbers</span>
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-black leading-none">
                Unlock Your <br />
                <span className="text-primary italic">Destiny Number</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                Numbers rule your life. From your name to your birth date, every digit holds a secret about your success, health, and future.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <button className="bg-primary text-secondary px-10 py-6 rounded-3xl font-black text-xl hover:bg-white transition-all shadow-2xl shadow-primary/20 active:scale-95 flex items-center gap-3">
                  Get Full Report
                  <ArrowRight size={24} />
                </button>
                <div className="flex items-center gap-4 text-white/60 font-bold">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <ShieldCheck size={24} />
                  </div>
                  <span>Join 50k+ seekers <br />this month</span>
                </div>
              </div>
            </div>

            <div className="flex-1 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 bg-white rounded-[4rem] p-4 shadow-2xl shadow-black/50"
              >
                <img 
                  src="/numerology_banner.png" 
                  alt="Numerology Report" 
                  className="w-full h-auto rounded-[3.5rem] object-cover"
                />
              </motion.div>
              {/* Floating Numbers */}
              {[1, 7, 3, 9, 5].map((n, i) => (
                <motion.div
                  key={n}
                  animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  className="absolute text-8xl font-black text-white/5 pointer-events-none select-none"
                  style={{ 
                    top: `${Math.random() * 80}%`, 
                    left: `${Math.random() * 80}%`,
                    fontSize: `${Math.random() * 100 + 100}px`
                  }}
                >
                  {n}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Form Grid */}
      <section className="max-w-7xl mx-auto px-4 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white rounded-[3.5rem] p-12 md:p-20 premium-shadow border-2 border-gray-50"
          >
            <div className="flex items-center gap-6 mb-16">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent shadow-sm">
                <FileText size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-black text-secondary">Start Your Analysis</h2>
                <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mt-1">Personalized Numerology Consultation</p>
              </div>
            </div>

            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block text-sm font-black text-secondary/60 uppercase tracking-[0.2em] mb-4">Full Name (As per records)</label>
                  <input type="text" placeholder="Rahul Sharma" className="w-full bg-light border-2 border-transparent focus:border-primary/30 rounded-2xl px-8 py-5 outline-none font-bold text-secondary transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-black text-secondary/60 uppercase tracking-[0.2em] mb-4">Date of Birth</label>
                  <input type="date" className="w-full bg-light border-2 border-transparent focus:border-primary/30 rounded-2xl px-8 py-5 outline-none font-bold text-secondary transition-all" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block text-sm font-black text-secondary/60 uppercase tracking-[0.2em] mb-4">Email for Report</label>
                  <input type="email" placeholder="rahul@example.com" className="w-full bg-light border-2 border-transparent focus:border-primary/30 rounded-2xl px-8 py-5 outline-none font-bold text-secondary transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-black text-secondary/60 uppercase tracking-[0.2em] mb-4">Focus Area</label>
                  <select className="w-full bg-light border-2 border-transparent focus:border-primary/30 rounded-2xl px-8 py-5 outline-none font-bold text-secondary transition-all appearance-none cursor-pointer">
                    <option>Business & Career</option>
                    <option>Love & Marriage</option>
                    <option>Health & Vitality</option>
                    <option>Complete Life Guide</option>
                  </select>
                </div>
              </div>

              <div className="pt-6">
                <button className="w-full bg-secondary text-white py-6 rounded-3xl font-black text-xl hover:bg-accent transition-all shadow-2xl shadow-secondary/20 active:scale-95 flex items-center justify-center gap-4 group">
                  Generate Report
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

          {/* Pricing Side */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-10 rounded-[3.5rem] premium-shadow border-2 border-primary/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-primary text-secondary px-6 py-2 rounded-bl-3xl font-black text-xs uppercase tracking-widest">
                Best Seller
              </div>
              <h3 className="text-2xl font-black text-secondary mb-2">Premium Report</h3>
              <p className="text-gray-400 font-medium text-sm mb-8">40+ Pages of Deep Insight</p>
              
              <div className="flex items-baseline gap-2 mb-10">
                <span className="text-5xl font-black text-secondary">₹499</span>
                <span className="text-gray-400 line-through font-bold">₹1,499</span>
              </div>

              <ul className="space-y-6 mb-10">
                {[
                  'Birth Number Analysis',
                  'Destiny Number Insights',
                  'Lucky Colors & Days',
                  '12 Month Forecast',
                  'Business Success Guide'
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-secondary font-bold text-sm">
                    <CheckCircle2 size={18} className="text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-light text-secondary py-5 rounded-2xl font-black hover:bg-secondary hover:text-white transition-all">
                View Sample Report
              </button>
            </motion.div>

            <div className="bg-accent p-10 rounded-[3.5rem] text-white premium-shadow text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle size={32} />
              </div>
              <h4 className="text-xl font-black mb-2">Need Expert Help?</h4>
              <p className="text-white/70 font-medium text-sm mb-8 leading-relaxed">
                Connect with our top Numerologists for a personalized 1-on-1 session.
              </p>
              <button className="text-primary font-black uppercase text-sm tracking-widest hover:gap-3 transition-all flex items-center justify-center gap-2 mx-auto">
                Consult Now <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Insights */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-secondary">The Science of Numerology</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg mt-4">Understanding the vibration of numbers and how they influence your reality.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Vibrational Frequency', icon: Sparkles, desc: 'Every number has a unique frequency that resonates with your personal energy.' },
            { title: 'Karmic Lessons', icon: Compass, desc: 'Identify the challenges you are meant to overcome in this lifetime through your name digits.' },
            { title: 'Divine Timing', icon: FileText, desc: 'Know the exact years and months when your efforts will yield maximum success.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-[3.5rem] premium-shadow border border-gray-50"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-secondary mb-8">
                <item.icon size={32} />
              </div>
              <h4 className="text-2xl font-black text-secondary mb-4">{item.title}</h4>
              <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Numerology;
