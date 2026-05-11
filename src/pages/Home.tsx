import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { 
  MessageCircle, 
  FileText, 
  Moon, 
  Star, 
  Calendar, 
  Compass, 
  Users, 
  Layout,
  ArrowRight,
  Phone,
  ShieldCheck,
  CheckCircle2,
  User
} from 'lucide-react';

const LOGO_URL = "/logo.png";
const BANNER_URL = "/numerology_banner.png";
const ASTRO_AVATARS_URL = "/astrologers.png";

const Hero = () => {
  return (
    <section className="bg-light pb-12 pt-8">
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="rounded-3xl overflow-hidden premium-shadow"
        >
          <SwiperSlide>
            <div className="relative bg-white min-h-[600px] flex flex-col md:flex-row items-stretch overflow-hidden">
              {/* Decorative Background */}
              <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
              </div>

              <div className="flex-1 flex flex-col justify-center p-12 md:p-20 lg:p-24 xl:p-32 z-10 relative">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-14 h-14 bg-light rounded-2xl flex items-center justify-center p-2 shadow-sm border border-gray-100">
                      <img src={LOGO_URL} className="w-full h-full object-contain" alt="" />
                    </div>
                    <div>
                      <h3 className="text-secondary font-black text-2xl leading-none tracking-tight">AstroBless</h3>
                      <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Guiding Lives, Inspiring Futures</p>
                    </div>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary leading-[1.1] mb-8 tracking-tighter max-w-xl">
                    Business <span className="text-accent italic relative inline-block mx-1">
                      down
                      <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 20" preserveAspectRatio="none">
                        <path d="M0,10 Q50,20 100,10" stroke="var(--color-primary)" strokeWidth="8" fill="none" />
                      </svg>
                    </span> <br />
                    chal raha hai?
                  </h1>
                  
                  <p className="text-lg md:text-xl text-secondary/60 max-w-md mb-12 leading-relaxed font-medium">
                    Apne business ko <span className="text-secondary font-black underline decoration-primary decoration-4 underline-offset-4">growth</span> ki taraf le jaiye hamari expert <span className="text-accent font-extrabold italic">Numerology Report</span> ke saath.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-16">
                    <div className="flex flex-col bg-light/50 backdrop-blur-md px-6 py-4 rounded-[2rem] border border-white shadow-xl shadow-black/5">
                      <span className="text-gray-400 line-through text-[10px] font-black uppercase tracking-widest mb-1">Was ₹999</span>
                      <div className="flex items-center gap-3">
                        <span className="text-4xl font-black text-secondary">₹299</span>
                        <span className="bg-primary text-secondary text-[10px] font-black px-2 py-1 rounded-lg uppercase shadow-sm">Special Offer</span>
                      </div>
                    </div>
                    
                    <button className="bg-accent text-white px-12 py-6 rounded-[2rem] font-black text-lg hover:bg-opacity-90 transition-all flex items-center gap-4 shadow-2xl shadow-accent/40 active:scale-95 group relative overflow-hidden">
                      <span className="relative z-10">Get Your Report</span>
                      <ArrowRight size={24} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                      <div className="absolute top-0 left-0 w-full h-full bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-10 opacity-60">
                    {[
                      { label: 'Growth', icon: ShieldCheck },
                      { label: 'Success', icon: Compass },
                      { label: 'Wealth', icon: Star }
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <item.icon size={18} className="text-primary" />
                        <span className="text-secondary font-bold text-[10px] uppercase tracking-widest">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              <div className="flex-1 relative flex items-center justify-center p-12 lg:p-24 bg-gradient-to-br from-light to-white">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: 50 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="relative z-10 w-full h-full flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
                  <motion.img 
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    src={BANNER_URL} 
                    alt="Numerology Banner" 
                    className="max-w-full max-h-full object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.12)] cursor-pointer relative z-10"
                  />
                  
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center"
                  >
                    <Compass size={800} className="text-secondary" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

const MainServices = () => {
  const services = [
    { title: 'View Kundli', icon: Layout, desc: 'Detailed birth chart analysis and planetary positions.' },
    { title: 'Kundli Matching', icon: Compass, desc: 'Check compatibility for a happy and lasting marriage.' },
    { title: 'Daily Horoscope', icon: Moon, desc: 'Personalized star predictions for your day ahead.' },
  ];

  return (
    <section className="py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -10, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2.5rem] p-10 flex flex-col items-center text-center premium-shadow group cursor-pointer border border-gray-100 hover:border-primary/30 transition-all"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-secondary to-accent rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-secondary/10 group-hover:rotate-6 transition-transform duration-500 relative">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
                <service.icon className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-black text-secondary mb-4">{service.title}</h3>
              <p className="text-gray-500 font-medium mb-8 leading-relaxed px-4">
                {service.desc}
              </p>
              <div className="flex items-center gap-2 text-accent font-bold group-hover:gap-3 transition-all">
                Explore Now <ArrowRight size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceGrid = () => {
  const services = [
    { title: 'Chat with Astrologer', icon: MessageCircle, color: 'bg-blue-500', desc: 'Real-time guidance' },
    { title: 'Numerology Report', icon: FileText, color: 'bg-purple-500', desc: 'Numbers of destiny' },
    { title: 'Daily Horoscope', icon: Moon, color: 'bg-indigo-500', desc: 'Star predictions' },
    { title: 'Kundli Matching', icon: Users, color: 'bg-emerald-500', desc: 'Marriage harmony' },
    { title: 'Panchang', icon: Calendar, color: 'bg-orange-500', desc: 'Auspicious times' },
    { title: 'Vastu Expert', icon: Layout, color: 'bg-rose-500', desc: 'Space energy' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-black text-secondary mb-3">Our Core Services</h2>
            <p className="text-gray-500 font-medium">Explore the mystical world of astrology with our specialized services.</p>
          </div>
          <button className="flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all">
            View All Services <ArrowRight size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -12, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center p-8 rounded-[2rem] bg-light hover:bg-white border-2 border-transparent hover:border-primary/30 transition-all cursor-pointer text-center group premium-shadow"
            >
              <div className={`w-20 h-20 ${service.color} rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-${service.color.split('-')[1]}-200 group-hover:rotate-6 transition-transform`}>
                <service.icon className="text-white" size={36} />
              </div>
              <h4 className="font-extrabold text-secondary text-lg mb-2">{service.title}</h4>
              <p className="text-gray-400 text-xs font-semibold uppercase">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ConsultationPromo = () => {
  const topAstrologers = [
    { name: 'Tarot Merakii', type: 'Tarot, Reiki', price: 'FREE ₹20/min', rating: 4 },
    { name: 'Acharya Krishiv', type: 'Vedic, Lal kitab, Nadi...', price: 'FREE ₹21/min', rating: 4 },
    { name: 'Tarot Gitanjali', type: 'Tarot, Reiki Healing', price: 'FREE ₹20/min', rating: 4 },
  ];

  return (
    <section className="py-20 bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-secondary/80 mb-4">Experience your first astrology consultation for free</h4>
              <h2 className="text-6xl md:text-7xl font-black text-secondary leading-tight mb-10">
                Learn More About <br />
                <span className="text-secondary">Your Destiny</span>
              </h2>
              <div className="flex flex-wrap gap-4">
                <button className="bg-secondary text-white px-10 py-5 rounded-full font-black text-lg hover:bg-accent transition-all shadow-xl shadow-secondary/20 active:scale-95 uppercase">
                  Chat with Astrologer
                </button>
                <button className="bg-[#4CAF50] text-white px-10 py-5 rounded-full font-black text-lg hover:bg-[#388E3C] transition-all shadow-xl shadow-green-200 active:scale-95 uppercase">
                  Talk to Astrologer
                </button>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 w-full max-w-xl relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-8 flex gap-8 premium-shadow border-2 border-gray-50 overflow-hidden"
            >
              <div className="flex-1 space-y-6">
                {topAstrologers.map((astro, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-16 h-16 bg-gray-100 rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
                      <img src={ASTRO_AVATARS_URL} className="w-full h-full object-cover scale-150" style={{ objectPosition: `${i * 33}% 0` }} alt="" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-black text-secondary text-lg leading-none mb-1">{astro.name}</h4>
                      <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-2">{astro.type}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-red-500 font-black text-sm">{astro.price}</span>
                        <div className="flex gap-0.5 text-primary">
                          {[1, 2, 3, 4, 5].map(s => (
                            <Star key={s} size={12} fill={s <= astro.rating ? 'currentColor' : 'none'} className={s > astro.rating ? 'text-gray-200' : ''} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="w-10 h-10 bg-secondary/5 text-secondary rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all shadow-sm">
                        <MessageCircle size={18} />
                      </button>
                      <button className="w-10 h-10 bg-primary/10 text-secondary rounded-full flex items-center justify-center hover:bg-primary transition-all shadow-sm">
                        <Phone size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-12 flex flex-col items-center justify-center border-l border-gray-100">
                <span className="vertical-text font-black text-secondary/40 text-xl tracking-[0.2em] uppercase whitespace-nowrap">
                  Our Top Astrologers
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AstrologerSection = () => {
  const astrologers = [
    { name: 'Dr. Aditya Sharma', expert: 'Vedic, Vastu', rating: 4.9, exp: '15+ Years', price: '₹25/min' },
    { name: 'Maanya Gupta', expert: 'Tarot, Psychic', rating: 4.8, exp: '8+ Years', price: '₹15/min' },
    { name: 'Guru Raghav', expert: 'Numerology', rating: 5.0, exp: '20+ Years', price: '₹50/min' },
    { name: 'Sonalika Ved', expert: 'KP Astrology', rating: 4.7, exp: '10+ Years', price: '₹20/min' },
  ];

  return (
    <section className="py-24 bg-light overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-black uppercase tracking-[0.3em] text-sm"
          >
            Trusted Experts
          </motion.span>
          <h2 className="text-5xl font-black text-secondary mt-4 mb-6">Consult India's Best Astrologers</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Instant guidance for life's most challenging questions. Private, secure, and accurate.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {astrologers.map((astro, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] premium-shadow group border-2 border-transparent hover:border-primary transition-all relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 bg-green-100 text-green-600 px-3 py-1 rounded-full text-[10px] font-black flex items-center gap-1 uppercase">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                Online
              </div>
              
              <div className="w-32 h-32 bg-gray-100 rounded-full mx-auto mb-6 relative group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                   <User size={64} className="text-secondary/20" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-primary text-secondary w-10 h-10 rounded-full flex items-center justify-center border-4 border-white font-black text-xs">
                  {astro.rating}
                </div>
              </div>

              <h4 className="text-2xl font-black text-secondary text-center mb-1">{astro.name}</h4>
              <p className="text-accent text-center font-bold text-sm mb-4">{astro.expert}</p>
              
              <div className="flex justify-between items-center bg-light p-4 rounded-2xl mb-6">
                <div className="text-center">
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Exp</p>
                  <p className="text-sm font-black text-secondary">{astro.exp}</p>
                </div>
                <div className="w-px h-6 bg-gray-200"></div>
                <div className="text-center">
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Rate</p>
                  <p className="text-sm font-black text-secondary">{astro.price}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-secondary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-accent transition-all group-hover:shadow-lg active:scale-95">
                  <Phone size={18} />
                  Call
                </button>
                <button className="flex-1 border-2 border-secondary/10 text-secondary py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-secondary hover:text-white transition-all active:scale-95">
                  <MessageCircle size={18} />
                  Chat
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <main>
      <Hero />
      <MainServices />
      <ServiceGrid />
      <ConsultationPromo />
      <AstrologerSection />
      
      <section className="py-12 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 md:gap-24">
          {[
            { label: '100% Privacy Guaranteed', icon: ShieldCheck },
            { label: 'Verified Astrologers', icon: CheckCircle2 },
            { label: 'Secure Payments', icon: ShieldCheck },
            { label: '24/7 Customer Support', icon: MessageCircle }
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-3 text-secondary/60 font-bold">
              <badge.icon size={24} className="text-primary" />
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
