import React, { useState } from 'react';

const Journal = () => {
  const [documents, setDocuments] = useState([
    { id: 1, text: 'Passport (Valid for 6+ months)', checked: false },
    { id: 2, text: 'Travel Visa', checked: false },
    { id: 3, text: 'Flight Tickets', checked: false },
    { id: 4, text: 'Hotel Reservations', checked: false },
    { id: 5, text: 'Travel Insurance', checked: false }
  ]);

  const [clothing, setClothing] = useState([
    { id: 1, text: 'T-Shirts & Tops', checked: false },
    { id: 2, text: 'Pants & Shorts', checked: false },
    { id: 3, text: 'Underwear & Socks', checked: false },
    { id: 4, text: 'Comfortable Walking Shoes', checked: false },
    { id: 5, text: 'Jacket / Sweater', checked: false }
  ]);

  const [items, setItems] = useState([
    { id: 1, text: 'Toothbrush & Toothpaste', checked: false },
    { id: 2, text: 'Shampoo & Body Wash', checked: false },
    { id: 3, text: 'Universal Power Adapter', checked: false },
    { id: 4, text: 'Portable Power Bank', checked: false },
    { id: 5, text: 'Medications', checked: false }
  ]);

  const toggleCheck = (list, setList, id) => {
    setList(list.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const renderChecklist = (title, list, setList) => (
    <div className="card p-6">
      <h3 className="mb-4 text-primary">{title}</h3>
      <ul className="flex flex-col gap-3">
        {list.map(item => (
          <li key={item.id} className="flex items-center gap-3">
            <input 
              type="checkbox" 
              checked={item.checked} 
              onChange={() => toggleCheck(list, setList, item.id)}
              style={{ width: '1.25rem', height: '1.25rem', accentColor: 'var(--primary)', cursor: 'pointer' }}
            />
            <span style={{ textDecoration: item.checked ? 'line-through' : 'none', color: item.checked ? 'var(--text-muted)' : 'var(--text-main)', cursor: 'pointer' }} onClick={() => toggleCheck(list, setList, item.id)}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-4 pt-4" style={{ borderTop: '1px dashed var(--border-color)' }}>
        <input type="text" placeholder="+ Add custom item" className="w-full" style={{ padding: '0.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', width: '100%' }} />
      </div>
    </div>
  );

  return (
    <div>
      <div className="mb-8">
        <h1>Trip Preparation Journal</h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', marginTop: '0.5rem' }}>
          Keep track of everything you need for your upcoming trips. Tick items off as you pack to ensure you never forget the essentials!
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {renderChecklist('📄 Documents Needed', documents, setDocuments)}
        {renderChecklist('👕 Clothing', clothing, setClothing)}
        {renderChecklist('🎒 Toiletries & Items', items, setItems)}
      </div>
    </div>
  );
};

export default Journal;
