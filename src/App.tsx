import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import KundliMatching from './pages/KundliMatching';
import ViewKundli from './pages/ViewKundli';
import Blog from './pages/Blog';
import Live from './pages/Live';
import FAQ from './pages/FAQ';
import Chat from './pages/Chat';
import Numerology from './pages/Numerology';
import Horoscope from './pages/Horoscope';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SplashScreen from './components/SplashScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <div className="min-h-screen bg-light flex flex-col font-body">
        <AnimatePresence mode="wait">
          {isLoading && (
            <SplashScreen key="splash" finishLoading={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        {!isLoading && (
          <>
            <Header />
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/kundli-matching" element={<KundliMatching />} />
                <Route path="/view-kundli" element={<ViewKundli />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/live" element={<Live />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/horoscope" element={<Horoscope />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/numerology" element={<Numerology />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </div>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;