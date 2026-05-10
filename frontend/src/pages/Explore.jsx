import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Explore = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredRegion, setHoveredRegion] = useState(null);

  const recentLoops = [
    {
      _id: '1',
      title: 'The Amalfi Coast Loop',
      location: 'Positano, Amalfi, Ravello',
      status: 'Completed',
      date: 'Oct 2023',
      imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80'
    },
    {
      _id: '2',
      title: 'Bali Spirit Escape',
      location: 'Ubud, Canggu, Uluwatu',
      status: 'Planned',
      date: 'Dec 2023',
      imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80'
    },
    {
      _id: '3',
      title: 'Grecian Islands Loop',
      location: 'Athens, Mykonos, Santorini',
      status: 'Completed',
      date: 'Aug 2023',
      imageUrl: 'https://images.unsplash.com/photo-1600626333482-d250813876e6?w=800&q=80'
    }
  ];

  const regions = [
    { name: 'Europe', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&q=80' },
    { name: 'Asia', image: 'https://images.unsplash.com/photo-1535139262971-c51845709a48?w=400&q=80' },
    { name: 'Africa', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&q=80' },
    { name: 'Americas', image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&q=80' },
    { name: 'Oceania', image: 'https://images.unsplash.com/photo-1588001400949-0d12e9b9c9f2?w=400&q=80' },
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // If user typed something, let's take them to destinations where they might find it
      navigate('/destinations');
    }
  };

  return (
    <div style={{ backgroundColor: '#FDFBF7', color: '#023E58', minHeight: '100vh', marginTop: '-2rem', paddingBottom: '4rem' }}>
      
      {/* Hero Section - Full Width Breakout */}
      <div className="full-width-breakout" style={{ position: 'relative', height: '60vh', minHeight: '400px', backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.3)' }}></div>
        
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: 'white', padding: '0 1rem' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, textShadow: '0 2px 10px rgba(0,0,0,0.3)', marginBottom: '1rem', color: 'white' }}>
            Let us plan your perfect <span style={{ color: '#00D1C1' }}>Holiday</span>
          </h1>
          <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', textShadow: '0 1px 5px rgba(0,0,0,0.5)', opacity: 0.9 }}>
            Discover curated experiences, seamless bookings, and memories that last a lifetime in the world's most beautiful destinations.
          </p>
        </div>

        {/* Floating Search Bar */}
        <div style={{ position: 'absolute', bottom: '-40px', left: '50%', transform: 'translateX(-50%)', width: '90%', maxWidth: '1000px', backgroundColor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', borderRadius: '9999px', padding: '0.75rem', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', backgroundColor: '#F3F4F6', borderRadius: '9999px', padding: '0.75rem 1.5rem' }}>
            <span style={{ marginRight: '0.5rem', color: '#9CA3AF' }}>🔍</span>
            <input 
              type="text" 
              placeholder="Where do you want to go?" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '1rem', color: '#023E58' }} 
            />
          </div>
          
          <div className="flex gap-2 hidden md:flex">
            <button className="btn btn-outline" style={{ borderRadius: '9999px', borderColor: '#E5E7EB', color: '#4B5563', padding: '0.75rem 1.25rem' }}>◎ Group by</button>
            <button className="btn btn-outline" style={{ borderRadius: '9999px', borderColor: '#E5E7EB', color: '#4B5563', padding: '0.75rem 1.25rem' }}>≡ Filter</button>
            <button className="btn btn-outline" style={{ borderRadius: '9999px', borderColor: '#E5E7EB', color: '#4B5563', padding: '0.75rem 1.25rem' }}>⇅ Sort by</button>
          </div>
          
          <button onClick={handleSearch} className="btn btn-cyan" style={{ padding: '0.75rem 2rem' }}>Search</button>
        </div>
      </div>

      <div style={{ paddingTop: '100px' }}>
        {/* Top Regional Selections */}
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 style={{ color: '#023E58', fontSize: '2rem', marginBottom: '0.25rem' }}>Top Regional Selections</h2>
            <p style={{ color: '#6B7280' }}>Explore the world by continent and region</p>
          </div>
          <button onClick={() => navigate('/destinations')} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#023E58', fontWeight: 500, fontSize: '1rem' }}>View all →</button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {regions.map((region, index) => (
            <div 
              key={index} 
              onMouseEnter={() => setHoveredRegion(region.name)}
              onMouseLeave={() => setHoveredRegion(null)}
              style={{ 
                position: 'relative', 
                height: '250px', 
                borderRadius: '20px', 
                overflow: 'hidden', 
                cursor: 'pointer',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
              }}
            >
              <img src={region.image} alt={region.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>
              <h3 style={{ position: 'absolute', bottom: '1rem', left: '1rem', color: 'white', margin: 0, fontSize: '1.25rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{region.name}</h3>
              
              {hoveredRegion === region.name && (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,209,193,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }}>
                  <button onClick={() => navigate('/itinerary/create')} className="btn btn-cyan" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>
                    <span>+</span> Plan a trip
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Your Recent Loops */}
        <h2 style={{ color: '#023E58', fontSize: '2rem', marginBottom: '1.5rem' }}>Your Recent Loops</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {recentLoops.map((loop) => (
            <div key={loop._id} style={{ backgroundColor: '#F3F2EB', borderRadius: '24px', padding: '1rem', display: 'flex', flexDirection: 'column' }}>
              <img src={loop.imageUrl} alt={loop.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px', marginBottom: '1.25rem' }} />
              
              <div className="flex justify-between items-center mb-3">
                <span style={{ backgroundColor: loop.status === 'Completed' ? '#D1F4E0' : '#E0F2FE', color: loop.status === 'Completed' ? '#047857' : '#0369A1', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600 }}>
                  {loop.status}
                </span>
                <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>{loop.date}</span>
              </div>
              
              <h3 style={{ color: '#023E58', fontSize: '1.25rem', margin: '0 0 0.5rem 0' }}>{loop.title}</h3>
              <p style={{ color: '#6B7280', fontSize: '0.875rem', margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1rem' }}>📍</span> {loop.location}
              </p>
              
              <div style={{ marginTop: 'auto' }}>
                {/* Visual Progress Indicator */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', padding: '0 0.5rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#023E58' }}></div>
                  <div style={{ flex: 1, height: '2px', backgroundColor: loop.status === 'Completed' ? '#023E58' : '#D1D5DB', margin: '0 4px' }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: loop.status === 'Completed' ? '#023E58' : '#D1D5DB', border: loop.status !== 'Completed' ? '2px solid #023E58' : 'none' }}></div>
                  <div style={{ flex: 1, height: '2px', backgroundColor: '#D1D5DB', margin: '0 4px' }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D1D5DB', border: '2px solid #023E58' }}></div>
                </div>
                
                <button 
                  onClick={() => navigate(`/itinerary/${loop._id}`)}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '12px', border: '1px solid #023E58', backgroundColor: 'transparent', color: '#023E58', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseOver={(e) => { e.target.style.backgroundColor = '#023E58'; e.target.style.color = 'white'; }}
                  onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#023E58'; }}
                >
                  {loop.status === 'Completed' ? 'View Details' : 'Modify Itinerary'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
