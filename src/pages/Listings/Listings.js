import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import styles from './Listings.module.css';

import data from './data';
import Card from "./Card";
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
          />
        );
      }

    function Listings(){

            return (
                <div>
                    <h1 className={styles.listingsTitle}>Listings</h1>
                    <div className={styles.container}>
                      {data.results.map(createCard)}
                    </div>

                    </div>
            );
        }
        
        export default Listings;