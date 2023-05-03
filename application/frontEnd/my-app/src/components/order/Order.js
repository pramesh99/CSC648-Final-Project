import React from 'react';
import styles from "./Order.module.css";
// import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Order(props) {
   console.log("Order", props);

   let id = props.id;
   let price = props.price;
   let setActiveOrders = props.setActiveOrders;
   let activeOrders = props.activeOrders;
   let incomingOrders = props.incomingOrders;
   let setIncomingOrders = props.setIncomingOrders;

   let acceptOrder = () => {
      let newActiveOrders = { ...activeOrders };
      console.log("activeOrder", id);
      if (!(id in newActiveOrders)) {
         newActiveOrders[id] = {
             OrderID: id, 
             OrderPrice: price,
         };
         setActiveOrders(newActiveOrders);
      }
   }

   let declineOrder = () => {
      let newIncomingOrders = { ...incomingOrders };
      console.log("declineOrder", id);
      if (id in newIncomingOrders) {
         delete newIncomingOrders[id];
         setIncomingOrders(newIncomingOrders);
      }
   }

   let finishOrder = () => {
      let newActiveOrders = { ...activeOrders };
      console.log("activeOrder", id);
      if (!(id in newActiveOrders)) {
         newActiveOrders[id] = {
             OrderID: id, 
             OrderPrice: price,
         };
         setActiveOrders(newActiveOrders);
      }
   }

   // let removeOrder = () => {
   //    let newIncomingOrders = { ...incomingOrders };
   //    console.log("declineOrder", id);
   //    if (id in newIncomingOrders) {
   //       delete newIncomingOrders[id];
   //       setIncomingOrders(newIncomingOrders);
   //    }
   // }

   return (
      <div id={styles["menu-item"]}>
         <div id={styles["menu-item-description-container"]}>
         <div>Order ID: {id}</div>
         <div>Order Cost: ${price}</div>

         </div>
         <div id={styles["menu-buttons-container"]}>
            <Button onClick={() => {acceptOrder()}} variant="outline-secondary" id={styles["menu-buttons-add"]} className={styles["menu-buttons"]}>Accept</Button>{' '}
            <Button onClick={() => {declineOrder()}} variant="outline-secondary" className={styles["menu-buttons"]}>Decline</Button>{' '}
         </div>
      </div>
   )
}

export default Order;