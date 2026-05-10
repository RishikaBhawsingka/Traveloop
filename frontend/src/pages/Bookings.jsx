import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const Bookings = () => {
  const { currentUser } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) return;
    
    const fetchBookings = async () => {
      try {
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
  }, [currentUser]);

  if (!currentUser) return <div>Please log in to manage bookings.</div>;

  return (
    <div>
      <h1 className="mb-8">Manage Bookings</h1>
      
      {loading ? (
        <p>Loading your bookings...</p>
      ) : bookings.length === 0 ? (
        <div className="card p-8 text-center">
          <p>You have no active bookings.</p>
          <button className="btn btn-primary mt-4">Explore Destinations</button>
        </div>
      ) : (
        <div className="grid gap-6">
          {bookings.map((booking) => (
            <div key={booking._id} className="card p-6 flex justify-between items-center">
              <div className="flex gap-6 items-center">
                <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--border-color)', borderRadius: 'var(--radius-md)', backgroundImage: 'url(https://picsum.photos/seed/booking/200)', backgroundSize: 'cover' }}></div>
                <div>
                  <h3 style={{ marginBottom: '0.25rem' }}>{booking.itemId.name || booking.itemId.title || `${booking.itemType} Booking`}</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Date: {new Date(booking.bookingDate).toLocaleDateString()}</p>
                  <p style={{ fontWeight: 600, color: 'var(--primary)', marginTop: '0.25rem' }}>${booking.totalAmount}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span style={{ 
                  backgroundColor: booking.status === 'confirmed' ? '#DEF7EC' : booking.status === 'pending' ? '#FEF3C7' : '#E5E7EB', 
                  color: booking.status === 'confirmed' ? '#03543F' : booking.status === 'pending' ? '#92400E' : '#374151', 
                  padding: '0.25rem 0.75rem', 
                  borderRadius: '1rem', 
                  fontSize: '0.875rem', 
                  fontWeight: 500,
                  textAlign: 'center',
                  textTransform: 'capitalize'
                }}>
                  {booking.status}
                </span>
                <button className="btn btn-outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>Manage</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookings;
