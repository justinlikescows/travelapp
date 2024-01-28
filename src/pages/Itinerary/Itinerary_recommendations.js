// import React, { useState, useEffect } from 'react';
// import { CohereClient } from 'cohere-ai';

// const co = new CohereClient({
//   token: '3oLfmlBPNNCZBWB008008nFdhJ8Z6rDPCnwRDNyo',
// });

// function ItineraryComponent({ info }) {
//   const [schedule, setSchedule] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await co.generate({
//           model: 'command-xlarge-nightly',
//           prompt: `Using this information, create an itinerary for the day with 1 to 3 hours between each item:${info}. Format the results as:(time) - (name)\n\tPrice Range: (price range)\n\tLocation: (location)\n\tServices: (services).`,
//           max_tokens: 1432,
//           temperature: 0.9,
//           k: 0,
//           stop_sequences: [],
//           return_likelihoods: 'NONE',
//         });

//         setSchedule(`Option: ${response.generations[0].text}`);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchData();
//   }, [info]);

//   return (
//     <div>
//       <p>{schedule}</p>
//     </div>
//   );
// }

// export default ItineraryComponent;


import React, { useState, useEffect } from 'react';
import { CohereClient } from 'cohere-ai';
import { InfinitySpin } from 'react-loader-spinner';
import './iti.css';

const co = new CohereClient({
  token: '3oLfmlBPNNCZBWB008008nFdhJ8Z6rDPCnwRDNyo',
});

function ItineraryComponent(props) {
  const [schedule, setSchedule] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await co.generate({
          model: 'command-xlarge-nightly',
          prompt: `can you give me a detailed 3 day itinerary for traveling to ${props.location}, including attractions as well as food? additionally, can you format it so that its item by item? so for example,after saying day 1, it would say restaurant name and then descriptions after.`,
          max_tokens: 1432,
          temperature: 0.9,
          k: 0,
          stop_sequences: [],
          return_likelihoods: 'NONE',
        });

        setSchedule(`Option: ${response.generations[0].text}`);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const lines = schedule.split('\n').map(line => line.trim()).filter(line => line !== '');
  

  return (
    <div className="everything">
    <div className="title">Trip Itinerary</div>
    {loading ? (
      <InfinitySpin
        visible={true}
        width="200"
        color="#990000"
        ariaLabel="infinity-spin-loading"
      />
    ) : (
      lines.slice(1).map((line, index) => (
        <div key={index} className={line.startsWith('Day') ? 'day-line' : 'normal-line'}>
          {line}
        </div>
      ))
    )}
  </div>
  );

}

export default ItineraryComponent;