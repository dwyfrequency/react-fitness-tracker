import React from 'react';

export const SidebarAnalytics = props => {
  return (
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
  );
};
