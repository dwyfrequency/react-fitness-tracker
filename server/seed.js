const { db, Workout, Exercise } = require('./models');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  const [workout1, workout2] = await Promise.all([
    Workout.create({
      name: 'Cardio Day',
      date: new Date(),
    }),
    Workout.create({
      name: 'Leg Day',
      date: new Date(),
    }),
  ]);

  const [exercise1, exercise2] = await Promise.all([
    Exercise.create({
      name: 'Bicycling',
      date: new Date(),
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum \nest volutpat ultricies consequat. Class aptent taciti sociosqu ad litora\n torquent per conubia nostra, per inceptos himenaeos.',
      timeDuration: 30,
      workoutId: workout1.id,
    }),
    Exercise.create({
      name: 'Running',
      description:
        'Blorem ipsum dolor sit amet, consectetur adipiscing elit. Dimsum fermentum \nest volutpat ultricies consequat. Class aptent taciti sociosqu ad litora\n torquent per conubia nostra, per inceptos himenaeos.',
      timeDuration: 45,
      completed: false,
      workoutId: workout1.id,
    }),
    Exercise.create({
      name: 'Swimming',
      date: new Date(),
      description:
        'Vivamus eu consequat ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet mattis augue, eget interdum diam.',
      timeDuration: 30,
      workoutId: workout2.id,
    }),
    Exercise.create({
      name: 'Rowing',
      description: 'Row Row Row',
      timeDuration: 45,
      completed: true,
      workoutId: workout2.id,
    }),
  ]);

  console.log('Seeding successfull!');
}

async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
