import React from "react";
import Detail from "./Detail";


function Card(props) {
    return (
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img src={props.img}/>
        </div>
        <div className="bottom">
          <Detail detailInfo={props.address} />
          <Detail detailInfo={props.roomType} />
          <p>${props.price}</p>

        </div>
      </div>
    );
  }

  export default Card;
