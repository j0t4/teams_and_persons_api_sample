import { describe, expect, it, beforeAll, afterAll } from 'jest';
import request from 'supertest';
import { app } from '../../src/app';

describe('Teams API', () => {
  let server: any;

  beforeAll(async () => {
    server = app.listen();
  });

  afterAll(async () => {
    await server.close();
  });

  it('should get all teams', async () => {
    const response = await request(server).get('/api/teams');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it('should create a new team', async () => {
    const response = await request(server)
      .post('/api/teams')
      .send({ name: 'Test Team' });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('Test Team');
  });
});
