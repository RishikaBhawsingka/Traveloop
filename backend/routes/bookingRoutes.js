const express = require('express');
const router = express.Router();

// @route   GET /api/bookings/user/:userId
// @desc    Get user bookings
// @access  Public
router.get('/user/:userId', async (req, res) => {
  try {
    // Attempt DB first
    const Booking = require('../models/Booking');
    const bookings = await Booking.find({ userId: req.params.userId }).populate('itemId');
    if (bookings.length > 0) return res.json(bookings);
    throw new Error('No DB bookings');
  } catch (err) {
    // Fallback to in-memory global array
    // Filter by userId if it's not 'all' (dummy data defaults to all for UI sake)
    const userBookings = global.dummyBookings.filter(b => b.userId === 'all' || b.userId === req.params.userId);
    res.json(userBookings);
  }
});

// @route   POST /api/bookings
// @desc    Create a new booking (experience, flight, etc)
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { userId, itemType, itemId, totalAmount } = req.body;
    
    const newBooking = {
      _id: `bkg_${Date.now()}`,
      userId: userId || 'all',
      itemType: itemType || 'Experience',
      itemId: itemId || { name: 'Custom Booking' },
      status: 'confirmed',
      totalAmount: totalAmount || 0,
      bookingDate: new Date()
    };
    
    if (global.dummyBookings) {
      global.dummyBookings.unshift(newBooking);
    }
    
    res.status(201).json({ success: true, message: 'Booking confirmed!', booking: newBooking });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

module.exports = router;
