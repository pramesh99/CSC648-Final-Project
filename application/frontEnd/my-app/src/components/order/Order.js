/* 
Authors: Hieu Ma, Lin Tun, Shauhin Pourshayegan 
*/

import React, { useEffect } from 'react';
import styles from "./Order.module.css";
// import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Order(props) {
   let id = props.id;
   let restaurantID = props.restaurantID;
   let driverID = props.driverID;
   let address = props.address;
   let customerID = props.customerID;
   let userID = props?.userID
   let price = props.price;
   let setActiveOrders = props.setActiveOrders;
   let setIncomingOrders = props.setIncomingOrders;
   let setDeliveredOrders = props.setDeliveredOrders;
   let status = props.status;
   let getOrders = props?.getOrders;
   let setCurrentOrders = props.setCurrentOrders;
   let setFinishedOrders = props.setFinishedOrders;
   let setCartCount = props?.setCartCount;


   async function deleteOrder(id) {
      const url = `http://34.82.124.237:3001/api/order/deleteOrder/${id}`;
      fetch(url, {
         method: 'POST',
      })
         .then(response => response.json())
         .then(data => {
            getOrders(setIncomingOrders, setActiveOrders, restaurantID);
         })
         .catch(error => {
            console.error(error);
         });
   }

   async function deleteUserOrder(id) {
      const url = `http://34.82.124.237:3001/api/order/deleteOrder/${id}`;
      fetch(url, {
         method: 'POST',
      })
         .then(response => response.json())
         .then(data => {
            getOrders(setCurrentOrders, setFinishedOrders, userID, setCartCount);
         })
         .catch(error => {
            console.error(error);
         });
   }

   function updateOrderStatusToActive() {
      const url = `http://34.82.124.237:3001/api/order/updateStatus/${id}/${2}`;
      fetch(url, {
         method: 'POST',
      })
         .then(response => response.json())
         .then(data => {
            getOrders(setIncomingOrders, setActiveOrders, restaurantID);
         })
         .catch(error => {
            console.error(error);
         });
   }

   function updateOrderStatusToPickup() {
      const url = `http://34.82.124.237:3001/api/order/updateStatus/${id}/${3}`;
      fetch(url, {
         method: 'POST',
      })
         .then(response => response.json())
         .then(data => {
            getOrders(setIncomingOrders, setActiveOrders, restaurantID);
         })
         .catch(error => {
            console.error(error);
         });
   }

   async function driverDashbaordDeleteOrder() {
      const url = `http://34.82.124.237:3001/api/order/deleteOrder/${id}`;
      fetch(url, {
         method: 'POST',
      })
         .then(response => response.json())
         .then(data => {
            getOrders(setIncomingOrders, setActiveOrders, setDeliveredOrders, driverID);
         })
         .catch(error => {
            console.error(error);
         });
   }

   function updateOrdersDriver(orderID, driverID) {
      const url = `http://34.82.124.237:3001/api/order/updateDriver/${orderID}/${driverID}`;
      fetch(url, {
         method: 'POST',
      })
         .then(response => response.json())
         .then(data => {
            getOrders(setIncomingOrders, setActiveOrders, setDeliveredOrders, driverID);
         })
         .catch(error => {
            console.error(error);
         });
   }

   function updateOrderStatusToDeliver() {
      const url = `http://34.82.124.237:3001/api/order/updateStatus/${id}/${4}`;
      fetch(url, {
         method: 'POST',
      })
         .then(response => response.json())
         .then(data => {
            getOrders(setIncomingOrders, setActiveOrders, setDeliveredOrders, driverID);
         })
         .catch(error => {
            console.error(error);
         });
   }

   function updateOrderStatusToDelivered() {
      const url = `http://34.82.124.237:3001/api/order/updateStatus/${id}/${5}`;
      fetch(url, {
         method: 'POST',
      })
         .then(response => response.json())
         .then(data => {
            getOrders(setIncomingOrders, setActiveOrders, setDeliveredOrders, driverID);
         })
         .catch(error => {
            console.error(error);
         });
   }


   let acceptOrder = () => {
      updateOrderStatusToActive();
   }

   let declineOrder = () => {
      deleteOrder(id)
   }

   let finishOrder = () => {
      updateOrderStatusToPickup();
   }

   let cancelOrder = () => {
      deleteOrder(id);
   }

   let updateToDeliver = () => {
      updateOrdersDriver(id, driverID)
      updateOrderStatusToDeliver();
   }

   let updateToDelivered = () => {
      updateOrderStatusToDelivered();
   }

   let deleteUsersOrder = () => {
      deleteUserOrder(id)
   }

   useEffect(() => {

   }, [])

   return (
      <div id={styles["menu-item"]}>
         <div id={styles["menu-item-description-container"]}>
            <div>Order ID: {id}</div>
            <div>Order Cost: ${price}</div>
            {driverID && 
               <div>Address: {address}</div>
            }
            {driverID && 
               <div>Customer ID: {customerID}</div>
            }
         </div>
         <div id={styles["menu-buttons-container"]}>
            {status === "incoming" &&
               <Button onClick={() => acceptOrder()} variant="outline-secondary" id={styles["menu-buttons-add"]} className={styles["menu-buttons"]}>Accept</Button>
            }
            {status === "incoming" &&
               <Button onClick={() => declineOrder()} variant="outline-secondary" className={styles["menu-buttons"]}>Decline</Button>
            }
            {status === "active" &&
               <Button onClick={() => finishOrder()} variant="outline-secondary" id={styles["menu-buttons-add"]} className={styles["menu-buttons"]}>Finish</Button>
            }
            {status === "active" &&
               <Button onClick={() => cancelOrder()} variant="outline-secondary" className={styles["menu-buttons"]}>Cancel</Button>
            }
            {status === "pickup" &&
               <Button onClick={() => updateToDeliver()} variant="outline-secondary" id={styles["menu-button-deliver"]} className={styles["menu-buttons"]}>Pickup</Button>
            }
            {status === "delivery" &&
               <Button onClick={() => updateToDelivered()} variant="outline-secondary" id={styles["menu-buttons-add"]} className={styles["menu-buttons"]}>Delivered</Button>
            }
            {status === "delivery" &&
               <Button onClick={() => driverDashbaordDeleteOrder()} variant="outline-secondary" className={styles["menu-buttons"]}>Cancel</Button>
            }
            {status === "userActive" &&
               <Button onClick={() => deleteUsersOrder()} variant="outline-secondary" id={styles["menu-button-deliver"]} className={styles["menu-buttons"]}>Cancel</Button>
            }
         </div>
      </div>
   )
}

export default Order;