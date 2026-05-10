import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, MessageCircle, Sparkles, HelpCircle } from 'lucide-react';
import Skeleton from '../components/Skeleton';

const FAQS = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'What is AstroBless?',
        a: 'AstroBless is a premium spiritual guidance platform that connects users with expert astrologers, provides AI-driven cosmic insights, and offers educational resources through the AstroBless Academy.'
      },
      {
        q: 'How do I book a consultation?',
        a: 'Simply browse our list of verified experts, check their availability, and click on "Chat" or "Call" to start an instant session. You need to have sufficient balance in your AstroBless wallet.'
      },
      {
        q: 'Are the astrologers verified?',
        a: 'Yes, every astrologer undergoes a rigorous 5-stage verification process, including background checks, knowledge testing, and trial consultations before joining our platform.'
      }
    ]
  },
  {
    category: 'Wallet & Payments',
    questions: [
      {
        q: 'How do I add money to my wallet?',
        a: 'Go to your Wallet section, select "Add Money", choose your preferred amount and payment method (UPI, Cards, Net Banking). The balance is updated instantly.'
      },
      {
        q: 'Can I get a refund if I\'m not satisfied?',
        a: 'We offer refunds in cases of technical issues during a session. Please report the issue within 24 hours through our Support section for a review.'
      }
    ]
  },
  {
    category: 'Privacy & Security',
    questions: [
      {
        q: 'Is my consultation private?',
        a: 'Absolutely. All chats and calls are end-to-end encrypted. We never share your personal birth details or consultation history with third parties.'
      },
      {
        q: 'What is Incognito Mode?',
        a: 'Incognito Mode allows you to consult with astrologers without revealing your profile identity, ensuring maximum privacy for sensitive queries.'
      }
    ]
  }
];

const FAQPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<string | null>('0-0');

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleAccordion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-accent/5 px-4 py-1.5 rounded-full border border-accent/10 mb-6"
          >
            <HelpCircle className="w-4 h-4 text-accent" />
            <span className="text-[10px] font-black text-accent uppercase tracking-widest">Knowledge Base</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter"
          >
            Frequently Asked <span className="text-accent">Questions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-xl font-medium max-w-2xl mx-auto"
          >
            Find answers to common queries about our celestial services and platform features.
          </motion.p>
        </header>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative mb-16"
        >
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search for answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/5 rounded-3xl py-6 pl-16 pr-6 text-white text-lg placeholder:text-gray-600 focus:border-accent/40 focus:ring-0 transition-all font-bold"
          />
        </motion.div>

        {loading ? (
          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton width={150} height={20} className="mb-4" />
                <Skeleton height={80} className="rounded-[30px]" />
                <Skeleton height={80} className="rounded-[30px]" />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-12">
            {FAQS.map((category, catIdx) => (
              <div key={catIdx}>
                <h2 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mb-6 px-6">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions
                    .filter(q => q.q.toLowerCase().includes(searchQuery.toLowerCase()) || q.a.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((item, qIdx) => {
                      const id = `${catIdx}-${qIdx}`;
                      const isOpen = openIndex === id;
                      return (
                        <motion.div
                          key={qIdx}
                          layout
                          className="glass-card rounded-[30px] border-white/5 overflow-hidden"
                        >
                          <button
                            onClick={() => toggleAccordion(id)}
                            className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
                          >
                            <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-accent' : 'text-white'}`}>
                              {item.q}
                            </span>
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isOpen ? 'bg-accent text-white' : 'bg-white/5 text-gray-500 group-hover:text-white'}`}
                            >
                              <ChevronDown className="w-5 h-5" />
                            </motion.div>
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                              >
                                <div className="px-8 pb-8 text-gray-400 font-medium leading-relaxed border-t border-white/5 pt-6">
                                  {item.a}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 glass-card p-10 rounded-[40px] border-accent/10 bg-accent/5 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-125 transition-transform duration-700">
             <Sparkles className="w-32 h-32 text-accent" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Still have questions?</h3>
            <p className="text-gray-400 font-medium">Our spiritual concierge is here to help you 24/7.</p>
          </div>
          <button className="btn-accent px-10 py-4 rounded-2xl flex items-center gap-3 relative z-10">
            <MessageCircle className="w-5 h-5" />
            <span className="uppercase tracking-widest text-xs font-black">Contact Support</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;
