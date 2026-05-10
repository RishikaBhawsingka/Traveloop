const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');

// @route   GET /api/experiences
// @desc    Get all experiences (with dummy fallback if DB fails)
// @access  Public
router.get('/', async (req, res) => {
  try {
    const experiences = await Experience.find().populate('destinationId');
    if (experiences.length > 0) {
      return res.json(experiences);
    }
    throw new Error('No experiences found in DB');
  } catch (err) {
    // Fallback to dummy data
    console.warn("Falling back to dummy experiences data:", err.message);
    const dummyExperiences = [1, 2, 3, 4, 5, 6, 7, 8].map(item => ({
      _id: `e${item}`,
      title: `Mountain Hiking Tour ${item}`,
      description: 'A wonderful adventure.',
      imageUrl: `https://picsum.photos/seed/exp${item}/800/600`,
      price: 85 + (item * 10),
      duration: '3 hours',
      category: 'Adventure',
      rating: 4.5
    }));
    res.json(dummyExperiences);
  }
});

module.exports = router;
