import React from 'react';
import ProfilePic from "../../images/Lin.jpg";
import styles from "./Profile.module.css"

function Lin(props) {
   return (
      <div id={styles["profile-container"]}>
         <img src={ProfilePic} id={styles["profile-image"]} alt="Lin"></img>
         <div id={styles["description-container"]}>
            <div id={styles["name"]}>Lin Tun</div>
            <div id={styles["position"]}><b>Front-End Dev</b></div>
            <div id={styles["about-me"]}>About Me: </div>
            <div id={styles["about-me-description"]}>
               {/* Paste Your Description Below, Remove Lorem Ipsum Statement */}
               Hello, I'm the Front-End Developer for this project! My main responsibility is to assist my front-end lead with webpage design and development. Although I don't have extensive experience with front-end development, I am actively acquiring the necessary skills to become a proficient developer through my work on this project.
            </div>
               {/* Add links if available */}
            <div id={styles["links"]}>
            <div>GitHub: <a href="https://github.com/Geraldlin24" target="_blank" rel="noreferrer">https://github.com/Geraldlin24</a></div>
            <div>Email: <a href="mailto: ltun1@mail.sfsu.edu">ltun1@mail.sfsu.edu</a></div>
            </div>
         </div>
      </div>
   )
}

export default Lin;