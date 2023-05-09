import React from 'react';
import styles from "./MenuItem.module.css";
// import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function MenuItem(props) {
   let selectedItems = props.selectedItems;
   let setSelectedItems = props.setSelectedItems;
   // console.log(selectedItems)
   let addItem = () => {
      let newSelectedItems = { ...selectedItems };
      if (!(props.name in newSelectedItems)) {
         newSelectedItems[props.name] = {
            name: props.name,
            description: props.description,
            price: props.price,
            amount: 1,
         }
         setSelectedItems(newSelectedItems);
         // console.log("ADDED NEW ITEM", newSelectedItems)
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
            {/* <Button onClick={() => removeItem()} variant="outline-secondary" className={styles["menu-buttons"]}>Remove</Button>{' '} */}
         </div>
      </div>
   )
}

export default MenuItem;