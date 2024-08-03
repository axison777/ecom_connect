// models/index.js
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.ecom_connect,
  process.env.axison777,
  process.env.dragonfly,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

const Participant = sequelize.define('Participant', {
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: false },
  title: { type: DataTypes.STRING },
  organizationName: { type: DataTypes.STRING },
  country: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  phone: { type: DataTypes.STRING },
  website: { type: DataTypes.STRING },
  sector: { type: DataTypes.STRING },
  activityType: { type: DataTypes.STRING },
  activityDescription: { type: DataTypes.TEXT },
  ecomExperience: { type: DataTypes.TEXT },
  objectives: { type: DataTypes.TEXT },
  motivation: { type: DataTypes.TEXT },
  contribution: { type: DataTypes.TEXT },
  projectPresentation: { type: DataTypes.TEXT },
  recommendationLetter: { type: DataTypes.STRING },
  accommodation: { type: DataTypes.TEXT },
  dietaryRequirements: { type: DataTypes.TEXT },
  accessibilityNeeds: { type: DataTypes.TEXT },
});

const Sponsor = sequelize.define('Sponsor', {
  organizationName: { type: DataTypes.STRING, allowNull: false },
  country: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  phone: { type: DataTypes.STRING },
  website: { type: DataTypes.STRING },
  contactName: { type: DataTypes.STRING },
  contactRole: { type: DataTypes.STRING },
  sector: { type: DataTypes.STRING },
  organizationType: { type: DataTypes.STRING },
  activityDescription: { type: DataTypes.TEXT },
  values: { type: DataTypes.TEXT },
  sponsorshipLevel: { type: DataTypes.STRING },
  budget: { type: DataTypes.DECIMAL },
  benefits: { type: DataTypes.TEXT },
  contribution: { type: DataTypes.TEXT },
  logo: { type: DataTypes.STRING },
  standNeeds: { type: DataTypes.TEXT },
  personnelNeeds: { type: DataTypes.TEXT },
  communicationNeeds: { type: DataTypes.TEXT },
  communicationObjectives: { type: DataTypes.TEXT },
  targetAudience: { type: DataTypes.TEXT },
  successMetrics: { type: DataTypes.TEXT },
});

const News = sequelize.define('News', {
  image: { type: DataTypes.STRING },
  message: { type: DataTypes.TEXT, allowNull: false },
});

sequelize.sync({ force: true });

module.exports = { Participant, Sponsor, News, sequelize };
