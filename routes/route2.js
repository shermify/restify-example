export default(server) => {
  server.get('/route2', (req, res, next) => {
    res.send('Hello from route 2');
    return next();
  });
};
