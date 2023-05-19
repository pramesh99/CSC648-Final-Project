import React, { useState, useEffect } from 'react';
import styles from "./DriverDashboard.module.css";
// import MenuItem from '../../components/menuItem/MenuItem';
// import SelectedItem from '../../components/selectedItem/SelectedItem';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
import Order from '../../components/order/Order';
// import Pickup from '../../components/pickup/Pickup';
// import Delivery from '../../components/delivery/Delivery';
// import { Link } from "react-router-dom";

async function getOrders(setIncomingOrders, setActiveOrders, id) {
   let resData = [];

   await fetch(`http://34.82.124.237:3001/api/order/driverID/${id}`).then((r) => r.json()).then((data) => {
      resData = data;
      let incomingOrders = [];
      let activeOrders = [];
      if (resData.length > 0) {
         for (let i = 0; i < resData.length; i++) {
            if (resData[i].OrderStatus === 3) {
               incomingOrders.push(resData[i]);
            }
            if (resData[i].OrderStatus === 4) {
               activeOrders.push(resData[i]);
            }
         }
         console.log("incomingOrders", incomingOrders);
         setIncomingOrders(incomingOrders);
         setActiveOrders(activeOrders);
      }
   }
   )
   return resData;
}

function DriverDashboard(props) {

   const [incomingOrders, setIncomingOrders] = useState([
      { OrderID: "item_1", OrderPrice: 5, key: "1", status: "incoming" },
      { OrderID: "item_2", OrderPrice: 10, key: "2", status: "incoming" },
      { OrderID: "item_3", OrderPrice: 15, key: "3", status: "incoming" },
   ]
   );
   const [activeOrders, setActiveOrders] = useState([]);

   useEffect(() => {
      getOrders(setIncomingOrders, setActiveOrders, 1);

   }, [])


   return (
      <div>
         <h2 id={styles["restaurant-name"]}>Driver Dashboard</h2>
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
                     <Card.Header>Available Orders</Card.Header>
                     <Card.Body className={styles["card-body"]}>
                        <Card.Text className={styles["restaurant-menu-items"]}>
                           {incomingOrders.map((order) => (
                              <Order
                                 id={order.OrderID}
                                 price={order.OrderPrice}
                                 incomingOrders={incomingOrders}
                                 setIncomingOrders={setIncomingOrders}
                                 activeOrders={activeOrders}
                                 setActiveOrders={setActiveOrders}
                                 status={"pickup"}
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
                     <Card.Header>Accepted Orders</Card.Header>
                     <Card.Body className={styles["card-body"]}>
                        <Card.Text className={styles["restaurant-menu-items"]}>
                           {activeOrders.map((order) => (
                              <Order
                                 id={order.OrderID}
                                 price={order.OrderPrice}
                                 incomingOrders={incomingOrders}
                                 setIncomingOrders={setIncomingOrders}
                                 activeOrders={activeOrders}
                                 setActiveOrders={setActiveOrders}
                                 status={"delivery"}
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
                     <Card.Header>Completed Orders</Card.Header>
                     <Card.Body className={styles["card-body"]}>
                        <Card.Text className={styles["restaurant-menu-items"]}>
                           {/* {Object.values(activeOrders).map((order) => (
                              <Order
                                 id={order.OrderID}
                                 price={order.OrderPrice}
                                 incomingOrders={incomingOrders}
                                 setIncomingOrders={setIncomingOrders}
                                 activeOrders={activeOrders}
                                 setActiveOrders={setActiveOrders}
                                 status={order.status}
                              />
                           ))} */}
                        </Card.Text>
                     </Card.Body>
                  </Card>
               </div>

            </div>
         </div>
      </div>
   )
}

export default DriverDashboard;