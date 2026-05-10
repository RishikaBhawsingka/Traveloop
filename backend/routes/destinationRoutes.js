const express = require('express');
const router = express.Router();
const Destination = require('../models/Destination');

// @route   GET /api/destinations
// @desc    Get all destinations (with dummy fallback if DB fails)
// @access  Public
router.get('/', async (req, res) => {
  try {
    const destinations = await Destination.find();
    if (destinations.length > 0) {
      return res.json(destinations);
    }
    throw new Error('No destinations found in DB');
  } catch (err) {
    // Fallback to dummy data so the UI never breaks
    console.warn("Falling back to dummy destinations data:", err.message);
    res.json([
      { _id: 'd1', name: 'Kyoto, Japan', description: 'Ancient temples and gardens.', imageUrl: 'https://picsum.photos/seed/kyoto/800/600', pricePerNight: 120, rating: 4.8 },
      { _id: 'd2', name: 'Santorini, Greece', description: 'Stunning sunsets and white houses.', imageUrl: 'https://picsum.photos/seed/santorini/800/600', pricePerNight: 200, rating: 4.9 },
      { _id: 'd3', name: 'Bali, Indonesia', description: 'Tropical paradise and beaches.', imageUrl: 'https://picsum.photos/seed/bali/800/600', pricePerNight: 80, rating: 4.7 },
      { _id: 'd4', name: 'Swiss Alps', description: 'Snowy mountains and skiing.', imageUrl: 'https://picsum.photos/seed/alps/800/600', pricePerNight: 150, rating: 4.9 }
    ]);
  }
});

// @route   GET /api/destinations/:id
// @desc    Get destination by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (!destination) throw new Error('Not found');
    res.json(destination);
  } catch (err) {
    // Fallback logic
    const dummyDestinations = [
      { _id: 'd1', name: 'Kyoto, Japan', description: 'Ancient temples and gardens.', imageUrl: 'https://picsum.photos/seed/kyoto/800/600', pricePerNight: 120, rating: 4.8 },
      { _id: 'd2', name: 'Santorini, Greece', description: 'Stunning sunsets and white houses.', imageUrl: 'https://picsum.photos/seed/santorini/800/600', pricePerNight: 200, rating: 4.9 },
      { _id: 'd3', name: 'Bali, Indonesia', description: 'Tropical paradise and beaches.', imageUrl: 'https://picsum.photos/seed/bali/800/600', pricePerNight: 80, rating: 4.7 },
      { _id: 'd4', name: 'Swiss Alps', description: 'Snowy mountains and skiing.', imageUrl: 'https://picsum.photos/seed/alps/800/600', pricePerNight: 150, rating: 4.9 }
    ];
    const dest = dummyDestinations.find(d => d._id === req.params.id) || dummyDestinations[0]; // fallback to first if not found
    res.json(dest);
  }
});

module.exports = router;
