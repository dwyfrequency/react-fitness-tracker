import React, { useState, useEffect } from 'react';
import { NavBar } from './NavBar';
import { SidebarAnalytics } from './SidebarAnalytics';
import { WorkoutLog } from './WorkoutLog';
import { FaRegCircle, FaRegCheckCircle, FaEdit } from 'react-icons/fa';
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

  const toggleCompleted = e => {};
  return (
    <div className="App">
      <NavBar />
      <div id="container">
        <SidebarAnalytics />
        <WorkoutLog workouts={workouts} />
      </div>
    </div>
  );
}

export default App;
