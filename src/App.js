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
    // debugger;
    // child components are not being rerendered event though we are toggling. Potentially b/c we are not passing a new obj ref and doing it inline/ let's update that
    const workoutReference = workouts.find(element => element.id === id);
    workoutReference.dailyWorkout.forEach(x => {
      if (x.name === name) x.completed = !x.completed;
    });
    console.log(workoutReference);
    // .find(x => x.name === name);
    // workoutReference.completed = !workoutReference.completed;
    // setWorkouts(workouts);
    setWorkouts(workouts);
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
