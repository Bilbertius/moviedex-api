const express = require('express');
const MOVIES = require('../movie-data.json');

const router = express.Router();

router.get('/', (req, res) => {
  return res.json(MOVIES);
});

router.get('/:id', (req, res) => {
  const movie = MOVIES.find(film => film.filmTV_ID === +req.params.id);
  return res.json(movie);
});

router.get('/:title', (req, res) => {
  const title = MOVIES.find(film =>
    film.name.toLowerCase().includes(req.params.film_title.toLowerCase())
  );
  return res.json(title.toLowerCase());
});

module.exports = router;
