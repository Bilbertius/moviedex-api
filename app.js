
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const movies = require('./movie-data.json');
const cors = require('cors');
const helmet = require('helmet');
const validateBearerToken = require('./handlers/validateBearerToken.js');

const app = express();


app.use(morgan('dev'));
app.use(cors());
app.use(helmet())

app.use( validateBearerToken);

const getMovies = function (req, res) {
  let { genre, country, avg_vote } = req.query;
  
  let response = movies;
  
  if (genre) {
    response = response.filter(movie => {
      return movie.genre.toLowerCase().includes(genre.toLowerCase());
    });
  }
  
  if (country) {
    response = response.filter(movie => {
      return movie.country.toLowerCase().includes(country.toLowerCase());
    });
  }
  
  if (avg_vote) {
    response = response.filter(movie =>
        +(movie.avg_vote) >= +(req.query.avg_vote)
    );
  }
  
  res.json(response);
};



app.get('/movie', getMovies);



app.listen(8001, () => {
  console.log('Server listening at http://localhost:8001');
});