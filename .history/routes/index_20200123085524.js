const express = require('express');
const MOVIES = require('../movie-data.json');

const router = express.Router();

router.get('/movies', (req, res) => {
  return res.json(MOVIES);
});

router.get('/movies/:id', (req, res) => {
  const movie = MOVIES.find(film => film.id === +req.params.id);
  return res.json(movie);
});

router.get('/movies/:title', (req, res) => {
  const title = MOVIES.find(film =>
    film.name.toLowerCase().includes(req.params.film_title.toLowerCase())
  );
  return res.json(title.toLowerCase());
});

module.exports = router;
