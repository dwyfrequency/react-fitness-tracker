const { db, Workout, Exercise } = require('./models');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  const [hotelPlace1] = await Promise.all([
    Workout.create({
      name: 'Leg Day',
    }),
  ]);

  const [hotel1, hotel2, hotel3, hotel4, hotel5] = await Promise.all([
    Workout.create({
      name: 'Andaz Wall Street',
      date: 4,
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
