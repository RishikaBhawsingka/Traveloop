import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      // Currently our mock context only has login, so we use it for both for demo purposes
      await login(email, password, isSignUp ? name : '', isSignUp ? country : '');
      navigate('/explore');
    } catch (err) {
      setError('Failed to authenticate: ' + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center" style={{ minHeight: '60vh' }}>
      <div className="card p-8" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="mb-6" style={{ textAlign: 'center' }}>{isSignUp ? 'Create an Account' : 'Welcome Back'}</h2>
        {error && <div style={{ backgroundColor: '#FEE2E2', color: '#991B1B', padding: '0.75rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>{error}</div>}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {isSignUp && (
            <>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Full Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={isSignUp}
                  placeholder="Enter your name" 
                  style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} 
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Country</label>
                <input 
                  type="text" 
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required={isSignUp}
                  placeholder="Your country (e.g. USA, UK, India)" 
                  style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} 
                />
              </div>
            </>
          )}
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email" 
              style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} 
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password" 
              style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} 
            />
          </div>
          <button type="submit" disabled={loading} className="btn btn-primary mt-4">
            {loading ? 'Processing...' : (isSignUp ? 'Sign Up' : 'Login')}
          </button>
        </form>
        <p className="mt-4" style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
          {isSignUp ? 'Already have an account?' : "Don't have an account?"} 
          <span 
            style={{ color: 'var(--primary)', cursor: 'pointer', marginLeft: '0.5rem', fontWeight: 600 }}
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? 'Login' : 'Sign up'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
