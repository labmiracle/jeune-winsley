const express = require('express');
const app = express();
app.get('/yo', (req, res) => {
  res.send('Hellooo');
});
const puerto = 4567;
app.listen(puerto, () => {
  console.log(`Servidor Express escuchando en el puerto ${puerto}`);
});
