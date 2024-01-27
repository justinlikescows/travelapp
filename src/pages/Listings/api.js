// import { ApifyClient } from 'apify-client';

const { ApifyClient } = require('apify-client');

// Initialize the ApifyClient with API token
const client = new ApifyClient({
    token: 'apify_api_J5UcuUzbAvHJdQgp6NaFVRMH6rBQiz1HLpLA',
});

const input = {
    "locationQuery": "Sacramento, California",
    "maxListings": 10,
    "startUrls": [],
    "maxReviews": 10,
    "calendarMonths": 0,
    "currency": "USD",
    "proxyConfiguration": {
        "useApifyProxy": true
    },
    "maxConcurrency": 50,
    "limitPoints": 100,
    "timeoutMs": 300000
};


const x = async () => {
    const run = await client.actor("voyager/airbnb-scraper").call(input);
    console.log('Results from dataset');
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    items.forEach((item) => {
        console.dir(item);
    });
    return items;
};

// Export the function
export default x;


