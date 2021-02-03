import React, { useRef, useEffect, useState } from 'react';
import "./Carousel.css";
import CarouselSection from "./CarouselSection.js";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import "../utilities.css";


const Carousel = (props) => {
  const sliderRef = useRef();
  const carouselRef = useRef();
  const [sections, setSections] = useState([]);


  let direction = 1;
  let intervalId;

  const navigateLeft = () => {
    if (direction === 1) {
      sliderRef.current.appendChild(sliderRef.current.firstChild);
      direction = -1;
    }
    carouselRef.current.style.justifyContent = "flex-end";
    sliderRef.current.style.transform = 'translate(20%)';
    sliderRef.current.addEventListener("transitionend", handleTransitionLeft);
  }


  const navigateRight = () => { 
    if (direction === -1) {
      sliderRef.current.prepend(sliderRef.current.lastChild);
      direction = 1;
    }
    carouselRef.current.style.justifyContent = "flex-start";
    sliderRef.current.style.transform = 'translate(-20%)';
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

  const splitSections = (size) => {
    console.log("Creating sections with size: ", size);
    let splits = [];
    const allElements = [...props.fruits];

    let i, j, temparray;
    // for (i = 0, j = allElements.length; i < j; i += size) {
    //     temparray = allElements.slice(i ,i + size);
    //     splits.push(temparray);
    // }

    let sections = splits.map((section, i) => (
      <CarouselSection 
        key={`CarouselSection_${i}`}
        elements={section}/>
    ))
    return sections;
  }



  useEffect(() => {
    // console.log("Rerendering");
    // setSections(splitSections(props.carouselSections));
    
    startSlideShow();

    const handleMouseEnter = () => {
      clearInterval(intervalId);
    }

    const handleMouseLeave = () => {
      startSlideShow();
    }

    carouselRef.current.addEventListener("mouseenter", handleMouseEnter)
    carouselRef.current.addEventListener("mouseleave", handleMouseLeave)

  }, [props.carouselSections])


  return (
    <div className="Carousel-container">
      <div className="Carousel-inner" ref={carouselRef}>     
        <div className="Carousel-slider" ref={sliderRef}> 

          {sections}

          <CarouselSection elements={[1, 2, 3, 4, 5]}/>
          <CarouselSection elements={[6, 7, 8, 9, 10]}/>
          <CarouselSection elements={[11, 12, 13, 14, 15]}/>
          <CarouselSection elements={[16, 17, 18, 19, 20]}/>
          <CarouselSection elements={[21, 22, 23, 24, 25]}/>
          
        </div>
        <div className="Carousel-arrowContainer">
          <div 
            className="Carousel-arrow previous" 
            onClick={navigateLeft}>
              <ChevronLeftIcon />
          </div>

          <div 
            className="Carousel-arrow next" 
            onClick={navigateRight}>
              <ChevronRightIcon />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Carousel;
