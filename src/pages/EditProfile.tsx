import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  Save, 
  ArrowLeft, 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  MapPin, 
  Shield, 
  Info,
  Clock,
  Lock,
  Smartphone,
  Eye,
  EyeOff
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EditProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'personal' | 'birth' | 'security'>('personal');
  const [showPassword, setShowPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    name: 'Arjun Sharma',
    email: 'user@example.com',
    phone: '+91 98765 43210',
    dob: '1995-05-15',
    tob: '10:30',
    pob: 'Mumbai, India',
    gender: 'Male',
    bio: 'Finding peace through stars and destiny.',
    language: 'English',
    maritalStatus: 'Single'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'birth', label: 'Birth Details', icon: Calendar },
    { id: 'security', label: 'Security', icon: Shield },
  ];

  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-8 pb-32">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <Link to="/profile" className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group">
            <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </Link>
          <div>
            <h1 className="text-4xl font-black text-white tracking-tight">Edit <span className="text-accent">Profile</span></h1>
            <p className="text-gray-500 text-sm font-medium mt-1">Manage your identity and astrology preferences.</p>
          </div>
        </div>
        
        <div className="flex gap-3">
           <button className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest border border-white/10 transition-all">
              Discard
           </button>
           <button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-accent/20 transition-all flex items-center gap-2">
              <Save className="w-4 h-4" /> Save Changes
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Sidebar: Navigation */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-4 w-full p-4 rounded-2xl transition-all ${
                  activeTab === tab.id 
                  ? 'bg-accent text-white shadow-lg' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="text-sm font-black uppercase tracking-wider">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="glass-card p-6 text-center">
             <div className="relative inline-block mb-4 group cursor-pointer">
                <div className="w-24 h-24 rounded-[32px] bg-accent/10 border-4 border-white/5 overflow-hidden relative shadow-2xl">
                   <img src="https://i.pravatar.cc/100?u=Arjun" alt="Arjun" className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Camera className="w-6 h-6 text-white" />
                   </div>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-accent p-2 rounded-xl text-white border-2 border-primary-bg shadow-lg">
                   <Camera className="w-3 h-3" />
                </div>
             </div>
             <h3 className="text-lg font-black text-white">{formData.name}</h3>
             <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-6">User ID: AB-8829</p>

             {/* Profile Strength */}
             <div className="space-y-2 text-left">
                <div className="flex justify-between items-end mb-1">
                   <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Profile Strength</span>
                   <span className="text-[10px] font-black text-accent">85%</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                   <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-accent/50 to-accent" 
                   />
                </div>
                <p className="text-[8px] text-gray-600 font-medium">Complete birth details for 100% accuracy.</p>
             </div>
          </div>
        </div>

        {/* Right Content: Form Sections */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            {activeTab === 'personal' && (
              <motion.div
                key="personal"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="glass-card p-8 md:p-10 space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-accent transition-colors" />
                      <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-sm font-bold text-white focus:outline-none focus:border-accent transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Email</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-accent transition-colors" />
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-sm font-bold text-white focus:outline-none focus:border-accent transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Phone Number</label>
                    <div className="relative group">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-accent transition-colors" />
                      <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-sm font-bold text-white focus:outline-none focus:border-accent transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Gender</label>
                    <select name="gender" value={formData.gender} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 text-sm font-bold text-white focus:outline-none focus:border-accent transition-all appearance-none cursor-pointer">
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Short Bio</label>
                  <textarea name="bio" value={formData.bio} onChange={handleChange} rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm font-bold text-white focus:outline-none focus:border-accent transition-all resize-none" />
                </div>
              </motion.div>
            )}

            {activeTab === 'birth' && (
              <motion.div
                key="birth"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="glass-card p-8 md:p-10 space-y-8"
              >
                <div className="bg-accent/5 border border-accent/10 p-5 rounded-2xl flex gap-4">
                  <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-400 leading-relaxed font-medium">
                    Accurate birth details are essential for generating your Kundli and personalized predictions.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Date of Birth</label>
                    <div className="relative group">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-accent transition-colors" />
                      <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-sm font-bold text-white focus:outline-none focus:border-accent transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Time of Birth</label>
                    <div className="relative group">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-accent transition-colors" />
                      <input type="time" name="tob" value={formData.tob} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-sm font-bold text-white focus:outline-none focus:border-accent transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Place of Birth</label>
                    <div className="relative group">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-accent transition-colors" />
                      <input type="text" name="pob" placeholder="Search city..." value={formData.pob} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-sm font-bold text-white focus:outline-none focus:border-accent transition-all" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'security' && (
              <motion.div
                key="security"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="glass-card p-8 md:p-10 space-y-8"
              >
                <div className="space-y-6">
                   <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center">
                            <Smartphone className="w-5 h-5" />
                         </div>
                         <div>
                            <p className="text-sm font-black text-white">Two-Factor Authentication</p>
                            <p className="text-[10px] text-gray-500 font-medium">Add an extra layer of security</p>
                         </div>
                      </div>
                      <button className="text-[10px] font-black text-accent uppercase tracking-widest px-4 py-2 bg-accent/10 rounded-lg hover:bg-accent/20 transition-all">Enable</button>
                   </div>

                   <div className="space-y-4">
                      <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Update Password</h4>
                      <div className="space-y-4">
                        <div className="relative group">
                           <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-accent transition-colors" />
                           <input type={showPassword ? 'text' : 'password'} placeholder="New Password" className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-12 text-sm font-bold text-white focus:outline-none focus:border-accent transition-all" />
                           <button onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
                              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                           </button>
                        </div>
                        <div className="relative group">
                           <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-accent transition-colors" />
                           <input type={showPassword ? 'text' : 'password'} placeholder="Confirm New Password" className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-12 text-sm font-bold text-white focus:outline-none focus:border-accent transition-all" />
                        </div>
                      </div>
                   </div>

                   <div className="pt-6 border-t border-white/5">
                      <button className="w-full py-4 text-rose-500 text-xs font-black uppercase tracking-widest bg-rose-500/5 hover:bg-rose-500/10 rounded-2xl border border-rose-500/10 transition-all">
                         Delete Account Permanently
                      </button>
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

