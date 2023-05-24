/* 
Authors: Hieu Ma, Lin Tun, Shauhin Pourshayegan 
*/

import React, { useState, useEffect } from 'react';
import styles from "./UserDashboard.module.css";
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
import Order from '../../components/order/Order';
import { Link } from "react-router-dom";


async function getOrders(setCurrentOrders, setFinishedOrders, customerID, setCartCount) {
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
         setCartCount(currentOrders.length);
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

   let setUserID = props.setUserID;
   let setUserName = props.setUserName;
   let setUserType = props.setUserType;

   let cartCount = props.cartCount;
   let setCartCount = props.setCartCount;

   const [currentOrders, setCurrentOrders] = useState([]);

   const [finishedOrders, setFinishedOrders] = useState([]);

   useEffect(() => {
      let storedData = localStorage.getItem('myData');

      if(storedData) {
        let myData = JSON.parse(storedData);
        setUserName(myData.name);
        setUserID(myData.id);
        setUserType(myData.type);
      }
  
      if(userID) {
         getOrders(setCurrentOrders, setFinishedOrders, userID, setCartCount);
      }
   }, [userID])

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
                                 status={"userActive"}
                                 userID={userID}
                                 setCartCount={setCartCount}
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