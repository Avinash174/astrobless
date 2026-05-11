import { motion } from 'framer-motion';
import { Moon, Star, Sun, ArrowRight, Sparkles } from 'lucide-react';

const Horoscope = () => {
  const zodiacs = [
    { name: 'Aries', date: 'Mar 21 - Apr 19', icon: '♈' },
    { name: 'Taurus', date: 'Apr 20 - May 20', icon: '♉' },
    { name: 'Gemini', date: 'May 21 - Jun 20', icon: '♊' },
    { name: 'Cancer', date: 'Jun 21 - Jul 22', icon: '♋' },
    { name: 'Leo', date: 'Jul 23 - Aug 22', icon: '♌' },
    { name: 'Virgo', date: 'Aug 23 - Sep 22', icon: '♍' },
    { name: 'Libra', date: 'Sep 23 - Oct 22', icon: '♎' },
    { name: 'Scorpio', date: 'Oct 23 - Nov 21', icon: '♏' },
    { name: 'Sagittarius', date: 'Nov 22 - Dec 21', icon: '♐' },
    { name: 'Capricorn', date: 'Dec 22 - Jan 19', icon: '♑' },
    { name: 'Aquarius', date: 'Jan 20 - Feb 18', icon: '♒' },
    { name: 'Pisces', date: 'Feb 19 - Mar 20', icon: '♓' },
  ];

  return (
    <main className="bg-light min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-secondary text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -ml-24 -mt-24"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full mb-8 backdrop-blur-sm border border-white/10"
          >
            <Sparkles size={18} className="text-primary" />
            <span className="text-sm font-black uppercase tracking-widest">Daily Cosmic Insights</span>
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black mb-8">Daily Horoscope</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover what the stars have in store for you today. Personalized predictions for career, love, and health.
          </p>
        </div>
      </section>

      {/* Tabs / Filters */}
      <section className="max-w-4xl mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-3 flex gap-2 shadow-2xl shadow-secondary/10 border border-gray-50">
          {['Daily', 'Weekly', 'Monthly', 'Yearly 2026'].map((tab, i) => (
            <button 
              key={tab}
              className={`flex-1 py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition-all ${i === 0 ? 'bg-secondary text-white shadow-lg' : 'text-secondary/60 hover:bg-light'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Zodiac Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {zodiacs.map((sign, i) => (
            <motion.div
              key={sign.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-8 rounded-[3rem] premium-shadow border-2 border-transparent hover:border-primary transition-all cursor-pointer group text-center"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{sign.icon}</div>
              <h3 className="text-2xl font-black text-secondary mb-2">{sign.name}</h3>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">{sign.date}</p>
              <button className="w-full py-4 rounded-2xl bg-light text-secondary font-black text-sm group-hover:bg-primary transition-colors flex items-center justify-center gap-2">
                Read Prediction
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Insights */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-[4rem] p-12 md:p-20 flex flex-col md:flex-row gap-16 items-center premium-shadow overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          
          <div className="flex-1 space-y-8">
            <h2 className="text-5xl font-black text-secondary leading-tight">Your Weekly <br /><span className="text-accent">Cosmic Summary</span></h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              This week, the planetary alignment suggests a major shift in your professional life. Focus on networking and clear communication to unlock new opportunities.
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-secondary">
                  <Star size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Lucky Number</p>
                  <p className="text-xl font-black text-secondary">07</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                  <Sun size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Lucky Color</p>
                  <p className="text-xl font-black text-secondary">Indigo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-sm">
            <div className="bg-light rounded-[3rem] p-8 border-2 border-primary/20 relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-secondary rounded-full flex items-center justify-center shadow-xl">
                <Moon size={32} className="text-white" />
              </div>
              <h4 className="text-2xl font-black text-secondary mb-4 mt-4">Love & Harmony</h4>
              <p className="text-gray-400 font-medium mb-6 italic leading-relaxed">
                "Venus enters your seventh house on Friday, bringing a wave of romantic energy. Perfect time for deep conversations."
              </p>
              <div className="flex gap-1 text-primary">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Horoscope;
