import React from 'react';
import ProfilePic from "../../images/Shauhin.jpg";
import styles from "./Profile.module.css"

function Shauhin(props) {
   return (
      <div id={styles["profile-container"]}>
         <img src={ProfilePic} id={styles["profile-image"]} alt="Shauhin"></img>
         <div id={styles["description-container"]}>
            <div id={styles["name"]}>Shauhin</div>
            <div id={styles["position"]}><b>Team Lead</b></div>
            <div id={styles["about-me"]}>About Me: </div>
            <div id={styles["about-me-description"]}>
               {/* Paste Your Description Below, Remove Lorem Ipsum Statement */}
               I am a senior at San Francisco State University pursuing a B.S. in Computer Science. I have chosen to volunteer for the position of Team Lead, because I've had previous experience in the residential and comercial glass industry, leading and organizing teams. 
               As team lead, my responsibility is to make sure everyone knows what to do. Facilitating meetings, recording meeting notes, organizing objectives for the rest of the team and much more.
            </div>
               {/* Add links if available */}
            <div id={styles["links"]}>
               <div>GitHub: <a href="https://www.github.com/LimeSauc3" target="_blank" rel="noreferrer">https://github.com/LimeSauc3</a></div>
               <div>Email: <a href="mailto:spourshayegan@mail.sfsu.edu">spourshayegan@mail.sfsu.edu</a></div>
               <div>Shauhin's LinkedIn: <a href="https://www.linkedin.com/in/shauhin-pourshayegan" target="_blank" rel="noreferrer">https://www.linkedin.com/in/shauhin-pourshayegan</a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Shauhin;