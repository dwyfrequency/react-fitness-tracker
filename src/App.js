import React, { useState, useEffect } from 'react';
import { NavBar } from './NavBar';
import { SidebarAnalytics } from './SidebarAnalytics';
import { WorkoutLog } from './WorkoutLog';
import callWorkoutDB from './__mockapi/callWorkoutDb.js';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [analytics, setAnalytics] = useState({
    totalMinutes: 0,
    favoriteExercise: 'Eating',
    percentageCompleted: 0,
    totalExercises: 0,
  });

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

  const calcAnalytics = () => {
    const exerciseCounter = {};
    let totalExercises = 0;
    let totalExercisesCompleted = 0;
    const totalMinutes = workouts.reduce((accum, { dailyWorkout }) => {
      if (exerciseCounter[dailyWorkout.name] === undefined) {
        exerciseCounter[dailyWorkout.name] = 1;
      } else {
        exerciseCounter[dailyWorkout.name] += 1;
      }
      totalExercises++;
      if (dailyWorkout.completed) {
        totalExercisesCompleted++;
        return accum + dailyWorkout.timeDuration;
      }
      return accum;
    }, 0);
    let maxCnt = 0;
    let favoriteExercise = '';
    for (let i in exerciseCounter) {
      if (exerciseCounter.hasOwnProperty(i)) {
        if (exerciseCounter[i] > maxCnt) {
          maxCnt = exerciseCounter[i];
          favoriteExercise = i;
        }
      }
    }
    const percentageCompleted =
      (totalExercisesCompleted / totalExercises) * 100;
    setAnalytics({
      totalMinutes,
      favoriteExercise,
      percentageCompleted,
      totalExercises,
    });
  };

  const toggleCompleted = (e, entryId, workoutName) => {
    const destructureDailyWorkout = dailyWorkout => {
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
    const newWorkoutState = workouts.reduce((accum, entry) => {
      if (entry.id === entryId) {
        const dailyWorkout = destructureDailyWorkout(entry.dailyWorkout);
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
        <SidebarAnalytics />
        <WorkoutLog workouts={workouts} toggleCompleted={toggleCompleted} />
      </div>
    </div>
  );
}

export default App;
