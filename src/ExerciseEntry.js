import React from 'react';
import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa';

export const ExerciseEntry = ({
  completed,
  itemId,
  date,
  name,
  description,
  timeDuration,
  toggleCompleted,
}) => {
  console.log('rendering log');
  return (
    <React.Fragment>
      <div className="exercise exercise-header">
        <span onClick={e => toggleCompleted(e, itemId, name)}>
          {completed ? <FaRegCheckCircle /> : <FaRegCircle />}
        </span>
        <h3>{name}</h3>
        <span>{timeDuration} min</span>
      </div>
      <div>{description}</div>
    </React.Fragment>
  );
};
