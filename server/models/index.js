const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/react-fitness-tracker', {
  logging: false,
});

const Workout = db.define('workout', {
  name: { type: Sequelize.STRING, allowNull: false },
  date: { type: Sequelize.DATE },
});

const Exercise = db.define('exercise', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  timeDuration: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
});

Workout.hasMany(Exercise);
Exercise.belongsTo(Workout);

module.exports = { db, Workout, Exercise };
