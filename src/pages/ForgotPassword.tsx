import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, ArrowRight, ArrowLeft, Lock } from 'lucide-react';

const ForgotPassword: React.FC = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
    else navigate('/login');
  };

  return (
    <div className="min-h-screen bg-primary-bg flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 relative flex items-center justify-center group">
               <div className="absolute inset-0 bg-accent rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
               <img src="/assets/logo.png" alt="Logo" className="w-8 h-8 object-contain relative z-10" />
            </div>
            <span className="text-3xl font-black text-white tracking-tight">
              Astro<span className="text-accent">Bless</span>
            </span>
          </Link>
          <h1 className="text-2xl font-black text-white mb-2">
            {step === 1 && 'Reset Password'}
            {step === 2 && 'Verify OTP'}
            {step === 3 && 'New Password'}
          </h1>
          <p className="text-gray-500 font-medium">
            {step === 1 && "Enter your email to receive a reset code."}
            {step === 2 && `We've sent a code to ${email}`}
            {step === 3 && 'Create a strong new password.'}
          </p>
        </div>

        <div className="glass-card p-8 md:p-10">
          <form onSubmit={handleNext} className="space-y-6">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-2"
                >
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-accent transition-colors" />
                    <input 
                      type="email" 
                      placeholder="user@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-white focus:outline-none focus:border-accent/40 transition-all placeholder:text-gray-700" 
                      required
                    />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div className="flex justify-between gap-2">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                      <input 
                        key={i}
                        type="text" 
                        maxLength={1}
                        className="w-12 h-14 bg-white/[0.03] border border-white/10 rounded-xl text-center text-xl font-black text-white focus:outline-none focus:border-accent focus:bg-accent/5 transition-all"
                      />
                    ))}
                  </div>
                  <p className="text-center text-xs text-gray-500 font-bold">
                    Didn't receive the code? <span className="text-accent hover:underline cursor-pointer">Resend</span>
                  </p>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-5"
                >
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">New Password</label>
                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-accent transition-colors" />
                      <input 
                        type="password" 
                        placeholder="••••••••"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-white focus:outline-none focus:border-accent/40 transition-all placeholder:text-gray-700" 
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Confirm Password</label>
                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-accent transition-colors" />
                      <input 
                        type="password" 
                        placeholder="••••••••"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-white focus:outline-none focus:border-accent/40 transition-all placeholder:text-gray-700" 
                        required
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              className="w-full bg-accent text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-accent/20 hover:bg-accent/90 transition-all flex items-center justify-center gap-2 group"
            >
              {step === 1 && 'Send Code'}
              {step === 2 && 'Verify Code'}
              {step === 3 && 'Update Password'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <Link 
              to="/login"
              className="flex items-center justify-center gap-2 text-gray-500 hover:text-white transition-all text-xs font-black uppercase tracking-widest pt-2"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Login
            </Link>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
