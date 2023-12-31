/* 
Authors: Hieu Ma, Lin Tun, Shauhin Pourshayegan 
*/

import React from 'react';
import styles from "./RestaurantCard.module.css";
import { Link } from "react-router-dom";

function RestaurantCard(props) {
   function setSelectedRestaurant(restaurant) {
      props.setSelectedRestaurant(restaurant)
   }
 
   return (
      <div id={styles["restaurant-card"]}>
         <Link to={`/${props.name}`} id={styles["link-style"]}  onClick={() => setSelectedRestaurant(props.restaurant)}>
            <div style={{ backgroundImage: `url(${props.img})`, width: "20vw", height: "20vh", backgroundSize: "cover" }}></div>
            <div id={styles["restaurant-info-container"]}>
               <div id={styles["restaurant-name"]}>
                  Name: {props.name}
               </div>
               <div id={styles["restaurant-description"]}>
                  Description: {props.description}
               </div>
            </div>
         </Link>
      </div>
   )
}

export default RestaurantCard;