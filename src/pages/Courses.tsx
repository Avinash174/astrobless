import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter,
  Star,
  Clock,
  Layers,
  Play,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import Skeleton from '../components/Skeleton';

const Courses: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const masterclasses = [
    {
      title: 'Vedic Astrology: Level 1',
      instructor: 'Dr. Arjun Sharma',
      duration: '12 Hours',
      level: 'Beginner',
      rating: 4.9,
      reviews: 1240,
      price: '₹2,499',
      image: 'https://images.unsplash.com/photo-1532983330958-4b32bc9bb07d?auto=format&fit=crop&q=80&w=400',
      category: 'Astrology'
    },
    {
      title: 'Advanced Nadi Reading',
      instructor: 'Guru Vidya',
      duration: '24 Hours',
      level: 'Advanced',
      rating: 4.8,
      reviews: 850,
      price: '₹5,999',
      image: 'https://images.unsplash.com/photo-1515518554ef0-942856402ec9?auto=format&fit=crop&q=80&w=400',
      category: 'Prediction'
    },
    {
      title: 'Tarot for Beginners',
      instructor: 'Sarah Jenkins',
      duration: '8 Hours',
      level: 'Beginner',
      rating: 4.7,
      reviews: 2100,
      price: '₹1,999',
      image: 'https://images.unsplash.com/photo-1590076214537-1e3c7c99bcce?auto=format&fit=crop&q=80&w=400',
      category: 'Divination'
    },
    {
      title: 'Numerology Mastery',
      instructor: 'Master Numerist',
      duration: '15 Hours',
      level: 'Intermediate',
      rating: 4.8,
      reviews: 1500,
      price: '₹3,499',
      image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&q=80&w=400',
      category: 'Numbers'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-accent/5 px-4 py-1.5 rounded-full border border-accent/10 mb-6"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-[10px] font-black text-accent uppercase tracking-widest">AstroBless Academy</span>
          </motion.div>
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
             <div className="max-w-3xl">
                <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                  Divine <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-400 to-amber-500">Masterclasses</span>
                </h1>
                <p className="text-gray-400 text-xl font-medium max-w-xl">Join the world's most comprehensive spiritual learning platform. Guided by masters, powered by wisdom.</p>
             </div>
             <div className="flex gap-4 w-full lg:w-auto">
                <div className="relative group flex-1 lg:w-80">
                   <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-accent" />
                   <input type="text" placeholder="Search masterclasses..." className="w-full bg-white/5 border border-white/5 rounded-[24px] py-5 pl-16 pr-6 text-sm text-white focus:outline-none focus:border-accent/40" />
                </div>
                <button className="w-16 h-16 rounded-[24px] bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 hover:text-white transition-all">
                   <Filter className="w-6 h-6" />
                </button>
             </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar mb-16 pb-4">
           {['All Classes', 'Astrology', 'Tarot', 'Numerology', 'Palmistry', 'Vastu', 'Meditation'].map((cat, i) => (
             <button key={i} className={`px-10 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all min-w-max border ${i === 0 ? 'bg-accent text-white border-accent' : 'bg-white/5 text-gray-500 border-white/5 hover:border-white/10'}`}>
                {cat}
             </button>
           ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           {isLoading ? (
             Array.from({ length: 6 }).map((_, i) => (
               <div key={i} className="glass-card p-6 rounded-[40px] border-white/5 space-y-4">
                  <Skeleton height={240} />
                  <Skeleton height={28} width="90%" />
                  <Skeleton height={16} width="40%" />
                  <div className="pt-4 flex justify-between">
                     <Skeleton height={20} width="30%" />
                     <Skeleton height={20} width="20%" />
                  </div>
               </div>
             ))
           ) : (
             masterclasses.concat(masterclasses).map((course, idx) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 whileHover={{ y: -10 }}
                 className="glass-card rounded-[40px] border-white/5 overflow-hidden flex flex-col group cursor-pointer"
               >
                  <div className="h-64 relative overflow-hidden">
                     <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                     <div className="absolute top-6 left-6">
                        <span className="px-4 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-white border border-white/10">{course.level}</span>
                     </div>
                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white shadow-2xl scale-75 group-hover:scale-100 transition-transform">
                           <Play className="w-6 h-6 fill-white" />
                        </div>
                     </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                     <div className="flex items-center gap-2 mb-4">
                        <Layers className="w-4 h-4 text-accent" />
                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{course.category}</span>
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors leading-tight">{course.title}</h3>
                     <p className="text-gray-500 text-sm font-medium mb-8">by {course.instructor}</p>
                     
                     <div className="mt-auto space-y-6">
                        <div className="flex items-center justify-between">
                           <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1.5">
                                 <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                                 <span className="text-sm font-bold text-white">{course.rating}</span>
                              </div>
                              <span className="text-gray-600 text-xs font-bold">({course.reviews} reviews)</span>
                           </div>
                           <div className="flex items-center gap-2 text-gray-500">
                              <Clock className="w-4 h-4" />
                              <span className="text-xs font-bold">{course.duration}</span>
                           </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-6 border-t border-white/5">
                           <span className="text-2xl font-black text-white">{course.price}</span>
                           <button className="text-accent font-black text-[10px] uppercase tracking-widest flex items-center gap-2 group/btn">
                              Enroll Now <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                           </button>
                        </div>
                     </div>
                  </div>
               </motion.div>
             ))
           )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
