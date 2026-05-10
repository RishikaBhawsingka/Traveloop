const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// In-Memory Global State for Demo (since DB is not connected)
global.dummyBookings = [
  { _id: 'b1', userId: 'all', itemType: 'Destination', itemId: { name: 'Bora Bora Resort' }, status: 'confirmed', totalAmount: 2450, bookingDate: new Date('2026-10-12') },
  { _id: 'b2', userId: 'all', itemType: 'Experience', itemId: { title: 'Kyoto Tea Ceremony' }, status: 'pending', totalAmount: 120, bookingDate: new Date('2026-11-05') },
  { _id: 'b3', userId: 'all', itemType: 'Destination', itemId: { name: 'Swiss Alps Cabin' }, status: 'completed', totalAmount: 1800, bookingDate: new Date('2025-12-20') }
];

global.dummyPosts = [
  { _id: 'p1', author: { name: 'Sarah Traveler', seed: 'Sarah' }, location: 'Kyoto, Japan', content: 'Just arrived in Kyoto and it is absolutely breathtaking!', imageUrl: 'https://picsum.photos/seed/post1/800/400', likes: 245, comments: 42, timeAgo: '2 hours ago' },
  { _id: 'p2', author: { name: 'John Explorer', seed: 'John' }, location: 'Santorini, Greece', content: 'Watching the sunset from Oia. The views are just as incredible as everyone says.', imageUrl: 'https://picsum.photos/seed/post2/800/400', likes: 189, comments: 15, timeAgo: '5 hours ago' }
];

global.dummySavedDestinations = [];

// Routes
// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/destinations', require('./routes/destinationRoutes'));
app.use('/api/experiences', require('./routes/experienceRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/itineraries', require('./routes/itineraryRoutes'));
app.use('/api/journal', require('./routes/journalRoutes'));
app.use('/api/saved', require('./routes/savedRoutes'));

app.get('/', (req, res) => {
  res.send('Traveloop API is running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
