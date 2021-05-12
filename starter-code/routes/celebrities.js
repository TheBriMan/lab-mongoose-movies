const express = require('express');
const Celebrity = require('../models/celebrity.js');
const router  = express.Router();

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
      .then(allTheCelebritiesFromDB => {
        res.render('celebrities/index', { celebrities: allTheCelebritiesFromDB }); // pass `allTheDronesFromDB` to the view (as `drones`)
      })
      .catch(error => {
        console.log('Error while getting the celebrities from the DB: ', error);
    
        // Call the error-middleware to display the error page to the user
        next(error);
      });
  });

router.get('/celebrities/new', (req, res) => res.render('celebrities/new'));

router.post('/celebrities/new', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => res.redirect('/celebrities'))
    .catch(error => console.log(`Error while creating a new celebrity:`, error));
});

router.get('/celebrities/:celebrityId', (req, res) => {
  const { celebrityId } = req.params;

  Celebrity.findById(celebrityId)
    .then(theCelebrity => res.render('celebrities/show', { celebrity: theCelebrity }))
    .catch(error => {
      console.log('Error while retrieving celebrity details: ', error);
      next(error);
    });
});

router.post('/celebrities/:id/delete', (req, res) => {
  const { id } = req.params;

  Celebrity.findByIdAndRemove(id)
    .then(() => res.redirect('/celebrities'))
    .catch(error => next(error));
});

  module.exports = router;