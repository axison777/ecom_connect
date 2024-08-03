const express = require('express');
const router = express.Router();
const Sponsor = require('../models/sponsor');

router.post('/register', async (req, res) => {
  try {
    console.log('Received sponsor data:', req.body);
    const sponsor = await Sponsor.create(req.body);
    console.log('Sponsor created:', sponsor);
    res.status(201).json(sponsor);
  } catch (error) {
    console.error('Error creating sponsor:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
