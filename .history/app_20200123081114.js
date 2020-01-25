require('dotenv').config();
const express = require('express');

const app = express();

const data = require('./movieData');

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
