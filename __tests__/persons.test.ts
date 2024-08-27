import request from 'supertest';

describe('Persons API', () => {
  it('should get all persons', async () => {
    const response = await request("http://localhost:3000").get('/api/persons');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it('should create a new person', async () => {
    const response = await request("http://localhost:3000")
      .post('/api/persons')
      .send({ name: 'Test Person' });
    expect(response.status).toBe(200); 
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('Test Person');
  });

  it('should get a person by id', async () => {
    const createResponse = await request("http://localhost:3000")
      .post('/api/persons')
      .send({ name: 'Test Person' });
    expect(createResponse.status).toBe(200);
    const createdPersonId = createResponse.body.id;

    const getResponse = await request("http://localhost:3000").get(`/api/persons/${createdPersonId}`);
    expect(getResponse.status).toBe(200);
    expect(getResponse.body.id).toBe(createdPersonId);
    expect(getResponse.body.name).toBe('Test Person');
  });

  it('should update a person', async () => {
    const createResponse = await request("http://localhost:3000")
      .post('/api/persons')
      .send({ name: 'Test Person' });
    expect(createResponse.status).toBe(200);
    const createdPersonId = createResponse.body.id;

    const updateResponse = await request("http://localhost:3000")
      .patch(`/api/persons/${createdPersonId}`)
      .send({ name: 'Updated Person Name' });
    expect(updateResponse.status).toBe(200);
    expect(updateResponse.body.name).toBe('Updated Person Name');
  });

  it('should delete a person', async () => {
    const createResponse = await request("http://localhost:3000")
      .post('/api/persons')
      .send({ name: 'Person to Delete' });
    expect(createResponse.status).toBe(200); 

    const personIdToDelete = createResponse.body.id;
    const deleteResponse = await request("http://localhost:3000")
      .delete(`/api/persons/${personIdToDelete}`);
    expect(deleteResponse.status).toBe(200);

    const getResponse = await request("http://localhost:3000").get(`/api/persons/${personIdToDelete}`);
    expect(getResponse.status).toBe(200);
    expect(getResponse.body).toEqual(null);
  });
});
