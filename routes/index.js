const express = require('express'), handleGetMovies = require('../handlers/getMovies'), router = express.Router();

router.get('/movie', handleGetMovies);

module.exports = router;
