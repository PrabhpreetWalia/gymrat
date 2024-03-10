import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="nav--left">Gym Rat</div>

      <ul className="nav--right">
        <li>
          <Link rel="stylesheet" to="/"> 
            Home
          </Link>
        </li>
        <li>
          <Link rel="stylesheet" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link rel="stylesheet" to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link rel="stylesheet" to="/pricing">
            Pricing
          </Link>
        </li>
        <li>
          <Link rel="stylesheet" to="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
