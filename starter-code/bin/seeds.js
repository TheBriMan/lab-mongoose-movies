const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');
const Movie = require('../models/movie.js')
 
const DB_NAME = 'starter-code';
 
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
 
/*const celebrities = [
  {
    name: 'Arnold Schwarzenegger',
    occupation:'Actor',
    catchPhrase: 'Hasta la vista, baby.'
  },
  {
    name: 'Donald J. Trump',
    occupation:'President',
    catchPhrase: 'Yuge!'
  },
  {
    name: 'Harry Kane',
    occupation:'Athlete',
    catchPhrase: 'Come on you Spurs!'
  }
];
 
Celebrity.create(celebrities)
  .then(celebritiesFromDB => {
    console.log(`Created ${celebritiesFromDB.length} celebrities`);
 
    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating celebrities from the DB: ${err}`));*/

  const movies = [
    {
      title: 'Terminator 2: Judgement Day',
      genre:'Action',
      plot: 'Two Terminators try to kill each other and a little kid is super annoying.'
    },
    {
      title: 'Tottenham Days',
      genre:'Documentary',
      plot: 'Spurs have a tough time winning a trophy as this documentary follows then throughout a full season.'
    },
    {
      title: 'Tranquilo Hijo',
      genre:'Documentary',
      plot: 'The story of how Fernando Tatis, Jr. signed a massive mega deal with the Padres.'
    }
  ];
   
  Movie.create(movies)
    .then(moviesFromDB => {
      console.log(`Created ${moviesFromDB.length} movies`);
   
      // Once created, close the DB connection
      mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating movies from the DB: ${err}`));