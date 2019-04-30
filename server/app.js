const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const { db, Workout, Exercise } = require('./models');

// Middleware setup

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// You'll of course want static middleware so your browser can request things
// like your 'index.html' and 'bundle.js'.
app.use(express.static(path.join(__dirname, '..', 'build')));

// other routes go below
// app.use('/api', require('./routes'));

// Error handling middleware belongs on the app level, and should come after all of your other middleware (including routing!).

app.use('/workouts', require('./routes/workouts'));
app.use('/exercises', require('./routes/exercises'));

// app.get('/', (req, res, next) => {
//   try {
//     res.send('<h1>Hello</h1>');
//   } catch (error) {
//     console.log(error);
//   }
// });

// catch 404 (i.e., no route was hit) and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  console.log(err);
  res.send(`Something went wrong:  ${err.message}`);
});

const PORT = 3030;
const init = async () => {
  try {
    await db.sync();
    // Remember to remove { force: true } once you're done creating your schema:
    // await db.sync({ force: true });
    app.listen(PORT, () => {
      console.log(`Server us listening on port ${PORT}!`);
    });
  } catch (error) {
    console.log(error);
  }
};

init();
