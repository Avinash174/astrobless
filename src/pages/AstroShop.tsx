import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  Search, 
  Filter,
  Star,
  Zap,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import Skeleton from '../components/Skeleton';

const AstroShop: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const products = [
    { 
      name: 'Energized Amethyst Pyramid', 
      price: '₹2,999', 
      rating: 4.9, 
      category: 'Healing Crystals',
      image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80&w=400'
    },
    { 
      name: 'Premium Rudraksha Mala', 
      price: '₹1,499', 
      rating: 4.8, 
      category: 'Spiritual Jewelry',
      image: 'https://images.unsplash.com/photo-1590113866226-eb040776b251?auto=format&fit=crop&q=80&w=400'
    },
    { 
      name: 'Customized Zodiac Candle', 
      price: '₹899', 
      rating: 4.7, 
      category: 'Home Rituals',
      image: 'https://images.unsplash.com/photo-1572726710708-20bb9fa0633d?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/20 mb-6"
            >
              <ShoppingBag className="w-4 h-4 text-orange-500" />
              <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest">Spiritual Marketplace</span>
            </motion.div>
            <h1 className="text-6xl md:text-[100px] font-black text-white mb-6 tracking-tighter leading-[0.85]">
              The <span className="text-accent">Astro</span> Shop
            </h1>
            <p className="text-gray-400 text-xl font-medium max-w-xl">Authentic spiritual tools, crystals, and accessories curated by our master practitioners.</p>
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
             <div className="relative group flex-1 md:w-64">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-accent" />
                <input type="text" placeholder="Search products..." className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-sm text-white focus:outline-none focus:border-accent/40" />
             </div>
             <button className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-all shrink-0">
                <Filter className="w-5 h-5" />
             </button>
          </div>
        </div>

        {/* Featured Banner */}
        {!isLoading && (
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="glass-card rounded-[48px] border-white/5 p-12 md:p-20 mb-24 relative overflow-hidden group"
           >
              <div className="absolute top-0 right-0 w-1/2 h-full -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(253,125,0,0.1)_0%,transparent_70%)]" />
              <div className="max-w-xl relative z-10">
                 <div className="flex items-center gap-3 mb-6 text-accent">
                    <Zap className="w-5 h-5 fill-accent" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Limited Edition Drop</span>
                 </div>
                 <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter">Hand-Carved <br />Celestial Globes</h2>
                 <p className="text-gray-400 text-lg font-medium leading-relaxed mb-10">Only 50 pieces available. Each globe is energized under the full moon and personally blessed by our head Vedic master.</p>
                 <button className="btn-accent px-12 py-5 rounded-[24px] uppercase tracking-widest text-xs font-black shadow-2xl">Claim Yours Now</button>
              </div>
              <div className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2">
                 <div className="w-80 h-80 rounded-[64px] bg-white/5 border border-white/10 p-8 rotate-12 group-hover:rotate-0 transition-transform duration-700 overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover rounded-[48px]" alt="Promo" />
                 </div>
              </div>
           </motion.div>
        )}

        {/* Categories */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar mb-16 pb-4">
           {['All Artifacts', 'Crystals', 'Incense', 'Jewelry', 'Pujas', 'Home Decor'].map((cat, i) => (
             <button key={i} className={`px-10 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all min-w-max border ${i === 0 ? 'bg-accent text-white border-accent' : 'bg-white/5 text-gray-500 border-white/5 hover:border-white/10'}`}>
                {cat}
             </button>
           ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
           {isLoading ? (
             Array.from({ length: 8 }).map((_, i) => (
               <div key={i} className="glass-card p-6 rounded-[40px] border-white/5 space-y-4">
                  <Skeleton height={240} />
                  <Skeleton height={24} width="70%" />
                  <Skeleton height={16} width="40%" />
               </div>
             ))
           ) : (
             products.concat(products).map((item, idx) => (
               <motion.div
                 key={idx}
                 whileHover={{ y: -10 }}
                 className="glass-card rounded-[40px] border-white/5 overflow-hidden flex flex-col group"
               >
                  <div className="h-72 overflow-hidden relative">
                     <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                     <button className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent transition-all opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                        <ShoppingBag className="w-5 h-5" />
                     </button>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                     <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-2">{item.category}</span>
                     <h3 className="text-lg font-bold text-white mb-4 group-hover:text-accent transition-colors">{item.name}</h3>
                     <div className="mt-auto flex items-center justify-between">
                        <p className="text-xl font-black text-white">{item.price}</p>
                        <div className="flex items-center gap-1.5">
                           <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                           <span className="text-xs font-bold text-white">{item.rating}</span>
                        </div>
                     </div>
                  </div>
               </motion.div>
             ))
           )}
        </div>

        {/* Custom Order CTA */}
        <div className="mt-32 glass-card p-16 rounded-[48px] border-white/5 text-center relative overflow-hidden group">
           <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
           <Sparkles className="w-16 h-16 text-accent mx-auto mb-8 animate-pulse" />
           <h2 className="text-4xl font-black text-white mb-6 tracking-tight uppercase">Custom Energized Artifacts</h2>
           <p className="text-gray-400 text-lg font-medium max-w-2xl mx-auto mb-10">Looking for something specific? Our masters can curate and energize artifacts tailored to your birth chart and current intentions.</p>
           <button className="text-accent font-black text-xs uppercase tracking-widest flex items-center gap-2 mx-auto group">
              Inquire About Custom Artifacts <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
           </button>
        </div>
      </div>
    </div>
  );
};

export default AstroShop;
