import React from 'react';

const Expenses = () => {
  return (
    <div>
      <h1 className="mb-8">Trip Expenses</h1>
      
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="card p-6" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
          <h3>Total Spent</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700, margin: '1rem 0' }}>$4,250</p>
          <p style={{ opacity: 0.8 }}>Across all trips</p>
        </div>
        <div className="card p-6 md:col-span-3 flex justify-between items-center">
          <div>
            <h3 style={{ color: 'var(--text-muted)' }}>Next Trip Budget: Bora Bora</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '0.5rem' }}>$2,450 / $3,000</p>
          </div>
          <div style={{ width: '150px', height: '10px', backgroundColor: 'var(--border-color)', borderRadius: '5px', overflow: 'hidden' }}>
            <div style={{ width: '81%', height: '100%', backgroundColor: 'var(--accent)' }}></div>
          </div>
        </div>
      </div>

      <div className="card p-0">
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--bg-color)', borderBottom: '1px solid var(--border-color)' }}>
              <th className="p-4">Date</th>
              <th className="p-4">Description</th>
              <th className="p-4">Category</th>
              <th className="p-4">Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              { date: 'Oct 12, 2026', desc: 'Resort Deposit', cat: 'Accommodation', amt: 1200 },
              { date: 'Oct 14, 2026', desc: 'Flights to PPT', cat: 'Transport', amt: 850 },
              { date: 'Oct 15, 2026', desc: 'Scuba Diving Tour', cat: 'Experience', amt: 150 },
              { date: 'Oct 16, 2026', desc: 'Dinner at Sunset Grill', cat: 'Food', amt: 250 }
            ].map((exp, i) => (
              <tr key={i} style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td className="p-4" style={{ color: 'var(--text-muted)' }}>{exp.date}</td>
                <td className="p-4 font-medium">{exp.desc}</td>
                <td className="p-4"><span style={{ backgroundColor: '#E0E7FF', color: '#3730A3', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.875rem' }}>{exp.cat}</span></td>
                <td className="p-4 font-medium">${exp.amt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Expenses;
