import React, { useState, useEffect } from 'react';
import { CohereClient } from 'cohere-ai';

const co = new CohereClient({
  token: '3oLfmlBPNNCZBWB008008nFdhJ8Z6rDPCnwRDNyo',
});

function ItineraryComponent({ info }) {
  const [schedule, setSchedule] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await co.generate({
          model: 'command-xlarge-nightly',
          prompt: `Using this information, create an itinerary for the day with 1 to 3 hours between each item:${info}. Format the results as:(time) - (name)\n\tPrice Range: (price range)\n\tLocation: (location)\n\tServices: (services).`,
          max_tokens: 1432,
          temperature: 0.9,
          k: 0,
          stop_sequences: [],
          return_likelihoods: 'NONE',
        });

        setSchedule(`Option: ${response.generations[0].text}`);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [info]);

  return (
    <div>
      <p>{schedule}</p>
    </div>
  );
}

export default ItineraryComponent;
