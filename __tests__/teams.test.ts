//import { describe, expect, it, beforeAll, afterAll } from '@jest/globals';
import request from 'supertest';
//import server from 'nextjs-http-supertest';

describe('Teams API', () => {
  

  beforeAll(async () => {
    //
  });

  afterAll(async () => {
   //await server.close();
  });

  it('should get all teams', async () => {
    const response = await request("http://localhost:3000").get('/api/teams');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it('should create a new team', async () => {
    const response = await request("http://localhost:3000")
      .post('/api/teams')
      .send({ name: 'Test Team' });
    expect(response.status).toBe(200); // Assuming successful creation returns 201
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('Test Team');
  });
});
