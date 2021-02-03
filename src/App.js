import './App.css';
import Navbar from "./components/Navbar.js";
import { Router } from "@reach/router";
import HomePage from "./pages/HomePage.js";
import React, { useEffect, useState } from 'react';
import debounce from "lodash.debounce";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);


  useEffect(() => {
    const handleResize = (() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    })

    const debouncedHandleResize = debounce(handleResize, 500);
    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    }
  })


  return (
    <>
      <Navbar />
      <div className="App-container"> 
        <Router>
          <HomePage 
            path="/"
            width={width}
            height={height}/>
          
        </Router>
      </div>
    </>
  );
}

export default App;
