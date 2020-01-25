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

router.get('/movies/:title', (req, res) => {
  const title = movies.find(film => film.name === req.params.film_title);
  return res.json(film);
});
