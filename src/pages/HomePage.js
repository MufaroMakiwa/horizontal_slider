import React from 'react'
import Carousel from "../components/Carousel.js"
import { useEffect, useState } from 'react';

const HomePage = (props) => {
  const [carouselSections, setCarouselSections] = useState(0);
  const fruits = [
    "apple",
    "apricot",
    "avocado",
    "banana",
    "bell pepper",
    "bilberry",
    "blackberry",
    "blackcurrant",
    "blood orange",
    "blueberry",
    "boysenberry",
    "breadfruit",
  ]

  const renderSections = () => {
    
    if (props.width >= 1400) {
      if (carouselSections !== 6){
        console.log("Changing to 6 elements");
        setCarouselSections(6);
      }
      

    } else if (props.width >= 1100 ) {
      if (carouselSections !== 5){
        console.log("Changing to 5 elements");
        setCarouselSections(5);
      }
      
    } else if (props.width >= 800) {
      if (carouselSections !== 4){
        console.log("Changing to 4 elements");
        setCarouselSections(4);
      }
    }

    else if (props.width >= 500) {
      if (carouselSections !== 3){
        console.log("Changing to 3 elements");
        setCarouselSections(3);
      }
    }
    else {
      if (carouselSections !== 2){
        console.log("Changing to 2 elements");
        setCarouselSections(2);
      }
    }
  }

  useEffect(() => {
    renderSections();
  })


  return (
    <div>
      <Carousel 
        fruits= {fruits}
        carouselSections={carouselSections}/>
      
    </div>
  )
}

export default HomePage;
