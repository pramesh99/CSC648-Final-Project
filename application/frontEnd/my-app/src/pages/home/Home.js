import React from 'react';
import styles from "./Home.module.css";
import Restaurant from '../restaurant/Restaurant';
// import RestaurantCard from '../../components/restaurantCard/RestaurantCard';
// import { Link } from "react-router-dom";

function Home(props) {
   let menu = 
   [
      {name: "item 1", price: 2.4, description: "lorem ipsum"},
      {name: "item 2", price: 5.3, description: "lorem ipsum"},
      {name: "item 3", price: 3.4, description: "lorem ipsum"},
      {name: "item 4", price: 8.1, description: "lorem ipsum"},
      {name: "item 5", price: 4.2, description: "lorem ipsum"},
   ];

   return (
      <div id={styles["home"]}>
         {/* <h2 id={styles["title"]}>Featured Restaurants</h2> */}
         <div id={styles["restaurant-card-container"]}>
            <Restaurant name={"Restaurant 1"} description={"Lorem ipsum"} menu={menu}/>
            {/* <RestaurantCard name={"Restaurant 1"} description={"Lorem ipsum"}/>
            <RestaurantCard name={"Restaurant 2"} description={"Lorem ipsum"}/>
            <RestaurantCard name={"Restaurant 3"} description={"Lorem ipsum"}/> */}
         </div>
      </div>
   )
}

export default Home;