import React from 'react';
import "./Navbar.css"
import { Link } from "react-router-dom"

function Navbar (props) {
   return (
      <div id="navbar">
         <div id="home-icon">
            <Link to="/" style={{ textDecoration: 'none' }}>Team 3</Link>
         </div>
         <div id="right-buttons">
            <Link to="/aboutUs" style={{ textDecoration: 'none' }}>About Us</Link>
         </div>
      </div>
   )
}

export default Navbar;