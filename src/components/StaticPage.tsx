import React from 'react';
import { motion } from 'framer-motion';
import Skeleton from './Skeleton';

interface StaticPageProps {
  title: string;
  subtitle: string;
  loading?: boolean;
  content: Array<{
    heading?: string;
    text: string;
  }>;
}

const StaticPage: React.FC<StaticPageProps> = ({ title, subtitle, loading = false, content }) => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter"
          >
            {title.split(' ').map((word, i) => (
              <span key={i} className={i === title.split(' ').length - 1 ? 'text-accent' : ''}>
                {word}{' '}
              </span>
            ))}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-xl font-medium max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </header>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-[40px] p-8 md:p-16 border-white/5 relative overflow-hidden"
        >
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 space-y-12">
            {loading ? (
              <div className="space-y-12">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton width="40%" height={24} className="mb-4" />
                    <Skeleton height={16} />
                    <Skeleton height={16} />
                    <Skeleton width="80%" height={16} />
                  </div>
                ))}
              </div>
            ) : (
              content.map((section, idx) => (
                <div key={idx}>
                  {section.heading && (
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                      <span className="w-8 h-px bg-accent/40" />
                      {section.heading}
                    </h2>
                  )}
                  <p className="text-gray-400 leading-relaxed text-lg font-medium whitespace-pre-line">
                    {section.text}
                  </p>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StaticPage;
