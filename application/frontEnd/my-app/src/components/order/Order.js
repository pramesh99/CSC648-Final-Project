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

   function deleteOrder(id) {
      const url = `http://34.82.124.237:3001/api/order/deleteOrder/${id}`;
      fetch(url, {
         method: 'DELETE',
      })
         .then(response => response.json())
         .then(data => {
            console.log(data);
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
            console.log(data);
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
            console.log(data);
         })
         .catch(error => {
            console.error(error);
         });
   }

   let acceptOrder = () => {

      let newActiveOrders = { ...activeOrders };
      let newIncomingOrders = { ...incomingOrders };
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
      updateOrderStatusToActive();
   }

   let declineOrder = () => {
      let newIncomingOrders = { ...incomingOrders };
      console.log(newIncomingOrders)
      for (let i = 0; i < newIncomingOrders.length; i++) {
         if (newIncomingOrders[i].OrderID === id) {
            newIncomingOrders.splice(i, 1);
            setIncomingOrders(newIncomingOrders);
         }
      }
      deleteOrder(id);
   }

   let finishOrder = () => {
      let newActiveOrders = { ...activeOrders };
      console.log(status);
      console.log(newActiveOrders);
      console.log(id);
      if (id in newActiveOrders) {
         setActiveOrders(newActiveOrders);
      }
      updateOrderStatusToPickup();
   }

   let cancelOrder = () => {
      let newActiveOrders = { ...activeOrders };
      console.log("cancelOrder", id);
      console.log(newActiveOrders);
      for (let i = 0; i < newActiveOrders.length; i++) {
         if (newActiveOrders[i].OrderID === id) {
            newActiveOrders.splice(i, 1);
            setIncomingOrders(newActiveOrders);
         }
      }
      deleteOrder(id);
   }



   useEffect(() => {
      // console.log("ORER PROPS:", props);
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