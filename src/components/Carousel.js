import React, { useRef, useState, useEffect } from 'react';
import "./Carousel.css";
import Card from "./Card.js";
import CarouselSection from "./CarouselSection.js";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import "../utilities.css";


const Carousel = () => {
  const sliderRef = useRef();
  const carouselRef = useRef();
  let direction = 1;
  let intervalId = 0;

  const navigateLeft = () => {
    if (direction === 1) {
      sliderRef.current.appendChild(sliderRef.current.firstChild);
      direction = -1;
    }

    carouselRef.current.style.justifyContent = "flex-end";
    sliderRef.current.style.transform = 'translate(25%)';
    sliderRef.current.addEventListener("transitionend", handleTransitionLeft);
  }


  const navigateRight = () => { 
    if (direction === -1) {
      sliderRef.current.prepend(sliderRef.current.lastChild);
      direction = 1;
    }
    
    carouselRef.current.style.justifyContent = "flex-start";
    sliderRef.current.style.transform = 'translate(-25%)';
    sliderRef.current.addEventListener("transitionend", handleTransitionRight);
  }


  const handleTransitionLeft = () => {
    sliderRef.current.prepend(sliderRef.current.lastChild);
    handleTransition(handleTransitionLeft);
  }


  const handleTransitionRight = () => {
    sliderRef.current.appendChild(sliderRef.current.firstChild);
    handleTransition(handleTransitionRight);
  }

  const handleTransition = (func) => {
    sliderRef.current.style.transition = "none";
    sliderRef.current.style.transform = "translate(0)";

    const timer = setTimeout(() => {
      sliderRef.current.style.transition = "all 0.5s";
      sliderRef.current.removeEventListener("transitionend", func);
    });
    return () => clearTimeout(timer);
  }


  const startSlideShow = () => {
    intervalId = setInterval(() => {
      navigateRight();
    }, 5000);
  }


  // useEffect(() => {
  //   startSlideShow();

  //   carouselRef.current.addEventListener("mouseover", () => {
  //     clearInterval(intervalId);
  //   })

  //   carouselRef.current.addEventListener("mouseout", () => {
  //     startSlideShow();
  //   })
  // }, [])


  return (
    // <div className="Carousel-container">
    //   <div className="Carousel-inner" ref={carouselRef}>
    //     <div className="Carousel-slider" ref={sliderRef}>
    //       <section>Content for section 1</section>
    //       <section>Content for section 2</section>
    //       <section>Content for section 3</section>
    //       <section>Content for section 4</section>
    //     </div>
        
    //     <div className="Carousel-controls">
    //       <span className="Carousel-arrow left" onClick={navigateLeft}>
    //         <ArrowBackIosIcon />
    //       </span>

    //       <span className="Carousel-arrow right" onClick={navigateRight}>
    //         <ArrowForwardIosIcon />
    //       </span>
    //     </div>
    //   </div>
    // </div>
    <div className="Carousel-container">
      <div className="Carousel-inner">     
        <div></div>   
        <CarouselSection />
        <CarouselSection />
        <CarouselSection />
      </div>

      <div className="Carousel-arrowContainer">
        <button className="Carousel-arrow previous" onClick={navigateLeft}><ChevronLeftIcon /></button>
        <button className="Carousel-arrow next" onClick={navigateRight}><ChevronRightIcon /></button>
      </div>
    </div>
  )
}

export default Carousel;
