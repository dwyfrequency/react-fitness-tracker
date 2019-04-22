import React from 'react';
import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="header">
        <h1>Fitness 🚴‍♂️ Tracker 🏃‍♀️ Pro</h1>
      </div>
      <div id="container">
        <div id="analytics">
          <div>
            <div id="analytics-header">
              <h2>Analytics</h2>
            </div>
            <dl id="analytics-list">
              <div>
                <dt>Total Minutes Exercised:</dt>
                <dd id="total-minutes" />
              </div>
              <div>
                <dt>Favorite Exercise:</dt>
                <dd id="favorite-exercise" />
              </div>
              <div>
                <dt>Percentage Completed:</dt>
                <dd id="percentage-completed" />
              </div>
            </dl>
          </div>
        </div>
        <div id="workouts">
          <div class="workout">
            <div class="workout-header">
              <h2>Tuesday Routine</h2>
              <FaRegCircle />
            </div>
            <div id="exercise-1" class="exercise-header">
              <i class="far fa-circle" />
              <h3>Bicycling</h3>
              <span>30 min</span>
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              fermentum est volutpat ultricies consequat. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.
            </div>
            <div id="exercise-2" class="exercise-header">
              <FaRegCircle />
              <h3>Running</h3>
              <span>45 min</span>
            </div>
            <div>
              Praesent at ex sed diam pellentesque congue pellentesque eu felis.
              Aliquam erat volutpat. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Nunc vel orci
              laoreet, commodo quam in, dignissim purus. Nunc a lacinia eros,
              sed lobortis ipsum.
            </div>
          </div>
          <div class="workout">
            <div class="workout-header">
              <h2>Saturday Routine</h2>
              <i class="fas fa-edit" />
            </div>
            <div id="exercise-3" class="exercise-header">
              <FaRegCircle />
              <h3>Swimming</h3>
              <span>30 min</span>
            </div>
            <div>
              Vivamus eu consequat ante. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Suspendisse sit amet mattis augue, eget interdum
              diam.
            </div>
            <div id="exercise-4" class="exercise-header">
              <FaRegCircle />
              <h3>Running</h3>
              <span>20 min</span>
            </div>
            <div>
              Cras vestibulum, libero vel convallis molestie, magna tortor
              tempor lacus, eu aliquet erat magna a lacus. Vestibulum mauris
              nibh, ultrices in tortor a, eleifend placerat mi. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. In dapibus sed felis pharetra luctus.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
