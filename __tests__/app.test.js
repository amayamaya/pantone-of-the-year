const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('#GET all should return a list of Pantones', async () => {
    const res = await request(app).get('/api/v1/colors');
    console.log('hey all Panbtones res', res.body);
    expect(res.status).toBe(200);
  });

  afterAll(() => {
    pool.end();
  });
});
