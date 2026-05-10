import React from 'react';
import { useParams } from 'react-router-dom';

const ItineraryDetail = () => {
  const { id } = useParams();
  
  // Determine if user searched for Paris or Bora Bora
  const isParis = id && id.toLowerCase().includes('paris');
  const destinationName = isParis ? "Paris" : "Bora Bora";

  const boraBoraData = [
    {
      dayNum: '01',
      title: 'Day 1: Arrival & Lagoon Immersion',
      activities: [
        {
          id: 'a1',
          time: '09:00 AM',
          title: 'Private Lagoon Transfer',
          description: 'Luxury boat pick-up from Motu Mute Airport with fresh flower leis and cold coconut water.',
          tags: [{ text: 'Transportation', color: '#E0F8F5', textCol: '#00D1C1' }, { text: 'Leisure', color: '#E0F8F5', textCol: '#00D1C1' }],
          cost: '$45',
          costSubtext: 'per person',
          image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=400&q=80'
        },
        {
          id: 'a2',
          time: '02:00 PM',
          title: 'Snorkeling at Coral Gardens',
          description: 'Explore the vibrant marine life in the shallow reefs near the resort\'s private motu.',
          tags: [{ text: 'Physical Activity', color: '#E0F8F5', textCol: '#00D1C1' }, { text: 'Nature', color: '#E0F8F5', textCol: '#00D1C1' }],
          cost: '$45',
          costSubtext: 'Gear Included',
          image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80'
        }
      ]
    },
    {
      dayNum: '02',
      title: 'Day 2: Mountain Peaks & Sunset Sails',
      activities: [
        {
          id: 'a3',
          time: '07:00 AM',
          title: 'Guided Hike: Mount Otemanu Foothills',
          description: 'A moderate trek through tropical foliage offering panoramic views of the entire Bora Bora lagoon.',
          tags: [{ text: 'Physical Activity', color: '#E0F8F5', textCol: '#00D1C1' }, { text: 'Adventure', color: '#E0F8F5', textCol: '#00D1C1' }],
          cost: '$85',
          costSubtext: 'Guided Tour',
          image: 'https://images.unsplash.com/photo-1506452305024-9d3f02d1c9b5?w=400&q=80'
        },
        {
          id: 'a4',
          time: '05:30 PM',
          title: 'Sunset Catamaran Cruise',
          description: 'Sip on local cocktails while watching the sun dip below the horizon from the comfort of a luxury boat.',
          tags: [{ text: 'Social', color: '#E0F8F5', textCol: '#00D1C1' }, { text: 'Leisure', color: '#E0F8F5', textCol: '#00D1C1' }],
          cost: '$150',
          costSubtext: 'Includes Drinks',
          image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&q=80' // Updated to valid boat image
        }
      ]
    }
  ];

  const parisData = [
    {
      dayNum: '01',
      title: 'Day 1: Icons of the City',
      activities: [
        {
          id: 'p1',
          time: '10:00 AM',
          title: 'Eiffel Tower Summit',
          description: 'Ascend to the top of Paris\' most famous landmark for breathtaking panoramic views of the city.',
          tags: [{ text: 'Sightseeing', color: '#E0F8F5', textCol: '#00D1C1' }, { text: 'Landmark', color: '#E0F8F5', textCol: '#00D1C1' }],
          cost: '$30',
          costSubtext: 'Skip-the-line',
          image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&q=80'
        },
        {
          id: 'p2',
          time: '02:00 PM',
          title: 'Louvre Museum Tour',
          description: 'Discover the Mona Lisa and thousands of historic masterpieces in the world\'s largest art museum.',
          tags: [{ text: 'Art', color: '#E0F8F5', textCol: '#00D1C1' }, { text: 'Culture', color: '#E0F8F5', textCol: '#00D1C1' }],
          cost: '$20',
          costSubtext: 'Entry Fee',
          image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&q=80'
        }
      ]
    },
    {
      dayNum: '02',
      title: 'Day 2: Montmartre & Romance',
      activities: [
        {
          id: 'p3',
          time: '10:00 AM',
          title: 'Explore Montmartre & Sacré-Cœur',
          description: 'Wander the historic artistic district and visit the stunning white basilica overlooking Paris.',
          tags: [{ text: 'Walking Tour', color: '#E0F8F5', textCol: '#00D1C1' }, { text: 'Culture', color: '#E0F8F5', textCol: '#00D1C1' }],
          cost: '$0',
          costSubtext: 'Free',
          image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80'
        },
        {
          id: 'p4',
          time: '06:00 PM',
          title: 'Seine River Sunset Cruise',
          description: 'Glide along the Seine as the city lights up, passing Notre Dame and the sparkling Eiffel Tower.',
          tags: [{ text: 'Leisure', color: '#E0F8F5', textCol: '#00D1C1' }, { text: 'Romance', color: '#E0F8F5', textCol: '#00D1C1' }],
          cost: '$25',
          costSubtext: 'Champagne Incl.',
          image: 'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=400&q=80'
        }
      ]
    }
  ];

  const daysData = isParis ? parisData : boraBoraData;

  return (
    <div style={{ backgroundColor: '#FDFBF7', color: '#023E58', minHeight: '100vh', paddingBottom: '4rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '2rem' }}>
        
        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#023E58', marginBottom: '2rem' }}>Itinerary for {destinationName}</h1>

        <div className="grid md:grid-cols-12 gap-12 relative">
          
          {/* Left Column - Timeline */}
          <div className="md:col-span-8">
            
            {/* Search Bar */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '4rem' }}>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', backgroundColor: '#F3F4F6', borderRadius: '9999px', padding: '0.75rem 1.5rem' }}>
                <span style={{ marginRight: '0.5rem', color: '#9CA3AF' }}>🔍</span>
                <input type="text" placeholder="Search activities..." style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '1rem', color: '#023E58' }} />
              </div>
              <button style={{ padding: '0.75rem 1.5rem', backgroundColor: '#F3F4F6', color: '#4B5563', border: 'none', borderRadius: '9999px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                ◎ Group by
              </button>
            </div>

            {/* Timeline */}
            <div style={{ position: 'relative' }}>
              {daysData.map((day, dayIndex) => (
                <div key={day.dayNum} style={{ marginBottom: dayIndex === daysData.length - 1 ? '0' : '4rem', position: 'relative' }}>
                  
                  {/* Day Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', position: 'relative', zIndex: 10 }}>
                    <div style={{ width: '40px', height: '40px', backgroundColor: '#023E58', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1.125rem' }}>
                      {day.dayNum}
                    </div>
                    <h2 style={{ margin: 0, fontSize: '1.75rem', color: '#023E58' }}>{day.title}</h2>
                  </div>

                  {/* Connecting Dotted Line (Visual flair only) */}
                  {dayIndex < daysData.length - 1 && (
                    <div style={{ position: 'absolute', left: '20px', top: '40px', bottom: '-4rem', width: '2px', borderLeft: '2px dotted #00D1C1', zIndex: 1 }}></div>
                  )}

                  {/* Activities */}
                  <div style={{ paddingLeft: '3.5rem', position: 'relative', zIndex: 10 }}>
                    {day.activities.map((activity, actIndex) => (
                      <React.Fragment key={activity.id}>
                        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'row', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', marginBottom: '1rem', minWidth: 0 }}>
                          
                          {/* Image */}
                          <div style={{ width: '250px', flexShrink: 0 }}>
                            <img src={activity.image} alt={activity.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          </div>

                          {/* Content */}
                          <div style={{ flex: 1, padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#023E58', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                              <span>🕒</span> {activity.time}
                            </div>
                            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', color: '#023E58' }}>{activity.title}</h3>
                            <p style={{ margin: '0 0 1rem 0', color: '#4B5563', fontSize: '0.9rem', lineHeight: 1.5 }}>{activity.description}</p>
                            
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                              {activity.tags.map((tag, tIndex) => (
                                <span key={tIndex} style={{ backgroundColor: tag.color, color: tag.textCol, padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600 }}>
                                  {tag.text}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Cost Right Column */}
                          <div style={{ width: '150px', borderLeft: '1px solid #F3F4F6', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '1rem', flexShrink: 0 }}>
                            <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#6B7280', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>ESTIMATED COST</span>
                            <span style={{ fontSize: '2rem', fontWeight: 800, color: '#00D1C1', lineHeight: 1 }}>{activity.cost}</span>
                            <span style={{ fontSize: '0.75rem', color: '#6B7280', marginTop: '0.5rem', textAlign: 'center' }}>{activity.costSubtext}</span>
                          </div>

                        </div>
                        
                        {/* Flow Arrow */}
                        {actIndex < day.activities.length - 1 && (
                          <div style={{ height: '3rem', display: 'flex', alignItems: 'center', paddingLeft: '3rem', color: '#00D1C1', fontSize: '1.5rem', fontWeight: 'bold' }}>
                            ↓
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Sticky Sidebar */}
          <div className="md:col-span-4">
            <div style={{ position: 'sticky', top: '2rem', backgroundColor: '#FFFFFF', borderRadius: '24px', padding: '2rem', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.08)' }}>
              <h2 style={{ margin: '0 0 2rem 0', fontSize: '1.5rem', color: '#023E58' }}>Trip Summary</h2>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <span style={{ color: '#4B5563', fontWeight: 500 }}>Duration</span>
                <span style={{ color: '#023E58', fontWeight: 700 }}>{isParis ? '2' : '5'} Days</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <span style={{ color: '#4B5563', fontWeight: 500 }}>Activities</span>
                <span style={{ color: '#023E58', fontWeight: 700 }}>{isParis ? '4' : '12'} Total</span>
              </div>

              <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '1.5rem', marginBottom: '2rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6B7280', letterSpacing: '0.05em', textTransform: 'uppercase' }}>TOTAL BUDGET</span>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: '#008080', lineHeight: 1.2, marginTop: '0.25rem' }}>
                  {isParis ? '$75' : '$2,450'}
                </div>
                <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>Excluding Flights</span>
              </div>

              <button style={{ width: '100%', padding: '1rem', backgroundColor: '#023E58', color: 'white', border: 'none', borderRadius: '9999px', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}
                      onMouseOver={(e) => e.target.style.backgroundColor = '#012A3C'}
                      onMouseOut={(e) => e.target.style.backgroundColor = '#023E58'}>
                Download PDF
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ItineraryDetail;
