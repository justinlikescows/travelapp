import React, { useEffect } from 'react';

const API_KEY = 'Bearer vIJp-pW2ISoT0G0LVHUpdwhRfESBy_W5Wl53c2kpoalMOEIATNBkxNK_9ZNmn1IOjo6fG9Kb6tHxoGZJGl61DgB5FfkvgOj8dKIPNIMxsqMMAPGoLGVbXCuzn_NDZHYx';

function YelpApiCall() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const priceLevel = prompt('Enter number of $!');
        const searchWords = prompt("Enter any activity that you want to do:\n").replace(/ /g, "_").trim();

        const url = `https://api.yelp.com/v3/businesses/search?attributes=${searchWords}&sort_by=best_match&limit=20&location=LA&price=${priceLevel}`;

        const headers = {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": API_KEY
          // Add other headers if needed
        };

        const response = await fetch(url, { headers });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div>
      {/* Add your JSX here if needed */}
    </div>
  );
}

export default YelpApiCall;
