const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const shoppingList = [];

app.get('/items', (req, res) => {
  res.json(shoppingList);
});

app.post('/items', (req, res) => {
  const newItem = {
    id: shoppingList.length + 1,
    name: req.body.name,
    price: req.body.price
  };
  shoppingList.push(newItem);
  res.json(newItem);
});

app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = shoppingList.find(item => item.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Artículo no encontrado' });
  }
});

app.patch('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = shoppingList.find(item => item.id === id);
  if (item) {
    item.name = req.body.name || item.name;
    item.price = req.body.price || item.price;
    res.json(item);
  } else {
    res.status(404).json({ message: 'Artículo no encontrado' });
  }
});

app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = shoppingList.findIndex(item => item.id === id);
  if (index !== -1) {
    const deletedItem = shoppingList.splice(index, 1);
    res.json(deletedItem[0]);
  } else {
    res.status(404).json({ message: 'Artículo no encontrado' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
