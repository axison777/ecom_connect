const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('ecommerce_connect', 'axison777', 'Dragonfly', {
  host: 'localhost',
  dialect: 'mysql'
});

const Sponsor = sequelize.define('Sponsor', {
  companyName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  website: {
    type: DataTypes.STRING
  },
  contactName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contactTitle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sector: {
    type: DataTypes.STRING,
    allowNull: false
  },
  activityType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  activityDescription: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  companyValues: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  sponsorshipLevel: {
    type: DataTypes.STRING,
    allowNull: false
  },
  budget: {
    type: DataTypes.STRING,
    allowNull: false
  },
  benefits: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  contribution: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  logo: {
    type: DataTypes.STRING
  },
  standNeeds: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  staffNeeds: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  communicationNeeds: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  marketingGoals: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  targetAudience: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  successMetrics: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: false
});

sequelize.sync()
  .then(() => {
    console.log('Sponsors table has been successfully created, if one doesn\'t exist');
  })
  .catch(error => console.log('This error occurred', error));

module.exports = Sponsor;
