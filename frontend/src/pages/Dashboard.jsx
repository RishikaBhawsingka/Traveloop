import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
      return;
    }

    const fetchBookings = async () => {
      try {
        // Fetch from API using user's mock UID
        const response = await fetch(`http://localhost:5000/api/bookings/user/${currentUser.uid}`);
        if (response.ok) {
          const data = await response.json();
          setBookings(data);
        }
      } catch (err) {
        console.error("Failed to fetch bookings", err);
      }
      setLoading(false);
    };

    fetchBookings();
  }, [currentUser, navigate]);

  if (!currentUser) return null;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1>My Dashboard</h1>
        <button onClick={() => navigate('/itinerary/create')} className="btn btn-primary">Plan New Trip</button>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="card p-6" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
          <h3>Upcoming Trips</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700, margin: '1rem 0' }}>{bookings.filter(b => b.status === 'confirmed').length}</p>
          <p style={{ opacity: 0.8 }}>Next: Bora Bora in 14 days</p>
        </div>
        <div className="card p-6">
          <h3 style={{ color: 'var(--text-muted)' }}>Completed Trips</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700, margin: '1rem 0', color: 'var(--secondary)' }}>{bookings.filter(b => b.status === 'completed').length}</p>
          <p style={{ color: 'var(--primary)', fontWeight: 500 }}>View History &rarr;</p>
        </div>
        <div className="card p-6">
          <h3 style={{ color: 'var(--text-muted)' }}>Travel Miles</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700, margin: '1rem 0', color: 'var(--secondary)' }}>45,200</p>
          <p style={{ color: 'var(--accent)', fontWeight: 500 }}>Gold Tier Member</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2>Recent Bookings</h2>
          <div className="card mt-4 p-0" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '400px' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-color)', borderBottom: '1px solid var(--border-color)' }}>
                  <th className="p-4">Item</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan="3" className="p-4 text-center">Loading bookings...</td></tr>
                ) : bookings.length === 0 ? (
                  <tr><td colSpan="3" className="p-4 text-center">No bookings found.</td></tr>
                ) : (
                  bookings.slice(0, 3).map(booking => (
                    <tr key={booking._id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td className="p-4 font-medium">{booking.itemId.name || booking.itemId.title || `${booking.itemType} Booking`}</td>
                      <td className="p-4" style={{ color: 'var(--text-muted)' }}>
                        {new Date(booking.bookingDate).toLocaleDateString()}
                      </td>
                      <td className="p-4">
                        <span style={{ 
                          backgroundColor: booking.status === 'confirmed' ? '#DEF7EC' : booking.status === 'pending' ? '#FEF3C7' : '#E5E7EB', 
                          color: booking.status === 'confirmed' ? '#03543F' : booking.status === 'pending' ? '#92400E' : '#374151', 
                          padding: '0.25rem 0.75rem', 
                          borderRadius: '1rem', 
                          fontSize: '0.875rem', 
                          fontWeight: 500,
                          textTransform: 'capitalize'
                        }}>
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 style={{ margin: 0 }}>Saved Destinations</h2>
            <span style={{ color: 'var(--primary)', cursor: 'pointer', fontWeight: 500 }}>View All</span>
          </div>
          <div className="flex flex-col gap-4">
            {/* We will fetch this dynamically, but for now we'll do it inline to save a separate state or we can use another state var. Let's add state. */}
            <SavedDestinationsList uid={currentUser.uid} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Subcomponent to fetch and render saved destinations
const SavedDestinationsList = ({ uid }) => {
  const [saved, setSaved] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSaved = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/saved/user/${uid}`);
        if (res.ok) {
          const data = await res.json();
          setSaved(data);
        }
      } catch(err) {}
      setLoading(false);
    };
    fetchSaved();
  }, [uid]);

  if (loading) return <div>Loading saved places...</div>;
  if (saved.length === 0) return <div className="card p-6 text-center text-muted">No saved destinations yet.</div>;

  return (
    <>
      {saved.map(item => (
        <div key={item._id} className="card p-4 flex gap-4 items-center">
          <img src={item.destinationData.imageUrl} alt="Saved" style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />
          <div>
            <h4 style={{ margin: '0 0 0.25rem 0' }}>{item.destinationData.name}</h4>
            <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem' }}>${item.destinationData.pricePerNight} / night</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Dashboard;
