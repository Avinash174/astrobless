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
      <main className="flex-1 relative">
        <Outlet />
        {/* Premium Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default MainLayout;


