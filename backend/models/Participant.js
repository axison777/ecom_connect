const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Participant = sequelize.define('Participant', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  companyName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  website: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sector: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  activityType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  experience: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  expectations: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  motivation: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  contribution: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  project: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  recommendationLetter: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  accommodationNeeds: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  dietaryRestrictions: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  accessibilityNeeds: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  timestamps: false,
});

module.exports = Participant;
