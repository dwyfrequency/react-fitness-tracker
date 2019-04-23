import React from 'react';
import { Header } from './Header';
import { SidebarAnalytics } from './SidebarAnalytics';
import WorkooutLog, { WorkoutLog } from './WorkoutLog';
import { FaRegCircle, FaRegCheckCircle, FaEdit } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="container">
        <SidebarAnalytics />
        <WorkoutLog />
      </div>
    </div>
  );
}

export default App;
