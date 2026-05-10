const express = require('express');
const router = express.Router();

// @route   GET /api/journal
// @desc    Get all journal posts
// @access  Public
router.get('/', async (req, res) => {
  try {
    // Attempt DB first
    // const JournalPost = require('../models/JournalPost');
    // const posts = await JournalPost.find().sort({ createdAt: -1 });
    throw new Error('No DB config');
  } catch (err) {
    // Fallback to in-memory global array
    res.json(global.dummyPosts || []);
  }
});

// @route   POST /api/journal
// @desc    Create a new journal post
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { content, location, author } = req.body;
    
    const newPost = {
      _id: `p${Date.now()}`,
      author: author || { name: 'Anonymous Traveler', seed: 'anon' },
      location: location || 'Global',
      content: content,
      imageUrl: `https://picsum.photos/seed/${Date.now()}/800/400`,
      likes: 0,
      comments: 0,
      timeAgo: 'Just now'
    };

    if (global.dummyPosts) {
      global.dummyPosts.unshift(newPost); // Add to top of feed
    }

    res.status(201).json({ success: true, message: 'Post published!', post: newPost });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
