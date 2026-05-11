import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

const Youtube = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);

const Instagram = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Twitter = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const Facebook = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const LOGO_URL = "/splash_logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -mr-96 -mt-96 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-14 h-14 bg-white rounded-2xl p-2 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <img src={LOGO_URL} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-3xl font-black font-display tracking-tighter text-white">AstroBless</span>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-medium">
              Guiding you through the stars. India's premier destination for spiritual enlightenment and astrological wisdom.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, color: 'hover:text-pink-500' },
                { icon: Twitter, color: 'hover:text-blue-400' },
                { icon: Facebook, color: 'hover:text-blue-600' },
                { icon: Youtube, color: 'hover:text-red-500' }
              ].map((social, i) => (
                <motion.a 
                  href="#"
                  key={i} 
                  whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  className={`w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center cursor-pointer transition-all border border-white/10 ${social.color}`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Services Column */}
          <div>
            <h5 className="text-xl font-black mb-8 relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full"></span>
            </h5>
            <ul className="space-y-4">
              {[
                { name: 'Kundli Matching', path: '/kundli-matching' },
                { name: 'Daily Horoscope', path: '/horoscope' },
                { name: 'Numerology Report', path: '/numerology' },
                { name: 'Chat with Astrologer', path: '/chat' },
                { name: 'View Kundli', path: '/view-kundli' },
                { name: 'Vastu Expert', path: '/' }
              ].map(item => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-400 font-bold hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-primary/30 rounded-full group-hover:w-3 group-hover:bg-primary transition-all"></div>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h5 className="text-xl font-black mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full"></span>
            </h5>
            <ul className="space-y-4">
              {[
                { name: 'About AstroBless', path: '/' },
                { name: 'Consult Now', path: '/chat' },
                { name: 'Live Sessions', path: '/live' },
                { name: 'Astro Blog', path: '/blog' },
                { name: 'Login / Sign Up', path: '/login' },
                { name: 'Privacy Policy', path: '/' }
              ].map(item => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-400 font-bold hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-primary/30 rounded-full group-hover:w-3 group-hover:bg-primary transition-all"></div>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter Column */}
          <div>
            <h5 className="text-xl font-black mb-8 relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full"></span>
            </h5>
            <p className="text-gray-400 font-medium mb-6">Stay updated with your daily cosmic energy.</p>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-all font-bold text-white placeholder:text-gray-600"
                />
              </div>
              <button className="bg-primary text-secondary py-4 rounded-2xl font-black hover:bg-white transition-all shadow-xl shadow-black/20 uppercase tracking-widest text-xs">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-500 font-bold text-xs">
              <ShieldCheck size={16} className="text-primary" />
              100% Secure Payments
            </div>
            <div className="flex items-center gap-2 text-gray-500 font-bold text-xs">
              <CheckCircle2 size={16} className="text-primary" />
              Verified Experts
            </div>
          </div>
          
          <p className="text-gray-500 font-bold text-sm">
            © 2026 AstroBless spiritual services. Built with ❤️ for your destiny.
          </p>
          
          <div className="flex gap-8 text-gray-500 font-bold text-sm">
            <Link to="/" className="hover:text-white cursor-pointer transition-colors">Privacy</Link>
            <Link to="/" className="hover:text-white cursor-pointer transition-colors">Terms</Link>
            <Link to="/" className="hover:text-white cursor-pointer transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
