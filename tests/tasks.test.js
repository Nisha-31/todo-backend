const request = require('supertest');
const app = require('../server'); 

describe('GET /api/tasks', () => {
  it('should require auth and return 401 if not logged in', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toBe(401);
  });
});

const mongoose = require('mongoose');

afterAll(async () => {
  await mongoose.connection.close();
});
