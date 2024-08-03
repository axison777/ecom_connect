// routes/participantRoutes.js
const express = require('express');
const { registerParticipant } = require('../controllers/participantController');
const router = express.Router();

router.post('/register', registerParticipant);

module.exports = router;
