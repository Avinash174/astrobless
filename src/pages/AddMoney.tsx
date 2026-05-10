import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wallet, 
  CreditCard, 
  Smartphone, 
  BadgeIndianRupee, 
  ArrowLeft, 
  ArrowRight,
  CheckCircle2, 
  ShieldCheck, 
  Zap,
  Lock,
  History,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const RECHARGE_OPTIONS = [
  { amount: 100, label: 'Standard', bonus: '0%', recommended: false },
  { amount: 200, label: 'Popular', bonus: '5%', recommended: false },
  { amount: 500, label: 'Best Value', bonus: '10%', recommended: true },
  { amount: 1000, label: 'Premium', bonus: '15%', recommended: false },
  { amount: 2000, label: 'VIP', bonus: '20%', recommended: false },
  { amount: 5000, label: 'Elite', bonus: '25%', recommended: false },
];

const PAYMENT_METHODS = [
  { id: 'upi', icon: Smartphone, label: 'UPI / BHIM', desc: 'GPay, PhonePe, Paytm' },
  { id: 'card', icon: CreditCard, label: 'Credit / Debit Card', desc: 'Visa, Mastercard, RuPay' },
  { id: 'net', icon: BadgeIndianRupee, label: 'Net Banking', desc: 'All major Indian banks' },
];

const RECENT_RECHARGES = [
  { id: 1, amount: 500, date: '02 May, 2024', status: 'Success', method: 'UPI' },
  { id: 2, amount: 200, date: '28 Apr, 2024', status: 'Success', method: 'Card' },
];

