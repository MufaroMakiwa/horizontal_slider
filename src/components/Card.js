import React from 'react';
import "./Card.css";

const Card = (props) => {
  return (
    <div className="Card-container">
      <div className="Card-thumbnail">
        <div className="Card-title">
          {props.title}
        </div>
      </div>
    </div>
  )
}

export default Card
