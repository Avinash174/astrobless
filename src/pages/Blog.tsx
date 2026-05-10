import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  ArrowRight,
  Sparkles,
  Search,
  Bookmark
} from 'lucide-react';
import Skeleton from '../components/Skeleton';

const Blog: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const posts = [
    {
      title: 'Mercury Retrograde: Survival Guide for 2026',
      excerpt: 'Learn how to navigate communication breakdowns and technological glitches during this intense transit.',
      author: 'Astro Rhea',
      date: 'May 12, 2026',
      category: 'Transits',
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'The Hidden Power of your Moon Sign',
      excerpt: 'Discover your emotional blueprint and how your moon sign influences your daily reactions and relationships.',
      author: 'Master Leo',
      date: 'May 10, 2026',
      category: 'Insights',
      image: 'https://images.unsplash.com/photo-1532667449560-72a95c8d381b?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'How AI is Revolutionizing Astrology',
      excerpt: 'A deep dive into how machine learning is enhancing birth chart precision and predictive accuracy.',
      author: 'Tech Guru',
      date: 'May 08, 2026',
      category: 'Future Tech',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600'
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
            <span className="text-[10px] font-black text-accent uppercase tracking-widest">Cosmic Insights</span>
          </motion.div>
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
             <div className="max-w-3xl">
                <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                  The <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-400 to-amber-500">Astro Journal</span>
                </h1>
                <p className="text-gray-400 text-xl font-medium max-w-xl">Deep dives into celestial patterns, expert wisdom, and your spiritual growth roadmap.</p>
             </div>
             <div className="relative group w-full lg:w-96">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-accent" />
                <input type="text" placeholder="Search the archives..." className="w-full bg-white/5 border border-white/5 rounded-[24px] py-5 pl-16 pr-6 text-sm text-white focus:outline-none focus:border-accent/40" />
             </div>
          </div>
        </div>

        {/* Featured Post */}
        {!isLoading && (
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="glass-card rounded-[48px] border-white/5 overflow-hidden mb-24 group cursor-pointer"
           >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                 <div className="h-96 lg:h-auto overflow-hidden">
                    <img src={posts[0].image} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                 </div>
                 <div className="p-12 lg:p-20 flex flex-col justify-center">
                    <span className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-6">{posts[0].category}</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight group-hover:text-accent transition-colors">{posts[0].title}</h2>
                    <p className="text-gray-400 text-lg font-medium leading-relaxed mb-10">{posts[0].excerpt}</p>
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10" />
                          <div>
                             <p className="text-white font-bold">{posts[0].author}</p>
                             <p className="text-gray-600 text-xs font-black uppercase tracking-widest">{posts[0].date}</p>
                          </div>
                       </div>
                       <button className="w-12 h-12 rounded-2xl bg-accent text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                          <ArrowRight className="w-6 h-6" />
                       </button>
                    </div>
                 </div>
              </div>
           </motion.div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           {isLoading ? (
             Array.from({ length: 6 }).map((_, i) => (
               <div key={i} className="glass-card p-6 rounded-[40px] border-white/5 space-y-4">
                  <Skeleton height={240} />
                  <Skeleton height={28} width="90%" />
                  <Skeleton height={60} width="100%" />
               </div>
             ))
           ) : (
             posts.slice(1).concat(posts).map((post, idx) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 whileHover={{ y: -10 }}
                 className="glass-card rounded-[40px] border-white/5 overflow-hidden flex flex-col group cursor-pointer"
               >
                  <div className="h-60 relative overflow-hidden">
                     <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                     <div className="absolute top-6 left-6">
                        <span className="px-4 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-white border border-white/10">{post.category}</span>
                     </div>
                     <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:text-accent transition-colors">
                        <Bookmark className="w-4 h-4" />
                     </button>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                     <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors leading-tight">{post.title}</h3>
                     <p className="text-gray-500 text-sm font-medium mb-8 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                     <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                        <div className="flex items-center gap-3">
                           <Calendar className="w-4 h-4 text-gray-600" />
                           <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{post.date}</span>
                        </div>
                        <span className="text-accent font-black text-[10px] uppercase tracking-widest flex items-center gap-2">Read More <ArrowRight className="w-4 h-4" /></span>
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

export default Blog;
