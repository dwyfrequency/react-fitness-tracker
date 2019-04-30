const express = require('express');
const router = express.Router();
const { db } = require('../models');

// router.get('/', (req, res, next) => {
//   Promise.all([
//     Hotel.findAll({ include: [{ all: true }] }), // include all true allows for eager loading
//     // essentially allows us to take a foreign key and return the full details of its row
//     Restaurant.findAll(),
//     Activity.findAll(),
//   ])
//     .then(data => {
//       res.json(data);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

module.exports = router;
