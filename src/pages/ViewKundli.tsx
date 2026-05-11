import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Calendar, Clock, MapPin, ArrowRight, ShieldCheck, FileText } from 'lucide-react';

const ViewKundli = () => {
  return (
    <main className="bg-light min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">Your Free <br /><span className="text-primary italic">Janam Kundli</span></h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Unlock the secrets of your life with our detailed Vedic birth chart. Accurate analysis of planetary positions at the time of your birth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-[1.5] bg-white rounded-[3rem] p-8 md:p-16 premium-shadow border-2 border-gray-50"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-secondary shadow-lg shadow-primary/20">
                <FileText size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-black text-secondary">Enter Birth Details</h2>
                <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em]">All fields are mandatory for accurate report</p>
              </div>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="flex items-center gap-2 text-sm font-black text-secondary/60 uppercase tracking-widest mb-3">
                    <Layout size={14} className="text-primary" /> Full Name
                  </label>
                  <input type="text" placeholder="e.g. Rahul Sharma" className="w-full bg-light border-2 border-transparent focus:border-primary/30 rounded-2xl px-6 py-4 outline-none font-bold text-secondary transition-all" />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-black text-secondary/60 uppercase tracking-widest mb-3">
                    <Calendar size={14} className="text-primary" /> Gender
                  </label>
                  <select className="w-full bg-light border-2 border-transparent focus:border-primary/30 rounded-2xl px-6 py-4 outline-none font-bold text-secondary transition-all appearance-none cursor-pointer">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="flex items-center gap-2 text-sm font-black text-secondary/60 uppercase tracking-widest mb-3">
                    <Calendar size={14} className="text-primary" /> Date of Birth
                  </label>
                  <input type="date" className="w-full bg-light border-2 border-transparent focus:border-primary/30 rounded-2xl px-6 py-4 outline-none font-bold text-secondary transition-all" />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-black text-secondary/60 uppercase tracking-widest mb-3">
                    <Clock size={14} className="text-primary" /> Time of Birth
                  </label>
                  <input type="time" className="w-full bg-light border-2 border-transparent focus:border-primary/30 rounded-2xl px-6 py-4 outline-none font-bold text-secondary transition-all" />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-black text-secondary/60 uppercase tracking-widest mb-3">
                  <MapPin size={14} className="text-primary" /> Place of Birth
                </label>
                <input type="text" placeholder="Enter City/State" className="w-full bg-light border-2 border-transparent focus:border-primary/30 rounded-2xl px-6 py-4 outline-none font-bold text-secondary transition-all" />
              </div>

              <button className="w-full bg-accent text-white py-6 rounded-3xl font-black text-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-4 shadow-2xl shadow-accent/30 active:scale-95 group">
                Generate Kundli Report
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Features / Benefits Side */}
          <div className="flex-1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-[3rem] premium-shadow border border-gray-50"
            >
              <h3 className="text-2xl font-black text-secondary mb-6">What's inside your report?</h3>
              <ul className="space-y-6">
                {[
                  { title: 'Planetary Positions', desc: 'Detailed analysis of all 9 planets.' },
                  { title: 'Lagna Chart', desc: 'The most important chart for your life path.' },
                  { title: 'Vimshottari Dasha', desc: 'Future timeline of major life events.' },
                  { title: 'Life Predictions', desc: 'Career, Health, and Wealth insights.' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 group">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-secondary shrink-0 group-hover:bg-primary transition-colors">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <p className="font-black text-secondary leading-none mb-1">{item.title}</p>
                      <p className="text-sm text-gray-400 font-medium">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-accent text-white p-10 rounded-[3rem] premium-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                <ShieldCheck size={120} />
              </div>
              <h3 className="text-2xl font-black mb-4">100% Data Privacy</h3>
              <p className="text-white/70 font-medium mb-6">Your birth details are encrypted and never shared with third parties.</p>
              <div className="flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest">
                <ShieldCheck size={16} /> Trusted by 1M+ Users
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

const CheckCircle2 = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default ViewKundli;
