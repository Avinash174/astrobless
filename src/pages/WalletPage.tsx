import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Wallet,
  Plus,
  ArrowDownLeft,
  ArrowUpRight,
  CreditCard,
  Smartphone,
  BadgeIndianRupee,
  CheckCircle2,
  ShieldCheck,
  Gift,
  History,
  TrendingUp,
} from 'lucide-react';

const RECHARGE_OPTIONS = [49, 99, 199, 299, 499, 999];

const TRANSACTIONS = [
  { id: 1, type: 'credit', label: 'Wallet Recharge • UPI', amount: 499, date: 'Today, 10:30 AM', status: 'Success' },
  { id: 2, type: 'debit', label: 'Consultation • Acharya Vamsi', amount: -375, date: 'Yesterday, 9:00 PM', status: 'Success' },
  { id: 3, type: 'debit', label: 'Call Session • Guru Daksh', amount: -500, date: '25 Apr, 4:15 PM', status: 'Success' },
  { id: 4, type: 'credit', label: 'Cosmic Cashback Reward', amount: 50, date: '24 Apr, 12:00 PM', status: 'Success' },
  { id: 5, type: 'debit', label: 'Video Reading • Astro Sneha', amount: -400, date: '20 Apr, 6:00 PM', status: 'Success' },
  { id: 6, type: 'credit', label: 'Added via Bank Transfer', amount: 1000, date: '18 Apr, 3:22 PM', status: 'Success' },
];

const PAYMENT_METHODS = [
  { icon: Smartphone, label: 'Instant UPI', desc: 'GPay, PhonePe, Paytm', tag: 'Fastest' },
  { icon: CreditCard, label: 'Cards', desc: 'Debit / Credit Cards', tag: 'Secure' },
  { icon: BadgeIndianRupee, label: 'Net Banking', desc: 'All major Indian banks', tag: '' },
];

