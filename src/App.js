import React, { useState } from 'react';
import { NavBar } from './NavBar';
import { SidebarAnalytics } from './SidebarAnalytics';
import { WorkoutLog } from './WorkoutLog';
import { FaRegCircle, FaRegCheckCircle, FaEdit } from 'react-icons/fa';

function App() {
  const toggleCompletedBtn = e => {};
  return (
    <div className="App">
      <NavBar />
      <div id="container">
        <SidebarAnalytics />
        <WorkoutLog />
      </div>
    </div>
  );
}

export default App;
