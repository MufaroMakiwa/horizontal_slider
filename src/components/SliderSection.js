import React from 'react';
import "./SliderSection.css";
import Card from "./Card.js";


const SliderSection = (props) => {
  return (
    <div className="SliderSection-container" id={props.id}>
      <div className="SliderSection-arrow left"> ‹ </div>
      <Card title={Math.floor(Math.random() * 1000)} />
      <Card title={Math.floor(Math.random() * 1000)} />
      <Card title={Math.floor(Math.random() * 1000)} />
      <div className="SliderSection-arrow right"> › </div>   
    </div>
  )
}

export default SliderSection;
