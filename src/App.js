import React, { useState, useEffect } from 'react';
import { NavBar } from './NavBar';
import { SidebarAnalytics } from './SidebarAnalytics';
import { WorkoutLog } from './WorkoutLog';
import callWorkoutDB from './__mockapi/callWorkoutDb.js';

const getPercent = (numerator, denominator) =>
  `${(numerator / denominator) * 100}%`;

const getFavoriteFromCounter = (obj = {}) => {
  let maxCnt = 0,
    maxKey = '';
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (obj[i] > maxCnt) {
        maxCnt = obj[i];
        maxKey = i;
      }
    }
  }
  return maxKey;
};

const createAnalyticsVars = workouts => {
  const exerciseCounter = {};
  let totalExercises = 0;
  let totalExercisesCompleted = 0;
  const totalMinutes = workouts.reduce(
    (accum, { dailyWorkout: { name, completed, timeDuration } }) => {
      // update our counter object
      if (exerciseCounter[name] === undefined) {
        exerciseCounter[name] = 1;
      } else {
        exerciseCounter[name] += 1;
      }
      // count total exercises
      totalExercises++;
      // count how many were completed
      if (completed) {
        totalExercisesCompleted++;
        // only increase the totalminutes if it's completed
        return accum + timeDuration;
      }
      return accum;
    },
    0
  );
  return {
    exerciseCounter,
    totalExercises,
    totalExercisesCompleted,
    totalMinutes,
  };
};

const destructureDailyWorkout = (dailyWorkout, workoutName) => {
  return dailyWorkout.map(exercise => {
    if (exercise.name === workoutName) {
      const completed = !exercise.completed;
      const newState = {
        ...exercise,
        completed,
      };
      return newState;
    }
    return exercise;
  });
};

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [analytics, setAnalytics] = useState({
    totalMinutes: 0,
    favoriteExercise: 'Eating',
    percentageCompleted: 0,
    totalExercises: 0,
  });

  const calcAnalytics = () => {
    const {
      exerciseCounter,
      totalExercises,
      totalExercisesCompleted,
      totalMinutes,
    } = createAnalyticsVars(workouts);
    const favoriteExercise = getFavoriteFromCounter(exerciseCounter);
    const percentageCompleted = getPercent(
      totalExercisesCompleted,
      totalExercises
    );
    setAnalytics({
      totalMinutes,
      favoriteExercise,
      percentageCompleted,
      totalExercises,
    });
  };

  useEffect(() => {
    callWorkoutDB()
      .then(queryDBObj => queryDBObj.get())
      .then(data => {
        console.log(data);
        const workoutsArr = data.map(({ id, date, dailyWorkout }) => {
          return {
            id,
            date,
            dailyWorkout,
          };
        });
        setWorkouts(workoutsArr);
      });
  }, []);

  const toggleCompleted = (e, entryId, workoutName) => {
    const newWorkoutState = workouts.reduce((accum, entry) => {
      if (entry.id === entryId) {
        const dailyWorkout = destructureDailyWorkout(
          entry.dailyWorkout,
          workoutName
        );
        const newWorkoutObj = {
          ...entry,
          dailyWorkout,
        };
        return accum.concat(newWorkoutObj);
      }
      return accum.concat(entry);
    }, []);

    setWorkouts(newWorkoutState);
  };

  return (
    <div className="App">
      <NavBar />
      <div id="container">
        <SidebarAnalytics analytics={analytics} />
        <WorkoutLog workouts={workouts} toggleCompleted={toggleCompleted} />
      </div>
    </div>
  );
}

export default App;
