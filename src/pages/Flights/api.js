import axios from ('axios');
import { useLocation } from 'react-router-dom';

///Get Airports near locations
const options = {
    method: 'GET',
    url: 'https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination',
    params: {
      // query: ///replace with passing///
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

  /*---------------------------------sage's API key----------------------------------*/
  
  // const axios = require('axios');

  // const options = {
  //   method: 'GET',
  //   url: 'https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights',
  //   params: {
  //     fromId: 'SNA.AIRPORT',
  //     toId: 'CDG.AIRPORT',
  //     departDate: '2024-01-29',
  //     returnDate: '2024-01-31',
  //     pageNo: '1',
  //     adults: '1',
  //     children: '0',
  //     currency_code: 'USD'
  //   },
  //   headers: {
  //     'X-RapidAPI-Key': 'de6c0c495emshed181890b1a69bfp1a3179jsn34f6709e851a',
  //     'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
  //   }
  // };
  
  // try {
  //   const response = await axios.request(options);
  //   console.log(response.data);
  // } catch (error) {
  //   console.error(error);
  // }