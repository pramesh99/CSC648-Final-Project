import React from 'react';
import ProfilePic from "../../images/Preetham.jpg";
import styles from "./Profile.module.css"

function Preetham(props) {
   return (
      <div id={styles["profile-container"]}>
         <img src={ProfilePic} id={styles["profile-image"]}></img>
         <div id={styles["description-container"]}>
            <div id={styles["name"]}>Preetham</div>
            <div id={styles["position"]}><b>Back-End Lead</b></div>
            <div id={styles["about-me"]}>About Me: </div>
            <div id={styles["about-me-description"]}>
               {/* Paste Your Description Below, Remove Lorem Ipsum Statement */}
               Hi! I am the back-end lead for this project. I am currently an MS CS student at SF state. I got my neuroscience BS from UCSC in 2021 so I am fairly new to the world of app development. I look forward to working with everyone and learning a lot. Cheers! 
            </div>
               {/* Add links if available */}
            <div id={styles["links"]}>
               <div>Github: <a href="https://github.com/pramesh99">pramesh99</a></div>
               <div>Email: <a href = "mailto: pramesh1@sfsu.edu">pramesh1@sfsu.edu</a></div>
               <div>LinkedIn: <a href="https://www.linkedin.com/in/pramesh99">pramesh99</a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Preetham;
