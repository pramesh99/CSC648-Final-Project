import React from 'react';
import ProfilePic from "../../images/Shauhin.jpg";
import styles from "./Profile.module.css"

function Shauhin(props) {
   return (
      <div id={styles["profile-container"]}>
         <img src={ProfilePic} id={styles["profile-image"]}></img>
         <div id={styles["description-container"]}>
            <div id={styles["name"]}>Shauhin</div>
            <div id={styles["position"]}><b>Team Lead</b></div>
            <div id={styles["about-me"]}>About Me: </div>
            <div id={styles["about-me-description"]}>
               {/* Paste Your Description Below, Remove Lorem Ipsum Statement */}
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
            </div>
               {/* Add links if available */}
            <div id={styles["links"]}>
               <div>Github: 
                  <a href="Add link here" target="_blank">"Add Link Here"</a>
               </div>
               <div>Email: "add email here"</div>
               <div>LinkedIn: 
                  <a href="Add link here" target="_blank">"Add Link Here"</a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Shauhin;