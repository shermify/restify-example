export default (server) => {
  server.get('/hello/:name', (req, res, next) => {
    res.send(`hello ${req.params.name}`);
    return next();
  });
};
