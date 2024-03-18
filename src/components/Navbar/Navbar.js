import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar() {


  function toggleMobileNav() {
    const navRight = document.getElementsByClassName('nav--right')[0]
    const menuButton = document.getElementsByClassName('nav--menu-button')[0]

    if (menuButton.innerHTML === "="){
      menuButton.innerHTML = "x"
    }
    else{
      menuButton.innerHTML = "="
    }

    navRight.classList.toggle("mobile--nav")
  }
 
  return (
    <nav>
      <div className="nav--left">Gym Rat</div>

      <ul className="nav--right">
        <li>
          <Link onClick={window.scrollTo(0,0)} rel="stylesheet" to="/"> 
            Home
          </Link>
        </li>
        <li>
          <Link onClick={window.scrollTo(0,0)} rel="stylesheet" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link onClick={window.scrollTo(0,0)} rel="stylesheet" to="/blog/1">
            Blog
          </Link>
        </li>
        <li>
          <Link onClick={window.scrollTo(0,0)} rel="stylesheet" to="/pricing">
            Pricing
          </Link>
        </li>
        <li>
          <Link onClick={window.scrollTo(0,0)} rel="stylesheet" to="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
      <div onClick={toggleMobileNav} className="nav--menu-button">=</div>
    </nav>
  );
}

export default Navbar;
