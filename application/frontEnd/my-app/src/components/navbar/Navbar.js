import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar(props) {
   return (
      <div id={styles["navbar-container"]}>
         <div id={styles["banner"]}>SFSU Software Engineering Project CSC 648-848, Spring 2023. For Demonstration Only.</div>
         <div id={styles["navbar"]}>
            <div id={styles["home-icon"]}>
               <Link to="/" id={styles["icon-text"]}>Team 3 : Gator Grub</Link>
            </div>
            <div id={styles["search-bar"]}>
               <select id={styles["search-dropdown"]}>
               <option value="italian">All</option>
                  <option value="american">American</option>
                  <option value="chinese">Chinese</option>
                  <option value="american">Indian</option>
                  <option value="italian">Italian</option>
               </select>
               <div id={styles["search-separator"]}></div>
               <input type="text" placeholder="search..." id={styles["search-input"]} name="search" maxLength="80" size="80" required />
               <div id={styles["search-icon-container"]}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id={styles["search-icon"]}><path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z"></path></svg>
               </div>
            </div>
               {/* <div id={styles["profile-icon-container"]}> */}
               <div id={styles["profile-icon"]}></div>
               {/* </div> */}
         </div>
         <div id={styles["tabs"]}>
            <div id={styles["right-buttons"]}>
               <Link to="/aboutUs" id={styles["right-buttons-text"]}>Drivers</Link>
               <Link to="/aboutUs" id={styles["right-buttons-text"]}>Restaurant Owners</Link>
               <Link to="/aboutUs" id={styles["right-buttons-text"]}>About Us</Link>
            </div>
         </div>
      </div>
   )
}

export default Navbar;