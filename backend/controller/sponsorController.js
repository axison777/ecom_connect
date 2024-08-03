// controllers/sponsorController.js
const { Sponsor } = require('../models');

const registerSponsor = async (req, res) => {
  try {
    const sponsor = await Sponsor.create(req.body);
    res.status(201).json(sponsor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { registerSponsor };
