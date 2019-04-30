const express = require('express');
const { Exercise } = require('../models');
const router = express.Router();

// GET all exercises
router.get('/', async (req, res, next) => {
  try {
    const data = await Exercise.findAll();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

// GET a single exercise by id
router.get('/:id', async (req, res, next) => {
  try {
    const exercise = await Exercise.findByPk(+req.params.id);
    if (!exercise) return res.sendStatus(404);
    res.json(exercise);
  } catch (error) {
    console.log(error);
  }
});

// POST a new exercise
router.post('/', async (req, res, next) => {
  try {
    const { name, completed, description } = req.body;
    const data = await Exercise.create({ name, completed, description });
    res.status(201);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

// DELETE an exercise by id
router.delete('/:id', async (req, res, next) => {
  try {
    const exercise = await Exercise.findByPk(+req.params.id);
    if (!exercise) return res.sendStatus(404);
    await exercise.destroy();
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
