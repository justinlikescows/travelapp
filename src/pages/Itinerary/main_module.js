import React, { useState, useEffect } from 'react';
import SortAPI from './sort_API';
// import { getLocation, getActivity, getDistance } from './get_user_input';
// import UserInput from './get_user_input';
import LocationInput from './LocationInput';
import ActivitySelection from './ActivitySelection';
import DistanceInput from './DistanceInput';
// import itinerary from './Itinerary_recommendations';
import ItineraryComponent from './Itinerary_recommendations';


function ItineraryYay() {
  const [quit, setQuit] = useState(false);
  const [location, setLocation] = useState('');
  const [activities, setActivities] = useState([]);
  const [distance, setDistance] = useState('');
  const [finalList, setFinalList] = useState([]);
  const [schedule, setSchedule] = useState('');
  const [quitInput, setQuitInput] = useState('');

//   const fetchData = async () => {
//     if (!quit) {
//       const list = [];
//       for (const activity of activities) {
//         list.push(await SortAPI.getDataFromAPI(location, activity, parseInt(distance) * 1600));
//       }
//       setFinalList(list);

//       let stringify = '';
//       for (const i of list) {
//         for (const j of i) {
//           stringify += j + '\n';
//         }
//       }

//       const result = await itinerary(stringify);
//       setSchedule(result);

//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       const list = [];
//       for (const activity of activities) {
//         list.push(await SortAPI.getDataFromAPI(location, activity, parseInt(distance) * 1600));
//       }
//       setFinalList(list);

//       let stringify = '';
//       for (const i of finalList) {
//         for (const j of i) {
//           stringify += j + '\n';
//         }
//       }

//       const result = await itinerary(stringify);
//       setSchedule(result);

//     };

//     fetchData();
//   }, [location, activities, distance, finalList, quit]);

//   const whatever = (submittedLocation) => {
//     const result = itinerary("stringify");
//     setSchedule(result);
//   };

  const handleLocationSubmit = (submittedLocation) => {
    setLocation(submittedLocation);
  };

  const hanleActivitySubmit = (submittedLocation) => {
    setActivities(submittedLocation);
  };


  const handleDistanceSubmit = (submittedLocation) => {
    setDistance(submittedLocation);
    // whatever();
  };

  return (
    <div>
      {/* <LocationInput onLocationSubmit={handleLocationSubmit} />
      <ActivitySelection onActivitySubmit={hanleActivitySubmit} />
      <DistanceInput onDistanceSubmit={handleDistanceSubmit} /> */}
      {/* <ItineraryComponent info:{} /> */}
      {/* {schedule} */}
      <ItineraryComponent/>
    </div>
  );
}

export default ItineraryYay;
