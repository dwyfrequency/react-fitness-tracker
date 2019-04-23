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

  const toggleCompleted = (e, id, name) => {
    const destructureDailyWorkout = (dailyWorkout, name) => {
      return dailyWorkout.map(x => {
        if (x.name === name) {
          const completed = !x.completed;
          const newState = {
            ...x,
            completed,
          };
          console.log('new state');
          // return {
          //   ...x,
          //   completed,
          // };
          return newState;
        }
        return x;
      });
    };
    const newWorkoutState = workouts.reduce((accum, werk) => {
      if (werk.id === id) {
        const dailyWorkout = destructureDailyWorkout(werk.dailyWorkout, name);
        const newWorkoutObj = {
          ...werk,
          dailyWorkout,
        };
        return accum.concat(newWorkoutObj);
      }
      return accum.concat(werk);
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
