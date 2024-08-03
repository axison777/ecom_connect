const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize, Sponsor } = require('../models');
const sponsorRoutes = require('../routes/sponsor');

const app = express();
app.use(bodyParser.json());
app.use('/api/sponsors', sponsorRoutes);

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe('Sponsor Registration', () => {
  it('should register a sponsor', async () => {
    const response = await request(app)
      .post('/api/sponsors/register')
      .send({
        organizationName: 'Tech Corp',
        email: 'contact@techcorp.com',
        country: 'USA'
      });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.organizationName).toBe('Tech Corp');
  });

  it('should not register a sponsor with missing required fields', async () => {
    const response = await request(app)
      .post('/api/sponsors/register')
      .send({
        organizationName: 'Innovate Ltd'
      });

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
  });
});
