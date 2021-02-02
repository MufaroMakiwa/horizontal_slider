import React from 'react';
import "./CarouselSection.css";
import Card from "./Card.js";
import "../utilities.css";


const CarouselSection = (props) => {
  return (
    <div className="CarouselSection-container">
      <Card title={Math.floor(Math.random() * 1000)} />
      <Card title={Math.floor(Math.random() * 1000)} />
      <Card title={Math.floor(Math.random() * 1000)} />
      <Card title={Math.floor(Math.random() * 1000)} />
      <Card title={Math.floor(Math.random() * 1000)} />
    </div>
  )
}

export default CarouselSection;
