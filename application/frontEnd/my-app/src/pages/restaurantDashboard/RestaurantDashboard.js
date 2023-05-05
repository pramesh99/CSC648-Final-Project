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

function RestaurantDashboard(props) {

   let orders;
   let renderOrderItems;

   const [incomingOrders, setIncomingOrders] = useState({});
   const [activeOrders, setActiveOrders] = useState({});

   useEffect(() => {
      if (orders) {
         renderOrderItems = orders.map((order) => (
            <Order
               id={order.OrderID}
               price={order.OrderPrice}
               incomingOrders={incomingOrders}
               setIncomingOrders={setIncomingOrders}
               activeOrders={activeOrders}
               setActiveOrders={setActiveOrders}
               status={order.status}
            />
         ))
      } else {
         let fakeItems = {
            item_1: { OrderID: "item_1", OrderPrice: 5, key: "1", status: "incoming" },
            item_2: { OrderID: "item_2", OrderPrice: 10, key: "2", status: "incoming" },
            item_3: { OrderID: "item_3", OrderPrice: 15, key: "3", status: "incoming" },
         }
         setIncomingOrders(fakeItems);
      }
   }, [])


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
                           {Object.values(incomingOrders).map((order) => (
                              <Order
                                 id={order.OrderID}
                                 price={order.OrderPrice}
                                 incomingOrders={incomingOrders}
                                 setIncomingOrders={setIncomingOrders}
                                 activeOrders={activeOrders}
                                 setActiveOrders={setActiveOrders}
                                 status={order.status}
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
                           {Object.values(activeOrders).map((order) => (
                              <Order
                                 id={order.OrderID}
                                 price={order.OrderPrice}
                                 incomingOrders={incomingOrders}
                                 setIncomingOrders={setIncomingOrders}
                                 activeOrders={activeOrders}
                                 setActiveOrders={setActiveOrders}
                                 status={order.status}
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
                        <Button variant="secondary" size="sm">Registration Status</Button>
                        <Button variant="secondary" size="sm">Customer Service</Button>
                     </Card.Body>
                  </Card>
               </div>

            </div>
         </div>
      </div>
   )
}

export default RestaurantDashboard;