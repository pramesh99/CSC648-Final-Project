import React, {useState} from 'react';
import styles from "./Browse.module.css";
// import Restaurant from '../restaurant/Restaurant';
// import { Link } from "react-router-dom";
import RestaurantCard from '../../components/restaurantCard/RestaurantCard';

function Browse(props) {
   console.log("restaurants passed down to browse", props.restaurants);
   
   let restaurants = props.restaurants.map((restaurant) => (
      <RestaurantCard name={restaurant.RestaurantName} img={restaurant.ImgUrl} />
   ))

   return (
      <div id={styles["home"]}>
         <h2 id={styles["title"]}>Browse Restaurants</h2>
         <div id={styles["restaurant-and-map-container"]}>
            <div id={styles["restaurant-card-container"]}>
               {restaurants}
            </div>
            <div id={styles["map-container"]}>

            </div>
         </div>
      </div>
   )
}

export default Browse;