import React from 'react';
import styles from "./MenuItem.module.css";
// import { Link } from "react-router-dom";

function MenuItem(props) {
   return (
      <div id={styles["menu-item"]}>
         {/* <div>{props.image}</div> */}
         <div>Item: {props.name}</div>
         <div>Description: {props.description}</div>
         <div>Price: {props.price}$</div>

      </div>
   )
}

export default MenuItem;