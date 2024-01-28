import React from "react";
import styles from './Flights.module.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function Card(props) {
    const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle booking
  function bookClicked() {
    // Perform any booking-related actions here
    // For now, let's just navigate to the itinerary page
    navigate("/listings", { state: { flightCost: props.total } });
  }
    return (
        <div className={styles.item}>
            <div className="top">
            </div>
            <div className="bottom">
            <p>Cost: ${props.total} {props.currCode}</p>
            <div className={styles.col}>
                <p>Departure:
                {
                    props.segments.map((segment) => 
                        <div>
                        <h5>{segment.departureAirport.code}</h5>
                        <h5>{segment.departureTime}</h5>
                        </div>
                    )
                }</p>
            </div>
            <div className={styles.col}>
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
            <Button className={styles.mybutton} onClick={bookClicked} >Book now</Button>
            </div>
        </div>
    );
}

export default Card;
