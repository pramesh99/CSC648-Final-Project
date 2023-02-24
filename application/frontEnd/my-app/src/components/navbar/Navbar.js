import React from 'react';
import "./Navbar.css"
import logo from "../../images/sfsuH.jpg"
import { Link } from "react-router-dom"

function Navbar (props) {
   return (
      <div id="navbar">
         <div id="home-icon">
            <Link to="/" style={{ textDecoration: 'none' }}>Group 3</Link>
         </div>
         <div id="right-buttons">
            <Link to="/aboutUs" style={{ textDecoration: 'none' }}>About Us</Link>
         </div>
      </div>
   )
}

export default Navbar;