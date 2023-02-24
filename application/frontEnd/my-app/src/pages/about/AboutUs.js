import React from 'react';
import styles from "./AboutUs.module.css";
import Hieu from "../../images/Hieu.jpg";
import Shauhin from "../../images/Shauhin.jpg";
import Preetham from "../../images/Preetham.jpg";
import Lin from "../../images/Lin.jpg";
import { Link } from "react-router-dom";


function AboutUs (props) {
   return (
      <div id={styles["about-us"]}>
         <div id={styles["heading-container"]}>
            <h1>Meet the Team!</h1>
         </div>
         <div id={styles["profiles-container"]}>
            <div className={styles["profile"]}>
               <img src={Shauhin} alt="Shauhin" className={styles["profile-image"]}></img>
               <div className={styles["profile-description"]}>
                  <div className={styles["profile-name"]}>Shauhin</div>
                  <div className={styles["profile-title-link-container"]}>
                     <div className={styles["profile-title"]}><b>Team Lead</b></div>
                     <div className={styles["profile-link"]}><Link to="/aboutUs/Shauhin">{"read more ->"}</Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className={styles.profile}>
               <img src={Hieu} alt="Hieu" className={styles["profile-image"]}></img>
               <div className={styles["profile-description"]}>
                  <div className={styles["profile-name"]}>Hieu Ma</div>
                  <div className={styles["profile-title-link-container"]}>
                     <div className={styles["profile-title"]}><b>Front-End Lead</b></div>
                     <div className={styles["profile-link"]}><Link to="/aboutUs/Hieu">{"read more ->"}</Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className={styles.profile}>
               <img src={Preetham} alt="Preetham" className={styles["profile-image"]}></img>
               <div className={styles["profile-description"]}>
                  <div className={styles["profile-name"]}>Preetham</div>
                  <div className={styles["profile-title-link-container"]}>
                     <div className={styles["profile-title"]}><b>Back-End Lead</b></div>
                     <div className={styles["profile-link"]}><Link to="/aboutUs/Preetham">{"read more ->"}</Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className={styles.profile}>
               <img src={Lin} alt="Lin" className={styles["profile-image"]}></img>
               <div className={styles["profile-description"]}>
                  <div className={styles["profile-name"]}>Lin</div>
                  <div className={styles["profile-title-link-container"]}>
                     <div className={styles["profile-title"]}><b>Front-End Dev</b></div>
                     <div className={styles["profile-link"]}><Link to="/aboutUs/Lin">{"read more ->"}</Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className={styles.profile}>
               <div id={styles["empty-image"]}></div>
               {/* <img src={Derrick} className={styles["profile-image"]}></img> */}
               <div className={styles["profile-description"]}>
                  <div className={styles["profile-name"]}>Derrick</div>
                  <div className={styles["profile-title-link-container"]}>
                     <div className={styles["profile-title"]}><b>Back-End Dev</b></div>
                     <div className={styles["profile-link"]}><Link to="/aboutUs/Derrick">{"read more ->"}</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AboutUs;