import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ComingSoonProps {
  title: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full" />
        <div className="relative z-10 bg-secondary-surface border border-white/10 p-12 rounded-[40px] shadow-2xl max-w-md">
          <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-accent/20">
            <Rocket className="w-10 h-10 text-accent animate-bounce" />
          </div>
          
          <h1 className="text-3xl font-black text-white mb-4 tracking-tight">{title}</h1>
          <p className="text-gray-400 font-medium mb-10 leading-relaxed">
            We're currently crafting a celestial experience for this feature. Stay tuned for the cosmic update!
          </p>
          
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-accent font-black uppercase tracking-widest text-xs hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
