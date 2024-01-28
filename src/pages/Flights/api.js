import axios from ('axios');
import { useLocation } from 'react-router-dom';

///Get Airports near locations
const options = {
    method: 'GET',
    url: 'https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination',
    params: {
      query: ///replace with passing///
    },
    headers: {
      'X-RapidAPI-Key': '15beabd670mshb97acf07efb311dp1817c8jsnbce2b9c7b9a5', ///hide away in .env
      'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
    }
  };
  
  try {
      const response = await axios.request(options);
      console.log(response.data);
  } catch (error) {
      console.error(error);
  }

// const options = {
//   method: 'GET',
//   url: 'https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights',
//   params: {
//     fromId: 'BOM.AIRPORT',
//     toId: 'DEL.AIRPORT',
//     departDate: '<REQUIRED>',
//     pageNo: '1',
//     adults: '1',
//     children: '0,17',
//     currency_code: 'AED'
//   },
//   headers: {
//     'X-RapidAPI-Key': '15beabd670mshb97acf07efb311dp1817c8jsnbce2b9c7b9a5',
//     'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }