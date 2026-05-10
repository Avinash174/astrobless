import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  ShieldCheck,
  Star,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const FOOTER_LINKS = [
    {
      title: 'Celestial Services',
      links: [
        { label: 'Live Consultation', to: '/astrologers' },
        { label: 'Kundli Matching', to: '/kundli' },
        { label: 'Daily Horoscope', to: '/horoscope' },
        { label: 'AI Predictions', to: '/ai-chat' },
        { label: 'Astro Shop', to: '/shop' },
      ]
    },
    {
      title: 'The Academy',
      links: [
        { label: 'Learn Astrology', to: '/academy' },
        { label: 'Masterclasses', to: '/courses' },
        { label: 'Certification', to: '/cert' },
        { label: 'Blog & Insights', to: '/blog' },
      ]
    },
    {
      title: 'Support & Help',
      links: [
        { label: 'Help Center', to: '/support' },
        { label: 'FAQs', to: '/faq' },
        { label: 'Refund Policy', to: '/refund-policy' },
        { label: 'Disclaimer', to: '/disclaimer' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', to: '/about' },
        { label: 'Careers', to: '/careers' },
        { label: 'Privacy Policy', to: '/privacy' },
        { label: 'Terms of Service', to: '/terms' },
      ]
    }
  ];

  return (
    <footer className="relative bg-secondary-surface/30 pt-32 pb-12 overflow-hidden border-t border-white/5">
      {/* ── Background Elements ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          
          {/* Brand Vision */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-12 h-12 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-accent rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                <img src="/assets/logo.png" alt="Logo" className="w-10 h-10 object-contain relative z-10" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Astro<span className="text-accent">Bless</span>
              </span>
            </Link>
            <p className="text-gray-400 font-medium text-lg leading-relaxed mb-10 max-w-sm">
              Empowering your journey through the cosmos with ancient wisdom and modern technology. Join 5M+ seekers on their path to divine alignment.
            </p>
            
            <div className="flex items-center gap-4">
              {[InstagramIcon, TwitterIcon, YoutubeIcon, FacebookIcon].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 hover:text-accent hover:border-accent/20 transition-all shadow-xl"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-12">
            {FOOTER_LINKS.map((section) => (
              <div key={section.title}>
                <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link 
                        to={link.to} 
                        className="text-sm font-bold text-gray-500 hover:text-accent transition-colors flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-gray-800 rounded-full group-hover:bg-accent group-hover:w-3 transition-all" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter / CTA */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8 rounded-[40px] border-white/5 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-125 transition-transform duration-700">
                  <Sparkles className="w-20 h-20 text-accent" />
               </div>
               <h4 className="text-xl font-black text-white mb-4 tracking-tight">Divine Updates</h4>
               <p className="text-gray-500 text-xs font-medium leading-relaxed mb-6">Receive personalized transit alerts and exclusive masterclasses directly.</p>
               
               <div className="relative mb-4">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-6 pr-12 text-sm text-white placeholder:text-gray-700 focus:border-accent/40 focus:ring-0 transition-all font-bold"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-accent text-white rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </button>
               </div>
               
               <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">No-spam guaranteed</span>
               </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p className="text-[11px] font-black text-gray-600 uppercase tracking-widest">
              © {currentYear} AstroBless Platforms. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/terms" className="text-[11px] font-black text-gray-500 hover:text-white uppercase tracking-widest transition-colors">Terms</Link>
              <Link to="/privacy" className="text-[11px] font-black text-gray-500 hover:text-white uppercase tracking-widest transition-colors">Privacy</Link>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-8 px-6 py-3 bg-white/[0.02] border border-white/5 rounded-2xl">
            <div className="flex items-center gap-2">
               <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
               <span className="text-xs font-black text-white">4.9/5</span>
               <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Store Rating</span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2">
               <ShieldCheck className="w-4 h-4 text-accent" />
               <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">ISO 27001 Certified</span>
            </div>
          </div>
        </div>

        {/* Large Brand Watermark */}
        <div className="mt-24 pointer-events-none select-none overflow-hidden">
           <h2 className="text-[15vw] font-black text-white/[0.02] leading-none tracking-tighter whitespace-nowrap -mb-12">
              ASTROBLESS PLATFORMS
           </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
