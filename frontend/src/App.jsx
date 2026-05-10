import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Destinations from './pages/Destinations';
import Experiences from './pages/Experiences';
import Dashboard from './pages/Dashboard';
import ItineraryCreator from './pages/ItineraryCreator';
import Journal from './pages/Journal';
import Expenses from './pages/Expenses';
import Sustainability from './pages/Sustainability';
import AdminDashboard from './pages/AdminDashboard';
import Profile from './pages/Profile';
import Bookings from './pages/Bookings';
import ItineraryDetail from './pages/ItineraryDetail';
import DestinationDetail from './pages/DestinationDetail';
import Contact from './pages/Contact';
import Community from './pages/Community';
import Explore from './pages/Explore';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/itinerary/create" element={<ItineraryCreator />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/destinations/:id" element={<DestinationDetail />} />
          <Route path="/itinerary/:id" element={<ItineraryDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/community" element={<Community />} />
          {/* Fallback route to home for any other placeholder pages */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
