import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-4 text-center">Contact & Support</h1>
      <p className="mb-8 text-center" style={{ color: 'var(--text-muted)', maxWidth: '600px' }}>
        Have questions about your booking or need help planning your next adventure? Our support team is available 24/7.
      </p>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="card p-8">
          <h3 className="mb-6">Send us a message</h3>
          <form className="flex flex-col gap-4">
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
              <input type="text" placeholder="Your name" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
              <input type="email" placeholder="Your email address" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Subject</label>
              <input type="text" placeholder="How can we help?" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
              <textarea placeholder="Write your message here..." style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', minHeight: '150px', resize: 'vertical' }}></textarea>
            </div>
            <button type="button" className="btn btn-primary mt-2">Send Message</button>
          </form>
        </div>

        <div className="flex flex-col gap-6">
          <div className="card p-6">
            <h4 style={{ marginBottom: '0.5rem' }}>Customer Support</h4>
            <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Call us directly for urgent booking issues.</p>
            <p style={{ fontWeight: 600, fontSize: '1.25rem', color: 'var(--primary)' }}>+1 (800) 123-4567</p>
          </div>
          <div className="card p-6">
            <h4 style={{ marginBottom: '0.5rem' }}>Email Us</h4>
            <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>For general inquiries and feedback.</p>
            <p style={{ fontWeight: 600, fontSize: '1.125rem', color: 'var(--primary)' }}>support@traveloop.com</p>
          </div>
          <div className="card p-6">
            <h4 style={{ marginBottom: '0.5rem' }}>Global Headquarters</h4>
            <p style={{ color: 'var(--text-muted)' }}>123 Traveloop Way, Suite 400<br/>San Francisco, CA 94105<br/>United States</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
