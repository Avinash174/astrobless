import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  Globe,
  Send,
  HelpCircle
} from 'lucide-react';
import Skeleton from '../components/Skeleton';

const ContactSupport: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const contactMethods = [
    { 
      icon: MessageSquare, 
      title: 'Live Chat', 
      desc: 'Typical response time: < 2 min',
      action: 'Start Conversation',
      color: 'bg-blue-500/10 text-blue-500'
    },
    { 
      icon: Mail, 
      title: 'Email Support', 
      desc: 'support@example.com',
      action: 'Send Email',
      color: 'bg-accent/10 text-accent'
    },
    { 
      icon: Phone, 
      title: 'Phone Support', 
      desc: '+91 1800-ASTRO-BL',
      action: 'Call Now',
      color: 'bg-emerald-500/10 text-emerald-500'
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <header className="mb-16 text-center space-y-4">
            <Skeleton width={120} height={30} className="mx-auto rounded-full" />
            <Skeleton width="60%" height={60} className="mx-auto" />
            <Skeleton width="40%" height={24} className="mx-auto" />
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[1, 2, 3].map(i => <Skeleton key={i} height={300} className="rounded-[40px]" />)}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Skeleton height={500} className="rounded-[40px]" />
            <Skeleton height={500} className="rounded-[40px]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-accent/5 px-4 py-1.5 rounded-full border border-accent/10 mb-6"
          >
            <HelpCircle className="w-4 h-4 text-accent" />
            <span className="text-[10px] font-black text-accent uppercase tracking-widest">Help Center</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter"
          >
            How can we <span className="text-accent">guide</span> you?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-xl font-medium max-w-2xl mx-auto"
          >
            Our spiritual concierge team is available 24/7 to assist with your journey.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-[40px] border-white/5 text-center flex flex-col items-center group"
            >
              <div className={`w-20 h-20 rounded-[32px] flex items-center justify-center mb-6 ${method.color} border border-white/5 shadow-xl group-hover:scale-110 transition-transform`}>
                <method.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{method.title}</h3>
              <p className="text-gray-500 font-medium mb-8">{method.desc}</p>
              <button className="w-full py-4 rounded-2xl bg-white/5 text-white font-bold text-sm uppercase tracking-widest border border-white/5 hover:bg-accent hover:border-accent transition-all">
                {method.action}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="glass-card p-10 rounded-[40px] border-white/5"
           >
              <h3 className="text-3xl font-black text-white mb-8 tracking-tight">Direct Message</h3>
              <form className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-4">Full Name</label>
                       <input type="text" className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-6 text-white focus:border-accent/40 focus:outline-none transition-all font-bold" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-4">Email Address</label>
                       <input type="email" className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-6 text-white focus:border-accent/40 focus:outline-none transition-all font-bold" />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-4">Subject</label>
                    <select className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-6 text-white focus:border-accent/40 focus:outline-none transition-all font-bold appearance-none">
                       <option>Technical Issue</option>
                       <option>Billing Question</option>
                       <option>Astrologer Feedback</option>
                       <option>General Inquiry</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-4">Your Message</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-6 text-white focus:border-accent/40 focus:outline-none transition-all font-bold resize-none"></textarea>
                 </div>
                 <button className="btn-accent w-full py-5 rounded-[24px] flex items-center justify-center gap-3">
                    <Send className="w-5 h-5" />
                    <span className="uppercase tracking-widest text-sm font-black">Dispatch Message</span>
                 </button>
              </form>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             className="space-y-8"
           >
              <div className="glass-card p-10 rounded-[40px] border-white/5 h-full">
                  <h3 className="text-3xl font-black text-white mb-8 tracking-tight">Our Presence</h3>
                  <div className="space-y-8">
                     <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                           <Globe className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                           <h4 className="text-white font-bold text-lg mb-1">HQ</h4>
                           <p className="text-gray-500 text-sm leading-relaxed">Available Online Worldwide</p>
                        </div>
                     </div>
                  </div>

                 <div className="mt-12 p-8 rounded-3xl bg-accent/5 border border-accent/10">
                    <p className="text-gray-400 text-sm font-medium leading-relaxed">
                       <strong>Pro Tip:</strong> Check our <Link to="/faq" className="text-accent underline">FAQ</Link> section for instant answers to common questions about wallet recharge and chat connectivity.
                    </p>
                 </div>
              </div>
           </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
