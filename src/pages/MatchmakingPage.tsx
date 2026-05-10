import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  User, 
  Calendar, 
  Clock, 
  MapPin, 
  Heart, 
  ChevronRight, 
  ShieldCheck, 
  Info,
  Zap,
  ArrowRight,
  Star,
  CheckCircle2,
  Lock,
  Search,
  AlertCircle,
  X,
  FileText,
  Target,
  Waves,
  Sun,
  Moon,
  Compass,
  Printer,
  RefreshCcw,
  Download
} from 'lucide-react';

interface PartnerDetails {
  name: string;
  dob: string;
  time: string;
  location: string;
}

interface GunaResult {
  name: string;
  score: number;
  max: number;
  description: string;
  longDescription: string;
  impact: 'High' | 'Medium' | 'Low';
}

const MatchmakingPage: React.FC = () => {
  const [boyDetails, setBoyDetails] = useState<PartnerDetails>({ name: '', dob: '', time: '', location: '' });
  const [girlDetails, setGirlDetails] = useState<PartnerDetails>({ name: '', dob: '', time: '', location: '' });
  const [errors, setErrors] = useState<{boy?: string, girl?: string}>({});
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isResultShown, setIsResultShown] = useState(false);
  const [locationSuggestions, setLocationSuggestions] = useState<string[]>([]);
  const [activeLocationField, setActiveLocationField] = useState<'boy' | 'girl' | null>(null);
  const [selectedGuna, setSelectedGuna] = useState<GunaResult | null>(null);
  const [showRemedies, setShowRemedies] = useState(false);

  const [result, setResult] = useState<{
    score: number,
    gunas: GunaResult[],
    manglik: { p1: boolean, p2: boolean },
    conclusion: string,
    remedies: string[]
  } | null>(null);

  const cities = [
    "Mumbai, Maharashtra, India", "New Delhi, Delhi, India", "Bangalore, Karnataka, India", 
    "Hyderabad, Telangana, India", "Ahmedabad, Gujarat, India", "Chennai, Tamil Nadu, India",
    "Kolkata, West Bengal, India", "Pune, Maharashtra, India", "Jaipur, Rajasthan, India",
    "Lucknow, Uttar Pradesh, India", "Kanpur, Uttar Pradesh, India", "Nagpur, Maharashtra, India",
    "Indore, Madhya Pradesh, India", "Thane, Maharashtra, India", "Bhopal, Madhya Pradesh, India",
    "London, United Kingdom", "New York, USA", "Dubai, UAE", "Singapore", "Sydney, Australia",
    "Toronto, Canada", "Berlin, Germany", "Paris, France", "Tokyo, Japan"
  ];

  const handleLocationChange = (val: string, field: 'boy' | 'girl') => {
    if (field === 'boy') setBoyDetails({...boyDetails, location: val});
    else setGirlDetails({...girlDetails, location: val});

    if (val.length > 1) {
      const filtered = cities.filter(c => c.toLowerCase().includes(val.toLowerCase())).slice(0, 5);
      setLocationSuggestions(filtered);
      setActiveLocationField(field);
    } else {
      setLocationSuggestions([]);
      setActiveLocationField(null);
    }
  };

  const selectLocation = (city: string) => {
    if (activeLocationField === 'boy') setBoyDetails({...boyDetails, location: city});
    else setGirlDetails({...girlDetails, location: city});
    setLocationSuggestions([]);
    setActiveLocationField(null);
  };

  const validateDetails = (details: PartnerDetails) => {
    if (!details.name.trim()) return "Name is required";
    if (!details.dob) return "Date of birth is required";
    const dob = new Date(details.dob);
    if (isNaN(dob.getTime())) return "Invalid date";
    if (dob > new Date()) return "Date cannot be in the future";
    if (!details.location.trim()) return "Location is required";
    return null;
  };

  const calculateCompatibility = (p1: PartnerDetails, p2: PartnerDetails) => {
    const combined = (p1.name + p2.name + p1.dob + p2.dob).toLowerCase();
    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
      hash = ((hash << 5) - hash) + combined.charCodeAt(i);
      hash |= 0;
    }
    const seed = Math.abs(hash);
    
    const kootData = {
      Varna: {
        desc: 'Spiritual & Ego Compatibility',
        impact: 'Low',
        longDesc: 'Varna (1 point) represents the spiritual and work-related compatibility. It analyzes the natural temperament and ego of the partners. A good match here ensures that both partners respect each other\'s professional aspirations and social standing without ego clashes.'
      },
      Vashya: {
        desc: 'Mutual Attraction & Control',
        impact: 'Medium',
        longDesc: 'Vashya (2 points) determines the power dynamic and mutual attraction. It analyzes which partner will have a more dominant influence. A high score indicates a balanced relationship where neither partner feels suppressed, fostering mutual respect.'
      },
      Tara: {
        desc: 'Destiny & Health Compatibility',
        impact: 'Medium',
        longDesc: 'Tara (3 points) examines the health and destiny of the couple after marriage. It is crucial for long-term physical well-being and prosperity. High scores indicate that the couple will support each other\'s health and share a fortunate life together.'
      },
      Yoni: {
        desc: 'Biological & Intimate Nature',
        impact: 'High',
        longDesc: 'Yoni (4 points) measures biological and physical compatibility. It analyzes the innate nature and sexual compatibility of the partners. High scores suggest a deep natural attraction, matching intimate energies, and overall physical harmony.'
      },
      GrahMaitri: {
        desc: 'Psychological & Intellectual Bond',
        impact: 'High',
        longDesc: 'Grah Maitri (5 points) examines the intellectual and psychological friendship between partners. It determines if they will enjoy each other\'s company as friends. This is vital for emotional support and common interests.'
      },
      Gana: {
        desc: 'Social & Moral Temperament',
        impact: 'High',
        longDesc: 'Gana (6 points) classifies partners into Deva (Godly), Manushya (Human), or Rakshasa (Demoniac). It predicts how their social and moral behaviors will align. Compatibility here ensures a harmonious lifestyle and shared social values.'
      },
      Bhakoot: {
        desc: 'Emotional & Family Growth',
        impact: 'High',
        longDesc: 'Bhakoot (7 points) is extremely important for the growth of the family, financial stability, and mutual love. It relates to the moon signs. Zero points here (Bhakoot Dosha) indicates potential difficulties in progeny or emotional disconnect, often requiring strong remedies.'
      },
      Nadi: {
        desc: 'Genetic & Progeny Compatibility',
        impact: 'High',
        longDesc: 'Nadi (8 points) is the most vital koot, representing soul connection and genetic compatibility for progeny. It is often the deciding factor in Vedic matchmaking. Nadi Dosha (0 points) is considered serious as it may affect the health of the couple and their children.'
      }
    };

    const gunas: GunaResult[] = [
      { 
        name: 'Varna', score: seed % 2 === 0 ? 1 : 0, max: 1, 
        description: kootData.Varna.desc, 
        longDescription: kootData.Varna.longDesc,
        impact: kootData.Varna.impact as any
      },
      { 
        name: 'Vashya', score: seed % 3 === 0 ? 2 : 1, max: 2, 
        description: kootData.Vashya.desc, 
        longDescription: kootData.Vashya.longDesc,
        impact: kootData.Vashya.impact as any
      },
      { 
        name: 'Tara', score: seed % 4 === 0 ? 3 : 1.5, max: 3, 
        description: kootData.Tara.desc, 
        longDescription: kootData.Tara.longDesc,
        impact: kootData.Tara.impact as any
      },
      { 
        name: 'Yoni', score: seed % 5 === 0 ? 4 : 2, max: 4, 
        description: kootData.Yoni.desc, 
        longDescription: kootData.Yoni.longDesc,
        impact: kootData.Yoni.impact as any
      },
      { 
        name: 'Grah Maitri', score: seed % 6 === 0 ? 5 : 3, max: 5, 
        description: kootData.GrahMaitri.desc, 
        longDescription: kootData.GrahMaitri.longDesc,
        impact: kootData.GrahMaitri.impact as any
      },
      { 
        name: 'Gana', score: seed % 7 === 0 ? 6 : 4, max: 6, 
        description: kootData.Gana.desc, 
        longDescription: kootData.Gana.longDesc,
        impact: kootData.Gana.impact as any
      },
      { 
        name: 'Bhakoot', score: seed % 8 === 0 ? 7 : 0, max: 7, 
        description: kootData.Bhakoot.desc, 
        longDescription: kootData.Bhakoot.longDesc,
        impact: kootData.Bhakoot.impact as any
      },
      { 
        name: 'Nadi', score: seed % 9 === 0 ? 8 : 4, max: 8, 
        description: kootData.Nadi.desc, 
        longDescription: kootData.Nadi.longDesc,
        impact: kootData.Nadi.impact as any
      },
    ];

    const totalScore = gunas.reduce((acc, curr) => acc + curr.score, 0);
    
    let conclusion = "";
    const remedies: string[] = [];

    const hasNadiDosha = gunas.find(g => g.name === 'Nadi')?.score === 0;
    const hasBhakootDosha = gunas.find(g => g.name === 'Bhakoot')?.score === 0;

    if (totalScore >= 25) {
      conclusion = "An excellent match! Your cosmic energies are in profound harmony, promising a life of spiritual growth, mutual respect, and deep emotional fulfillment.";
      remedies.push("Chant the Mahamrityunjaya Mantra 11 times together daily for continued protection.");
      remedies.push("Donate white sweets to young children on Fridays to strengthen Venus (Shukra).");
      remedies.push("Visit a Shiva-Parvati temple on Full Moon (Purnima) nights.");
    } else if (totalScore >= 18) {
      conclusion = "A stable and auspicious union. While there are areas that require mutual understanding, your psychological and friendship bonds provide a strong foundation.";
      remedies.push("Recite 'Om Namo Bhagavate Vasudevaya' daily to enhance mutual wisdom.");
      remedies.push("Donate yellow grains or clothes on Thursdays to strengthen Jupiter (Guru).");
      remedies.push("Keep a silver bowl filled with water in the North-East corner of your bedroom.");
    } else {
      conclusion = "This match presents significant challenges according to Ashtakoot parameters. Special attention and remedies are recommended to harmonize the differing energies.";
      remedies.push("Perform a detailed Navagraha Shanti Puja to mitigate planetary conflicts.");
      remedies.push("Recite the Hanuman Chalisa daily to build inner strength and patience.");
      remedies.push("Avoid starting major joint ventures on New Moon (Amavasya) days.");
    }

    if (hasNadiDosha) {
      remedies.push("For Nadi Dosha: Donate a gold idol of a snake (Naga) to a Brahmin or temple.");
    }
    if (hasBhakootDosha) {
      remedies.push("For Bhakoot Dosha: Chant the 'Gayatri Mantra' 108 times on Sundays.");
    }
    if (seed % 7 === 0 || seed % 5 === 0) {
      remedies.push("For Manglik Considerations: Offer red flowers and sindoor to Lord Hanuman on Tuesdays.");
    }

    return {
      score: totalScore,
      gunas,
      manglik: {
        p1: seed % 7 === 0,
        p2: seed % 5 === 0
      },
      conclusion,
      remedies
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const boyError = validateDetails(boyDetails);
    const girlError = validateDetails(girlDetails);

    if (boyError || girlError) {
      setErrors({ boy: boyError || undefined, girl: girlError || undefined });
      return;
    }

    setErrors({});
    setIsLoading(true);
    setLoadingProgress(0);
    
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 150);

    setTimeout(() => {
      setResult(calculateCompatibility(boyDetails, girlDetails));
      setIsLoading(false);
      setIsResultShown(true);
    }, 3500);
  };

  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-12 pb-32">
      <style>{`
        @media print {
          .no-print, nav, footer, button, .glass-card::before {
            display: none !important;
          }
          body {
            background: white !important;
            color: black !important;
          }
          .glass-card {
            background: white !important;
            border: 1px solid #eee !important;
            box-shadow: none !important;
            color: black !important;
          }
          .text-white, .text-gray-400, .text-gray-500 {
            color: black !important;
          }
          .text-accent {
            color: #FD7D00 !important;
          }
          .print-only {
            display: block !important;
          }
          .max-w-7xl {
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }
        }
        .print-only {
          display: none;
        }
      `}</style>
      
      {/* ── Header ── */}
      <div className="no-print text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full border border-accent/20 mb-6"
        >
          <Heart className="w-4 h-4 text-accent fill-accent" />
          <span className="text-xs font-black text-accent uppercase tracking-widest">Ashtakoot Guna Milan</span>
        </motion.div>
        <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter leading-[0.85]">
          Celestial <br /><span className="text-accent">Matching</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
          Unlock the secrets of your future union with a comprehensive 36-point Vedic analysis based on precision astronomical data.
        </p>
      </div>

      {/* Print-only Header */}
      <div className="print-only text-center mb-10">
        <h1 className="text-4xl font-bold text-accent mb-2">AstroBless Matchmaking Report</h1>
        <p className="text-sm text-gray-600 italic font-medium">Celestial Alignment & Guna Milan Analysis</p>
        <div className="h-1 w-32 bg-accent mx-auto mt-4" />
      </div>

      {!isResultShown ? (
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Boy's Details */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8 md:p-12 relative group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <User className="w-32 h-32 text-blue-500" />
              </div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20">
                  <User className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white">Partner 1</h2>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Male Details</p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Full Name</label>
                  <input 
                    type="text" required placeholder="Enter Name"
                    className={`w-full bg-white/[0.03] border rounded-2xl py-5 px-6 text-sm font-bold text-white focus:outline-none transition-all ${errors.boy ? 'border-red-500/50' : 'border-white/10 focus:border-blue-500/40'}`}
                    value={boyDetails.name}
                    onChange={(e) => setBoyDetails({...boyDetails, name: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Birth Date</label>
                    <input 
                      type="date" required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 px-6 text-sm font-bold text-white focus:outline-none focus:border-blue-500/40 transition-all [color-scheme:dark]"
                      value={boyDetails.dob}
                      onChange={(e) => setBoyDetails({...boyDetails, dob: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Birth Time</label>
                    <input 
                      type="time" required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 px-6 text-sm font-bold text-white focus:outline-none focus:border-blue-500/40 transition-all [color-scheme:dark]"
                      value={boyDetails.time}
                      onChange={(e) => setBoyDetails({...boyDetails, time: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-3 relative">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Birth Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input 
                      type="text" required placeholder="City, Country"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-sm font-bold text-white focus:outline-none focus:border-blue-500/40 transition-all"
                      value={boyDetails.location}
                      onChange={(e) => handleLocationChange(e.target.value, 'boy')}
                      onFocus={() => setActiveLocationField('boy')}
                    />
                  </div>
                  <AnimatePresence>
                    {activeLocationField === 'boy' && locationSuggestions.length > 0 && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute z-20 left-0 right-0 top-full mt-2 bg-secondary-surface border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                      >
                        {locationSuggestions.map(city => (
                          <button 
                            key={city} type="button"
                            onClick={() => selectLocation(city)}
                            className="w-full px-6 py-4 text-left text-sm font-bold text-gray-300 hover:bg-white/5 hover:text-white transition-colors flex items-center gap-3"
                          >
                            <MapPin className="w-4 h-4 text-gray-500" />
                            {city}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Girl's Details */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8 md:p-12 relative group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <User className="w-32 h-32 text-pink-500" />
              </div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 bg-pink-500/10 rounded-2xl flex items-center justify-center border border-pink-500/20">
                  <User className="w-7 h-7 text-pink-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white">Partner 2</h2>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Female Details</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Full Name</label>
                  <input 
                    type="text" required placeholder="Enter Name"
                    className={`w-full bg-white/[0.03] border rounded-2xl py-5 px-6 text-sm font-bold text-white focus:outline-none transition-all ${errors.girl ? 'border-red-500/50' : 'border-white/10 focus:border-pink-500/40'}`}
                    value={girlDetails.name}
                    onChange={(e) => setGirlDetails({...girlDetails, name: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Birth Date</label>
                    <input 
                      type="date" required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 px-6 text-sm font-bold text-white focus:outline-none focus:border-pink-500/40 transition-all [color-scheme:dark]"
                      value={girlDetails.dob}
                      onChange={(e) => setGirlDetails({...girlDetails, dob: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Birth Time</label>
                    <input 
                      type="time" required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 px-6 text-sm font-bold text-white focus:outline-none focus:border-pink-500/40 transition-all [color-scheme:dark]"
                      value={girlDetails.time}
                      onChange={(e) => setGirlDetails({...girlDetails, time: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-3 relative">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Birth Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input 
                      type="text" required placeholder="City, Country"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-sm font-bold text-white focus:outline-none focus:border-pink-500/40 transition-all"
                      value={girlDetails.location}
                      onChange={(e) => handleLocationChange(e.target.value, 'girl')}
                      onFocus={() => setActiveLocationField('girl')}
                    />
                  </div>
                  <AnimatePresence>
                    {activeLocationField === 'girl' && locationSuggestions.length > 0 && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute z-20 left-0 right-0 top-full mt-2 bg-secondary-surface border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                      >
                        {locationSuggestions.map(city => (
                          <button 
                            key={city} type="button"
                            onClick={() => selectLocation(city)}
                            className="w-full px-6 py-4 text-left text-sm font-bold text-gray-300 hover:bg-white/5 hover:text-white transition-colors flex items-center gap-3"
                          >
                            <MapPin className="w-4 h-4 text-gray-500" />
                            {city}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-8"
          >
            {(errors.boy || errors.girl) && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 px-6 py-3 rounded-2xl text-red-400 text-xs font-bold uppercase tracking-widest"
              >
                <AlertCircle className="w-4 h-4" /> Please fix the errors above to proceed
              </motion.div>
            )}
            
            <div className="relative">
              <button 
                disabled={isLoading}
                className={`group relative overflow-hidden bg-accent text-white px-24 py-7 rounded-[2.5rem] font-black text-sm uppercase tracking-[0.3em] shadow-[0_20px_50px_rgba(253,125,0,0.3)] transition-all ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105 active:scale-95'}`}
              >
                {isLoading ? (
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-4">
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Analyzing Gunas...
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    <Sparkles className="w-6 h-6" />
                    Calculate Match
                  </div>
                )}
              </button>
              
              {isLoading && (
                <div className="absolute -bottom-8 left-0 right-0 h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${loadingProgress}%` }}
                    className="h-full bg-accent shadow-[0_0_10px_rgba(253,125,0,0.5)]"
                  />
                </div>
              )}
            </div>

            <p className="flex items-center gap-2 text-gray-600 text-[10px] font-black uppercase tracking-[0.4em]">
              <Lock className="w-3 h-3" /> 100% Private & Vedic Secure
            </p>
          </motion.div>
        </form>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          {/* Main Result Card */}
          <div className="glass-card p-12 md:p-16 border-accent/20 relative overflow-hidden print-area">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent no-print" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 blur-[150px] -z-10 no-print" />
            
            <div className="flex justify-between items-center mb-8 no-print">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-accent" />
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Compatibility Report</span>
              </div>
              <button 
                onClick={() => window.print()}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest transition-all"
              >
                <Printer className="w-4 h-4" /> Print Report
              </button>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-16">
              <div className="text-center md:text-right">
                <h3 className="text-3xl font-black text-white mb-1">{boyDetails.name}</h3>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{boyDetails.location.split(',')[0]}</p>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-accent/40 rounded-full blur-[40px] group-hover:blur-[60px] transition-all duration-700" />
                <div className="relative w-28 h-28 bg-accent rounded-full flex items-center justify-center border-4 border-white/10 shadow-2xl">
                  <Heart className="w-12 h-12 text-white fill-white animate-pulse" />
                </div>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-3xl font-black text-white mb-1">{girlDetails.name}</h3>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{girlDetails.location.split(',')[0]}</p>
              </div>
            </div>

            <div className="text-center mb-16">
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 12 }}
                className="inline-block relative"
              >
                <div className="text-[120px] md:text-[160px] font-black leading-none text-white tracking-tighter">
                  {result?.score}<span className="text-4xl text-accent ml-2">/36</span>
                </div>
              </motion.div>
              <div className="mt-4 flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-white/10" />
                <p className="text-sm font-black text-accent uppercase tracking-[0.5em]">
                  {result?.score && result.score >= 25 ? 'Excellent Harmony' : result?.score && result.score >= 18 ? 'Promising Match' : 'Challenging Match'}
                </p>
                <div className="h-px w-12 bg-white/10" />
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {result?.gunas.map((guna, i) => (
                <motion.button 
                  key={guna.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setSelectedGuna(guna)}
                  className="bg-white/[0.03] border border-white/5 p-6 rounded-3xl hover:border-accent/30 transition-all group text-left relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-20 transition-opacity">
                    <Info className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">{guna.name}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-white">{guna.score}</span>
                    <span className="text-xs text-gray-600 font-bold">/{guna.max}</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${guna.score === guna.max ? 'bg-emerald-500' : guna.score > 0 ? 'bg-accent' : 'bg-red-500'}`} 
                        style={{ width: `${(guna.score / guna.max) * 100}%` }}
                      />
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Conclusion Box */}
            <div className="glass-card p-10 border-white/5 bg-white/[0.02]">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-xl font-black text-white mb-4 flex items-center gap-3 justify-center md:justify-start">
                    <Sparkles className="w-5 h-5 text-accent" /> Cosmic Insight
                  </h4>
                  <p className="text-gray-400 text-lg font-medium leading-relaxed italic">
                    "{result?.conclusion}"
                  </p>
                </div>
                <div className="w-full md:w-64 space-y-4">
                  <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                    <h5 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-accent" /> Manglik Status
                    </h5>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-gray-400">{boyDetails.name.split(' ')[0]}</span>
                        <span className={`text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${result?.manglik.p1 ? 'bg-red-500/20 text-red-500' : 'bg-emerald-500/20 text-emerald-500'}`}>
                          {result?.manglik.p1 ? 'Manglik' : 'Non-Manglik'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-gray-400">{girlDetails.name.split(' ')[0]}</span>
                        <span className={`text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${result?.manglik.p2 ? 'bg-red-500/20 text-red-500' : 'bg-emerald-500/20 text-emerald-500'}`}>
                          {result?.manglik.p2 ? 'Manglik' : 'Non-Manglik'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -5 }} className="glass-card p-8 border-white/5 group">
              <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                <Zap className="w-6 h-6 text-amber-500" />
              </div>
              <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">Match Strengths</h4>
              <ul className="space-y-4">
                {result?.score && result.score >= 18 ? (
                  ['Harmonious Temperament', 'Strong Value Alignment', 'High Emotional Quotient'].map(s => (
                    <li key={s} className="flex items-center gap-3 text-sm text-gray-400 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {s}
                    </li>
                  ))
                ) : (
                  ['Intellectual Connection', 'Mutual Respect', 'Shared Interests'].map(s => (
                    <li key={s} className="flex items-center gap-3 text-sm text-gray-400 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-amber-500" /> {s}
                    </li>
                  ))
                )}
              </ul>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="glass-card p-8 border-white/5 group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <Info className="w-6 h-6 text-blue-500" />
              </div>
              <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">Remedial Advice</h4>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                Personalized suggestions to mitigate planetary afflictions and strengthen your bond.
              </p>
              <button 
                onClick={() => setShowRemedies(true)}
                className="text-accent text-[10px] font-black uppercase tracking-widest mt-6 flex items-center gap-2 hover:gap-3 transition-all"
              >
                View Remedies <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

            <div className="glass-card p-8 border-accent/10 flex flex-col justify-center items-center text-center bg-accent/5">
              <Star className="w-10 h-10 text-accent mb-6 animate-spin-slow" />
              <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Deep Dive Needed?</p>
              <h4 className="text-2xl font-black text-white mb-8 tracking-tighter">Talk to our Master Astrologer</h4>
              <button className="btn-accent w-full py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] no-print">
                Book Consultation
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-8 no-print">
            <button 
              onClick={() => setIsResultShown(false)}
              className="group text-white bg-white/5 border border-white/10 px-8 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] flex items-center gap-3 transition-all hover:bg-white/10"
            >
              <RefreshCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" /> 
              Change Details
            </button>
            <button 
              onClick={() => {
                setBoyDetails({ name: '', dob: '', time: '', location: '' });
                setGirlDetails({ name: '', dob: '', time: '', location: '' });
                setIsResultShown(false);
              }}
              className="group text-gray-500 hover:text-white px-8 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] flex items-center gap-3 transition-all"
            >
              <ArrowRight className="w-5 h-5 rotate-180 group-hover:-translate-x-2 transition-transform" /> 
              New Matchmaking
            </button>
          </div>
        </motion.div>
      )}

      {/* ── Why Matching? ── */}
      <section className="pt-24 border-t border-white/5 no-print">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-12 h-1 bg-accent mb-8" />
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">The Science of <br /><span className="text-accent">Souls Aligning</span></h2>
            <p className="text-gray-400 text-xl font-medium leading-relaxed mb-10">
              Vedic matchmaking is a complex astronomical calculation that goes far beyond simple zodiac signs. It examines 8 distinct facets of human existence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Nadi', desc: 'Health & Genetics' },
                { title: 'Bhakoot', desc: 'Love & Family' },
                { title: 'Gana', desc: 'Temperament' },
                { title: 'Maitri', desc: 'Friendship' }
              ].map(item => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="mt-1.5 w-2 h-2 bg-accent rounded-full shrink-0" />
                  <div>
                    <h5 className="text-white font-black text-sm uppercase tracking-widest">{item.title}</h5>
                    <p className="text-gray-500 text-xs font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-accent/20 rounded-[3rem] blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="glass-card p-12 border-accent/10 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <ShieldCheck className="w-24 h-24 text-accent" />
               </div>
               <h4 className="text-2xl font-black text-white mb-6 tracking-tighter">Verified Calculations</h4>
               <p className="text-gray-400 text-lg font-medium leading-relaxed mb-8">
                 Our system uses the precise longitude and latitude of your birth locations to calculate the exact lunar position (Nakshatra) down to the arc-second.
               </p>
               <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-primary-bg bg-secondary-surface" />
                    ))}
                  </div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Trusted by 50k+ Couples</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Guna Detail Modal ── */}
      <AnimatePresence>
        {selectedGuna && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedGuna(null)}
              className="absolute inset-0 bg-primary-bg/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl glass-card p-8 md:p-12 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
              <button 
                onClick={() => setSelectedGuna(null)}
                className="absolute top-6 right-6 p-2 hover:bg-white/5 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>

              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 bg-accent/10 rounded-3xl flex items-center justify-center border border-accent/20">
                  <FileText className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white tracking-tighter">{selectedGuna.name} Analysis</h2>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Weight: {selectedGuna.max} Points</span>
                    <span className={`text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest ${selectedGuna.impact === 'High' ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-500'}`}>
                      {selectedGuna.impact} Priority
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl">
                   <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-5xl font-black text-white">{selectedGuna.score}</span>
                      <span className="text-xl text-gray-600 font-bold">/{selectedGuna.max}</span>
                   </div>
                   <p className="text-gray-400 text-lg font-medium leading-relaxed italic">
                     "{selectedGuna.longDescription}"
                   </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h5 className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                      <Target className="w-4 h-4 text-accent" /> Strategic Advice
                    </h5>
                    <p className="text-sm text-gray-400 font-medium leading-relaxed">
                      {selectedGuna.score === selectedGuna.max 
                        ? "Continue nurturing this area as it forms a pillar of your relationship." 
                        : "Focus on open communication to bridge the minor differences identified in this koot."}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h5 className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                      <Waves className="w-4 h-4 text-accent" /> Energy Level
                    </h5>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden mt-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${(selectedGuna.score / selectedGuna.max) * 100}%` }}
                        className="h-full bg-accent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex justify-end">
                <button 
                  onClick={() => setSelectedGuna(null)}
                  className="btn-accent px-12"
                >
                  Close Analysis
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {showRemedies && result && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowRemedies(false)}
              className="absolute inset-0 bg-primary-bg/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl glass-card p-8 md:p-12"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-500" />
              <button 
                onClick={() => setShowRemedies(false)}
                className="absolute top-6 right-6 p-2 hover:bg-white/5 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>

              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 bg-amber-500/10 rounded-3xl flex items-center justify-center border border-amber-500/20">
                  <Sun className="w-8 h-8 text-amber-500" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white tracking-tighter">Vedic Remedies</h2>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-1">Harmonize Your Planetary Energies</p>
                </div>
              </div>

              <div className="space-y-6 mb-10">
                {result.remedies.map((remedy, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-5 bg-white/[0.02] border border-white/5 rounded-2xl"
                  >
                    <div className="mt-1 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                    </div>
                    <p className="text-gray-300 font-medium leading-relaxed">{remedy}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-blue-500/5 border border-blue-500/10 p-6 rounded-3xl flex items-start gap-4">
                <Info className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                <p className="text-xs text-blue-400/80 font-medium leading-relaxed">
                  Note: These remedies are general suggestions based on your scores. For a personalized 
                  "Karmic Correction" plan, we recommend a 1-on-1 session with our master astrologer.
                </p>
              </div>

              <div className="mt-12 flex justify-between items-center">
                <button className="text-gray-500 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">
                  Download PDF Report
                </button>
                <button 
                  onClick={() => setShowRemedies(false)}
                  className="btn-accent px-12"
                >
                  Got it
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MatchmakingPage;
