import hippie from 'hippie'; // eslint-disable-line
import server from '../server';

describe('Hello', () => {
  it('should return name that is entered', (done) => {
    hippie(server)
      .json()
      .get('/hello/test')
      .expectStatus(200)
      .expectValue('hello test')
      .end((err) => {
        if (err) throw err;
        done();
      });
  });
});
