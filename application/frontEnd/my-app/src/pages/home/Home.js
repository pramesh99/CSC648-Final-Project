import React, { useState } from 'react';
import styles from "./Home.module.css";
//import for img
import HomePic from "../../images/Homepic.jpg";
import UserPic from "../../images/Userpic.jpg"
import BusinessPic from "../../images/Businesspic.jpg"
import DeliveryPic from "../../images/deliveryman.jpg"
import Card from 'react-bootstrap/Card';

import banner from "../../images/banner.jpg"

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
      <>
         <div style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "8%",
            paddingBottom: "8%",
            backgroundColor: "#8987C8",
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover"
         }}  >
            <section id={styles["explore-restaurants-section"]} >
               <div >
                  <div >
                     <div className={styles["info"]}>
                        <div className={styles["gator-grub-header"]}>Explore Nearby Restaurants!</div>
                        <div className={styles["gator-grub"]}>
                           We provide food delivery and pickup for SFSU members
                        </div>
                        <Link to="/browse">
                           <Button variant="secondary" className={styles["explore-button"]}>Explore Restaurants</Button>{' '}
                        </Link>
                     </div>
                  </div>
               </div>
            </section>
         </div>

         <div id={styles["signup-container"]}>

            <Card className={styles["signup-card"]}>
               <Card.Img variant="top" src={UserPic} style={{ height: '15rem' }} />
               <Card.Body style={{ display: "flex", flexDirection: 'column', justifyContent: 'space-between' }}>
                  <section className={styles["category"]}>
                     <div  >
                        <div className={styles["card-header"]}>User Signup</div>
                        <div className={styles["card-p"]}>
                           Sign up to order/pickup food!
                        </div>
                     </div>
                  </section>
                  <Button variant="secondary"
                     href="http://localhost:3000/register"
                  >Sign Up Now!</Button>{' '}
               </Card.Body>
            </Card>

            <Card style={{ width: '18rem', height: '30rem' , marginLeft: "2%", marginRight: "2%",}}>
               {/* style={{ height: "300px", backgroundSize: "cover", backgroundPosition: "center" }}  */}
               <Card.Img variant="top" src={BusinessPic} style={{ height: '15rem' }} />

               <Card.Body style={{ display: "flex", flexDirection: 'column', justifyContent: 'space-between' }}>
                  <section className={styles["category"]}>
                     <div >
                        <div className={styles["card-header"]}> Owner Signup</div>
                        <div className={styles["card-p"]}>
                           Join our network of restaurants!
                           <br></br>
                           <div className="deliver-button" style={{ textAlign: "center" }}>
                           </div>
                        </div>
                     </div>
                  </section>
                  <Button variant="secondary"
                     href="http://localhost:3000/Restaurant-register"
                  >Sign Up Now!</Button>{' '}
               </Card.Body>
            </Card>

            <Card style={{ width: '18rem', height: '30rem' , marginLeft: "2%", marginRight: "2%",}}>
               {/* style={{ height: "300px", backgroundSize: "cover", backgroundPosition: "center" }}  */}
               <Card.Img variant="top" src={DeliveryPic} style={{ height: '15rem', backgroundImage:"cover" }} />

               <Card.Body style={{ display: "flex", flexDirection: 'column', justifyContent: 'space-between' }}>
                  <section className={styles["category"]}>
                     <div className="user-res" >
                        <div className={styles["card-header"]}>Driver Signup</div>
                        <div className={styles["card-p"]}>
                           Looking for a fun and exciting way to earn some extra money?
                           <br></br>
                           Join GatorGrub as a driver for deliveries!
                        </div>
                        <div className="deliver-button" style={{ textAlign: "center" }}>

                        </div>
                     </div>
                  </section>
                  <Button variant="secondary"
                     href="http://localhost:3000/Driver-register"
                     >Sign Up Now!</Button>
               </Card.Body>
            </Card>


         </div>
      </>
   )
}

export default Home;