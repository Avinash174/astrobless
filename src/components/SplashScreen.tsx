import { useEffect } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ finishLoading }: { finishLoading: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      finishLoading();
    }, 2500);
    return () => clearTimeout(timer);
  }, [finishLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Container */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 15,
            duration: 1 
          }}
          className="w-64 h-64 md:w-80 md:h-80 relative"
        >
          {/* Animated Glow Ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full"
          />
          
          <img 
            src="/splash_logo.png" 
            alt="AstroBless Logo" 
            className="w-full h-full object-contain relative z-10 drop-shadow-2xl" 
          />
        </motion.div>

        {/* Text Animation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tighter font-display mb-2">
            AstroBless
          </h2>
          <div className="flex items-center gap-3 justify-center">
            <div className="h-px w-8 bg-primary/30"></div>
            <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px]">
              Guiding Your Destiny
            </p>
            <div className="h-px w-8 bg-primary/30"></div>
          </div>
        </motion.div>

        {/* Loading Bar */}
        <div className="mt-12 w-48 h-1 bg-light rounded-full overflow-hidden relative">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-full bg-primary"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
