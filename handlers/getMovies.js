
const MOVIES = require('../movie-data');

const handleGetMovie = (req, res) => {
  let response = MOVIES;
  let { genre, country, avg_vote} = req.query;

  if (req.query.genre) {
    response = response.filter(movie => {
      movie.genre.toLowerCase().includes(genre.toLowerCase());
    });
  }

  if (req.query.country) {
    response = response.filter(movie =>
      movie.country.toLowerCase().includes(country.toLowerCase())
    );
  }

  if (req.query.avg_vote) {
    response = response.filter(
      movie => +(movie.avg_vote) >= +(avg_vote)
    );
  }

  res.json(response);
};


module.exports = handleGetMovie;
