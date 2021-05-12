const express = require('express');
//const Celebrity = require('../models/celebrity.js');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/*router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(allTheCelebritiesFromDB => {
      res.render('celebrities/index', { celebrities: allTheCelebritiesFromDB }); // pass `allTheDronesFromDB` to the view (as `drones`)
    })
    .catch(error => {
      console.log('Error while getting the celebrities from the DB: ', error);
  
      // Call the error-middleware to display the error page to the user
      next(error);
    });
});*/

module.exports = router;
