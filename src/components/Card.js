import React from 'react';
import "./Card.css";
import AspectRatio from "./AspectRatio.js";

const Card = (props) => {
  return (
    <div className="Card-container">
      {AspectRatio(
        <div className="Card-cardInner">
          <div className="Card-thumbnail">
            <div className="Card-title">{props.title}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Card
