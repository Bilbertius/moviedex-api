//import packages that were previously installed as modules
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

//Initialize express app
const app = express();

//Retrieve data
const data = require('./movieData');

//Tell app to use routes defined in routes/index.js
const movieRoutes = require('./routes');

//tell application to use middleware
app.use(bodyParser.json());

app.use(movieRoutes);

app.get('/', (req, res) => {
  return res.send('Hello, butt!');
});

app.get('/movie', (req, res) => {
  let movies = [...data];
  return;
});

app.listen(8000, () => {
  console.log(
    'The server has started in port 8000 and can be reached by typing localhost:8000 in your browsers address bar.'
  );
});
