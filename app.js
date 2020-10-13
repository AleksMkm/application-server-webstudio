const express = require('express');
const exhbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.static('public'));

app.set('view engine', 'hbs');

app.engine(
  'hbs',
  exhbs({
    extname: 'hbs',
    layoutsDir: __dirname + '/views/layouts',
  }),
);

app.get('/', (req, res) => {
  res.render('home', { cssFileName: 'main' });
});

app.get('/portfolio', (req, res) => {
  res.render('portfolio', { cssFileName: 'portfolio' });
});

app.listen(PORT, () => {
  console.log(`Application server is running on port ${PORT}`);
});
