/* 
Authors: Hieu Ma, Lin Tun, Shauhin Pourshayegan 
*/

import React from 'react';
import ProfilePic from "../../images/Hieu.jpg";
import styles from "./Profile.module.css"

function Hieu(props) {
   return (
      <div id={styles["profile-container"]}>
         <img src={ProfilePic} id={styles["profile-image"]} alt="Hieu"></img>
         <div id={styles["description-container"]}>
            <div id={styles["name"]}>Hieu Ma</div>
            <div id={styles["position"]}><b>Front-End Dev</b></div>
            <div id={styles["about-me"]}>About Me: </div>
            <div id={styles["about-me-description"]}>
               Hello! I'm the Front-End Lead for this project! Currently most of the skills I developed are front-end oriented. I attended App Academy, A full-stack web development bootcamp, worked at a start-up that utilized react-native, and currently work for a company that utilizes angular! My responsibilities of this project include designing and react development.
            </div>
            <div id={styles["links"]}>
               <div>Github: <a href="https://github.com/Hieu-Ma1" target="_blank" rel="noreferrer">https://github.com/Hieu-Ma1</a></div>
               <div>Email: <a href="mailto:simshieu1@gmail.com">simshieu1@gmail.com</a></div>
               <div>LinkedIn: <a href="https://www.linkedin.com/in/hieu-ma/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/hieu-ma</a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Hieu;
