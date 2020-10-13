const express = require('express');
const exhbs = require('express-handlebars');
const products = require('./portfolio.json');

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
  res.render('home', { cssFileName: 'main', jsName: 'main' });
});

app.get('/portfolio', (req, res) => {
  res.render('portfolio', {
    products,
    cssFileName: 'portfolio',
    jsName: 'portfolio',
  });
});

app.get('/:productId', (req, res) => {
  console.log(req.params);

  const product = products.find(p => p.id === req.params.productId);

  res.render('product', {
    product,
    cssFileName: 'portfolio',
    jsName: 'portfolio',
  });
});

app.listen(PORT, () => {
  console.log(`Application server is running on port ${PORT}`);
});
