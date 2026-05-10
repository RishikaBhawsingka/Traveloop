import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--secondary)', color: 'white', padding: '3rem 0', marginTop: 'auto' }}>
      <div className="container grid md:grid-cols-4 gap-8">
        <div>
          <h3 style={{ color: 'white', marginBottom: '1rem' }}>Traveloop</h3>
          <p style={{ color: 'var(--text-muted)' }}>Explore the world with ease. Your ultimate travel companion.</p>
        </div>
        <div>
          <h4 style={{ color: 'white', marginBottom: '1rem' }}>Discover</h4>
          <ul className="flex flex-col gap-2" style={{ color: 'var(--text-muted)' }}>
            <li>Destinations</li>
            <li>Experiences</li>
            <li>Journal</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: 'white', marginBottom: '1rem' }}>Company</h4>
          <ul className="flex flex-col gap-2" style={{ color: 'var(--text-muted)' }}>
            <li>About Us</li>
            <li>Contact</li>
            <li>Sustainability</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: 'white', marginBottom: '1rem' }}>Legal</h4>
          <ul className="flex flex-col gap-2" style={{ color: 'var(--text-muted)' }}>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="container mt-8" style={{ borderTop: '1px solid #334155', paddingTop: '1.5rem', textAlign: 'center', color: 'var(--text-muted)' }}>
        <p>&copy; {new Date().getFullYear()} Traveloop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
