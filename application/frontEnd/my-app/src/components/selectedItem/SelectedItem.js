import React, { useState } from 'react';
import styles from "./SelectedItem.module.css";
// import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function SelectedItem(props) {
   let selectedItems = props.selectedItems;
   let setSelectedItems = props.setSelectedItems;
   let updateTotalCost = props.updateTotalCost;

   let [amount, setAmount] = useState(1);

   let incrementItem = () => {
      let newSelectedItems = { ...selectedItems };
      newSelectedItems[props.name].amount += 1;
      
      setAmount(newSelectedItems[props.name].amount);
      setSelectedItems(newSelectedItems);
      updateTotalCost();

      console.log("INCREMENTED ITEM AMOUNT", newSelectedItems[props.name].amount);
   }

   let decrementItem = () => {
      let newSelectedItems = { ...selectedItems };
   
      if (props.name in newSelectedItems) {
         newSelectedItems[props.name].amount -= 1;
         console.log("DECREMENTED", newSelectedItems[props.name].amount);

         if (newSelectedItems[props.name].amount <= 0) {
            newSelectedItems[props.name].amount = 0;
            setAmount(newSelectedItems[props.name].amount);
            setSelectedItems(newSelectedItems);
            updateTotalCost();
         } else {
            newSelectedItems[props.name].amount -= 1;
            setAmount(newSelectedItems[props.name].amount);
            setSelectedItems(newSelectedItems);
            updateTotalCost();
         }
      }
   }

   let removeItem = () => {
      let newSelectedItems = { ...selectedItems };
      if (props.name in newSelectedItems) {
         delete newSelectedItems[props.name];
         setSelectedItems(newSelectedItems);
      }
   }

   return (
      <div id={styles["menu-item"]}>
         <div id={styles["menu-item-description-container"]}>
            <div>Item: {props?.name}</div>
            <div>Description: {props?.description}</div>
            <div>Price: ${props?.price}</div>
            <div>Amount: {amount}</div>
         </div>
         <div id={styles["menu-buttons-container"]}>
            <div  id={styles["increment-decrement-buttons"]}>
               <Button onClick={() => incrementItem()} variant="outline-secondary" id={styles["menu-buttons-add"]} className={styles["menu-buttons"]}>+</Button>{' '}
               <Button onClick={() => decrementItem()} variant="outline-secondary" className={styles["menu-buttons"]}>-</Button>{' '}
            </div>
               <Button onClick={() => removeItem()} variant="outline-danger" id={styles["menu-buttons-remove"]} >Remove</Button>{' '}
         </div>
      </div>
   )
}

export default SelectedItem;