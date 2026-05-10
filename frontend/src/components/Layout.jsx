import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col" style={{ minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1 }} className="container animate-fade-in mt-8 mb-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
