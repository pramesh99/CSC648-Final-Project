import React, {useState} from 'react';
import styles from "./Result.module.css";
// import Restaurant from '../restaurant/Restaurant';
// import { Link } from "react-router-dom";

import RestaurantCard from '../../components/restaurantCard/RestaurantCard';

function Result(props) {

   // console.log("restaurants passed down to result", props.restaurants);
   // console.log("search word", props);
   let search = props.search;
   
   let restaurants = props.restaurants.map((restaurant) => (
      <RestaurantCard name={restaurant.RestaurantName} img={restaurant.ImgUrl} />
   ))

   return (
      <div id={styles["home"]}>
         <h2 id={styles["title"]}>Search for {search}</h2>
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

export default Result;