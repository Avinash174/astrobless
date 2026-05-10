import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Video, 
  Award, 
  Users,
  Search,
  Star,
  PlayCircle
} from 'lucide-react';
import Skeleton from '../components/Skeleton';

const Academy: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const courses = [
    { 
      title: 'Vedic Astrology 101', 
      level: 'Beginner', 
      instructor: 'Dr. Arjun Sharma',
      rating: 4.9,
      students: '12k',
      image: 'https://images.unsplash.com/photo-1532983330958-4b32bc9bb07d?auto=format&fit=crop&q=80&w=400',
      price: '₹2,499'
    },
    { 
      title: 'Advanced Nadi Reading', 
      level: 'Advanced', 
      instructor: 'Guru Vidya',
      rating: 4.8,
      students: '5k',
      image: 'https://images.unsplash.com/photo-1515518554ef0-942856402ec9?auto=format&fit=crop&q=80&w=400',
      price: '₹5,999'
    },
    { 
      title: 'Modern Tarot Mastery', 
      level: 'Intermediate', 
      instructor: 'Sarah Jenkins',
      rating: 4.7,
      students: '8k',
      image: 'https://images.unsplash.com/photo-1590076214537-1e3c7c99bcce?auto=format&fit=crop&q=80&w=400',
      price: '₹1,999'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/20 mb-6">
              <BookOpen className="w-4 h-4 text-purple-500" />
              <span className="text-[10px] font-black text-purple-500 uppercase tracking-widest">AstroBless Academy</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
              Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-accent to-orange-500">Ancient Arts</span>
            </h1>
            <p className="text-gray-400 text-xl font-medium leading-relaxed mb-10">
              Join the world's most comprehensive spiritual learning platform. Guided by masters, powered by wisdom.
            </p>
            <div className="flex flex-wrap gap-4">
               <button className="btn-accent px-10 py-5 rounded-3xl uppercase tracking-widest text-xs">Start Free Course</button>
               <button className="bg-white/5 border border-white/10 px-10 py-5 rounded-3xl uppercase tracking-widest text-xs text-white hover:bg-white/10 transition-all">Browse Catalog</button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="grid grid-cols-2 gap-4 w-full lg:w-auto"
          >
            {[
              { icon: Video, label: 'Live Classes', value: '500+', color: 'text-blue-500' },
              { icon: Award, label: 'Certifications', value: '25+', color: 'text-emerald-500' },
              { icon: Users, label: 'Active Students', value: '50k+', color: 'text-accent' },
              { icon: Star, label: 'Master Tutors', value: '100+', color: 'text-amber-500' },
            ].map((stat, idx) => (
              <div key={idx} className="glass-card p-8 rounded-[32px] border-white/5 text-center">
                 <stat.icon className={`w-8 h-8 mx-auto mb-4 ${stat.color}`} />
                 <p className="text-3xl font-black text-white mb-1">{stat.value}</p>
                 <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Course Grid */}
        <div className="mb-24">
           <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-black text-white tracking-tight uppercase">Popular Masterclasses</h2>
              <div className="relative group hidden md:block">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-accent" />
                 <input type="text" placeholder="Search courses..." className="bg-white/5 border border-white/5 rounded-2xl py-3 pl-12 pr-6 text-sm text-white focus:outline-none focus:border-accent/40 w-64" />
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {isLoading ? (
                Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="glass-card rounded-[40px] border-white/5 p-6 space-y-4">
                     <Skeleton height={200} />
                     <Skeleton height={24} width="80%" />
                     <Skeleton height={16} width="40%" />
                  </div>
                ))
              ) : (
                courses.map((course, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -10 }}
                    className="glass-card rounded-[40px] border-white/5 overflow-hidden group cursor-pointer"
                  >
                    <div className="relative h-64 overflow-hidden">
                       <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                       <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                          <span className="px-4 py-1.5 bg-accent rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-xl">{course.level}</span>
                          <p className="text-2xl font-black text-white">{course.price}</p>
                       </div>
                       <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <PlayCircle className="w-16 h-16 text-white/80" />
                       </div>
                    </div>
                    <div className="p-8">
                       <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{course.title}</h3>
                       <p className="text-gray-500 text-sm font-medium mb-6">by {course.instructor}</p>
                       <div className="flex items-center justify-between pt-6 border-t border-white/5">
                          <div className="flex items-center gap-2">
                             <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                             <span className="text-sm font-bold text-white">{course.rating}</span>
                          </div>
                          <div className="flex items-center gap-2">
                             <Users className="w-4 h-4 text-gray-600" />
                             <span className="text-xs font-bold text-gray-500">{course.students} Learners</span>
                          </div>
                       </div>
                    </div>
                  </motion.div>
                ))
              )}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Academy;
