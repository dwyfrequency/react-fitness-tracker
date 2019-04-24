import React from 'react';

export const SidebarAnalytics = ({
  analytics: { totalMinutes, favoriteExercise, percentageCompleted },
}) => {
  return (
    <div id="analytics">
      <div>
        <div id="analytics-header">
          <h2>Analytics</h2>
        </div>
        <dl id="analytics-list">
          <div>
            <dt>Total Minutes Exercised:{totalMinutes} mins</dt>
            <dd id="total-minutes" />
          </div>
          <div>
            <dt>Favorite Exercise: {favoriteExercise}</dt>
            <dd id="favorite-exercise" />
          </div>
          <div>
            <dt>Percentage Completed: {percentageCompleted}</dt>
            <dd id="percentage-completed" />
          </div>
        </dl>
      </div>
    </div>
  );
};
