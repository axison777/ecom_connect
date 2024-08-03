const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize, Participant } = require('../models');
const participantRoutes = require('../routes/participant');

const app = express();
app.use(bodyParser.json());
app.use('/api/participants', participantRoutes);

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe('Participant Registration', () => {
  it('should register a participant', async () => {
    const response = await request(app)
      .post('/api/participants/register')
      .send({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        country: 'USA'
      });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.firstName).toBe('John');
  });

  it('should not register a participant with missing required fields', async () => {
    const response = await request(app)
      .post('/api/participants/register')
      .send({
        firstName: 'Jane'
      });

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
  });
});
