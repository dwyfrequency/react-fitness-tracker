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

  // const calcAnalytics = () => {
  //   const exerciseCounter = {};
  //   const totalMinutes = workouts.reduce((accum, { dailyWorkout }) => {
  //     if (exerciseCounter[dailyWorkout.name] === undefined) {
  //       exerciseCounter[dailyWorkout.name] = 1;
  //     } else {
  //       exerciseCounter[dailyWorkout.name] += 1;
  //     }
  //     return (accum += dailyWorkout.completed ? dailyWorkout.timeDuration : 0);
  //   }, 0);
  //   let totalExerciseCounter = 0,
  //     totalCompletedCounter = 0,
  //     favoriteExercise = '';
  //   for (let i in exerciseCounter) {
  //     if (exerciseCounter.hasOwnProperty(i)) {
  //       totalExerciseCounter += '';
  //     }
  //   }
  // };

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
