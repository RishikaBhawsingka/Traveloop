import React from 'react';
import { Leaf } from 'lucide-react';

const Sustainability = () => {
  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <div style={{ backgroundColor: '#DEF7EC', padding: '1rem', borderRadius: '50%' }}>
          <Leaf color="#03543F" size={32} />
        </div>
        <div>
          <h1 style={{ margin: 0 }}>Sustainability Impact</h1>
          <p style={{ color: 'var(--text-muted)' }}>Track your carbon footprint and eco-friendly choices.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="card p-8 text-center">
          <h2 style={{ color: 'var(--primary)', fontSize: '3rem', marginBottom: '0.5rem' }}>2.4t</h2>
          <h3 style={{ color: 'var(--text-muted)' }}>CO₂ Emissions Offset</h3>
          <p className="mt-4">You have offset equivalent to 112 trees planted through our verified eco-partners.</p>
          <button className="btn btn-outline mt-6">Offset More Flights</button>
        </div>
        <div className="card p-8">
          <h3 className="mb-6">Eco-Friendly Achievements</h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span style={{ fontSize: '1.5rem' }}>🌱</span>
              <div>
                <h4 style={{ margin: 0 }}>Green Stays</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Booked 5 eco-certified hotels</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span style={{ fontSize: '1.5rem' }}>🚲</span>
              <div>
                <h4 style={{ margin: 0 }}>Local Transport</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Used bikes or trains for 40% of trips</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span style={{ fontSize: '1.5rem' }}>♻️</span>
              <div>
                <h4 style={{ margin: 0 }}>Zero Waste Advocate</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Participated in 2 beach cleanups</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
