/* 
Authors: Hieu Ma, Lin Tun, Shauhin Pourshayegan 
*/

import React, { useState, useEffect } from 'react';
import styles from "./RestaurantDashboard.module.css";
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
import LoginRegisterModal from '../../components/loginRegisterModal/LoginRegisterModal';

async function getOrders(setIncomingOrders, setActiveOrders, restID) {
   let resData = [];

   await fetch(`http://34.82.124.237:3001/api/order/restaurantID/${restID}`).then((r) => r.json()).then((data) => {
      resData = data;
      let incomingOrders = [];
      let activeOrders = [];
      if(resData.length > 0) {
         for(let i = 0; i < resData.length; i++) {
            if(resData[i].OrderStatus === 1) {
               incomingOrders.push(resData[i]);
            }
            if(resData[i].OrderStatus === 2) {
               activeOrders.push(resData[i]);
            }
         }
         setIncomingOrders(incomingOrders);
         setActiveOrders(activeOrders);
      }
   }
   )
   return resData;
}


function RestaurantDashboard(props) {
   let userID = props.userID;
   let userName = props.userName;
   let userType = props.userType;
   let restaurantID = props.RestaurantID;
   let setUserID = props.setUserID;
   let setUserName = props.setUserName;
   let setUserType = props.setUserType;
   let setRestaurantID = props.setRestaurantID;
   let orders;
   let renderOrderItems;

   const [incomingOrders, setIncomingOrders] = useState([]);

   const [activeOrders, setActiveOrders] = useState([]);

   const [modalShow, setModalShow] = React.useState(false);
   const [modalText, setModalText] = React.useState('');

   function showRestaurantStatus() {
      setModalText("Restaurant is Registered!")
      setModalShow(true);
   }

   useEffect(() => {
      console.log()
      let storedData = localStorage.getItem('myData');
      if(storedData) {
        let myData = JSON.parse(storedData);
        setUserName(myData.name);
        setUserID(myData.id);
        setUserType(myData.type);
        if(myData.restID) {
          setRestaurantID(myData.restID);
        }
      }
      
      if(restaurantID) {
         getOrders(setIncomingOrders, setActiveOrders, restaurantID);
      }
   }, [restaurantID])

   return (
      <div>
         <h2 id={styles["restaurant-name"]}>Restaurant Dashboard</h2>
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
                     <Card.Header>Incoming Orders</Card.Header>
                     <Card.Body className={styles["card-body"]}>
                        <Card.Text className={styles["restaurant-menu-items"]}>
                           {incomingOrders.map((order) => (
                              <Order
                                 id={order.OrderID}
                                 restaurantID={restaurantID}
                                 price={order.OrderPrice}
                                 incomingOrders={incomingOrders}
                                 setIncomingOrders={setIncomingOrders}
                                 activeOrders={activeOrders}
                                 setActiveOrders={setActiveOrders}
                                 status={"incoming"}
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
                     <Card.Header>Active Orders</Card.Header>
                     <Card.Body className={styles["card-body"]}>
                        <Card.Text className={styles["restaurant-menu-items"]}>
                           {activeOrders.map((order) => (
                              <Order
                                 id={order.OrderID}
                                 restaurantID={restaurantID}
                                 price={order.OrderPrice}
                                 incomingOrders={incomingOrders}
                                 setIncomingOrders={setIncomingOrders}
                                 activeOrders={activeOrders}
                                 setActiveOrders={setActiveOrders}
                                 status={"active"}
                                 getOrders={getOrders}
                              />
                           ))}
                        </Card.Text>
                     </Card.Body>
                  </Card>
               </div>
               <div id={styles["restaurant-order-option-container"]}>
                  <Card
                     bg={'light'}
                     key={'light'}
                     text={'dark'}
                     style={{ width: '30vw', height: '32vh' }}
                     className="mb-2"
                  >
                     <Card.Header>Restaurant Options</Card.Header>
                     <Card.Body id={styles["restaurant-options-container"]}>
                        <Link to="/restaurantSignup"><Button variant="secondary" size="sm">Register a Restaurant</Button></Link>
                        <Button variant="secondary" onClick={() => showRestaurantStatus()}size="sm">Registration Status</Button>
                        <Button variant="secondary" size="sm">Customer Service</Button>
                     </Card.Body>
                  </Card>
               </div>
            </div>
         </div>
         <LoginRegisterModal
                text={modalText}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
      </div>
   )
}

export default RestaurantDashboard;