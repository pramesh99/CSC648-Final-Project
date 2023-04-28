import React, { useState } from 'react';
import styles from "./Restaurant.module.css";
import MenuItem from '../../components/menuItem/MenuItem';
import SelectedItem from '../../components/selectedItem/SelectedItem';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';

// import { Link } from "react-router-dom";

function Restaurant(props) {
   console.log("selected restaurant", props.restaurant);

   let restaurant = props.restaurant;

   let menu = props.menu;
   let menuItems;

   const [checked, setChecked] = useState(false);
   const [radioValue, setRadioValue] = useState('1');

   const [selectedItems, setSelectedItems] = useState({});
   const [total, setTotal] = useState(0);

   let updateTotalCost = () => {
      
   }

   const radios = [
      { name: 'Pickup', value: '1' },
      { name: 'Delivery', value: '2' },
   ];

   if (menu) {
      menuItems = menu.map((item) => (
         <MenuItem name={item.name} description={item.description} price={item.price} />
      ))
   } else {
      let fakeItems = [
         { name: "item_1", description: "lorem ipsum", price: 5 },
         { name: "item_2", description: "lorem ipsum", price: 10 },
         { name: "item_3", description: "lorem ipsum", price: 15 },
      ]
      menuItems = fakeItems.map((item) => (
         <MenuItem
            name={item.name}
            description={item.description}
            price={item.price}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
         />
      ))
   }

   return (
      <div id={styles["restaurant-card"]}>
         <h2 id={styles["restaurant-name"]}>{restaurant.RestaurantName}</h2>
         <div id={styles["restaurant-menu-cart-container"]}>
            <div id={styles["restaurant-menu"]}>
               <Card
                  bg={'light'}
                  key={'light'}
                  text={'dark'}
                  style={{ width: '35vw', height: '33vh' }}
                  className="mb-2"
               >
                  <Card.Header>Menu</Card.Header>
                  <Card.Body className={styles["card-body"]}>
                     <Card.Text className={styles["restaurant-menu-items"]}>
                        {menuItems}
                     </Card.Text>
                  </Card.Body>
               </Card>
               <Card id={styles['restaurant-description']}>
                  <Card.Body>Description: {restaurant.RestaurantDescription}</Card.Body>
               </Card>
            </div>
            <div id={styles["restaurant-cart"]}>
               <Card
                  bg={'light'}
                  key={'light'}
                  text={'dark'}
                  style={{ width: '30vw', height: '33vh' }}
                  className="mb-2"
               >
                  <Card.Header>Selected Items</Card.Header>
                  <Card.Body className={styles["card-body"]}>
                     <Card.Text className={styles["restaurant-menu-items"]}>
                        {Object.values(selectedItems).map((item) => (
                           <SelectedItem
                              name={item.name}
                              description={item.description}
                              price={item.price}
                              selectedItems={selectedItems}
                              setSelectedItems={setSelectedItems} 
                              setTotal={setTotal}
                              />
                        ))}
                     </Card.Text>
                  </Card.Body>
               </Card>
               <Card style={{ width: '30vw'}}>
                  <Card.Body>Total: {total}</Card.Body>
               </Card>
            </div>
            <div id={styles["restaurant-order-option-container"]}>
               <ButtonGroup id={styles["pickup-delivery-buttons-container"]}>
                  {radios.map((radio, idx) => (
                     <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={'secondary'}
                        name="radio"
                        size="sm"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                     >
                        {radio.name}
                     </ToggleButton>
                  ))}
               </ButtonGroup>
               <Card
                  bg={'light'}
                  key={'light'}
                  text={'dark'}
                  style={{ width: '20vw', height: '23vh' }}
                  className="mb-2"
               >
                  <Card.Header></Card.Header>
                  <Card.Body className={styles["card-body"]}>
                     <Card.Text className={styles["restaurant-menu-items"]}>

                     </Card.Text>

                  </Card.Body>
               </Card>
               <Button variant="secondary" size="sm">Order</Button>
            </div>
         </div>


      </div>
   )
}

export default Restaurant;