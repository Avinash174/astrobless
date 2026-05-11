import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Plus, Minus, Search, MessageCircle, ArrowRight, Star } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How accurate are the online Kundli predictions?',
      a: 'Our online Kundli reports are generated based on precise Vedic calculations and time-tested astrological principles. While no prediction can be 100% certain, our algorithms are refined by expert astrologers to ensure the highest degree of accuracy based on the birth details provided.'
    },
    {
      q: 'Is my personal information and birth data secure?',
      a: 'Absolutely. Data privacy is our top priority. All your personal details and birth data are encrypted and used only to generate your reports. We never share your information with any third parties without your explicit consent.'
    },
    {
      q: 'How can I connect with a live astrologer for a private session?',
      a: 'You can connect with our experts via the "Chat" or "Call" options available on their profiles. For live sessions, simply join an active stream and click on the "Connect Privately" button to start a one-on-one consultation.'
    },
    {
      q: 'What should I do if my birth time is not accurate?',
      a: 'If you are unsure about your exact birth time, we recommend consulting our experts for "Birth Time Rectification." Alternatively, you can use an approximate time, but please note that this may slightly affect the accuracy of specific predictions.'
    },
    {
      q: 'Are there any hidden charges for the services?',
      a: 'We maintain complete transparency in our pricing. All charges for premium reports and consultations are clearly mentioned upfront. Free services like Daily Horoscope and basic Kundli generation are truly free with no hidden costs.'
    },
    {
      q: 'How do I get my first consultation for free?',
      a: 'As a special offer for new users, your first 5-minute consultation with select astrologers is completely free. Look for the "First Chat FREE" tag on astrologer profiles to avail this offer.'
    }
  ];

  return (
    <main className="bg-light min-h-screen pb-20">
      {/* Search Hero */}
      <section className="bg-secondary text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-primary rounded-[2rem] flex items-center justify-center text-secondary mb-8 mx-auto shadow-xl shadow-primary/20"
          >
            <HelpCircle size={40} />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black mb-8">How can we <span className="text-primary italic">help?</span></h1>
          
          <div className="max-w-2xl mx-auto relative group">
            <input 
              type="text" 
              placeholder="Search for questions (e.g. privacy, matching, payments)" 
              className="w-full bg-white/10 border border-white/20 rounded-[2rem] px-10 py-6 outline-none focus:bg-white focus:text-secondary transition-all font-bold text-lg placeholder:text-white/40 focus:placeholder:text-gray-400"
            />
            <Search className="absolute right-8 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-secondary" size={24} />
          </div>
        </div>
      </section>

      {/* Accordion Content */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white rounded-[2.5rem] overflow-hidden premium-shadow border-2 transition-all ${activeIndex === i ? 'border-primary' : 'border-transparent'}`}
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full px-8 md:px-12 py-8 flex items-center justify-between text-left group"
              >
                <span className={`text-xl font-black transition-colors ${activeIndex === i ? 'text-secondary' : 'text-secondary/70 group-hover:text-secondary'}`}>
                  {faq.q}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeIndex === i ? 'bg-secondary text-white' : 'bg-light text-secondary group-hover:bg-primary'}`}>
                  {activeIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 md:px-12 pb-12 text-gray-500 font-medium text-lg leading-relaxed border-t border-gray-50 pt-8 mx-8 md:mx-12">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-20 bg-accent rounded-[4rem] p-12 md:p-16 text-white text-center premium-shadow relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
           
           <h3 className="text-3xl md:text-4xl font-black mb-6">Still have questions?</h3>
           <p className="text-white/70 font-bold text-lg max-w-xl mx-auto mb-10">
             Our support team is available 24/7 to assist you with any technical or astrological queries you might have.
           </p>
           
           <div className="flex flex-wrap justify-center gap-4">
             <button className="bg-white text-secondary px-10 py-5 rounded-2xl font-black text-lg hover:bg-primary transition-all shadow-xl active:scale-95 flex items-center gap-3">
               <MessageCircle size={22} />
               Chat with Support
             </button>
             <button className="bg-white/10 border border-white/20 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all active:scale-95 flex items-center gap-3 backdrop-blur-sm">
               Email Us <ArrowRight size={22} />
             </button>
           </div>
        </div>
      </section>

      {/* Ratings Section */}
      <section className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="text-center md:text-left">
            <p className="text-gray-400 font-black text-xs uppercase tracking-[0.3em] mb-2">Platform Trust</p>
            <div className="flex gap-1 text-primary">
              {[1, 2, 3, 4, 5].map(s => <Star key={s} size={24} fill="currentColor" />)}
            </div>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-black text-secondary">4.9/5</h4>
            <p className="text-gray-400 font-bold text-sm">Average User Rating</p>
          </div>
          <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
          <div className="text-center">
            <h4 className="text-4xl font-black text-secondary">10M+</h4>
            <p className="text-gray-400 font-bold text-sm">Happy Consultations</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
