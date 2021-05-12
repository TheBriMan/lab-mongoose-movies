const express = require('express');
const Movie = require('../models/movie.js');
const router  = express.Router();

router.get('/movies', (req, res, next) => {
    Movie.find()
      .then(allTheMoviesFromDB => {
        res.render('movies/index', { movies: allTheMoviesFromDB });
      })
      .catch(error => {
        console.log('Error while getting the movies from the DB: ', error);
        next(error);
      });
  });

router.get('/movies/new', (req, res) => res.render('movies/new'));

router.post('/movies/new', (req, res) => {
  const { title, genre, plot } = req.body;

  Movie.create({ title, genre, plot })
    .then(() => res.redirect('/movies'))
    .catch(error => console.log(`Error while creating a new movie:`, error));
});

  router.get('/movies/:movieId', (req, res) => {
    const { movieId } = req.params;
  
    Movie.findById(movieId)
      .then(theMovie => res.render('movies/show', { movie: theMovie }))
      .catch(error => {
        console.log('Error while retrieving movie details: ', error);
        next(error);
      });
  });

  router.post('/movies/:id/delete', (req, res) => {
    const { id } = req.params;
  
    Movie.findByIdAndRemove(id)
      .then(() => res.redirect('/movies'))
      .catch(error => next(error));
  });

  module.exports = router;