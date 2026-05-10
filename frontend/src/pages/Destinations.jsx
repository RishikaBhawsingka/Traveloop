import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/destinations');
        if (!response.ok) {
          throw new Error('Failed to fetch destinations');
        }
        const data = await response.json();
        setDestinations(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching destinations:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  if (loading) return <div>Loading destinations...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1 className="mb-8">Explore Destinations</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {destinations.map((dest) => (
          <div key={dest._id} className="card">
            <img src={dest.imageUrl} alt={dest.name} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <div className="p-6">
              <h3>{dest.name}</h3>
              <p className="mt-2" style={{ color: 'var(--text-muted)' }}>{dest.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span style={{ fontWeight: 600, color: 'var(--primary)' }}>${dest.pricePerNight} / night</span>
                <Link to={`/destinations/${dest._id}`} className="btn btn-primary" style={{ padding: '0.5rem 1rem', textDecoration: 'none' }}>View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
