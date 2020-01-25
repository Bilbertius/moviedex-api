const express = require('express');
const movieData = require('movieData');

const router = express.router();

const movies = [...movieData];

router.get('/movies', (req, res) => {
  return res.json(movies);
});

router.get('/movies/:id', (req, res) => {
  const movie = movies.find(film => film.id === +req.params.id);
  return res.json(movie);
});
