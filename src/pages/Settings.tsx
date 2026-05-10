import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Bell, 
  Shield, 
  Smartphone, 
  Globe, 
  CreditCard,
  ChevronRight,
  LogOut,
  Moon,
  Volume2,
  Lock,
  EyeOff,
  HelpCircle,
  MessageSquare,
  Star,
  Info,
  SmartphoneNfc,
  Languages,
  Database
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SettingsPage: React.FC = () => {
  const sections = [
    {
      title: 'Account Settings',
      items: [
        { icon: User, label: 'Profile Information', desc: 'Update your name, bio and profile picture', path: '/edit-profile' },
        { icon: CreditCard, label: 'Payment Methods', desc: 'Manage your saved cards and wallet settings', path: '/wallet' },
        { icon: Lock, label: 'Security & Password', desc: 'Two-factor authentication and login keys', path: '/security' },
        { icon: Database, label: 'Data Usage', desc: 'Manage your history and downloaded charts' },
      ]
    },
    {
      title: 'Preferences',
      items: [
        { icon: Bell, label: 'Notifications', desc: 'Configure alerts for horoscopes and chats', toggle: true, active: true },
        { icon: Moon, label: 'Dark Mode', desc: 'Customize your visual experience', toggle: true, active: true },
        { icon: Volume2, label: 'Sound Effects', desc: 'Enable sounds for messages and events', toggle: true, active: false },
        { icon: Languages, label: 'Language', desc: 'English (United States)', path: '/language' },
      ]
    },
    {
      title: 'Privacy',
      items: [
        { icon: EyeOff, label: 'Incognito Consultation', desc: 'Hide your profile during live sessions', toggle: true, active: false },
        { icon: Shield, label: 'Privacy Policy', desc: 'Read our data protection policies', path: '/privacy' },
        { icon: SmartphoneNfc, label: 'Connected Apps', desc: 'Manage third-party integrations' },
      ]
    },
    {
      title: 'Support & About',
      items: [
        { icon: HelpCircle, label: 'Help Center', desc: 'FAQs and troubleshooting guides', path: '/support' },
        { icon: MessageSquare, label: 'Contact Us', desc: 'Get direct help from our team', path: '/support' },
        { icon: Star, label: 'Rate AstroBless', desc: 'Share your feedback on the app store' },
        { icon: Info, label: 'About AstroBless', desc: 'Version 2.4.0 (Build 5012)', path: '/about' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-[radial-gradient(circle_at_50%_0%,rgba(253,125,0,0.05)_0%,transparent_50%)]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center lg:text-left">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter"
          >
            System <span className="text-accent">Settings</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 font-medium text-lg max-w-xl mx-auto lg:mx-0"
          >
            Fine-tune your spiritual dashboard and manage your celestial identity.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mb-6 px-6">
                {section.title}
              </h2>
              
              <div className="glass-card rounded-[40px] border-white/5 overflow-hidden shadow-2xl">
                {section.items.map((item, itemIdx) => (
                  <Link 
                    key={itemIdx}
                    to={item.path || '#'}
                    className="block"
                  >
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
                      className={`flex items-center justify-between p-7 cursor-pointer transition-colors ${
                        itemIdx !== section.items.length - 1 ? 'border-b border-white/5' : ''
                      }`}
                    >
                      <div className="flex items-center gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent shadow-inner">
                          <item.icon className="w-7 h-7" />
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-lg leading-tight">{item.label}</h3>
                          {item.desc && <p className="text-gray-500 text-xs mt-1.5 font-medium">{item.desc}</p>}
                        </div>
                      </div>

                      {item.toggle ? (
                        <div className={`w-14 h-7 rounded-full relative transition-all duration-500 ${item.active ? 'bg-accent shadow-[0_0_20px_rgba(253,125,0,0.3)]' : 'bg-white/10'}`}>
                          <div className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-xl transition-all duration-500 ${item.active ? 'left-8' : 'left-1'}`} />
                        </div>
                      ) : (
                        <ChevronRight className="w-6 h-6 text-gray-700" />
                      )}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Danger Zone */}
          <motion.div variants={itemVariants} className="pt-12">
             <button className="w-full glass-card p-8 rounded-[40px] border-red-500/10 hover:bg-red-500/5 transition-all flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                   <LogOut className="w-7 h-7 text-red-500" />
                </div>
                <div className="text-center">
                   <span className="text-red-500 font-black uppercase tracking-[0.2em] text-xs block mb-1">Session Management</span>
                   <span className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">Signed in as user@example.com</span>
                </div>
                <span className="mt-4 px-10 py-3 rounded-full border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all">Sign Out Everywhere</span>
             </button>
          </motion.div>

          <div className="text-center pt-8">
             <p className="text-[10px] font-black text-gray-700 uppercase tracking-[0.5em]">AstroBless v2.4.0 • Crafted with ❤️ in Bengaluru</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SettingsPage;
