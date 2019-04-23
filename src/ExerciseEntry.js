import React from 'react';
import { FaRegCircle, FaRegCheckCircle, FaEdit } from 'react-icons/fa';

export const ExerciseEntry = ({
  completed,
  itemId,
  date,
  name,
  description,
  timeDuration,
}) => (
  <React.Fragment>
    <div className="exercise" className="exercise-header">
      <span onClick={() => {}}>
        {completed ? <FaRegCheckCircle /> : <FaRegCircle />}
      </span>
      <h3>Bicycling</h3>
      <span>30 min</span>
    </div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum
      est volutpat ultricies consequat. Class aptent taciti sociosqu ad litora
      torquent per conubia nostra, per inceptos himenaeos.
    </div>
  </React.Fragment>
);
