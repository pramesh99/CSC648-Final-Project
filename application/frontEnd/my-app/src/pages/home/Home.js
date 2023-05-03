import React, { useState } from 'react';
import styles from "./Home.module.css";
//import for img
import HomePic from "../../images/Homepic.jpg";
import UserPic from "../../images/Userpic.jpg"
import BusinessPic from "../../images/Businesspic.jpg"
import DeliveryPic from "../../images/deliveryman.jpg"
// import Restaurant from '../restaurant/Restaurant';
import { Link } from "react-router-dom";
// import RestaurantCard from '../../components/restaurantCard/RestaurantCard';
import Button from 'react-bootstrap/Button';

function Home(props) {
   // console.log("restaurants passed down home", props.restaurants);

   // let restaurants = props.restaurants.map((restaurant) => (
   //    <restaurant name={restaurant.RestaurantName} img={restaurant.ImgUrl} />
   // ))
// <div id={styles["home"]}>
      //    <div id={styles["explore-browse-container"]}>
      //       <Link to="/browse" id={styles["link"]}>
      //          <div className={styles["left-container"]}>
      //             <div id={styles["browse"]}></div>
      //             <div className={styles["sub-title"]}>Browse Popular Spots</div>
      //          </div>
      //       </Link>
      //       <div className={styles["left-container"]}>
      //          <div id={styles["explore"]}></div>
      //          <div className={styles["sub-title"]}>Explore Local Restaurants</div>
      //       </div>
      //    </div>
      //    <div id={styles["gator-grub-container"]}>
      //       <div id={styles["gator-grub-header"]}> What's GatorGrub?</div>
      //       <div id={styles["gator-grub"]}>
      //          <div id={styles["gator-grub-text-container"]}>
      //             <div>
      //                GatorGrub is where San Francisco State University students, faculty and staff get amazing deals on food which is delivered straight to them.
      //                Our discounts, class-to-class delivery, and safe pickup spots help us bring amazing food to your table... or the back of the lecture hall.
      //             </div>
      //          </div>
      //       </div>
      //    </div>
      //    <div id={styles["register"]}>
      //       <h2>Register Now!</h2>
      //       <div id={styles["register-text"]}>
      //          SFSU Students, Faculty and Staff get exclusive discounts, pickup spots and more.
      //          <br></br>
      //          <br></br>
      //          GatorGrub drivers and restaurant owners find new oportunities for satisfying customers and earning more profits!
      //       </div>
      //       <Button variant="secondary" href="http://localhost:3000/login"style={{ width: "25%", height: "8%" }}>Sign Up</Button>{' '}

      //    </div>
      //  </div>
   return (
      <div id={styles["home"]}>
         <section className={styles["grid"]}>
            <div className={styles["content"]}>
               <div className={styles["content-left"]}>
                  <div className={styles["info"]}>
                     <div className={styles["gator-grub-header"]}>Order Your Best Food!</div>
                     <div className={styles["gator-grub"]}>
                        Hey!! Our delicious food is waiting for you,<br></br>
                        We are always near to you with fresh item of food.
                     </div>
                     <Link to="/browse" style={{ width: "25%", height: "8%" }}>
                        <Button className={styles["explor-button"]}>Explore Restaurant</Button>{' '}
                     </Link>
                  </div>
               </div>
               <div className={styles["content-right"]}>
                  <img src={HomePic} className={styles["profile-image"]} alt="HomePic"></img>
               </div>
            </div>
         </section>

         <section className="category" style={{ backgroundColor: "white"}}>
               <div className="image-container">
                  <img src={UserPic} className={styles["user-img"]} alt="UserPic"></img>
               </div>
               <div className="user-res" >
                  <div className={styles["user-header"]}>Pickup or delivery<br></br>from restaurants near you</div>
                  <div className={styles["user-p"]}>
                     Satisfy your hunger pangs and tantalize your taste buds with <br></br>
                     a diverse array of cuisines available for delivery <br></br>
                     or takeout near your location. <br></br>
                     From mouthwatering comfort food to exotic flavors, <br></br>
                     there's something for everyone to relish, <br></br>
                     all just a few clicks away on GatorGrub.<br></br>
                     <Button variant="secondary"
                        href="http://localhost:3000/register"
                        style={{ width: "25%", height: "8%", marginTop: "10px", marginBottom: "10px" }}>Sign Up Now!</Button>{' '}
                  </div>
               </div>
         </section>

         <section className={styles["category"]}>
            <div className={styles["content"]}>
               <div className={styles["content-left"]}>
                  <div className={styles["info"]}>
                  <div className={styles["intro-header"]}>Your Restaurant,<br></br> We delivered!</div>
                  <div className={styles["intro-p"]}>
                     Join our network of delectable dining<br></br>
                     destinations and let your restaurant<br></br>
                     shine by adding it to our platform!
                     <br></br>
                     <div className="deliver-button" style={{ textAlign: "center" }}>
                     <Button variant="secondary"
                        href="http://localhost:3000/Restaurant-register"
                        style={{ width: "60%", height: "8%" }}>Sign Up Now!</Button>{' '}
                        </div>
                  </div>
               </div>
               </div>
               <div className={styles["content-right"]}>
                  <img src={BusinessPic} className={styles["business-img"]} alt="BusinessPic"></img>
               </div>
            </div>
         </section>

         <section className="category" style={{ backgroundColor: "white" }}>
               <div className="image-container" >
                  <img src={DeliveryPic} className={styles["delivery-img"]} alt="DeliveryPic"></img>
               </div>
               <div className="user-res" >
                  <div className={styles["deliver-header"]}>Deliver with GatorGrub</div>
                     <div className={styles["deliver-p"]}>
                     Looking for a fun and exciting way to earn some extra money? <br></br>
                     Join the GatorGrub team and bring joy <br></br>
                     to customers' taste buds with every delicious bite!<br></br>
                     </div>
                     <div className="deliver-button" style={{ textAlign: "center" }}>
                     <Button variant="secondary"
                        href="http://localhost:3000/Driver-register"
                        style={{ width: "20%", height: "8%", marginBottom: "10px", display: "block", marginLeft: "54%" }}>Sign Up Now!</Button>
                        </div>
                  </div>
         </section>
      </div>
   )
}

export default Home;