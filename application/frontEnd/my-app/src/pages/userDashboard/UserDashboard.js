/* 
Authors: Hieu Ma, Lin Tun, Shauhin Pourshayegan 
*/

import React, { useState, useEffect } from 'react';
import styles from "./UserDashboard.module.css";
// import MenuItem from '../../components/menuItem/MenuItem';
// import SelectedItem from '../../components/selectedItem/SelectedItem';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
import Order from '../../components/order/Order';
// import Pickup from '../../components/pickup/Pickup';
// import Delivery from '../../components/delivery/Delivery';
import { Link } from "react-router-dom";

async function getOrders(setCurrentOrders, setFinishedOrders, customerID) {
   let resData = [];

   await fetch(`http://34.82.124.237:3001/api/order/getOrder/${customerID}`).then((r) => r.json()).then((data) => {
      resData = data;
      let currentOrders = [];
      let finishedOrders = [];
      if(resData.length > 0) {
         for(let i = 0; i < resData.length; i++) {
            if(resData[i].OrderStatus === 1) {
               currentOrders.push(resData[i]);
            }
            if(resData[i].OrderStatus === 5) {
               finishedOrders.push(resData[i]);
            }
         }
         console.log("currentOrders", currentOrders);
         setCurrentOrders(currentOrders);
         setFinishedOrders(finishedOrders);
      }
   }
   )
   return resData;
}

function UserDashboard(props) {
   let userID = props.userID;
   let userName = props.userName;
   let restaurantID = props.RestaurantID;
   console.log(props);

   const [currentOrders, setCurrentOrders] = useState([]);

   const [finishedOrders, setFinishedOrders] = useState([]);

   useEffect(() => {

      if(userID) {
         getOrders(setCurrentOrders, setFinishedOrders, userID);
      }
   }, [])

   return (
      <div>
         <h2 id={styles["restaurant-name"]}>{userName}'s Dashboard</h2>
         <div id={styles["restaurant-card"]}>
            <div id={styles["restaurant-menu-cart-container"]}>
               <div id={styles["restaurant-menu"]}>
                  <Card
                     bg={'light'}
                     key={'light'}
                     text={'dark'}
                     style={{ width: '30vw', height: '60vh' }}
                     className="mb-2"
                  >
                     <Card.Header>Active Orders</Card.Header>
                     <Card.Body className={styles["card-body"]}>
                        <Card.Text className={styles["restaurant-menu-items"]}>
                           {currentOrders.map((order) => (
                              <Order
                                 id={order.OrderID}
                                 restaurantID={restaurantID}
                                 price={order.OrderPrice}
                                 currentOrders={currentOrders}
                                 setCurrentOrders={setCurrentOrders}
                                 finishedOrders={finishedOrders}
                                 setFinishedOrders={setFinishedOrders}
                                 driverID={order.DriverID}
                                 address={order.DeliveryAddress}
                                 customerID={order.CustomerID}
                                 getOrders={getOrders}
                                 
                              />
                           ))}
                        </Card.Text>
                     </Card.Body>
                  </Card>
               </div>
               <div id={styles["restaurant-cart"]}>
                  <Card
                     bg={'light'}
                     key={'light'}
                     text={'dark'}
                     style={{ width: '30vw', height: '60vh' }}
                     className="mb-2"
                  >
                     <Card.Header>Finished Orders</Card.Header>
                     <Card.Body className={styles["card-body"]}>
                        <Card.Text className={styles["restaurant-menu-items"]}>
                           {finishedOrders.map((order) => (
                              <Order
                                 id={order.OrderID}
                                 restaurantID={restaurantID}
                                 price={order.OrderPrice}
                                 currentOrders={currentOrders}
                                 setCurrentOrders={setCurrentOrders}
                                 finishedOrders={finishedOrders}
                                 setFinishedOrders={setFinishedOrders}
                                 driverID={order.DriverID}
                                 address={order.DeliveryAddress}
                                 customerID={order.CustomerID}
                                 getOrders={getOrders}
                              />
                           ))}
                        </Card.Text>
                     </Card.Body>
                  </Card>
               </div>
            </div>
         </div>
      </div>
   )
}

export default UserDashboard;