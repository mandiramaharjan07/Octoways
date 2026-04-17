import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-background text-on-background min-h-screen transition-colors duration-300">
      <Navbar />
      <main className="pt-[72px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
