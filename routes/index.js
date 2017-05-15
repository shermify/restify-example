// combine routes
import route1 from './route1';
import route2 from './route2';

export default(server) => {
  route1(server);
  route2(server);
};