const AddMoney: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(500);
  const [custom, setCustom] = useState('');
  const [method, setMethod] = useState('upi');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const finalAmount = selected || Number(custom) || 0;
  const bonus = selected ? Number(RECHARGE_OPTIONS.find(o => o.amount === selected)?.bonus.replace('%', '')) : 0;
  const bonusAmount = (finalAmount * bonus) / 100;

  const handlePay = () => {
    if (finalAmount < 50) return;
    setIsLoading(true);
    // Simulate payment process
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
    }, 1500);
  };

  if (success) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-12 text-center max-w-lg w-full relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500" />
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 12, delay: 0.2 }}
            className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-500/20"
          >
            <CheckCircle2 className="w-12 h-12 text-emerald-500" />
          </motion.div>
          <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Recharge Successful!</h2>
          <p className="text-gray-400 mb-10 text-lg">
            ₹{finalAmount} has been added to your wallet. You can now start your consultations.
          </p>
          <div className="space-y-4">
            <Link to="/wallet">
              <button className="w-full bg-accent text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-accent/20">
                View Wallet History
              </button>
            </Link>
            <button 
              onClick={() => setSuccess(false)}
              className="w-full bg-white/5 text-gray-400 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:text-white transition-colors"
            >
              Add More Money
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-8 pb-32">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <Link to="/wallet" className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group">
            <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </Link>
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Add <span className="text-accent">Credits</span></h1>
            <p className="text-gray-500 text-sm font-medium mt-1">Top up your wallet for premium astrology insights.</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6 bg-white/5 border border-white/10 px-6 py-4 rounded-[24px] shadow-xl">
          <div className="text-right">
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-0.5">Current Balance</p>
            <p className="text-2xl font-black text-white tracking-tighter">₹500.00</p>
          </div>
          <div className="w-12 h-12 bg-accent/10 rounded-[18px] flex items-center justify-center border border-accent/20">
            <Wallet className="w-6 h-6 text-accent" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Amount & Method */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Amount Selection */}
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-10">
              <TrendingUp className="w-5 h-5 text-accent" />
              <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest">Select Recharge Amount</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
              {RECHARGE_OPTIONS.map((opt) => (
                <button
                  key={opt.amount}
                  onClick={() => { setSelected(opt.amount); setCustom(''); }}
                  className={`relative p-8 rounded-[32px] border-2 transition-all flex flex-col items-center justify-center gap-1 group ${
                    selected === opt.amount 
                    ? 'bg-accent border-accent shadow-[0_20px_40px_rgba(253,125,0,0.3)] scale-[1.02]' 
                    : 'bg-white/5 border-white/5 hover:border-white/20'
                  }`}
                >
                  {opt.recommended && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-accent text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg z-20 border border-accent/20">
                      Recommended
                    </span>
                  )}
                  {opt.bonus !== '0%' && (
                    <span className={`absolute -top-3 -right-2 text-[10px] font-black text-white px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1 z-10 ${selected === opt.amount ? 'bg-white text-accent' : 'bg-emerald-500'}`}>
                      <Zap className="w-2.5 h-2.5" /> +{opt.bonus}
                    </span>
                  )}
                  <span className={`text-3xl font-black transition-colors ${selected === opt.amount ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>₹{opt.amount}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${selected === opt.amount ? 'text-white/70' : 'text-gray-500'}`}>{opt.label}</span>
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Or enter custom amount</label>
              <div className="relative group">
                <span className={`absolute left-8 top-1/2 -translate-y-1/2 text-2xl font-black transition-colors ${custom ? 'text-accent' : 'text-gray-500'}`}>₹</span>
                <input
                  type="number"
                  placeholder="Min ₹50"
                  value={custom}
                  onChange={(e) => { setCustom(e.target.value); setSelected(null); }}
                  className="w-full bg-primary-bg border-2 border-white/10 rounded-[32px] py-8 pl-14 pr-8 text-2xl font-black text-white focus:outline-none focus:border-accent shadow-inner transition-all placeholder:text-gray-800"
                />
                {finalAmount > 0 && finalAmount < 50 && (
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 flex items-center gap-2 text-rose-500 bg-rose-500/10 px-4 py-2 rounded-full border border-rose-500/20">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Min ₹50</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
             <div className="flex items-center gap-3 mb-10">
                <Lock className="w-5 h-5 text-accent" />
                <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest">Payment Method</h3>
             </div>

             <div className="space-y-4">
                {PAYMENT_METHODS.map((meth) => (
                  <button
                    key={meth.id}
                    onClick={() => setMethod(meth.id)}
                    className={`flex items-center justify-between w-full p-6 rounded-3xl border-2 transition-all group ${
                      method === meth.id 
                      ? 'bg-accent/10 border-accent shadow-xl' 
                      : 'bg-white/5 border-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-5">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${method === meth.id ? 'bg-accent text-white' : 'bg-white/5 text-gray-400 group-hover:text-white'}`}>
                        <meth.icon className="w-7 h-7" />
                      </div>
                      <div className="text-left">
                        <p className={`font-black text-lg ${method === meth.id ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>{meth.label}</p>
                        <p className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">{meth.desc}</p>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-4 flex items-center justify-center transition-all ${method === meth.id ? 'border-accent bg-accent' : 'border-white/10'}`}>
                      {method === meth.id && <div className="w-2 h-2 bg-white rounded-full shadow-lg" />}
                    </div>
                  </button>
                ))}
             </div>
          </div>

          {/* Recent History Preview */}
          <div className="glass-card p-10">
            <div className="flex items-center justify-between mb-8">
               <div className="flex items-center gap-3">
                  <History className="w-5 h-5 text-accent" />
                  <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest">Recent Activity</h3>
               </div>
               <Link to="/wallet" className="text-[10px] font-black text-accent uppercase tracking-widest hover:underline">View All</Link>
            </div>
            <div className="space-y-3">
              {RECENT_RECHARGES.map((rec) => (
                <div key={rec.id} className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center border border-emerald-500/20">
                      <BadgeIndianRupee className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-white tracking-tight">₹{rec.amount} Added</p>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">{rec.date} • {rec.method}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{rec.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Summary */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card p-10 space-y-10 sticky top-24 border-t-4 border-t-accent shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
            <div>
              <h3 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] mb-8 text-center">Summary</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">Base Amount</span>
                  <span className="text-white font-black tracking-tight text-xl">₹{finalAmount}</span>
                </div>
                {bonusAmount > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-500 font-bold uppercase text-[10px] tracking-widest flex items-center gap-1.5">
                      <Zap className="w-4 h-4" /> Special Bonus
                    </span>
                    <span className="text-emerald-500 font-black tracking-tight text-xl">+₹{bonusAmount.toFixed(0)}</span>
                  </div>
                )}
                <div className="flex justify-between items-center border-b border-white/5 pb-6">
                  <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">Platform Fees</span>
                  <span className="text-gray-500 font-black tracking-tight text-xl italic line-through opacity-50">₹49</span>
                </div>
                
                <div className="pt-2">
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-gray-300 font-black text-lg uppercase tracking-tighter">Net Wallet Credit</span>
                    <div className="text-right">
                      <p className="text-4xl font-black text-accent tracking-tighter leading-none mb-1">₹{(finalAmount + bonusAmount).toFixed(0)}</p>
                      <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">No Hidden Charges</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handlePay}
              disabled={finalAmount < 50 || isLoading}
              className="w-full btn-accent py-6 rounded-[32px] font-black text-sm uppercase tracking-[0.1em] flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(253,125,0,0.4)] disabled:opacity-40 disabled:cursor-not-allowed group relative overflow-hidden transition-all active:scale-95"
            >
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div 
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"
                  />
                ) : (
                  <motion.div 
                    key="default"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3"
                  >
                    PROCEED TO PAY ₹{finalAmount}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-2xl p-5 border border-white/10 flex items-start gap-4 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-[11px] text-white font-black uppercase tracking-tight mb-1">100% Encrypted</p>
                  <p className="text-[10px] text-gray-500 leading-relaxed font-medium">
                    Your data is safe with military-grade 256-bit SSL encryption.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-6 opacity-20 hover:opacity-50 transition-opacity grayscale contrast-125">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-4" />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3" />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMoney;

