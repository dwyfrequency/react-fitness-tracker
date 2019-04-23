import React from 'react';

export const MainHeader = props => {
  return (
    <div className={props.className}>
      <h2>Tuesday Routine</h2>
      {props.editable ? <FaEdit /> : null}
    </div>
  );
};
