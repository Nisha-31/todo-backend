const request = require('supertest');
const app = require('../server');

describe('POST /api/login', () => {
  it('should return 400 if email or password is missing', async () => {
    const res = await request(app)
      .post('/api/login')
      .send({ email: 'test@example.com' });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('errors');
    expect(res.body.errors[0]).toHaveProperty('msg', 'Password is required');
  });
});


const mongoose = require('mongoose');

afterAll(async () => {
  await mongoose.connection.close();
});
