const express = require('express');
const exhbs = require('express-handlebars');

const app = express();

app.set('view engine', 'hbs');

app.engine(
  'hbs',
  exhbs({
    extname: 'hbs',
    layoutsDir: __dirname + '/views/layouts',
  }),
);

app.get('/', (req, res) => {
  res.send(`<h1>Main page</h1>`);
});

app.get('/portfolio', (req, res) => {
  res.send(`<h1>Portfolio</h1>`);
});

app.listen(5001, () => {
  console.log(`server running at localhost 5001`);
});
