const express = require('express');
const { Workout } = require('../models');
const router = express.Router();

// GET all workouts
router.get('/', async (req, res, next) => {
  try {
    const data = await Workout.findAll();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

// GET a single workout by id
router.get('/:id', async (req, res, next) => {
  try {
    const workout = await Workout.findByPk(+req.params.id);
    if (!workout) return res.sendStatus(404);
    res.json(workout);
  } catch (error) {
    console.log(error);
  }
});

// POST a new workout
router.post('/', async (req, res, next) => {
  try {
    const { name, date } = req.body;
    res.status(201);
    const data = await Workout.create({ name, date });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

// DELETE a workout by id
router.delete('/:id', async (req, res, next) => {
  try {
    const workout = await Workout.findByPk(+req.params.id);
    if (!workout) return res.sendStatus(404);
    await workout.destroy();
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
