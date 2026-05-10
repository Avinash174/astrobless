import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Moon, 
  Sun, 
  Globe, 
  Bell, 
  Shield, 
  RotateCcw, 
  ChevronRight,
  Monitor,
  Zap,
  Eye,
  Settings as SettingsIcon,
  HardDrive,
  Network,
  Cpu
} from 'lucide-react';
import Skeleton from '../components/Skeleton';

interface SettingItem {
  icon: any;
  label: string;
  desc: string;
  custom?: React.ReactNode;
  toggle?: boolean;
  active?: boolean;
  path?: string;
  action?: string;
}

interface SettingSection {
  title: string;
  items: SettingItem[];
}

const AppSettings: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeTheme, setActiveTheme] = useState('system');

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const sections: SettingSection[] = [
    {
      title: 'Appearance',
      items: [
        { 
          icon: Monitor, 
          label: 'Display Mode', 
          desc: 'Choose your visual preference',
          custom: (
            <div className="flex bg-white/5 p-1 rounded-xl">
              {[
                { id: 'light', icon: Sun },
                { id: 'dark', icon: Moon },
                { id: 'system', icon: Monitor }
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTheme(t.id)}
                  className={`p-2 rounded-lg transition-all ${activeTheme === t.id ? 'bg-accent text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
                >
                  <t.icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          )
        },
        { icon: Eye, label: 'High Contrast', desc: 'Improve text readability', toggle: true, active: false },
        { icon: Zap, label: 'Reduced Motion', desc: 'Disable non-essential animations', toggle: true, active: false },
      ]
    },
    {
      title: 'System & Storage',
      items: [
        { icon: Globe, label: 'Region & Locale', desc: 'English (India)', path: '/language' },
        { icon: HardDrive, label: 'Cache Management', desc: 'Used: 124 MB', action: 'Clear Cache' },
        { icon: Network, label: 'Data Saver', desc: 'Low quality images on cellular', toggle: true, active: true },
        { icon: Cpu, label: 'Diagnostic Data', desc: 'Help us improve AstroBless', toggle: true, active: true },
      ]
    },
    {
      title: 'Notifications',
      items: [
        { icon: Bell, label: 'Transit Alerts', desc: 'Push notifications for major transits', toggle: true, active: true },
        { icon: Shield, label: 'Security Alerts', desc: 'Login notifications from new devices', toggle: true, active: true },
      ]
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <Skeleton width={300} height={60} className="mb-12" />
          <Skeleton height={300} className="rounded-[40px]" />
          <Skeleton height={200} className="rounded-[40px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-[radial-gradient(circle_at_50%_0%,rgba(253,125,0,0.05)_0%,transparent_50%)]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex items-center justify-between">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter"
            >
              App <span className="text-accent">Settings</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 font-medium text-lg"
            >
              Configure your local experience and system preferences.
            </motion.p>
          </div>
          <motion.div
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            className="w-16 h-16 rounded-[24px] bg-accent/10 border border-accent/20 flex items-center justify-center text-accent hidden md:flex"
          >
            <SettingsIcon className="w-8 h-8" />
          </motion.div>
        </div>

        <div className="space-y-12">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <h2 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mb-6 px-6">
                {section.title}
              </h2>
              
              <div className="glass-card rounded-[40px] border-white/5 overflow-hidden shadow-2xl">
                {section.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx}
                    className={`flex items-center justify-between p-7 ${
                      itemIdx !== section.items.length - 1 ? 'border-b border-white/5' : ''
                    }`}
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400 shadow-inner group-hover:text-accent transition-colors">
                        <item.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg leading-tight">{item.label}</h3>
                        <p className="text-gray-500 text-xs mt-1.5 font-medium">{item.desc}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      {item.custom}
                      {item.action && (
                        <button className="px-4 py-2 rounded-xl bg-white/5 text-gray-300 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all border border-white/5">
                          {item.action}
                        </button>
                      )}
                      {item.toggle && (
                        <div className={`w-12 h-6 rounded-full relative transition-all duration-500 cursor-pointer ${item.active ? 'bg-accent shadow-[0_0_15px_rgba(253,125,0,0.3)]' : 'bg-white/10'}`}>
                          <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-500 ${item.active ? 'left-7' : 'left-1'}`} />
                        </div>
                      )}
                      {item.path && <ChevronRight className="w-5 h-5 text-gray-700" />}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Version Info */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/5 mb-6">
              <RotateCcw className="w-4 h-4 text-gray-600" />
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Reset to Default Settings</span>
            </div>
            <p className="text-[10px] font-black text-gray-700 uppercase tracking-[0.5em]">
              Build 8.2.0.501 • Last Synced 2m ago
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AppSettings;
