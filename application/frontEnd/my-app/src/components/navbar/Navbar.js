import React from 'react';
import "./Navbar.css"
import logo from "../../images/sfsuH.jpg"
function Navbar (props) {
   return (
      <div id="navbar">
         <a href=""><img src={logo} alt="Logo" id="logo" /></a>
         {/* <div id="sfsu-logo">SAN FRANCISCO STATE UNIVERSITY</div> */}
         <div id="right-buttons">
            <div><a href="">Link 1</a></div>
            <div><a href="">Link 2</a></div>
            <div><a href="">About Us</a></div>
         </div>
      </div>
   )
}

export default Navbar;