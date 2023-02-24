import React from 'react';
import ProfilePic from "../../images/Hieu.jpg";
import styles from "./Profile.module.css"

function Hieu(props) {
   return (
      <div id={styles["profile-container"]}>
         <img src={ProfilePic} id={styles["profile-image"]}></img>
         <div id={styles["description-container"]}>
            <div id={styles["name"]}>Hieu</div>
            <div id={styles["position"]}><b>Front-End Dev</b></div>
            <div id={styles["about-me"]}>About Me: </div>
            <div id={styles["about-me-description"]}>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
            </div>
            <div id={styles["links"]}>
               <div>Github: <a href="https://github.com/Hieu-Ma1" target="_blank">https://github.com/Hieu-Ma1</a></div>
               <div>Email: simshieu1@gmail.com</div>
               <div>LinkedIn: <a href="https://www.linkedin.com/in/hieu-ma/" target="_blank">https://www.linkedin.com/in/hieu-ma</a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Hieu;