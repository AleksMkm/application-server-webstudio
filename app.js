const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`<h1>Main page</h1>`);
});

app.get('/portfolio', (req, res) => {
  res.send(`<h1>Portfolio</h1>`);
});

app.listen(5001, () => {
  console.log(`server running at localhost 5001`);
});
