// controllers/participantController.js
const { Participant } = require('../models');

const registerParticipant = async (req, res) => {
  try {
    const participant = await Participant.create(req.body);
    res.status(201).json(participant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { registerParticipant };
