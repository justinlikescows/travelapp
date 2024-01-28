import React from "react";
import Detail from "./Detail";
import styles from './Listings.module.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Card(props) {
    return (
        <div className={styles.item}>
              <h3 className={styles.name} >{props.name}</h3>
              <img className={styles.image} src={props.img1}/>
              <p>{props.address}</p>
              <p>{props.type} with {props.beds} beds and {props.baths} bathrooms for {props.capacity} people.</p>
              <p >Price: ${props.price}</p>
              <Link to="/checkout">
              <Button className={styles.mybutton}>Book now</Button>
              </Link>
      </div>
    );
  }

  export default Card;