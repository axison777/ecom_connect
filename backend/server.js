const sequelize = require('./config/database');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const Participant = require('./models/Participant');
const Sponsor = require('./models/sponsor');
const app = express();
const PORT = process.env.PORT || 5000;

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database & tables created!');
  });

app.use(bodyParser.json());

// Utiliser CORS avec les options par défaut (permettre toutes les origines)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let participants = [];
// Routes pour les participants
app.post('/api/participants/register', (req, res) => {
  const participant = req.body;
  console.log('Participant reçu :', participant);  // Log pour vérifier le participant reçu
  participants.push(participant);
  console.log('Participants actuels :', participants);  // Log pour vérifier l'état de la liste des participants
  res.status(200).send('Participant enregistré avec succès');
});

// Route GET pour récupérer tous les participants
app.get('/api/participants', (req, res) => {
  console.log('Récupération des participants');  // Log pour vérifier que la route GET est appelée
  res.status(200).json(participants);
});

app.put('/api/participants/:id', async (req, res) => {
  try {
    const [updated] = await Participant.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedParticipant = await Participant.findByPk(req.params.id);
      res.status(200).json(updatedParticipant);
    } else {
      res.status(404).json({ error: 'Participant not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/api/participants/:id', async (req, res) => {
  try {
    const deleted = await Participant.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Participant not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Routes pour les sponsors

app.post('/api/sponsors/register', async (req, res) => {
  try {
    const sponsor = await Sponsor.create(req.body);
    res.status(201).json(sponsor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/sponsors', async (req, res) => {
  try {
    const sponsors = await Sponsor.findAll();
    res.status(200).json(sponsors);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/sponsors/:id', async (req, res) => {
  try {
    const sponsor = await Sponsor.findByPk(req.params.id);
    if (sponsor) {
      res.status(200).json(sponsor);
    } else {
      res.status(404).json({ error: 'Sponsor not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.put('/api/sponsors/:id', async (req, res) => {
  try {
    const [updated] = await Sponsor.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedSponsor = await Sponsor.findByPk(req.params.id);
      res.status(200).json(updatedSponsor);
    } else {
      res.status(404).json({ error: 'Sponsor not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/api/sponsors/:id', async (req, res) => {
  try {
    const deleted = await Sponsor.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Sponsor not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
