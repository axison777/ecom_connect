// routes/index.js
const express = require('express');
const router = express.Router();
const { Participant, Sponsor, News } = require('../models');

// Routes pour les participants
router.post('/participants', async (req, res) => {
  try {
    const participant = await Participant.create(req.body);
    res.status(201).json(participant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Routes pour les sponsors
router.post('/sponsors', async (req, res) => {
  try {
    const sponsor = await Sponsor.create(req.body);
    res.status(201).json(sponsor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Routes pour les actualités
router.post('/news', async (req, res) => {
  try {
    const news = await News.create(req.body);
    res.status(201).json(news);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
