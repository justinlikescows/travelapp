import React from "react";
import Detail from "./Detail";
import styles from './Listings.module.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Card(props) {
  const navigate = useNavigate(); // Initialize useNavigate hook
  // const flightCost = props.flightCost;
  // Function to handle booking
  function bookClicked() {
    // Perform any booking-related actions here
    // For now, let's just navigate to the itinerary page
    navigate("/checkout", { state: {flightCost: props.total, airBNBCost: props.price } });
  }

  return (
    <div className={styles.item}>
      <h3 className={styles.name}>{props.name}</h3>
      <img className={styles.image} src={props.img1} alt={props.name}/> {/* Add alt attribute */}
      <p>{props.address}</p>
      <p>{props.type} with {props.beds} beds and {props.baths} bathrooms for {props.capacity} people.</p>
      <p>Price: ${props.price}</p>
      {/* Use Button's onClick to trigger bookClicked function */}

      <Button className={styles.mybutton} onClick={bookClicked}>Book now</Button>
    </div>
  );
}

export default Card;