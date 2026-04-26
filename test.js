import { expect } from 'chai';
import request from 'supertest';
import app from './server.js';

describe('Ballot Buddy API Tests', function() {
  
  it('should serve the frontend index.html on GET /', async function() {
    const response = await request(app).get('/');
    expect(response.status).to.equal(200);
    expect(response.type).to.equal('text/html');
    expect(response.text).to.include('Ballot Buddy');
  });

  it('should return a 500 or 429 error for an invalid/rate-limited Gemini payload', async function() {
    // This tests the robust error handling without burning real Gemini tokens
    const response = await request(app)
      .post('/api/chat')
      .send({ message: "Hello", language: "English" })
      .set('Accept', 'application/json');
      
    // It should not crash the server. It should gracefully return JSON.
    expect(response.type).to.equal('application/json');
    expect(response.body).to.have.property('error');
    expect([429, 500]).to.include(response.status);
  });

});
