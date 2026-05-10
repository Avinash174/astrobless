import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary-bg flex flex-col">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto custom-scrollbar relative">
        {/* Dynamic Background decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-accent/5 blur-[120px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <Outlet />
        </div>

        {/* Premium Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default MainLayout;


