import React from 'react';
import styles from "./Restaurant.module.css";
import MenuItem from '../../components/menuItem/MenuItem';
import Card from 'react-bootstrap/Card';

// import { Link } from "react-router-dom";

function Restaurant(props) {
   let menu = props.menu;
   let menuItems;
   if (menu) {
      menuItems = menu.map((item) => (
         <MenuItem name={item.name} description={item.description} price={item.price} />
      ))
   }
   
   return (
      <div id={styles["restaurant-card"]}>
         <h2 id={styles["restaurant-name"]}>{props.name}</h2>
         <div>
            <Card
               bg={'light'}
               key={'light'}
               text={'dark'}
               style={{ width: '35vw', height: '50vh' }}
               className="mb-2"
            >
               <Card.Header>Menu</Card.Header>
               <Card.Body id={styles["card-body"]}>
                  <Card.Text id={styles["restaurant-menu"]}>
                     {menuItems}
                  </Card.Text>
               </Card.Body>
            </Card>
            <Card id={styles['restaurant-description']}>
               <Card.Body>Description: {props.description}</Card.Body>
            </Card>
         </div>

         {/* <div id={styles["restaurant-menu-container"]}>
            <div id={styles["restaurant-menu-title"]}>Menu:</div>
            <div id={styles["restaurant-menu"]}>
               {menuItems}
            </div>
         </div>
         <div id={styles["restaurant-description"]}>{props.description}</div> */}

      </div>
   )
}

export default Restaurant;