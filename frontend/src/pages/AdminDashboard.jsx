import React from 'react';

const AdminDashboard = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1>Admin Control Panel</h1>
        <button className="btn btn-primary">Generate Reports</button>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="card p-6 text-center">
          <h3 style={{ color: 'var(--text-muted)' }}>Total Users</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700, margin: '1rem 0' }}>1,245</p>
        </div>
        <div className="card p-6 text-center">
          <h3 style={{ color: 'var(--text-muted)' }}>Active Bookings</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700, margin: '1rem 0', color: 'var(--primary)' }}>342</p>
        </div>
        <div className="card p-6 text-center">
          <h3 style={{ color: 'var(--text-muted)' }}>Revenue (MTD)</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700, margin: '1rem 0', color: 'var(--accent)' }}>$84k</p>
        </div>
        <div className="card p-6 text-center">
          <h3 style={{ color: 'var(--text-muted)' }}>Support Tickets</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700, margin: '1rem 0', color: '#991B1B' }}>12</p>
        </div>
      </div>

      <h2>Recent Platform Activity</h2>
      <div className="card mt-4 p-0">
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--bg-color)', borderBottom: '1px solid var(--border-color)' }}>
              <th className="p-4">User</th>
              <th className="p-4">Action</th>
              <th className="p-4">Time</th>
            </tr>
          </thead>
          <tbody>
            {[
              { user: 'Sarah T.', action: 'Booked Santorini Experience', time: '5 mins ago' },
              { user: 'John D.', action: 'Created New Itinerary', time: '12 mins ago' },
              { user: 'Elena M.', action: 'Posted to Journal', time: '1 hour ago' }
            ].map((log, i) => (
              <tr key={i} style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td className="p-4 font-medium">{log.user}</td>
                <td className="p-4">{log.action}</td>
                <td className="p-4" style={{ color: 'var(--text-muted)' }}>{log.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
