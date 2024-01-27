import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

import data from './data';
import Card from "./Card";
// const { ApifyClient } = require('apify-client');

    // Initialize the ApifyClient with API token
    // const client = new ApifyClient({
    //     token: 'apify_api_J5UcuUzbAvHJdQgp6NaFVRMH6rBQiz1HLpLA',
    // });

    // // Define locationQuery variable
    // const locationQuery = "Sacramento, California"; // You can replace this with dynamic value from user input

    // Prepare Actor input
    // const input = {
    //     "locationQuery": locationQuery,
    //     "maxListings": 1,
    //     "startUrls": [],
    //     "maxReviews": 1,
    //     "calendarMonths": 0,
    //     "currency": "USD",
    //     "proxyConfiguration": {
    //         "useApifyProxy": true
    //     },  
    //     "maxConcurrency": 50,
    //     "limitPoints": 100,
    //     "timeoutMs": 300000
    // };

    // (async () => {
    //     // Run the Actor and wait for it to finish
    //     const run = await client.actor("voyager/airbnb-scraper").call(input);

    //     // Fetch and print Actor results from the run's dataset (if any)
    //     console.log('Results from dataset');
    //     const { items } = await client.dataset(run.defaultDatasetId).listItems();
    //     items.forEach((item) => {
    //         // console.dir(item);
    //         <Card property={item} />
    //     });
    // })();

    function createCard(property) {
        return (
          <Card
            name={property.name}
            address={property.address}
            img={property.images[0]}
            type={property.roomType}
            price={property.price.total}

            // numGuests={property.numberOfGuests}
          />
        );
      }

    function Listings(){
        //    const [data, setData] = useState([]);
        //     useEffect(() => {
        //         //setData(x());
        //     }, [])

            return (
                <div>
                    <h1>Listings</h1>
                    {/* Iterate over 'data' to render each item */}
                    {data.results.map(createCard)}
                        {/* // <h1>{item.name}</h1> */}
                        // createCard;
                    </div>
            );
        }
        
        export default Listings;

// // const { ApifyClient } = require('apify-client');

//     // Initialize the ApifyClient with API token
//     const client = new ApifyClient({
//         token: 'apify_api_J5UcuUzbAvHJdQgp6NaFVRMH6rBQiz1HLpLA',
//     });

//     // Define locationQuery variable
//     const locationQuery = "Sacramento, California"; // You can replace this with dynamic value from user input

//     // Prepare Actor input
//     const input = {
//         "locationQuery": locationQuery,
//         "maxListings": 1,
//         "startUrls": [],
//         "maxReviews": 1,
//         "calendarMonths": 0,
//         "currency": "USD",
//         "proxyConfiguration": {
//             "useApifyProxy": true
//         },
//         "maxConcurrency": 50,
//         "limitPoints": 100,
//         "timeoutMs": 300000
//     };

//     (async () => {
//         // Run the Actor and wait for it to finish
//         const run = await client.actor("voyager/airbnb-scraper").call(input);

//         // Fetch and print Actor results from the run's dataset (if any)
//         console.log('Results from dataset');
//         const { items } = await client.dataset(run.defaultDatasetId).listItems();
//         items.forEach((item) => {
//             console.dir(item);
//         });
//     })();