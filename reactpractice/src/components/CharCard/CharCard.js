import React from "react";
import "./CharCard.css";

const CharCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default CharCard;
