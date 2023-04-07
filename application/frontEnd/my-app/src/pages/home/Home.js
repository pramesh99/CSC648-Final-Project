import React, { useState } from 'react';
import styles from "./Home.module.css";
// import Restaurant from '../restaurant/Restaurant';
// import { Link } from "react-router-dom";
import RestaurantCard from '../../components/restaurantCard/RestaurantCard';
import Button from 'react-bootstrap/Button';

function Home(props) {
   // console.log("restaurants passed down home", props.restaurants);

   // let restaurants = props.restaurants.map((restaurant) => (
   //    <RestaurantCard name={restaurant.RestaurantName} img={restaurant.ImgUrl} />
   // ))

   return (
      <div id={styles["home"]}>
         <div id={styles["explore-browse-container"]}>
            <div className={styles["left-container"]}>
               <div id={styles["browse"]}></div>
               <div className={styles["sub-title"]}>Browse Popular Spots</div>
            </div>
            <div className={styles["left-container"]}>
               <div id={styles["explore"]}></div>
               <div className={styles["sub-title"]}>Explore Local Restaurants</div>
            </div>
         </div>
         <div id={styles["gator-grub-container"]}>
            <div id={styles["gator-grub-header"]}> What's GatorGrub?</div>
            <div id={styles["gator-grub"]}>
               <div id={styles["gator-grub-text-container"]}>
                  <text>
                     GatorGrub is where San Francisco State University students, faculty and staff get amazing deals on food which is delivered straight to them.
                     Our discounts, class-to-class delivery, and safe pickup spots help us bring amazing food to your table... or the back of the lecture hall.
                  </text>
               </div>
            </div>
         </div>
         <div id={styles["register"]}>
            <h2>Register Now!</h2>
            <text id={styles["register-text"]}>
               SFSU Students, Faculty and Staff get exclusive discounts, pickup spots and more.
               <br></br>
               <br></br>
               GatorGrub drivers and restaurant owners find new oportunities for satisfying customers and earning more profits!
            </text>
            <Button variant="secondary" style={{ width: "55%", height: "15%" }}>Sign Up</Button>{' '}

         </div>
      </div>
   )
}

export default Home;