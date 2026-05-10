import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  ArrowLeft, 
  Paperclip, 
  Smile, 
  ShieldCheck, 
  Phone, 
  CheckCheck,
  Zap,
  Star,
  Timer,
  Wallet,
  Info,
  X,
  MessageSquare,
  Plus
} from 'lucide-react';
import { astrologers } from '../data/mockData';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'astrologer';
  time: string;
  status?: 'sent' | 'delivered' | 'read';
}

const ChatPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const astrologer = astrologers.find(a => a.id === id);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: `Namaste! I am ${astrologer?.name}. I've just analyzed your birth chart summary. How can I guide you today?`, 
      sender: 'astrologer', 
      time: '10:00 AM' 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [showInfo, setShowInfo] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: inputText,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'read'
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');
    
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const response: Message = {
        id: Date.now() + 1,
        text: "I see a strong transit of Mars in your 10th house, which explains the career intensity you're feeling. Let's look deeper into the specific dates.",
        sender: 'astrologer',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, response]);
    }, 2500);
  };

  if (!astrologer) return (
    <div className="h-full flex items-center justify-center p-6 bg-primary-bg">
      <div className="glass-card p-10 text-center max-w-sm">
        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Zap className="w-8 h-8 text-accent" />
        </div>
        <p className="text-white font-black text-xl mb-3">Session Ended</p>
        <p className="text-gray-500 mb-8 text-sm">This consultation session has expired or the expert is unavailable.</p>
        <Link to="/astrologers" className="btn-accent w-full py-3 rounded-xl inline-block">Back to Network</Link>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] bg-primary-bg relative overflow-hidden">
      
      {/* ── Immersive Celestial Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full [animation-delay:1s] animate-pulse" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      {/* ── High-End Header ── */}
      <header className="px-6 py-4 bg-secondary-surface/40 backdrop-blur-2xl border-b border-white/5 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-4 lg:gap-6">
          <Link to="/astrologers">
            <motion.button whileHover={{ x: -3 }} className="p-2.5 hover:bg-white/5 rounded-2xl transition-colors border border-transparent hover:border-white/5">
              <ArrowLeft className="w-5 h-5 text-gray-400" />
            </motion.button>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-12 h-12 lg:w-14 lg:h-14 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img src={astrologer.image} alt={astrologer.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-4 border-secondary-surface rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            </div>
            
            <div className="hidden xs:block">
              <div className="flex items-center gap-2 mb-0.5">
                <h1 className="text-base lg:text-lg font-black text-white tracking-tight">{astrologer.name}</h1>
                <div className="flex items-center gap-1 px-1.5 py-0.5 bg-accent/10 border border-accent/20 rounded-md">
                   <Star className="w-2.5 h-2.5 text-accent fill-accent" />
                   <span className="text-[9px] font-black text-accent">{astrologer.rating}</span>
                </div>
              </div>
              <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">Vedic Master • Online</p>
            </div>
          </div>
        </div>

        {/* Dynamic Controls */}
        <div className="flex items-center gap-3 lg:gap-6">
          {/* Enhanced Timer */}
          <div className="hidden md:flex flex-col items-end">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.03] border border-white/10 rounded-2xl shadow-xl backdrop-blur-md">
              <Timer className={`w-4 h-4 ${timeLeft < 60 ? 'text-rose-500 animate-pulse' : 'text-accent'}`} />
              <span className={`text-sm lg:text-base font-black tabular-nums tracking-tight ${timeLeft < 60 ? 'text-rose-500' : 'text-white'}`}>
                {formatTime(timeLeft)}
              </span>
              <button className="ml-2 p-1.5 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg transition-all">
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="w-px h-8 bg-white/5 mx-1 hidden sm:block" />

          <div className="flex items-center gap-2">
            <button 
              onClick={() => setShowInfo(!showInfo)}
              className={`p-3 rounded-2xl transition-all ${showInfo ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5'}`}
            >
              <Info className="w-5 h-5" />
            </button>
            <button className="hidden sm:flex p-3 text-gray-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5 rounded-2xl transition-all">
              <Phone className="w-5 h-5" />
            </button>
            <button className="btn-accent !py-2.5 !px-6 rounded-2xl text-[10px] font-black uppercase tracking-widest hidden lg:flex">
              End Session
            </button>
          </div>
        </div>
      </header>

      {/* ── Main Chat Canvas ── */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* Chat Feed */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-10 custom-scrollbar relative z-10">
          {/* Security & Context */}
          <div className="flex flex-col items-center gap-4 mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-emerald-500/5 border border-emerald-500/10 rounded-full backdrop-blur-xl">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <p className="text-[10px] font-black text-emerald-500/80 uppercase tracking-[0.2em]">Secure Session ID: #ASTRO-92841</p>
            </div>
            <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Today, {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long' })}</p>
          </div>

          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-4 max-w-[85%] lg:max-w-[70%] ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  {msg.sender === 'astrologer' && (
                    <div className="w-9 h-9 rounded-xl overflow-hidden border border-white/10 self-end mb-1 shrink-0 shadow-lg">
                      <img src={astrologer.image} alt="" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className={`relative p-6 rounded-[28px] shadow-2xl transition-all group ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-br from-accent via-orange-600 to-amber-600 text-white rounded-tr-none shadow-accent/10'
                      : 'glass-card border-white/5 text-gray-200 rounded-tl-none hover:border-white/10'
                  }`}>
                    <p className="text-sm lg:text-base font-medium leading-relaxed tracking-tight">{msg.text}</p>
                    <div className={`flex items-center justify-end gap-2 mt-3 opacity-40 text-[10px] font-black uppercase tracking-widest`}>
                      {msg.time}
                      {msg.sender === 'user' && <CheckCheck className="w-4 h-4 text-white" />}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start items-center gap-4">
              <div className="w-9 h-9 rounded-xl overflow-hidden border border-white/10 self-end mb-1 shrink-0 shadow-lg">
                <img src={astrologer.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="glass-card border-white/5 px-6 py-4 rounded-[24px] rounded-tl-none flex gap-2 items-center">
                <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-accent rounded-full" />
                <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-accent rounded-full" />
                <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-accent rounded-full" />
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </main>

        {/* Context Sidebar (Desktop Only) */}
        <AnimatePresence>
          {showInfo && (
            <motion.aside
              initial={{ x: 350 }}
              animate={{ x: 0 }}
              exit={{ x: 350 }}
              className="w-[350px] bg-secondary-surface/80 backdrop-blur-3xl border-l border-white/5 p-8 overflow-y-auto hidden lg:block relative z-50 shadow-[-20px_0_40px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-sm font-black text-white uppercase tracking-[0.3em]">Master Profile</h2>
                <button onClick={() => setShowInfo(false)} className="p-2 hover:bg-white/5 rounded-xl transition-colors">
                   <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="space-y-8">
                 <div className="text-center">
                    <div className="w-24 h-24 rounded-3xl overflow-hidden mx-auto mb-4 border-2 border-accent/20 shadow-2xl">
                       <img src={astrologer.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-black text-white mb-1">{astrologer.name}</h3>
                    <p className="text-[10px] text-accent font-black uppercase tracking-widest">{astrologer.experience} Years Experience</p>
                 </div>

                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                       <MessageSquare className="w-5 h-5 text-gray-500 mx-auto mb-2" />
                       <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Consults</p>
                       <p className="text-sm font-black text-white">4.2k+</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                       <Star className="w-5 h-5 text-amber-500 mx-auto mb-2" />
                       <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Rating</p>
                       <p className="text-sm font-black text-white">{astrologer.rating}</p>
                    </div>
                 </div>

                 <div>
                    <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">Core Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                       {astrologer.specialties.map(s => (
                         <span key={s} className="px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-lg text-[9px] font-black text-accent uppercase tracking-widest">
                           {s}
                         </span>
                       ))}
                    </div>
                 </div>

                 <div className="p-6 bg-accent/5 border border-accent/10 rounded-3xl">
                    <div className="flex items-center gap-3 mb-4 text-accent">
                       <Zap className="w-4 h-4 fill-accent" />
                       <span className="text-[10px] font-black uppercase tracking-widest">Live Performance</span>
                    </div>
                    <p className="text-xs text-gray-400 font-medium leading-relaxed">Top 1% Vedic Scholars globally. Expert in Marriage, Career, and Nadi readings.</p>
                 </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>

      {/* ── Precision Interaction Footer ── */}
      <footer className="p-6 lg:p-8 bg-secondary-surface/60 backdrop-blur-3xl border-t border-white/5 relative z-40">
        <div className="max-w-5xl mx-auto">
          {/* Quick Guidance Tags */}
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-5">
            {['Career Forecast', 'Relationship Advice', 'Financial Growth', 'Health & Vitality', 'Gemstone Suggestion'].map((tag) => (
              <button
                key={tag}
                onClick={() => setInputText(`Master, please provide insights on my ${tag.toLowerCase()}`)}
                className="whitespace-nowrap px-5 py-2.5 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-black text-gray-500 uppercase tracking-widest hover:bg-accent hover:text-white hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all active:scale-95"
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="relative group">
            {/* Input Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 rounded-[32px] blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
            
            <div className="relative flex items-center gap-3 bg-primary-bg/80 border border-white/10 rounded-[32px] p-2.5 pl-8 focus-within:border-accent/40 transition-all backdrop-blur-3xl shadow-2xl">
              <input 
                type="text" 
                placeholder="Type your message to the stars..." 
                className="flex-grow bg-transparent border-none focus:ring-0 text-white text-base font-medium py-3.5 placeholder:text-gray-700"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <div className="flex items-center gap-2 pr-2">
                <button className="p-3 text-gray-600 hover:text-white transition-colors rounded-2xl hover:bg-white/5">
                  <Smile className="w-5 h-5" />
                </button>
                <button className="p-3 text-gray-600 hover:text-white transition-colors rounded-2xl hover:bg-white/5">
                  <Paperclip className="w-5 h-5" />
                </button>
                <motion.button 
                  whileHover={{ scale: 1.05, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  className={`w-14 h-14 rounded-[24px] flex items-center justify-center transition-all ${
                    inputText.trim() ? 'bg-accent text-white shadow-2xl shadow-accent/30' : 'bg-white/5 text-gray-800'
                  }`}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Session Metadata */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-3 px-3 py-1 bg-white/5 rounded-full border border-white/5">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_8px_rgba(253,125,0,0.6)]" />
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Live Session active • ₹{astrologer.price}/min</span>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer hover:bg-white/5 px-4 py-1.5 rounded-full transition-all">
              <Wallet className="w-4 h-4 text-gray-600 group-hover:text-accent transition-colors" />
              <span className="text-[10px] font-black text-gray-600 group-hover:text-white uppercase tracking-[0.2em] transition-colors">Balance: ₹540.50</span>
              <div className="w-1.5 h-1.5 bg-gray-800 rounded-full" />
              <button className="text-[10px] font-black text-accent uppercase tracking-widest hover:underline">Add Money</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChatPage;

