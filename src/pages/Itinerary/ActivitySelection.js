import React, { useState } from 'react';

function ActivitySelection({ onActivitySubmit }) {
  const activityList = ['restaurant', 'entertainment', 'outdoors', 'drinks', 'sports'];
  const [selectedActivities, setSelectedActivities] = useState([]);

  const handleActivityChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedActivities(selectedOptions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onActivitySubmit(selectedActivities);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Select which activity you want to do (If you would like to make multiple choices, please separate each choice by a space):
          <select multiple value={selectedActivities} onChange={handleActivityChange}>
            {activityList.map((activity, index) => (
              <option key={index} value={String(index + 1)}>{`${index + 1}: ${activity}`}</option>
            ))}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ActivitySelection;
