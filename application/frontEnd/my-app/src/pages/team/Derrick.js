/* 
Authors: Hieu Ma, Lin Tun, Shauhin Pourshayegan 
*/

import React from 'react';
import ProfilePic from "../../images/Derrick.jpg";
import styles from "./Profile.module.css";

function Derrick(props) {
   return (
      <div id={styles["profile-container"]}>
         <img src={ProfilePic} id={styles["profile-image"]} alt="Derrick"></img>
         <div id={styles["description-container"]}>
            <div id={styles["name"]}>Derrick</div>
            <div id={styles["position"]}><b>Back-End Dev</b></div>
            <div id={styles["about-me"]}>About Me: </div>
            
            <div id={styles["about-me-description"]}>
               {/* Paste Your Description Below, Remove Lorem Ipsum Statement */}
               Hello, I'm part of the back end development team. I'm a fourth year student at SFSU. This will be my first software development project. I'm hoping to gain some new experience with it. 
            </div>
               {/* Add links if available */}
            <div id={styles["links"]}>
               <div>Github: <a href="https://github.com/HaramPrince" target="_blank" rel="noreferrer">https://github.com/HaramPrince</a></div>
               <div>Email: <a href="mailto:dliang5@mail.sfsu.edu">dliang5@mail.sfsu.edu </a></div>
               <div>LinkedIn: <a href="https://www.linkedin.com/in/derrick-liang-a03047260/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/derrick-liang-a03047260/</a></div>
            </div>
         </div>
      </div>
   )
}

export default Derrick;
