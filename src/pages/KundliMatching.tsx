import { motion } from 'framer-motion';
import { Compass, Users, Heart, Star, ShieldCheck, ArrowRight } from 'lucide-react';

const KundliMatching = () => {
  return (
    <main className="bg-light min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-8 shadow-xl shadow-primary/20"
            >
              <Compass className="text-secondary" size={40} />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black mb-6">Kundli Matching</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Check your compatibility with your partner through Vedic Astrology. Get detailed insights into your future together.
            </p>
          </div>
        </div>
      </section>

      {/* Matching Form */}
      <section className="max-w-5xl mx-auto px-4 -mt-20 relative z-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[3rem] p-8 md:p-16 premium-shadow border-2 border-gray-50"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
            {/* Center Heart Icon */}
            <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none">
              <div className="w-20 h-20 bg-light rounded-full flex items-center justify-center shadow-inner">
                <Heart className="text-red-500 fill-red-500" size={32} />
              </div>
            </div>

            {/* Boy's Details */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl font-black text-secondary">Boy's Details</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-black text-secondary/60 uppercase tracking-widest mb-2">Full Name</label>
                  <input type="text" placeholder="Enter Name" className="w-full bg-light border-2 border-transparent focus:border-primary/30 rounded-2xl px-6 py-4 outline-none font-bold text-secondary transition-all" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-black text-secondary/60 uppercase tracking-widest mb-2">Birth Date</label>
                    <input type="date" className="w-full bg-light border-2 border-transparent focus:border-primary/30 rounded-2xl px-6 py-4 outline-none font-bold text-secondary transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-secondary/60 uppercase tracking-widest mb-2">Birth Time</label>
                    <input type="time" className="w-full bg-light border-2 border-transparent focus:border-primary/30 rounded-2xl px-6 py-4 outline-none font-bold text-secondary transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-black text-secondary/60 uppercase tracking-widest mb-2">Birth Place</label>
                  <input type="text" placeholder="Enter Birth Place" className="w-full bg-light border-2 border-transparent focus:border-primary/30 rounded-2xl px-6 py-4 outline-none font-bold text-secondary transition-all" />
                </div>
              </div>
            </div>

            {/* Girl's Details */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl font-black text-secondary">Girl's Details</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-black text-secondary/60 uppercase tracking-widest mb-2">Full Name</label>
                  <input type="text" placeholder="Enter Name" className="w-full bg-light border-2 border-transparent focus:border-primary/30 rounded-2xl px-6 py-4 outline-none font-bold text-secondary transition-all" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-black text-secondary/60 uppercase tracking-widest mb-2">Birth Date</label>
                    <input type="date" className="w-full bg-light border-2 border-transparent focus:border-primary/30 rounded-2xl px-6 py-4 outline-none font-bold text-secondary transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-secondary/60 uppercase tracking-widest mb-2">Birth Time</label>
                    <input type="time" className="w-full bg-light border-2 border-transparent focus:border-primary/30 rounded-2xl px-6 py-4 outline-none font-bold text-secondary transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-black text-secondary/60 uppercase tracking-widest mb-2">Birth Place</label>
                  <input type="text" placeholder="Enter Birth Place" className="w-full bg-light border-2 border-transparent focus:border-primary/30 rounded-2xl px-6 py-4 outline-none font-bold text-secondary transition-all" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center">
            <button className="bg-accent text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-opacity-90 transition-all flex items-center gap-4 shadow-2xl shadow-accent/30 active:scale-95 group">
              Match Kundli Now
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <p className="mt-6 text-gray-400 font-bold flex items-center gap-2">
              <ShieldCheck size={20} className="text-green-500" />
              100% Private & Secure Analysis
            </p>
          </div>
        </motion.div>
      </section>

      {/* Why Kundli Matching? */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-secondary mb-4">Why Kundli Matching Matters?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Vedic astrology offers profound insights into relationship harmony through Guna Milan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Guna Milan', desc: 'Detailed analysis of 36 gunas to check mental and emotional compatibility.', icon: Star },
            { title: 'Manglik Dosha', desc: 'Identify potential challenges and find appropriate remedies for a happy life.', icon: Compass },
            { title: 'Relationship Longevity', icon: Heart, desc: 'Understand the strength and endurance of your bond through stars.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2.5rem] premium-shadow border border-gray-50"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
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

export default KundliMatching;
