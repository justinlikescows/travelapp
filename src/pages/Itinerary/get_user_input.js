import React, { useState } from 'react';

function LocationInput({ onLocationSubmit }) {
  const [location, setLocation] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onLocationSubmit(location);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your location (city, or specific address):
          <input type="text" value={location} onChange={handleLocationChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

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

function DistanceInput({ onDistanceSubmit }) {
  const [distance, setDistance] = useState('');

  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onDistanceSubmit(distance);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter distance in miles (max is 25):
          <input type="number" value={distance} onChange={handleDistanceChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function UserInput() {
  const handleLocationSubmit = (location) => {
    console.log('Location:', location);
    // Handle the location data as needed
  };

  const handleActivitySubmit = (selectedActivities) => {
    console.log('Selected Activities:', selectedActivities);
    // Handle the selected activities data as needed
  };

  const handleDistanceSubmit = (distance) => {
    console.log('Distance:', distance);
    // Handle the distance data as needed
  };

  return (
    <div>
      <LocationInput onLocationSubmit={handleLocationSubmit} />
      <ActivitySelection onActivitySubmit={handleActivitySubmit} />
      <DistanceInput onDistanceSubmit={handleDistanceSubmit} />
      {/* Add your itinerary and other components here */}
    </div>
  );
}

export default UserInput;
