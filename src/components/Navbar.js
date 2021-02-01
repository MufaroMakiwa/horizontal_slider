import React from 'react';
import "./Navbar.css";
import { navigate } from "@reach/router";
import { Link } from 'react-scroll'; 

const Navbar = () => {
  return (
    <>
      <nav className="Navbar-nav">
        <div className="Navbar-container">
          <div className="Navbar-logo" >mutapa</div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
