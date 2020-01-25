const handleGetMovie = (req, res) => {
  let response = MOVIES;

  if (req.query.genre) {
    response = response.filter(movie => {
      movie.genre.toLowerCase().includes(req.query.genre.toLowerCase());
    });
  }

  if (req.query.country) {
    response = response.filter(movie =>
      movie.country.toLowerCase().includes(req.query.country.toLowerCase())
    );
  }

  if (req.query.avg_vote) {
    response = response.filter(
      movie => Number(movie.avg_vote) >= Number(req.query.avg_vote)
    );
  }

  res.json(response);
};

module.exports = handleGetMovie;
