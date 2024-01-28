import React, { useState } from 'react';

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

export default DistanceInput;
