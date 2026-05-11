import { motion } from 'framer-motion';
import { BookOpen, Search, ArrowRight, Calendar, User } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'How Mercury Retrograde Affects Your Career in 2026',
      category: 'Astrology',
      date: 'May 10, 2026',
      author: 'Dr. Aditya Sharma',
      image: 'https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'The Hidden Meaning of Your Life Path Number',
      category: 'Numerology',
      date: 'May 08, 2026',
      author: 'Guru Raghav',
      image: 'https://images.unsplash.com/photo-1515549832467-d3b6926228b3?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Setting Up Your Home Vastu for Positive Energy',
      category: 'Vastu',
      date: 'May 05, 2026',
      author: 'Sonalika Ved',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Understanding Tarot: The Fool Card Explained',
      category: 'Tarot',
      date: 'May 01, 2026',
      author: 'Maanya Gupta',
      image: 'https://images.unsplash.com/photo-1590074072786-a66914d668f1?auto=format&fit=crop&q=80&w=800'
    },
  ];

  return (
    <main className="bg-light min-h-screen pb-20">
      {/* Search & Categories Hero */}
      <section className="bg-secondary text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mb-12"
          >
            Astro <span className="text-primary italic">Insights</span>
          </motion.h1>
          
          <div className="max-w-2xl mx-auto relative group">
            <input 
              type="text" 
              placeholder="Search for wisdom, stars, or destiny..." 
              className="w-full bg-white/10 border border-white/20 rounded-[2rem] px-10 py-6 outline-none focus:bg-white focus:text-secondary transition-all font-bold text-lg placeholder:text-white/50 focus:placeholder:text-gray-400"
            />
            <Search className="absolute right-8 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-secondary" size={24} />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {['All', 'Astrology', 'Numerology', 'Tarot', 'Vastu', 'Lifestyle'].map((cat, i) => (
              <button 
                key={cat}
                className={`px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest border transition-all ${i === 0 ? 'bg-primary border-primary text-secondary shadow-lg shadow-primary/20' : 'border-white/20 hover:border-primary text-white/70 hover:text-primary'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[4rem] overflow-hidden flex flex-col lg:flex-row premium-shadow border border-gray-50 group cursor-pointer"
        >
          <div className="lg:w-1/2 h-[400px] lg:h-auto relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1506318137071-a8e063b4bc04?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              alt="Featured" 
            />
            <div className="absolute top-8 left-8 bg-primary text-secondary px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest">
              Featured Story
            </div>
          </div>
          <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center space-y-8">
            <div className="flex items-center gap-6 text-gray-400 font-bold text-sm">
              <span className="flex items-center gap-2"><Calendar size={16} /> May 11, 2026</span>
              <span className="flex items-center gap-2"><User size={16} /> By Dr. Aditya Sharma</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-secondary leading-tight">
              Solar Eclipse 2026: A Karmic Turning Point for All Signs
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              The upcoming total solar eclipse is not just a celestial event; it's a massive energetic shift that will redefine how we perceive our personal goals...
            </p>
            <button className="flex items-center gap-3 text-accent font-black text-lg group-hover:gap-5 transition-all">
              Continue Reading <ArrowRight size={24} />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[3rem] overflow-hidden premium-shadow group border border-gray-50 cursor-pointer"
            >
              <div className="h-64 relative overflow-hidden">
                <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={post.title} />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-secondary px-4 py-1 rounded-full font-black text-[10px] uppercase tracking-widest shadow-lg">
                  {post.category}
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center justify-between text-[10px] text-gray-400 font-black uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                </div>
                <h3 className="text-2xl font-black text-secondary leading-snug group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 font-medium">
                  Explore the deep mystical connections between the stars and your daily life in our latest spiritual guide.
                </p>
                <div className="pt-4 border-t border-gray-50 flex justify-between items-center">
                  <span className="text-accent font-black text-sm">Read More</span>
                  <div className="w-10 h-10 bg-light rounded-full flex items-center justify-center text-secondary group-hover:bg-primary transition-all">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="bg-secondary text-white px-12 py-5 rounded-3xl font-black text-lg hover:bg-accent transition-all shadow-xl shadow-secondary/20 active:scale-95 flex items-center gap-3">
            Load More Insights
            <BookOpen size={22} />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Blog;
