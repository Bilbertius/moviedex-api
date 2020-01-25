const express = require('express');
const movieData = require('../movieData.js');

const router = express.Router();

const movies = [...movieData];

router.get('/movies', (req, res) => {
  return res.json(movies);
});

router.get('/movies/:id', (req, res) => {
  const movie = movies.find(film => film.id === +req.params.id);
  return res.json(movie);
});

router.get('/movies/:title', (req, res) => {
  const title = movies.find(film =>
    film.name.toLowerCase().includes(req.params.film_title.toLowerCase())
  );
  return res.json(title.toLowerCase());
});

module.exports = router;
