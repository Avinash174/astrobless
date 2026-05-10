import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, AlertCircle } from 'lucide-react';

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ isOpen, onClose, onConfirm }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-sm bg-secondary-surface border border-white/10 rounded-[40px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-rose-500/10 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/10 rounded-full blur-[80px]" />
            
            <div className="p-10 relative z-10">
              <div className="flex justify-center mb-8">
                <motion.div 
                  initial={{ rotate: -10, scale: 0.9 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1
                  }}
                  className="w-20 h-20 bg-rose-500/10 rounded-[32px] flex items-center justify-center border border-rose-500/20 relative group"
                >
                  <div className="absolute inset-0 bg-rose-500/20 rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <LogOut className="w-10 h-10 text-rose-500 relative z-10" />
                </motion.div>
              </div>
              
              <div className="text-center mb-10">
                <h3 className="text-3xl font-black text-white mb-3 tracking-tight">Sign Out</h3>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">
                  Are you sure you want to leave? Your cosmic session will be ended.
                </p>
              </div>
              
              <div className="flex flex-col gap-3">
                <button
                  onClick={onConfirm}
                  className="w-full px-6 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] bg-rose-500 text-white shadow-lg shadow-rose-500/20 hover:bg-rose-600 hover:shadow-rose-500/40 transition-all active:scale-[0.98]"
                >
                  Yes, Sign Me Out
                </button>
                <button
                  onClick={onClose}
                  className="w-full px-6 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5 transition-all active:scale-[0.98]"
                >
                  Keep Exploring
                </button>
              </div>
            </div>
            
            <div className="bg-rose-500/5 p-5 flex items-center justify-center gap-3 border-t border-white/5">
              <AlertCircle className="w-4 h-4 text-rose-500/50" />
              <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">
                Safe & Secure Exit
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LogoutModal;
