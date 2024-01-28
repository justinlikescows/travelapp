import React from "react";
import styles from './Flights.module.css';

function Detail(props) {
  return <p className="info">{props.detailInfo}</p>;
}

export default Detail;
