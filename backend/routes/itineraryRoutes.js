const express = require('express');
const router = express.Router();

// @route   POST /api/itineraries
// @desc    Create a new itinerary
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { title, destination, startDate, endDate, days, userId } = req.body;
    
    // In a real app we save to DB. Since we are using mock data, 
    // we'll push to the global bookings array so it shows up in Dashboard
    const newBooking = {
      _id: `itin_${Date.now()}`,
      userId: userId || 'all',
      itemType: 'Itinerary',
      itemId: { name: title || `Trip to ${destination}` },
      status: 'confirmed',
      totalAmount: 0, // estimate
      bookingDate: startDate ? new Date(startDate) : new Date()
    };
    
    if (global.dummyBookings) {
      global.dummyBookings.unshift(newBooking); // add to top
    }

    console.log("Saved itinerary to memory:", title);
    
    res.status(201).json({ 
      success: true, 
      message: 'Itinerary saved successfully!',
      itineraryId: newBooking._id
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

module.exports = router;
