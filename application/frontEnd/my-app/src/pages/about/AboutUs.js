import React from 'react';
import "./AboutUs.css";
import Hieu from "../../images/Hieu.jpg";
import Shauhin from "../../images/Shauhin.jpg";
import Preethman from "../../images/Preetham.jpg";
import Lin from "../../images/Lin.jpg";
function AboutUs (props) {
   return (
      <div id="about-us">
         <div id="heading-container">
            <h1>Meet the Team!</h1>
         </div>
         <div id="profiles-container">
            <div className="profile">
               <img src={Shauhin} className="profile-image"></img>
               <div className="profile-description">
                  <div className="profile-name">Shauhin</div>
                  <div className="profile-title-link-container">
                     <div className="profile-title"><b>Team Lead</b></div>
                     <div className="profile-link">{"read more ->"}</div>
                  </div>
               </div>
            </div>
            <div className="profile">
               <img src={Hieu} className="profile-image"></img>
               <div className="profile-description">
                  <div className="profile-name">Hieu Ma</div>
                  <div className="profile-title-link-container">
                     <div className="profile-title"><b>Front-End Lead</b></div>
                     <div className="profile-link">{"read more ->"}</div>
                  </div>
               </div>
            </div>
            <div className="profile">
               <img src={Preethman} className="profile-image"></img>
               <div className="profile-description">
                  <div className="profile-name">Preetham</div>
                  <div className="profile-title-link-container">
                     <div className="profile-title"><b>Back-End Lead</b></div>
                     <div className="profile-link">{"read more ->"}</div>
                  </div>
               </div>
            </div>
            <div className="profile">
               <img src={Lin} className="profile-image"></img>
               <div className="profile-description">
                  <div className="profile-name">Lin</div>
                  <div className="profile-title-link-container">
                     <div className="profile-title"><b>Front-End Dev</b></div>
                     <div className="profile-link">{"read more ->"}</div>
                  </div>
               </div>
            </div>
            <div className="profile">
               <img src={Shauhin} className="profile-image"></img>
               <div className="profile-description">
                  <div className="profile-name">Derrick</div>
                  <div className="profile-title-link-container">
                     <div className="profile-title"><b>Back-End Dev</b></div>
                     <div className="profile-link">{"read more ->"}</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AboutUs;