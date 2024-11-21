const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
  it('should return Hello Telco!', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello Telco!', done);
  });
});