const WalletPage: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(499);
  const [custom, setCustom] = useState('');
  const [payMethod, setPayMethod] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleRecharge = () => {
    if (!selected && !custom) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }, 2000);
  };

  return (
    <div className="pb-24 max-w-7xl mx-auto px-4 md:px-8 pt-8">
      {/* ── Immersive Page Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/5 border border-accent/10 rounded-full mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            <span className="text-[10px] font-black text-accent uppercase tracking-widest">Secure Payments</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
            Cosmic <span className="text-accent">Wallet</span>
          </h1>
          <p className="text-gray-500 font-medium mt-2">Manage your balance for seamless divine consultations.</p>
        </div>
        
        <div className="flex gap-4">
          <div className="glass-card px-6 py-3 border-white/5 flex items-center gap-3">
             <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                <History className="w-5 h-5 text-gray-500" />
             </div>
             <div>
                <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Last Activity</p>
                <p className="text-sm font-black text-white">Yesterday, 9:00 PM</p>
             </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ── Left Content: Balance & Recharge ── */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Premium Balance Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-64 md:h-72 rounded-[48px] overflow-hidden group shadow-2xl"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1F2E0A] via-accent to-orange-600" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay" />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-[80px]" 
            />
            
            <div className="relative h-full p-10 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3 bg-black/20 backdrop-blur-xl px-4 py-2 rounded-2xl border border-white/10">
                  <Wallet className="w-5 h-5 text-white/80" />
                  <span className="text-xs font-black text-white uppercase tracking-[0.2em]">Platinum Account</span>
                </div>
                <TrendingUp className="w-8 h-8 text-white/20" />
              </div>

              <div>
                <p className="text-white/60 text-sm font-bold uppercase tracking-[0.3em] mb-2">Available Balance</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-7xl font-black text-white tracking-tighter">₹540.50</span>
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-white text-accent font-black py-4 rounded-3xl text-sm transition-all hover:bg-gray-100 active:scale-95 shadow-xl">
                   Quick Transfer
                </button>
                <button className="flex-1 bg-black/20 backdrop-blur-md border border-white/10 text-white font-black py-4 rounded-3xl text-sm transition-all hover:bg-black/30 active:scale-95">
                   Statement
                </button>
              </div>
            </div>
          </motion.div>

          {/* Recharge Interaction Area */}
          <div className="glass-card p-10">
            <h2 className="text-2xl font-black text-white mb-8">Recharge Your Cosmic Credits</h2>
            
            <div className="space-y-10">
              {/* Amount Selection */}
              <div>
                <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-4">Select Credit Package</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {RECHARGE_OPTIONS.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => { setSelected(amt); setCustom(''); }}
                      className={`group relative p-6 rounded-[32px] border-2 transition-all duration-300 ${
                        selected === amt 
                          ? 'border-accent bg-accent/5 shadow-2xl shadow-accent/10' 
                          : 'border-white/5 bg-white/[0.02] hover:border-white/20'
                      }`}
                    >
                      <p className={`text-2xl font-black mb-1 transition-colors ${selected === amt ? 'text-white' : 'text-gray-400'}`}>₹{amt}</p>
                      <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Get Credits</p>
                      {amt > 400 && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[8px] font-black px-3 py-1 rounded-full whitespace-nowrap shadow-lg">BEST VALUE</div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Methods */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-4">Payment Method</p>
                  <div className="space-y-3">
                    {PAYMENT_METHODS.map((pm, i) => (
                      <button
                        key={i}
                        onClick={() => setPayMethod(i)}
                        className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all ${
                          payMethod === i 
                            ? 'border-accent/40 bg-accent/5' 
                            : 'border-white/5 bg-white/[0.02] hover:border-white/10'
                        }`}
                      >
                        <div className="flex items-center gap-4 text-left">
                           <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${payMethod === i ? 'bg-accent/20 text-accent' : 'bg-white/5 text-gray-500'}`}>
                             <pm.icon className="w-5 h-5" />
                           </div>
                           <div>
                             <p className="text-sm font-black text-white">{pm.label}</p>
                             <p className="text-[10px] text-gray-500 font-bold">{pm.desc}</p>
                           </div>
                        </div>
                        {pm.tag && (
                          <span className="text-[8px] font-black bg-white/10 px-2 py-0.5 rounded text-gray-400 uppercase tracking-widest">{pm.tag}</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-end">
                   <div className="bg-accent/5 rounded-3xl p-8 border border-accent/10">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Total Amount</span>
                        <span className="text-3xl font-black text-white">₹{(selected ?? custom) || '0'}</span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleRecharge}
                        disabled={isProcessing || (!selected && !custom)}
                        className={`w-full py-5 rounded-2xl text-base font-black flex items-center justify-center gap-3 transition-all ${
                          success 
                            ? 'bg-emerald-500 text-white' 
                            : 'bg-accent text-white shadow-xl shadow-accent/20'
                        }`}
                      >
                        {isProcessing ? (
                          <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : success ? (
                          <><CheckCircle2 className="w-5 h-5" /> Recharge Successful</>
                        ) : (
                          <><Plus className="w-5 h-5" /> Proceed to Secure Recharge</>
                        )}
                      </motion.button>
                      <div className="flex items-center justify-center gap-2 mt-6 opacity-40">
                         <ShieldCheck className="w-3.5 h-3.5 text-white" />
                         <span className="text-[9px] font-black text-white uppercase tracking-[0.2em]">128-bit Encrypted SSL Payment</span>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right Sidebar: History & Offers ── */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Transaction History Feed */}
          <div className="glass-card p-8">
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-xl font-black text-white">History</h3>
               <button className="text-[10px] font-black text-accent uppercase tracking-widest hover:underline">Full Report</button>
            </div>
            
            <div className="space-y-6">
              {TRANSACTIONS.map((tx, idx) => (
                <motion.div
                  key={tx.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.05 }}
                  className="flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      tx.type === 'credit' ? 'bg-emerald-500/10 text-emerald-500 group-hover:scale-110' : 'bg-rose-500/10 text-rose-500 group-hover:scale-110'
                    }`}>
                      {tx.type === 'credit' ? <ArrowDownLeft className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                    </div>
                    <div>
                      <p className="text-sm font-black text-white truncate w-32 md:w-40">{tx.label}</p>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">{tx.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-black ${tx.type === 'credit' ? 'text-emerald-500' : 'text-rose-500'}`}>
                      {tx.type === 'credit' ? '+' : ''}₹{Math.abs(tx.amount)}
                    </p>
                    <p className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">Success</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Special Offers Section */}
          <div className="glass-card p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-[0.05] rotate-12 group-hover:scale-110 transition-transform">
               <Gift className="w-24 h-24" />
            </div>
            <h3 className="text-xl font-black text-white mb-6">Cosmic Offers</h3>
            <div className="space-y-4">
              {[
                { title: 'First Recharge', desc: 'Get 50% extra credits on your first transaction.', code: 'FIRST50' },
                { title: 'Weekly Bonus', desc: 'Add ₹499 or more and get free 10 mins consult.', code: 'WEEKLY' },
              ].map((offer, i) => (
                <div key={i} className="p-4 bg-white/5 border border-dashed border-white/10 rounded-2xl">
                   <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-1">{offer.title}</p>
                   <p className="text-[11px] text-gray-400 font-medium mb-3">{offer.desc}</p>
                   <div className="flex items-center justify-between">
                      <span className="text-[9px] font-black text-white bg-white/10 px-2 py-1 rounded">CODE: {offer.code}</span>
                      <button className="text-[9px] font-black text-accent uppercase tracking-widest hover:underline">Apply</button>
                   </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default WalletPage;
