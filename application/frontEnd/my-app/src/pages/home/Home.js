/* 
Authors: Hieu Ma, Lin Tun, Shauhin Pourshayegan 
*/

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
            backgroundImage: `url(https://images.pexels.com/photos/2606030/pexels-photo-2606030.jpeg?auto=compress&cs=tinysrgb&w=1980&h=1280&dpr=1)`,
            backgroundSize: "cover"
         }}  >
            <section id={styles["explore-restaurants-section"]} >
               <div >
                  <div >
                     <div className={styles["info"]}>
                        <div className={styles["gator-grub-header"]}>Explore Nearby Restaurants!</div>
                        <div className={styles["gator-grub"]}>
                        Hungry on campus? We've got you covered<br></br>
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
               <Card.Img variant="top" src={UserPic} style={{ height: '15rem', objectFit: 'cover' }} />
               <Card.Body style={{ display: "flex", flexDirection: 'column', justifyContent: 'space-between' }}>
                  <section className={styles["category"]}>
                     <div  >
                        <div className={styles["card-header"]}>User Signup</div>
                        <div className={styles["card-p"]}>
                        No more waiting in line or searching for a parking spot
                        <br></br> 
                        order with us and let the food come to you!
                        <br></br>
                        </div>
                     </div>
                  </section>
                  <Button variant="secondary"
                     as={Link} to="/register"
                  >Sign Up Now!</Button>{' '}
               </Card.Body>
            </Card>

            <Card className={styles["signup-card"]}>
               {/* style={{ height: "300px", backgroundSize: "cover", backgroundPosition: "center" }}  */}
               <Card.Img variant="top" src={BusinessPic} style={{ height: '15rem', objectFit: 'cover'}} />

               <Card.Body style={{ display: "flex", flexDirection: 'column', justifyContent: 'space-between' }}>
                  <section className={styles["category"]}>
                     <div >
                        <div className={styles["card-header"]}> Owner Signup</div>
                        <div className={styles["card-p"]}>
                           Don't limit your restaurant to just walk-ins <br></br>
                           sign up for delivery and reach a wider audience.<br></br>
                           <div className="deliver-button" style={{ textAlign: "center" }}>
                           </div>
                        </div>
                     </div>
                  </section>
                  <Button variant="secondary"
                     as={Link} to="/Restaurant-register"
                  >Sign Up Now!</Button>{' '}
               </Card.Body>
            </Card>
            
            <Card className={styles["signup-card"]}>
               {/* style={{ height: "300px", backgroundSize: "cover", backgroundPosition: "center" }}  */}
               <Card.Img variant="top" src={DeliveryPic} style={{ height: '15rem', objectFit: 'cover'}} />

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
                     as={Link} to="/Driver-register"
                     >Sign Up Now!</Button>
               </Card.Body>
            </Card>


         </div>
      </>
   )
}

export default Home;