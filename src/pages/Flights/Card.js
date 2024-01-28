import React from "react";
// import Detail from "./Detail";


function Card(props) {
    return (
        <div className="card">
            <div className="top">
            </div>
            <div className="bottom">
            <p>Cost: ${props.total} {props.currCode}</p>
            <p>Departure:
            {
                props.segments.map((segment) => 
                    <div>
                    <h5>{segment.departureAirport.code}</h5>
                    <h5>{segment.departureTime}</h5>
                    </div>
                )
            }</p>
            <p>Arrival:
            {
                props.segments.map((segment) => 
                    <div>
                    <h5>{segment.arrivalAirport.code}</h5>
                    <h5>{segment.arrivalTime}</h5>
                    </div>
                )
            }</p>
            </div>
        </div>
    );
}

export default Card;
