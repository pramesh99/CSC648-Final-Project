import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useNavigate } from 'react-router-dom';
import Register from '../../pages/Login&Register/Register';
import Result from '../../pages/result/Result';
import LogoPic from '../../images/logo.jpg'
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar(props) {

   const [category, setCategory] = useState('all');

   const navigate = useNavigate();
   const search = props.search;
   const setSearch = props.setSearch;
   const setSearchResult = props.setSearchResult;
   const setSearchResultCategory = props.setSearchResultCategory;

   const handleChange = (event) => {
      setSearch(event.target.value);
   };

   const handleClick = () => {
      setSearchResult(search);
      setSearchResultCategory(category);
      navigate("/result");
   };

   return (
      <div id={styles["navbar-container"]}>
         <div id={styles["banner"]}>SFSU Software Engineering Project CSC 648-848, Spring 2023. For Demonstration Only.</div>
         <div id={styles["navbar"]}>
            <div id={styles["home-icon"]}>
               <Link to="/" id={styles["icon-img"]}>
               <img id={styles["logo"]}src={LogoPic} alt="Gator Grub Logo" />
               </Link>
            </div>
            <div id={styles["search-bar"]}>
               <select
                  id={styles["search-dropdown"]}
                  value={category}
                  onChange={e => setCategory(e.target.value)}
               >
                  <option value="all">All</option>
                  <option value="american">American</option>
                  <option value="chinese">Chinese</option>
                  <option value="indian">Indian</option>
                  <option value="italian">Italian</option>
               </select>
               <div id={styles["search-separator"]}></div>
               <input
                  type="text"
                  placeholder="search..."
                  id={styles["search-input"]}
                  name="search"
                  maxLength="80"
                  size="80"
                  onChange={handleChange}
                  value={search}
                  required
               />

               <div id={styles["search-icon-container"]} onClick={handleClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id={styles["search-icon"]}><path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z"></path></svg>
               </div>

            </div>
            {/* <div id={styles["profile-icon-container"]}> */}
            <div id={styles["profile-icon"]}></div>
            {/* </div> */}
         </div>

         <div id={styles["tabs"]}>
            <div id={styles["right-buttons"]}>
               <Link to="/aboutUs" id={styles["right-buttons-text"]}>About Us</Link>

            </div>
            <div class={styles["dropdown"]}>
               <button class={styles["dropbtn"]}>Register / Login</button>
               <div class={styles["dropdown-content"]}>
                  <Link to="/register">Register</Link>
                  <Link to="/login">Login</Link>
               </div>
            </div>
            <div class={styles["dropdown"]}>
               <button class={styles["dropbtn"]}>Delievery Driver</button>
               <div class={styles["dropdown-content"]}>
                  <Link to="/Driver-register">Driver Register</Link>
                  <Link to="/Driver-login">Driver Login</Link>
                  <Link to="/driverDashboard">Driver Dashboard</Link>
               </div>
            </div>
            <div class={styles["dropdown"]}>
               <button class={styles["dropbtn"]}>Restaurant Owner</button>
               <div class={styles["dropdown-content"]}>
                  <Link to="/Restaurant-register">Restaurant Register</Link>
                  <Link to="/Restaurant-login">Restaurant Login</Link>
                  <Link to="/restaurantDashboard">Restaurant Dashboard</Link>
               </div>
            </div>
      </div>
   </div>
   )
}

export default Navbar;
