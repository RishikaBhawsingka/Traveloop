import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ItineraryCreator = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    tripType: 'Solo',
    budgetType: 'Standard'
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!currentUser) return navigate('/login');
    setLoading(true);
    // Simulate save and redirect to the detail page (our timeline view)
    const tripId = formData.destination ? encodeURIComponent(formData.destination) : 'new';
    setTimeout(() => navigate(`/itinerary/${tripId}`), 800);
  };

  const suggestions = [
    {
      title: 'Crystal Lagoons, Maldives',
      tag: 'BUCKET LIST',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80'
    },
    {
      title: 'Lake Brienz, Switzerland',
      tag: 'NATURE RETREAT',
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=600&q=80'
    },
    {
      title: 'Agra Heritage Loop, India',
      tag: 'CULTURAL HERITAGE',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80'
    },
    {
      title: 'Ubud Jungle Villa, Bali',
      tag: 'TROPICAL ESCAPE',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80'
    }
  ];

  return (
    <div style={{ backgroundColor: '#FDFBF7', color: '#023E58', minHeight: '100vh', paddingBottom: '4rem' }}>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '3rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#023E58', marginBottom: '0.5rem' }}>Plan a new trip</h1>
        <p style={{ fontSize: '1.125rem', color: '#6B7280', maxWidth: '600px', marginBottom: '3rem' }}>
          Design your dream itinerary. Whether it's a coastal escape or a mountain adventure, let's make your next loop unforgettable.
        </p>

        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Left Column - Form */}
          <div className="md:col-span-5">
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', padding: '2.5rem', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.05)' }}>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#4B5563', marginBottom: '0.5rem' }}>Select a Place</label>
                <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F3F4F6', borderRadius: '12px', padding: '0.875rem 1rem' }}>
                  <span style={{ marginRight: '0.75rem', color: '#023E58' }}>📍</span>
                  <input 
                    type="text" 
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="Where do you want to go?" 
                    style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '1rem', color: '#023E58' }} 
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4" style={{ marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#4B5563', marginBottom: '0.5rem' }}>Start Date</label>
                  <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F3F4F6', borderRadius: '12px', padding: '0.875rem 1rem' }}>
                    <span style={{ marginRight: '0.5rem', color: '#023E58' }}>📅</span>
                    <input 
                      type="date" 
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '0.875rem', color: '#023E58' }} 
                    />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#4B5563', marginBottom: '0.5rem' }}>End Date</label>
                  <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F3F4F6', borderRadius: '12px', padding: '0.875rem 1rem' }}>
                    <span style={{ marginRight: '0.5rem', color: '#023E58' }}>📅</span>
                    <input 
                      type="date" 
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleChange}
                      style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '0.875rem', color: '#023E58' }} 
                    />
                  </div>
                </div>
              </div>

              {/* Extra fields requested by user to keep parity with previous options */}
              <div className="grid grid-cols-2 gap-4" style={{ marginBottom: '2.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#4B5563', marginBottom: '0.5rem' }}>Trip Type</label>
                  <select name="tripType" value={formData.tripType} onChange={handleChange} style={{ width: '100%', backgroundColor: '#F3F4F6', borderRadius: '12px', padding: '0.875rem 1rem', border: 'none', outline: 'none', color: '#023E58', fontSize: '0.875rem', fontWeight: 500 }}>
                    <option value="Solo">Solo</option>
                    <option value="Couple">Couple</option>
                    <option value="Family">Family</option>
                    <option value="Group">Group</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#4B5563', marginBottom: '0.5rem' }}>Budget Profile</label>
                  <select name="budgetType" value={formData.budgetType} onChange={handleChange} style={{ width: '100%', backgroundColor: '#F3F4F6', borderRadius: '12px', padding: '0.875rem 1rem', border: 'none', outline: 'none', color: '#023E58', fontSize: '0.875rem', fontWeight: 500 }}>
                    <option value="Budget">Budget</option>
                    <option value="Standard">Standard</option>
                    <option value="Luxury">Luxury</option>
                  </select>
                </div>
              </div>

              <button 
                onClick={handleSave} 
                disabled={loading}
                style={{ width: '100%', padding: '1rem', backgroundColor: '#00D1C1', color: 'white', border: 'none', borderRadius: '9999px', fontSize: '1rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 4px 14px 0 rgba(0,209,193,0.39)' }}
                onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
              >
                {loading ? 'CREATING...' : 'CREATE TRIP LOOP'}
              </button>
            </div>
          </div>

          {/* Right Column - Suggestions Grid */}
          <div className="md:col-span-7">
            <div className="flex justify-between items-end mb-6">
              <h2 style={{ fontSize: '2rem', color: '#023E58', margin: 0 }}>Suggestions for your next adventure</h2>
              <button onClick={() => navigate('/destinations')} style={{ background: 'transparent', border: 'none', color: '#023E58', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                View All →
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {suggestions.map((item, index) => (
                <div key={index} style={{ position: 'relative', height: '240px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem', backgroundColor: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(10px)', padding: '1rem', borderRadius: '16px' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#00D1C1', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{item.tag}</span>
                    <h3 style={{ fontSize: '1.125rem', color: '#023E58', margin: '0.25rem 0 0 0', fontWeight: 600, lineHeight: 1.2 }}>{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div style={{ marginTop: '4rem', backgroundColor: '#EEF2F0', borderRadius: '24px', padding: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #E5E7EB' }}>
          <div style={{ maxWidth: '600px' }}>
            <span style={{ backgroundColor: '#00D1C1', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, display: 'inline-block', marginBottom: '1rem' }}>CURATED BY EXPERTS</span>
            <h2 style={{ fontSize: '2.5rem', color: '#023E58', margin: '0 0 1rem 0' }}>Not sure where to start?</h2>
            <p style={{ color: '#4B5563', fontSize: '1.125rem', margin: 0, lineHeight: 1.6 }}>
              Try our AI-powered travel loop generator. It analyzes your preferences and suggests the perfect balance of adventure and relaxation.
            </p>
          </div>
          <div>
            <button style={{ padding: '0.875rem 2rem', backgroundColor: 'transparent', color: '#023E58', border: '2px solid #023E58', borderRadius: '9999px', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}>
              Get Smart Suggestions
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ItineraryCreator;
