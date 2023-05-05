import React from 'react';
import styles from "./AboutUs.module.css";
import Hieu from "../../images/Hieu.jpg";
import Shauhin from "../../images/Shauhin.jpg";
import Preetham from "../../images/Preetham.jpg";
import Lin from "../../images/Lin.jpg";
import Derrick from '../../images/Derrick.jpg';
import { Link } from "react-router-dom";


function AboutUs (props) {
   return (
   <div id={styles["background"]}>
   <div id={styles["about-us-card"]}>
      <div id={styles["heading-container"]}>
         <h1>Meet the Team!</h1>
      </div>
      <div id={styles["profiles-container"]}>
         <div className={styles["profile"]}>
            <a href="/aboutUs/Shauhin"><img src={Shauhin} alt="About Us: Shauhin" className={styles["profile-image"]}></img></a>
            <div className={styles["profile-description"]}>
               <div className={styles["profile-name"]}>Shauhin</div>
               <div className={styles["profile-title-link-container"]}>
                  <div className={styles["profile-title"]}><b>Team Lead</b></div>
               </div>
            </div>
         </div>
         <div className={styles["profile"]}>
            <a href="/aboutUs/Hieu"><img src={Hieu} alt="About Us: Hieu" className={styles["profile-image"]}></img></a>
            <div className={styles["profile-description"]}>
               <div className={styles["profile-name"]}>Hieu Ma</div>
               <div className={styles["profile-title-link-container"]}>
                  <div className={styles["profile-title"]}><b>Front-End Lead</b></div>
               </div>
            </div>
         </div>
         <div className={styles["profile"]}>
            <a href="/aboutUs/Preetham"><img src={Preetham} alt="About Us: Preetham" className={styles["profile-image"]}></img></a>
            <div className={styles["profile-description"]}>
               <div className={styles["profile-name"]}>Preetham</div>
               <div className={styles["profile-title-link-container"]}>
                  <div className={styles["profile-title"]}><b>Back-End Lead</b></div>
               </div>
            </div>
         </div>
         <div className={styles["profile"]}>
            <a href="/aboutUs/Lin"><img src={Lin} alt="About Us: Lin" className={styles["profile-image"]}></img></a>
            <div className={styles["profile-description"]}>
               <div className={styles["profile-name"]}>Lin Tun</div>
               <div className={styles["profile-title-link-container"]}>
                  <div className={styles["profile-title"]}><b>Front-End Dev</b></div>
               </div>
            </div>
         </div>
         <div className={styles["profile"]}>
            <a href="/aboutUs/Derrick"><img src={Derrick} alt="About Us: Derrick" className={styles["profile-image"]}></img></a>
            <div className={styles["profile-description"]}>
               <div className={styles["profile-name"]}>Derrick</div>
               <div className={styles["profile-title-link-container"]}>
                  <div className={styles["profile-title"]}><b>Back-End Dev</b></div>
               </div>
            </div>
         </div>
      </div>
   </div>
   </div>
   )
}

export default AboutUs;