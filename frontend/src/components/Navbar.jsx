import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, User, LogIn, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  return (
    <nav style={{ backgroundColor: 'var(--bg-card)', padding: '1rem 0', boxShadow: 'var(--shadow-sm)' }}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Compass color="var(--primary)" size={32} />
          <h1 style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>Traveloop</h1>
        </Link>
        <div className="flex flex-1 justify-center gap-8 items-center" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          <Link to="/explore" style={{ fontWeight: 600, color: 'var(--primary)', borderBottom: '2px solid var(--primary)', paddingBottom: '0.25rem' }}>Explore</Link>
          <Link to="/dashboard" style={{ fontWeight: 500, color: 'var(--text-muted)' }}>My Trips</Link>
          <Link to="/destinations" style={{ fontWeight: 500, color: 'var(--text-muted)' }}>Destinations</Link>
        </div>

        <div className="flex gap-4 items-center">
          <Link to="/journal" style={{ fontWeight: 500, color: 'var(--text-muted)' }}>Journal</Link>
          <Link to="/community" style={{ fontWeight: 500, color: 'var(--text-muted)' }}>Community</Link>
          {currentUser ? (
            <>
              <span style={{ fontWeight: 500, color: 'var(--primary)' }}>Hi, {currentUser.name || 'Traveler'}</span>
              <button onClick={logout} className="btn btn-outline" style={{ padding: '0.25rem 0.75rem', borderRadius: '9999px' }}>Logout</button>
            </>
          ) : (
            <Link to="/login" className="btn btn-primary" style={{ display: 'flex', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '9999px' }}>
              <LogIn size={18} /> Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
