import React, { useEffect } from 'react';
import styles from "./Order.module.css";
// import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Order(props) {
   // console.log("Order", props);

   let id = props.id;
   let price = props.price;
   let setActiveOrders = props.setActiveOrders;
   let activeOrders = props.activeOrders;
   let incomingOrders = props.incomingOrders;
   let setIncomingOrders = props.setIncomingOrders;
   let status = props.status;

   let add;
   let remove;

   // console.log(status);


   let acceptOrder = () => {
      let newActiveOrders = { ...activeOrders };
      let newIncomingOrders = {...incomingOrders};

      // console.log("activeOrder", id);
      if (!(id in newActiveOrders)) {
         newActiveOrders[id] = {
             OrderID: id, 
             OrderPrice: price,
             status: "active",
         };
         setActiveOrders(newActiveOrders);
         delete newIncomingOrders[id];
         setIncomingOrders(newIncomingOrders);
      }
   }

   let declineOrder = () => {
      let newIncomingOrders = { ...incomingOrders };
      // console.log("declineOrder", id);
      console.log(status)
      if (id in newIncomingOrders) {
         delete newIncomingOrders[id];
         setIncomingOrders(newIncomingOrders);
      }
   }

   let finishOrder = () => {
      let newActiveOrders = { ...activeOrders };
      console.log(status);
      console.log(newActiveOrders)
      console.log(id)
      if (id in newActiveOrders) {
         //api to update order status
         delete newActiveOrders[id];
         setActiveOrders(newActiveOrders);
      }
   }

   let cancelOrder = () => {
      let newActiveOrders = { ...activeOrders };
      console.log("cancelOrder", id);
      console.log(newActiveOrders)

      if (id in newActiveOrders) {
         //api to update order status
         delete newActiveOrders[id];
         setActiveOrders(newActiveOrders);
      }
   }

   useEffect(() => {
      console.log("ORER PROPS:", props);
      // if(status === 'incoming') {
      //    add = acceptOrder;
      //    remove = declineOrder;
      // } else {
      //    add = finishOrder;
      //    remove = cancelOrder;
      // }
      // console.log(add, remove);
   }, [])
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
         </div>
      </div>
   )
}

export default Order;