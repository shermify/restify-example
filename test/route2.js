import hippie from 'hippie'; // eslint-disable-line
import server from '../server';

describe('Route 2', () => {
  it('should return the name of the route', (done) => {
    hippie(server).json().get('/route2').expectStatus(200)
    .expectValue('Hello from route 2')
    .end((err) => {
      if (err) {
        throw err;
      }
      done();
    });
  });
});
