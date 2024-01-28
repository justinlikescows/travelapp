import React from "react";
import data from "./data2";
import Card from "./Card";
import styles from './Flights.module.css';


function flightCard(property) {
    return (
        <div>
            <Card
                total = {property.priceBreakdown.total.units}
                currCode = {property.priceBreakdown.total.currencyCode}
                segments = {property.segments}
            />
        </div>
    );
}

function Flights(){
    return (
        <div>
        <h1 className={styles.listingsTitle}>Flights</h1>
        <div className={styles.container}>
            
            {/* Iterate over 'data' to render each item */}
            {data.data.flightOffers.map(flightCard)}
            </div>
            </div>
    );
}

export default Flights;
