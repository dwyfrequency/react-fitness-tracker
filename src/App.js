import React, { useState, useEffect } from 'react';
import { NavBar } from './NavBar';
import { SidebarAnalytics } from './SidebarAnalytics';
import { WorkoutLog } from './WorkoutLog';
import callWorkoutDB from './__mockapi/callWorkoutDb.js';

function App() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    // https://wanago.io/2018/09/17/javascript-testing-tutorial-part-four-mocking-api-calls-and-simulating-react-components-interactions/
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
