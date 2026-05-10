import React, { createContext, useContext, useState, useEffect } from 'react';
// import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
// import { auth } from '../firebase';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('traveloop_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [loading, setLoading] = useState(false); // set to true if using real firebase

  // MOCK AUTHENTICATION for UI demonstration
  const login = async (email, password, nameParam, countryParam) => {
    // Mock login delay
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    const userName = nameParam || 'Traveler';
    const userObj = { 
      email, 
      uid: `uid-${Date.now()}`, 
      name: userName,
      country: countryParam || 'Unknown'
    };
    setCurrentUser(userObj);
    localStorage.setItem('traveloop_user', JSON.stringify(userObj));
    setLoading(false);
  };

  const logout = async () => {
    setCurrentUser(null);
    localStorage.removeItem('traveloop_user');
  };

  /* REAL FIREBASE IMPLEMENTATION (Uncomment when config is added)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }
  
  const logout = () => {
    return signOut(auth);
  }
  */

  const value = {
    currentUser,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
