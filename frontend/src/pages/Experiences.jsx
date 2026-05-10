import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bookingStatus, setBookingStatus] = useState({});
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/experiences');
        if (!response.ok) throw new Error('Failed to fetch experiences');
        const data = await response.json();
        setExperiences(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchExperiences();
  }, []);

  const handleBook = async (exp) => {
    if (!currentUser) return navigate('/login');
    
    setBookingStatus(prev => ({ ...prev, [exp._id]: 'booking' }));
    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: currentUser.uid,
          itemType: 'Experience',
          itemId: { name: exp.title },
          totalAmount: exp.price
        })
      });
      if (response.ok) {
        setBookingStatus(prev => ({ ...prev, [exp._id]: 'booked' }));
      } else {
        setBookingStatus(prev => ({ ...prev, [exp._id]: 'error' }));
      }
    } catch (err) {
      setBookingStatus(prev => ({ ...prev, [exp._id]: 'error' }));
    }
  };

  if (loading) return <div>Loading experiences...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1 className="mb-8">Curated Experiences</h1>
      <div className="grid md:grid-cols-4 gap-6">
        {experiences.map((exp) => (
          <div key={exp._id} className="card">
            <img src={exp.imageUrl} alt={exp.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div className="p-4">
              <span style={{ fontSize: '0.875rem', color: 'var(--accent)', fontWeight: 600, textTransform: 'uppercase' }}>{exp.category}</span>
              <h3 className="mt-1" style={{ fontSize: '1.125rem' }}>{exp.title}</h3>
              <p className="mt-2 text-muted" style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{exp.duration} • Guided</p>
              <div className="mt-4 flex justify-between items-center">
                <span style={{ fontWeight: 600 }}>${exp.price}</span>
                <button 
                  onClick={() => handleBook(exp)}
                  disabled={bookingStatus[exp._id] === 'booked' || bookingStatus[exp._id] === 'booking'}
                  className={bookingStatus[exp._id] === 'booked' ? "btn btn-primary" : "btn btn-outline"} 
                  style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}
                >
                  {bookingStatus[exp._id] === 'booking' ? '...' : bookingStatus[exp._id] === 'booked' ? 'Booked!' : 'Book'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
