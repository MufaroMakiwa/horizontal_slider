import React from 'react';
import "./CarouselSection.css";
import Card from "./Card.js";
import "../utilities.css";


const CarouselSection = (props) => {
  // console.log(props)

  const renderCards = () => {
    let cards = props.elements.map((item, i) => (
      <Card key={`Card_${i}`} title={item} />
    ))
    return cards;
  }

  return (
    <div className="CarouselSection-container">
      {/* <Card title={Math.floor(Math.random() * 1000)} />
      <Card title={Math.floor(Math.random() * 1000)} />
      <Card title={Math.floor(Math.random() * 1000)} />
      <Card title={Math.floor(Math.random() * 1000)} />
      <Card title={Math.floor(Math.random() * 1000)} /> */}

      {renderCards()}
    </div>
  )
}

export default CarouselSection;
