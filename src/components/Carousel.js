import React from 'react';
import SliderSection from './SliderSection.js';
import "./Carousel.css";

const Carousel = () => {
  return (
    <div className="Carousel-container">
      <SliderSection id="section1" before="section3" after="section2"/>
      {/* <SliderSection id="section2" before="section1" after="section3"/>
      <SliderSection id="section3" before="section2" after="section1"/>     */}
    </div>
  )
}

export default Carousel;
