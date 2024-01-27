import React, { useState, useEffect } from 'react';
import SortAPI from './sort_API';
import { getLocation, getActivity, getDistance } from './get_user_input';
import itinerary from './itinerary_recommendations';

function App() {
  const [quit, setQuit] = useState(false);
  const [location, setLocation] = useState('');
  const [activities, setActivities] = useState([]);
  const [distance, setDistance] = useState('');
  const [finalList, setFinalList] = useState([]);
  const [schedule, setSchedule] = useState('');
  const [quitInput, setQuitInput] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (!quit) {
        setLocation(await getLocation());
        setActivities(await getActivity());
        setDistance(await getDistance());
      }

      const list = [];
      for (const activity of activities) {
        list.push(await SortAPI.getDataFromAPI(location, activity, parseInt(distance) * 1600));
      }
      setFinalList(list);

      let stringify = '';
      for (const i of finalList) {
        for (const j of i) {
          stringify += j + '\n';
        }
      }

      const result = await itinerary(stringify);
      setSchedule(result);

      if (!quit) {
        const userInput = prompt("If you are happy with your result, enter 'q' to exit: ");
        setQuitInput(userInput.trim().toLowerCase());
      }
    };

    fetchData();
  }, [location, activities, distance, finalList, quit]);

  useEffect(() => {
    if (quitInput === 'q') {
      setQuit(true);
    }
  }, [quitInput]);

  return (
    <div>
      {/* Display your React components, schedule, and other information here */}
    </div>
  );
}

export default App;
