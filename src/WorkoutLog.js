import React from 'react';
import { PanelHeader } from './PanelHeader';
import { ExerciseEntry } from './ExerciseEntry';
import { FaRegCircle, FaRegCheckCircle, FaEdit } from 'react-icons/fa';

export const WorkoutLog = ({ workouts }) => {
  const workoutEntries = workouts.map(({ id, date, dailyWorkout }, idx) => (
    <div key={`${id}#${idx}`} className="workout">
      <PanelHeader className={'workout-header'} editable={true} />
      {dailyWorkout.map((workout, idx) => (
        <ExerciseEntry
          key={workout + idx}
          itemId={id}
          date={date}
          {...workout}
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
