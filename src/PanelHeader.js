import React from 'react';
import { FaEdit } from 'react-icons/fa';

export const PanelHeader = props => {
  return (
    <div className={props.className}>
      <h2>Tuesday Routine</h2>
      {props.editable ? <FaEdit /> : null}
    </div>
  );
};
