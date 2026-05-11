import { motion } from 'framer-motion';
import { 
  Play, 
  Users, 
  MessageCircle, 
  Heart, 
  Share2, 
  Radio, 
  ShieldCheck, 
  ArrowRight,
  Clock,
  Zap,
  Calendar
} from 'lucide-react';

const Live = () => {
  const liveSessions = [
    { name: 'Acharya Krishiv', viewers: '1.2k', topic: 'Career & Wealth Guidance', type: 'Vedic', avatar: 'https://i.pravatar.cc/150?u=1' },
    { name: 'Tarot Merakii', viewers: '850', topic: 'Relationship Q&A', type: 'Tarot', avatar: 'https://i.pravatar.cc/150?u=2' },
    { name: 'Dr. Aditya Sharma', viewers: '2.4k', topic: 'Horoscope 2026 Analysis', type: 'Expert', avatar: 'https://i.pravatar.cc/150?u=3' },
    { name: 'Maanya Gupta', viewers: '420', topic: 'Past Life Regression', type: 'Psychic', avatar: 'https://i.pravatar.cc/150?u=4' },
  ];

  const upcomingEvents = [
    { title: 'Global 2026 Predictions', time: 'Tomorrow, 10:00 AM', expert: 'Acharya Rajesh' },
    { title: 'Vastu for Modern Homes', time: 'May 15, 05:00 PM', expert: 'Vastu Expert Sunil' },
  ];

  return (
    <main className="bg-light min-h-screen pb-20">
      {/* Live Status Bar */}
      <div className="bg-primary py-3 overflow-hidden border-b border-secondary/10">
        <div className="flex items-center gap-12 whitespace-nowrap animate-marquee">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="flex items-center gap-4 text-secondary font-black text-sm uppercase tracking-[0.2em]">
              <Radio size={16} className="animate-pulse text-red-600" />
              Live Consultation in progress with top experts
            </div>
          ))}
        </div>
      </div>

      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content Area */}
          <div className="flex-[2.5] space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3 text-primary font-black uppercase tracking-[0.4em] text-xs mb-4"
                >
                  <span className="w-8 h-px bg-primary"></span>
                  Real-time Guidance
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-black text-secondary tracking-tighter">AstroBless <span className="text-primary italic">Live</span></h1>
                <p className="text-gray-500 font-bold mt-3 text-lg">Experience deep insights and spiritual wisdom as it happens.</p>
              </div>
              <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-[2rem] shadow-xl shadow-black/5 border border-gray-100">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/100?u=v${i}`} alt="" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-secondary font-black text-sm">4,812 Viewing</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Active Now</p>
                </div>
              </div>
            </div>

            {/* Featured Live Video */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-video bg-secondary rounded-[4rem] overflow-hidden premium-shadow group border-8 border-white"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent z-10"></div>
              
              {/* Background Effect */}
              <div className="absolute inset-0 opacity-20 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-[100px]"></div>
              </div>

              {/* Overlay Tags */}
              <div className="absolute top-10 left-10 flex gap-4 z-20">
                <div className="bg-red-600 text-white px-5 py-2 rounded-full font-black text-xs uppercase flex items-center gap-3 shadow-lg shadow-red-600/30">
                  <div className="w-2.5 h-2.5 bg-white rounded-full animate-ping"></div>
                  Live Now
                </div>
                <div className="bg-white/10 backdrop-blur-md text-white px-5 py-2 rounded-full font-black text-xs uppercase flex items-center gap-2 border border-white/20 shadow-lg">
                  <Users size={16} />
                  2,412 Viewers
                </div>
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <button className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-secondary shadow-2xl group-hover:scale-110 transition-transform active:scale-95 shadow-primary/40 relative">
                  <Play size={40} fill="currentColor" className="ml-1" />
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20"></div>
                </button>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-10 left-10 right-10 flex items-end justify-between z-20 text-white">
                <div className="max-w-2xl">
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-3"
                  >
                    <Zap size={14} />
                    Highly Recommended Expert
                  </motion.div>
                  <h2 className="text-4xl md:text-5xl font-black mb-3 tracking-tight">Detailed Yearly Predictions 2026</h2>
                  <div className="flex items-center gap-4 text-gray-300 font-bold">
                    <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
                       <img src="https://i.pravatar.cc/100?u=aditya" alt="" />
                    </div>
                    <span>with Dr. Aditya Sharma (20+ Years Exp)</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center hover:bg-primary hover:text-secondary transition-all border border-white/10 shadow-lg group/btn">
                    <Heart size={28} className="group-hover/btn:fill-current" />
                  </button>
                  <button className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center hover:bg-primary hover:text-secondary transition-all border border-white/10 shadow-lg">
                    <Share2 size={28} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Private Consultation & Interactive Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-[3rem] premium-shadow border border-gray-50 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                      <Zap size={24} />
                    </div>
                    <h3 className="text-2xl font-black text-secondary tracking-tight">Private Access</h3>
                  </div>
                  <p className="text-gray-500 font-bold text-lg leading-relaxed mb-8">
                    Skip the public queue and connect with Dr. Aditya for a dedicated 1-on-1 private session.
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex-1 bg-light p-5 rounded-2xl text-center border border-gray-100">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Session Rate</p>
                    <p className="text-3xl font-black text-secondary">₹25<span className="text-xs text-gray-400">/min</span></p>
                  </div>
                  <button className="flex-[1.5] bg-secondary text-white h-full rounded-2xl font-black text-lg hover:bg-accent transition-all shadow-2xl shadow-secondary/20 active:scale-95 py-6">
                    Join Private
                  </button>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-accent p-10 rounded-[3rem] premium-shadow text-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20 blur-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                      <MessageCircle size={24} />
                    </div>
                    <h3 className="text-2xl font-black tracking-tight">Ask a Question</h3>
                  </div>
                  <p className="text-white/70 font-bold text-lg leading-relaxed mb-10">
                    Drop your birth details and questions here for a chance to be answered live.
                  </p>
                  <button className="w-full py-5 rounded-2xl bg-primary text-secondary font-black text-lg hover:bg-white transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-3">
                    Send Question <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Sidebar - Other Experts & Schedule */}
          <div className="flex-1 space-y-8">
            <div className="bg-white p-10 rounded-[3rem] premium-shadow border border-gray-50">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-2xl font-black text-secondary tracking-tight">Other Live Experts</h3>
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="space-y-8">
                {liveSessions.map((session, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex gap-5 group cursor-pointer"
                  >
                    <div className="w-20 h-20 bg-gray-100 rounded-3xl overflow-hidden relative border-4 border-transparent group-hover:border-primary transition-all shrink-0 shadow-lg">
                      <img src={session.avatar} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                      <div className="absolute top-1.5 left-1.5 bg-red-600 w-2.5 h-2.5 rounded-full animate-pulse border-2 border-white"></div>
                    </div>
                    <div className="flex-grow flex flex-col justify-center">
                      <h4 className="font-black text-secondary text-lg leading-none mb-1 group-hover:text-primary transition-colors">{session.name}</h4>
                      <p className="text-gray-400 text-[10px] font-black uppercase tracking-wider mb-2">{session.type}</p>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1.5 text-xs font-black text-secondary">
                          <Users size={14} className="text-primary" /> {session.viewers}
                        </span>
                        <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
                        <span className="text-[10px] font-black text-primary uppercase tracking-widest animate-pulse">Watching</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <button className="w-full mt-12 py-5 rounded-2xl bg-light text-secondary font-black text-sm hover:bg-gray-200 transition-all border border-gray-100 uppercase tracking-widest">
                View All Sessions
              </button>
            </div>

            {/* Upcoming Schedule */}
            <div className="bg-secondary p-10 rounded-[3rem] premium-shadow text-white">
              <div className="flex items-center gap-3 mb-8">
                <Calendar size={24} className="text-primary" />
                <h3 className="text-2xl font-black tracking-tight">Live Schedule</h3>
              </div>
              <div className="space-y-6">
                {upcomingEvents.map((event, i) => (
                  <div key={i} className="bg-white/5 p-5 rounded-2xl border border-white/10 group hover:bg-white/10 transition-all cursor-pointer">
                    <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest mb-2">
                      <Clock size={12} />
                      {event.time}
                    </div>
                    <h5 className="font-black text-lg mb-1 group-hover:text-primary transition-colors">{event.title}</h5>
                    <p className="text-white/40 font-bold text-xs">{event.expert}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-4 rounded-2xl border-2 border-white/10 text-white font-black text-sm hover:bg-white hover:text-secondary transition-all uppercase tracking-widest">
                Set Reminders
              </button>
            </div>

            <div className="bg-white p-10 rounded-[3rem] premium-shadow border border-gray-50 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mx-auto mb-8 relative z-10 shadow-inner">
                <ShieldCheck size={40} />
              </div>
              <h4 className="text-2xl font-black text-secondary mb-3 relative z-10">Verified Experts</h4>
              <p className="text-gray-500 font-bold text-sm leading-relaxed mb-8 relative z-10">
                Every expert on AstroBless Live undergoes a rigorous 4-step verification process to ensure accuracy and authenticity.
              </p>
              <button className="text-secondary font-black text-xs uppercase tracking-[0.2em] hover:text-primary transition-all flex items-center justify-center gap-3 mx-auto relative z-10">
                Our Verification Process <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </main>
  );
};

export default Live;
