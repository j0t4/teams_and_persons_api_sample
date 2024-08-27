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
    expect(response.status).toBe(200); // Assuming successful creation returns 200
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('Test Team');
  });

  it('should get a team by id', async () => {
    const createResponse = await request("http://localhost:3000")
      .post('/api/teams')
      .send({ name: 'Test Team' });
    expect(createResponse.status).toBe(200);
    const createdTeamId = createResponse.body.id;

    const getResponse = await request("http://localhost:3000").get(`/api/teams/${createdTeamId}`);
    expect(getResponse.status).toBe(200);
    expect(getResponse.body.id).toBe(createdTeamId);
    expect(getResponse.body.name).toBe('Test Team');
  });

  it('should update a team', async () => {
    const createResponse = await request("http://localhost:3000")
      .post('/api/teams')
      .send({ name: 'Test Team' });
    expect(createResponse.status).toBe(200);
    const createdTeamId = createResponse.body.id;

    const updateResponse = await request("http://localhost:3000")
      .patch(`/api/teams/${createdTeamId}`)
      .send({ name: 'Updated Team Name' });
    expect(updateResponse.status).toBe(200);
    expect(updateResponse.body.name).toBe('Updated Team Name');
  });

  it('should delete a team', async () => {
    const createResponse = await request("http://localhost:3000")
      .post('/api/teams')
      .send({ name: 'Team to Delete' });
    expect(createResponse.status).toBe(200); 

    const teamIdToDelete = createResponse.body.id;
    const deleteResponse = await request("http://localhost:3000")
      .delete(`/api/teams/${teamIdToDelete}`);
    expect(deleteResponse.status).toBe(200);

    const getResponse = await request("http://localhost:3000").get(`/api/teams/${teamIdToDelete}`);
    expect(getResponse.status).toBe(404);
  });
});
