import React, { useEffect, useState } from 'react';

const API_KEY = 'Bearer rlDWY6ro4dO-te4yEdDxzDmOG5Zx0pr8jtWYbvbMvF11brloUF0oeOzaoCo1I_9nZIU72r4QqeHcvqU-SrxNTFDP56g6WhiRcDrQsKADdDJ-PEio2YlLiOxpoiVEZHYx';

function checkIfOpen(business) {
  return business.is_closed;
}

function checkIfAddress(business) {
  return business.location.address1 && business.location.address1.trim() !== '';
}

function priceToRange(business) {
  if ('price' in business) {
    const price = business.price;
    if (price === '$') {
      return 'less than $10';
    } else if (price === '$$') {
      return '$11-$30';
    } else if (price === '$$$') {
      return '$31-$60';
    } else if (price === '$$$$') {
      return 'more than $60';
    }
  } else {
    return 'There is no specified price range.';
  }
}

function sortData(business) {
  if (checkIfOpen(business) && checkIfAddress(business)) {
    const name = business.name;
    const addressLocation = business.location.display_address;
    const address = addressLocation.join(' ');
    let services = '';
    const lenCategories = business.categories.length;
    business.categories.forEach((category, index) => {
      services += category.title;
      if (index < lenCategories - 1) {
        services += ', ';
      }
    });
    const phoneNum = business.display_phone.trim().length > 0 ? business.display_phone : 'N/A';
    return `Name: ${name}\nPrice Range: ${priceToRange(business)}\nAddress: ${address}\nServices: ${services}\nPhone Number: ${phoneNum}\n`;
  } else {
    return null;
  }
}

function YelpDataComponent() {
  const [finalList, setFinalList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const location = 'YourLocation'; // replace with your location state or prop
        const activity = 'YourActivity'; // replace with your activity state or prop
        const distance = 'YourDistance'; // replace with your distance state or prop

        const finalData = await getDataFromAPI(location, activity, distance);
        setFinalList(finalData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div>
      {finalList.map((item, index) => (
        <div key={index}>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}

async function getDataFromAPI(location, activity, distance) {
  const finalList = [];
  const limit = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
  const url = `https://api.yelp.com/v3/businesses/search?location=${location}&term=${activity}&radius=${distance}&sort_by=distance&limit=${limit}`;
  const headers = {
    accept: 'application/json',
    'content-type': 'application/json',
    Authorization: API_KEY,
  };

  try {
    const response = await fetch(url, { headers });
    const data = await response.json();
    const randomList = [];
    for (let i = 0; i < 5; i++) {
      const num = Math.floor(Math.random() * (limit - 1)) + 1;
      randomList.push(num);
    }

    const numOfBusiness = data.businesses;
    randomList.forEach((index) => {
      if (numOfBusiness[index]) {
        const result = sortData(numOfBusiness[index]);
        if (result) {
          finalList.push(result);
        }
      }
    });
  } catch (error) {
    console.error('Error:', error);
  }

  return finalList;
}

export default YelpDataComponent;
