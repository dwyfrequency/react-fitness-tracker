import React from 'react';
import { PanelHeader } from './PanelHeader';
import { ExerciseEntry } from './ExerciseEntry';

export const WorkoutLog = ({ workouts, toggleCompleted }) => {
  const workoutEntries = workouts.map(({ id, date, dailyWorkout }, idx) => (
    <div key={`${id}#${idx}`} className="workout">
      <PanelHeader className={'workout-header'} editable={true} />
      {dailyWorkout.map((workout, idx) => (
        <ExerciseEntry
          key={workout + idx}
          itemId={id}
          date={date}
          {...workout}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  ));
  return (
    <div id="workouts">
      {workoutEntries}
      {/* <div className="workout">
        <PanelHeader className={'workout-header'} editable={true} />
        <ExerciseEntry />
        <ExerciseEntry />
      </div> */}
    </div>
  );
};
