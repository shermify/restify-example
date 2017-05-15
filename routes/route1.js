export default(server) => {
  server.get('/route1', (req, res, next) => {
    res.send('Hello from route 1');
    return next();
  });
};
