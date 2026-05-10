import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { currentUser } = useAuth();

  if (!currentUser) return <div>Please log in to view profile.</div>;

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="card p-8 text-center md:col-span-1" style={{ alignSelf: 'start' }}>
        <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: 'var(--border-color)', backgroundImage: `url(https://api.dicebear.com/7.x/avataaars/svg?seed=${currentUser.uid})`, backgroundSize: 'cover', margin: '0 auto 1.5rem auto' }}></div>
        <h2 style={{ marginBottom: '0.5rem' }}>{currentUser.name || 'User Profile'}</h2>
        <p style={{ color: 'var(--text-muted)' }}>{currentUser.email}</p>
        <span className="mt-4 inline-block" style={{ backgroundColor: '#FEF3C7', color: '#92400E', padding: '0.25rem 1rem', borderRadius: '1rem', fontSize: '0.875rem', fontWeight: 600 }}>Gold Member</span>
      </div>
      
      <div className="card p-8 md:col-span-2">
        <h3 className="mb-6">Personal Information</h3>
        <form className="grid md:grid-cols-2 gap-6">
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>First Name</label>
            <input type="text" defaultValue={currentUser.name ? currentUser.name.split(' ')[0] : ''} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Last Name</label>
            <input type="text" defaultValue={currentUser.name && currentUser.name.split(' ')[1] ? currentUser.name.split(' ')[1] : ''} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email Address</label>
            <input type="email" defaultValue={currentUser.email} readOnly style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-color)' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Phone Number</label>
            <input type="tel" placeholder="+1 (555) 000-0000" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} />
          </div>
          <div className="md:col-span-2">
            <button type="button" className="btn btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
