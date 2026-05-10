import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  CheckCircle2, 
  Globe,
  ArrowRight,
  Zap,
  Target,
  FileCheck
} from 'lucide-react';
import Skeleton from '../components/Skeleton';

const Certification: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const certs = [
    {
      title: 'Certified Vedic Astrologer (CVA)',
      provider: 'International Astro Institute',
      duration: '6 Months',
      level: 'Expert',
      benefits: ['Recognized globally', 'Join top-tier listing', 'Premium badge'],
      price: '₹12,499'
    },
    {
      title: 'Advanced Numerology Expert',
      provider: 'Celestial Academy',
      duration: '3 Months',
      level: 'Intermediate',
      benefits: ['Client consultation kit', 'Weekly mentorship', 'Lifetime access'],
      price: '₹8,999'
    },
    {
      title: 'Master Tarot Practitioner',
      provider: 'Mystic Arts Council',
      duration: '4 Months',
      level: 'Advanced',
      benefits: ['Professional toolkit', 'Business guidance', 'Certified seal'],
      price: '₹9,499'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20 mb-6"
          >
            <Award className="w-4 h-4 text-emerald-500" />
            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Global Certifications</span>
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
            Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-accent to-orange-500">Certified</span>
          </h1>
          <p className="text-gray-400 text-xl font-medium max-w-2xl mx-auto">Elevate your spiritual practice with industry-standard certifications recognized by practitioners worldwide.</p>
        </div>

        {/* Trust Bar */}
        <div className="flex flex-wrap items-center justify-center gap-12 mb-24 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
           {[1, 2, 3, 4].map(i => (
             <div key={i} className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-white" />
                <span className="text-lg font-black text-white tracking-tighter">GLOBAL ALLIANCE {i}</span>
             </div>
           ))}
        </div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
           {isLoading ? (
             Array.from({ length: 3 }).map((_, i) => (
               <div key={i} className="glass-card p-10 rounded-[48px] border-white/5 space-y-6">
                  <Skeleton height={60} width={60} variant="circle" />
                  <Skeleton height={32} width="80%" />
                  <Skeleton height={80} width="100%" />
                  <div className="space-y-2">
                     <Skeleton height={16} width="60%" />
                     <Skeleton height={16} width="55%" />
                     <Skeleton height={16} width="50%" />
                  </div>
               </div>
             ))
           ) : (
             certs.map((cert, idx) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 whileHover={{ y: -10 }}
                 className="glass-card p-10 rounded-[48px] border-white/5 relative overflow-hidden group"
               >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-125 transition-transform duration-700">
                     <Award className="w-32 h-32 text-accent" />
                  </div>
                  
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-8 shadow-xl">
                     <Award className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-black text-white mb-4 leading-tight">{cert.title}</h3>
                  <p className="text-gray-500 font-bold text-sm mb-8">by {cert.provider}</p>
                  
                  <div className="space-y-4 mb-10">
                     {cert.benefits.map((benefit, i) => (
                       <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          <span className="text-sm font-medium text-gray-400">{benefit}</span>
                       </div>
                     ))}
                  </div>
                  
                  <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                     <div>
                        <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-1">Fee Starts From</p>
                        <p className="text-2xl font-black text-white">{cert.price}</p>
                     </div>
                     <button className="w-14 h-14 rounded-2xl bg-accent text-white flex items-center justify-center hover:scale-110 transition-transform">
                        <ArrowRight className="w-6 h-6" />
                     </button>
                  </div>
               </motion.div>
             ))
           )}
        </div>

        {/* Process Section */}
        <div className="mt-32">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-white uppercase tracking-tight mb-4">The Certification Path</h2>
              <p className="text-gray-500 font-medium">Four steps to becoming a globally recognized expert.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: Zap, label: 'Enrolment', desc: 'Choose your path' },
                { icon: Target, label: 'Learning', desc: 'Master the curriculum' },
                { icon: FileCheck, label: 'Examination', desc: 'Pass the assessment' },
                { icon: Award, label: 'Graduation', desc: 'Receive your seal' },
              ].map((step, i) => (
                <div key={i} className="relative text-center">
                   <div className="w-20 h-20 rounded-full bg-white/5 border border-white/5 flex items-center justify-center mx-auto mb-6 text-accent">
                      <step.icon className="w-8 h-8" />
                   </div>
                   <h4 className="text-white font-bold mb-2">{step.label}</h4>
                   <p className="text-gray-600 text-xs font-medium">{step.desc}</p>
                   {i < 3 && (
                     <div className="hidden lg:block absolute top-10 left-[60%] w-full h-px bg-gradient-to-r from-accent/30 to-transparent" />
                   )}
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
