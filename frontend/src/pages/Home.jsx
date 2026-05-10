import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <section 
        style={{ 
          borderRadius: 'var(--radius-xl)', 
          overflow: 'hidden', 
          position: 'relative',
          minHeight: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.5)), url(https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=2000)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '2rem'
        }}
      >
        <div>
          <h1 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '1rem' }}>Find Your Next Adventure</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2rem auto', opacity: 0.9 }}>
            Discover extraordinary destinations, curated experiences, and plan your perfect itinerary with Traveloop.
          </p>
          
          {/* Search Bar */}
          <div 
            style={{ 
              backgroundColor: 'white', 
              padding: '0.5rem', 
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              gap: '0.5rem',
              alignItems: 'center',
              boxShadow: 'var(--shadow-lg)',
              maxWidth: '800px',
              margin: '0 auto',
              color: 'var(--text-main)',
              textAlign: 'left'
            }}
          >
            <div className="flex items-center gap-2 flex-1 p-2" style={{ borderRight: '1px solid var(--border-color)' }}>
              <MapPin color="var(--text-muted)" size={20} />
              <input type="text" placeholder="Where to?" style={{ border: 'none', outline: 'none', width: '100%', fontSize: '1rem' }} />
            </div>
            <div className="flex items-center gap-2 flex-1 p-2" style={{ borderRight: '1px solid var(--border-color)' }}>
              <Calendar color="var(--text-muted)" size={20} />
              <input type="text" placeholder="Dates" style={{ border: 'none', outline: 'none', width: '100%', fontSize: '1rem' }} />
            </div>
            <div className="flex items-center gap-2 flex-1 p-2">
              <Users color="var(--text-muted)" size={20} />
              <input type="text" placeholder="Travelers" style={{ border: 'none', outline: 'none', width: '100%', fontSize: '1rem' }} />
            </div>
            <button className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-md)' }}>
              <Search size={20} /> Search
            </button>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2>Trending Destinations</h2>
          <Link to="/destinations" style={{ color: 'var(--primary)', fontWeight: 500 }}>View All &rarr;</Link>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: 'Kyoto, Japan', img: 'https://picsum.photos/seed/kyoto/800/600', price: '$120/night' },
            { name: 'Santorini, Greece', img: 'https://picsum.photos/seed/santorini/800/600', price: '$200/night' },
            { name: 'Bali, Indonesia', img: 'https://picsum.photos/seed/bali/800/600', price: '$80/night' },
            { name: 'Swiss Alps', img: 'https://picsum.photos/seed/alps/800/600', price: '$150/night' }
          ].map((dest, i) => (
            <div key={i} className="card" style={{ cursor: 'pointer' }}>
              <img src={dest.img} alt={dest.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div className="p-4">
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{dest.name}</h3>
                <p style={{ color: 'var(--text-muted)' }}>Starting at {dest.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
