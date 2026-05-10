import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen: React.FC = () => {
  return (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-primary-bg flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Animated Background Rings */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 0.1 }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute w-[500px] h-[500px] border border-accent rounded-full"
            />
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 0.05 }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
              className="absolute w-[800px] h-[800px] border border-white rounded-full"
            />
          </div>

          <div className="relative flex flex-col items-center">
            {/* Logo Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative mb-8"
            >
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-accent rounded-full blur-[40px] opacity-20 animate-pulse" />
              
              {/* The Logo Image */}
              <div className="relative w-32 h-32 md:w-40 h-40 flex items-center justify-center">
                <img 
                  src="/assets/logo.png" 
                  alt="AstroBless Logo" 
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_20px_rgba(253,125,0,0.5)]"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2">
                Astro<span className="text-accent">Bless</span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-4" />
              <p className="text-gray-500 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                Cosmic Guidance
              </p>
            </motion.div>
          </div>

          {/* Loading Indicator */}
          <div className="absolute bottom-16 left-0 right-0 flex flex-col items-center">
            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="w-full h-full bg-accent shadow-[0_0_10px_#FD7D00]"
              />
            </div>
          </div>
        </motion.div>
  );
};

export default SplashScreen;
