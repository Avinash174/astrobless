import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, Brain, History, ArrowLeft, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AIChatMessage {
  id: number;
  role: 'user' | 'ai';
  content: string;
}

const AIChatPage: React.FC = () => {
  const [messages, setMessages] = useState<AIChatMessage[]>([
    { id: 1, role: 'ai', content: "Namaste! I am your AI Celestial Guide. How can the stars assist you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: AIChatMessage = { id: Date.now(), role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const aiMsg: AIChatMessage = { 
        id: Date.now() + 1, 
        role: 'ai', 
        content: `Based on current celestial movements, your question about "${input}" reveals interesting alignments. Jupiter is currently enhancing your house of wisdom, suggesting that trust in your intuition will lead to the best outcome.` 
      };
      setMessages(prev => [...prev, aiMsg]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full bg-primary-bg relative overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-accent/5 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-accent/5 rounded-full blur-[80px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <header className="px-6 py-4 bg-secondary-surface/80 backdrop-blur-xl border-b border-white/5 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-4">
          <Link to="/">
            <motion.button whileHover={{ x: -2 }} className="p-2 hover:bg-white/5 rounded-xl transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-400" />
            </motion.button>
          </Link>
          <div className="w-11 h-11 bg-accent/10 rounded-2xl flex items-center justify-center border border-accent/20">
            <Brain className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h1 className="text-base font-black text-white leading-tight">Celestial AI</h1>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Ancient Wisdom • Modern Intelligence</p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 text-[10px] font-black text-gray-400 uppercase tracking-widest transition-all">
          <History className="w-3.5 h-3.5" /> History
        </button>
      </header>

      <main className="flex-grow overflow-y-auto p-6 space-y-8 no-scrollbar scroll-smooth">
         <div className="flex justify-center mb-4">
            <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-[9px] font-black text-gray-500 uppercase tracking-[0.2em]">
              Encrypted Cosmic Session
            </div>
         </div>

         <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center shadow-lg ${msg.role === 'user' ? 'bg-accent' : 'bg-white/5 border border-white/10'}`}>
                    {msg.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Sparkles className="w-4 h-4 text-accent" />}
                  </div>
                  <div className={`p-5 rounded-3xl text-sm font-medium leading-relaxed shadow-xl ${
                    msg.role === 'user' 
                      ? 'bg-accent text-white rounded-tr-none' 
                      : 'glass-card border-white/5 text-gray-200 rounded-tl-none'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              </div>
              <div className="bg-white/5 border border-white/5 p-4 rounded-2xl rounded-tl-none flex gap-1.5">
                <span className="w-1.5 h-1.5 bg-accent/40 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-accent/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-accent/40 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </motion.div>
          )}
          <div ref={scrollRef} />
      </main>

      <footer className="p-6 bg-secondary-surface/80 backdrop-blur-xl border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Ask about your destiny, love, or career..." 
              className="w-full bg-primary-bg/50 border border-white/10 rounded-[32px] py-5 pl-8 pr-16 focus:outline-none focus:border-accent/40 transition-all text-sm font-medium placeholder:text-gray-600"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSend}
              className={`absolute right-3 top-1/2 -translate-y-1/2 p-3.5 rounded-2xl transition-all ${
                input.trim() ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'bg-white/5 text-gray-600'
              }`}
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            {['Career Forecast', 'Love Compatibility', 'Daily Guidance', 'Wealth Luck'].map((tag) => (
              <button 
                key={tag}
                onClick={() => setInput(`Tell me about my ${tag.toLowerCase()}`)}
                className="text-[9px] uppercase font-black tracking-widest text-gray-500 hover:text-accent hover:bg-accent/5 transition-all bg-white/5 px-4 py-2 rounded-full border border-white/5"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIChatPage;
