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
    // console.log('List of Pantones res', res.body);
    expect(res.status).toBe(200);
  });

  it('#GET by id should return a single Pantone', async () => {
    const res = await request(app).get('/api/v1/colors/1');
    console.log('Single Pantone res', res.body);
    expect(res.status).toEqual({
      id: expect.any(String),
      year: expect.any(Number),
      name: expect.any(String),
      value: expect.any(String),
      hex: expect.any(String),
    });
  });

  afterAll(() => {
    pool.end();
  });
});
