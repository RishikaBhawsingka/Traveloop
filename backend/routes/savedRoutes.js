const express = require('express');
const router = express.Router();

// @route   GET /api/saved/user/:userId
// @desc    Get user's saved destinations
// @access  Public
router.get('/user/:userId', async (req, res) => {
  try {
    // In-memory fallback
    const saved = global.dummySavedDestinations.filter(d => d.userId === req.params.userId || d.userId === 'all');
    res.json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// @route   POST /api/saved
// @desc    Save a destination
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { userId, destinationId, destinationData } = req.body;
    
    // Check if already saved
    const exists = global.dummySavedDestinations.find(d => d.userId === userId && d.destinationId === destinationId);
    if (exists) {
      return res.status(400).json({ message: 'Already saved' });
    }

    const newSaved = {
      _id: `save_${Date.now()}`,
      userId,
      destinationId,
      destinationData, // store the basic info so we don't have to populate
      savedAt: new Date()
    };

    if (global.dummySavedDestinations) {
      global.dummySavedDestinations.unshift(newSaved);
    }

    res.status(201).json({ success: true, message: 'Destination saved!' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
