const express = require('express');
const app = express();

const logURLMiddleware = (req, res, next) => {
  console.log(`URL actual: ${req.url}`);
  next(); 
};
app.use(logURLMiddleware);
app.get('/', (req, res) => {
  res.send('Hello I am heres');
});

const port = 4567;
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
