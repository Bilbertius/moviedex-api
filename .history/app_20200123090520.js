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
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
//Prefix movieRoutes with the /movies

app.use('/movies', moviesRoutes);
app.use(function validateBearerToken(req, res, next) {
  const apiToken = process.env.API_TOKEN;
  const authToken = req.get('Authorization');
  if (!authToken || authToken.split(' ')[1] !== apiToken) {
    return res.status(401).json({ error: 'Unauthorized request' });
  }
  next();
});

app.get('/', (req, res) => {
  return res.send('Hello, butt!');
});

app.listen(8000, () => {
  console.log(
    'The server has started in port 8000 and can be reached by typing localhost:8000 in your browsers address bar.'
  );
});
