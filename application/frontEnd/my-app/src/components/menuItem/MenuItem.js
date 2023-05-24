/* 
Authors: Hieu Ma, Lin Tun, Shauhin Pourshayegan 
*/

import React from 'react';
import styles from "./MenuItem.module.css";
// import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function updateOrderStatus(orderID, statusNum) {
   const url = `http://34.82.124.237:3001/api/order/updateStatus/${orderID}/${statusNum}`;
   fetch(url, {
     method: 'POST',
   })
     .then(response => response.json())
     .then(data => {
     })
     .catch(error => {
       console.error(error);
     });
 }

function MenuItem(props) {
   let selectedItems = props.selectedItems;
   let setSelectedItems = props.setSelectedItems;
   
   let addItem = () => {
      let newSelectedItems = { ...selectedItems };
      if (!(props.name in newSelectedItems)) {
         newSelectedItems[props.name] = {
            name: props.name,
            description: props.description,
            price: props.price,
            amount: 1,
            id: props.id,
         }
         setSelectedItems(newSelectedItems);
         updateOrderStatus(props.id, 2);
      }
   }

   return (
      <div id={styles["menu-item"]}>
         <div id={styles["menu-item-description-container"]}>
            <div>Item: {props.name}</div>
            <div>Description: {props.description}</div>
            <div>Price: ${props.price}</div>
         </div>
         <div id={styles["menu-buttons-container"]}>
            <Button onClick={() => addItem()} variant="outline-secondary" id={styles["menu-buttons-add"]} className={styles["menu-buttons"]}>Add</Button>{' '}
         </div>
      </div>
   )
}

export default MenuItem;