const bodyParser = require('body-parser');
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');

const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(morgan('tiny'));

// requiring routes middleware
const moviesRoutes = require('./routes');
app.use('/movies', moviesRoutes);

app.get('/', (req, res) => {
  return res.redirect('/movies');
});

app.use(bodyParser.json());

//Prefix movieRoutes with the /movies
app.use('/movies', movieRoutes);

app.get('/', (req, res) => {
  return res.send('Hello, butt!');
});

app.listen(8000, () => {
  console.log(
    'The server has started in port 8000 and can be reached by typing localhost:8000 in your browsers address bar.'
  );
});
