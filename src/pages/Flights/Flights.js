import React from "react";
import data from "./data2";
import Card from "./Card";
import styles from './Flights.module.css';
import Header from '../../components/Header/Header';


function flightCard(property) {
    return (
        <Card
            total = {property.priceBreakdown.total.units}
            currCode = {property.priceBreakdown.total.currencyCode}
            segments = {property.segments}
        />
    );
}

function Flights() {
    return (
        <body>
            <div>
                <Header />
                <div>
                    <h1 className={styles.flightsTitle}>Flights</h1>
                    <div className={styles.container}>
                        
                        {/* Iterate over 'data' to render each item */}
                        {data.data.flightOffers.map(flightCard)}
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Flights;
