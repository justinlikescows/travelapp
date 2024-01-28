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

export default LocationInput;
