import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

import LandingPage from './pages/LandingPage';
import AstrologerListing from './pages/AstrologerListing';
import AstrologerProfile from './pages/AstrologerProfile';
import ChatPage from './pages/ChatPage';
import LiveChatListing from './pages/LiveChatListing';
import KundliPage from './pages/KundliPage';
import MatchmakingPage from './pages/MatchmakingPage';
import AIChatPage from './pages/AIChatPage';
import UserProfile from './pages/UserProfile';
import Horoscope from './pages/Horoscope';
import WalletPage from './pages/WalletPage';
import Notifications from './pages/Notifications';
import EditProfile from './pages/EditProfile';
import AddMoney from './pages/AddMoney';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ComingSoon from './pages/ComingSoon';
import Settings from './pages/Settings';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Support from './pages/Support';
import AstroShop from './pages/AstroShop';
import Academy from './pages/Academy';
import Courses from './pages/Courses';
import Certification from './pages/Certification';
import FAQ from './pages/FAQ';
import Disclaimer from './pages/Disclaimer';
import RefundPolicy from './pages/RefundPolicy';
import AppSettings from './pages/AppSettings';
import SplashScreen from './components/SplashScreen';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen key="splash" />}
      </AnimatePresence>
      
      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Router>
            <Routes>
              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />

              {/* App Routes */}
              <Route path="/" element={<MainLayout />}>
                <Route index element={<LandingPage />} />
                <Route path="astrologers" element={<AstrologerListing />} />
                <Route path="astrologer/:id" element={<AstrologerProfile />} />
                <Route path="chat/:id" element={<ChatPage />} />
                <Route path="chat" element={<LiveChatListing />} />
                <Route path="kundli" element={<KundliPage />} />
                <Route path="matching" element={<MatchmakingPage />} />
                <Route path="matchmaking" element={<MatchmakingPage />} />
                <Route path="ai-chat" element={<AIChatPage />} />
                <Route path="profile" element={<UserProfile />} />
                <Route path="horoscope" element={<Horoscope />} />
                <Route path="wallet" element={<WalletPage />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="edit-profile" element={<EditProfile />} />
                <Route path="add-money" element={<AddMoney />} />
                
                {/* Footer & Company Routes */}
                <Route path="about" element={<AboutUs />} />
                <Route path="privacy" element={<PrivacyPolicy />} />
                <Route path="terms" element={<TermsOfService />} />
                <Route path="disclaimer" element={<Disclaimer />} />
                <Route path="refund-policy" element={<RefundPolicy />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="careers" element={<Careers />} />
                <Route path="support" element={<Support />} />
                <Route path="blog" element={<Blog />} />
                
                {/* Services & Academy */}
                <Route path="shop" element={<AstroShop />} />
                <Route path="academy" element={<Academy />} />
                <Route path="courses" element={<Courses />} />
                <Route path="cert" element={<Certification />} />
                <Route path="settings" element={<Settings />} />
                <Route path="app-settings" element={<AppSettings />} />

                {/* Coming Soon / Placeholders */}
                <Route path="favorites" element={<ComingSoon title="Saved Experts" />} />
                <Route path="history" element={<ComingSoon title="Consultation History" />} />
                <Route path="refer" element={<ComingSoon title="Refer & Earn" />} />
                <Route path="community" element={<ComingSoon title="Community" />} />
                <Route path="*" element={<LandingPage />} />
              </Route>
            </Routes>
          </Router>
        </motion.div>
      )}
    </>
  );
};

export default App;
