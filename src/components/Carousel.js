import React, { useRef, useState, useEffect } from 'react';
import SliderSection from './SliderSection.js';
import "./Carousel.css";
import Card from "./Card.js";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Carousel = () => {
  const [sectionIndex, setSection] = useState(0);
  const sliderRef = useRef();

  const navigateLeft = () => {
    setSection(sectionIndex => (sectionIndex > 0) ? sectionIndex - 1 : 0);
  }

  const navigateRight = () => {
    setSection(sectionIndex => (sectionIndex < 3) ? sectionIndex + 1 : 3);
  }

  useEffect(() => {
    sliderRef.current.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
    // sliderRef.current.addEventListener("transitionend", () => {
    //   sliderRef.current.appendChild(sliderRef.current.firstChild);
    // })
  }, [sectionIndex])


  return (
    <div className="Carousel-container">
      <div className="Carousel-inner">
        <div className="Carousel-slider" ref={sliderRef}>
          <section>Content for section 1</section>
          <section>Content for section 2</section>
          <section>Content for section 3</section>
          <section>Content for section 4</section>
        </div>
        
        <div className="Carousel-controls">
          <span className="Carousel-arrow left" onClick={navigateLeft}>
            <ArrowBackIosIcon />
          </span>

          <span className="Carousel-arrow right" onClick={navigateRight}>
            <ArrowForwardIosIcon />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Carousel;
