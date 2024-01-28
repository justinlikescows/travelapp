import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import styles from './Listings.module.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';

import data from './data';
import Card from "./Card";

  

function Listings(){
  const location = useLocation();
  const total = location.state.flightCost;
  function createCard(property) {
    return (
      <Card
        name={property.name}
        address={property.address}
        img1={property.images[0]}
        type={property.roomType}
        beds={property.beds}
        baths={property.bathrooms}
        price={property.price.total}
        total = {total}
      />
    );
  }
  return (
    <body>
      <div>
        <Header />
        <div>
        <h1 className={styles.listingsTitle}>Listings</h1>
          <div className={styles.container}>
            {data.results.map(createCard)}
          </div>
        </div>
      </div>
    </body>
  );
}
        
export default Listings;