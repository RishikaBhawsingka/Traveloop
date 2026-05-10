import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    const fetchDest = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/destinations/${id}`);
        if (response.ok) {
          const data = await response.json();
          setDestination(data);
        }
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    fetchDest();
  }, [id]);

  const handleSave = async () => {
    if (!currentUser) {
      navigate('/login');
      return;
    }
    setSaving(true);
    try {
      const response = await fetch('http://localhost:5000/api/saved', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: currentUser.uid,
          destinationId: destination._id,
          destinationData: {
            name: destination.name,
            imageUrl: destination.imageUrl,
            pricePerNight: destination.pricePerNight
          }
        })
      });
      const data = await response.json();
      if (data.success) {
        setSaveMessage('Saved successfully! Check your Dashboard.');
      } else {
        setSaveMessage(data.message || 'Error saving.');
      }
    } catch (err) {
      setSaveMessage('Failed to save.');
    }
    setSaving(false);
  };

  if (loading) return <div>Loading destination details...</div>;
  if (!destination) return <div>Destination not found.</div>;

  return (
    <div>
      <div 
        style={{ 
          height: '400px', 
          borderRadius: 'var(--radius-lg)', 
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8)), url(${destination.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '3rem',
          color: 'white',
          marginBottom: '3rem'
        }}
      >
        <div className="flex justify-between items-end">
          <div>
            <h1 style={{ color: 'white', fontSize: '4rem', margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>{destination.name}</h1>
            <p style={{ fontSize: '1.25rem', opacity: 0.9, marginTop: '0.5rem', maxWidth: '600px' }}>{destination.description}</p>
          </div>
          <div className="flex flex-col items-end gap-4">
            <span style={{ fontSize: '2rem', fontWeight: 700, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>${destination.pricePerNight} <span style={{ fontSize: '1rem', fontWeight: 400 }}>/ night</span></span>
            <button onClick={handleSave} disabled={saving} className="btn btn-primary" style={{ backgroundColor: 'white', color: 'var(--primary)', border: 'none' }}>
              {saving ? 'Saving...' : 'Save to Trip Planner'}
            </button>
          </div>
        </div>
      </div>

      {saveMessage && (
        <div className="p-4 mb-8 text-center" style={{ backgroundColor: '#DEF7EC', color: '#03543F', borderRadius: 'var(--radius-md)' }}>
          {saveMessage}
        </div>
      )}

      <h2 className="mb-6">Popular Places to Visit</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="card" style={{ padding: '0', overflow: 'hidden' }}>
            <img src={`https://picsum.photos/seed/${destination._id}_${item}/400/300`} alt="Place" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div className="p-4">
              <h4 style={{ margin: '0 0 0.25rem 0' }}>Must See Spot {item}</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Historic Landmark</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationDetail;
