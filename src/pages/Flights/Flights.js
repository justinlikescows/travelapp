import React from "react";
import data from "./data";
import Card from "./Card";


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
            <h1>Flights</h1>
            {/* Iterate over 'data' to render each item */}
            {data.data.flightOffers.map(flightCard)}
            </div>
    );
}

export default Flights;
