import React, { useState, useEffect } from 'react';
import styles from "./Restaurant.module.css";
import MenuItem from '../../components/menuItem/MenuItem';
import SelectedItem from '../../components/selectedItem/SelectedItem';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
import Pickup from '../../components/pickup/Pickup';
import Delivery from '../../components/delivery/Delivery';
import LoginRegisterModal from '../../components/loginRegisterModal/LoginRegisterModal';

async function submitOrder(orderPrice, location, restaurantID, userName, setModalShow) {
   if (userName) {
      console.log("submitted order");
      let resData = [];
      fetch(`http://34.82.124.237:3001/api/submit/customerOrder`, {
         method: 'POST',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            CustomerID: 1,
            DriverID: 1,
            RestaurantID: restaurantID,
            OrderTime: "5 minutes",
            DeliveryTime: "5 minutes",
            DeliveryAddress: location,
            AdditionalNotes: "none",
            OrderDiscounts: 0,
            OrderPrice: Number(orderPrice),
            OrderStatus: 1,
         })
      })
         .then(response => response.json())
         .then(response => console.log(JSON.stringify(response)))
      return resData;
   } else {
      setModalShow(true);
   }
}

async function getSearchRestaurants(id, setMenu) {
   let resData = [];
   if (id) {
      id = "/" + id
   }
   await fetch(`http://34.82.124.237:3001/api/restaurantMenu${id}`).then((r) => r.json()).then((data) => {
      resData = data;
      setMenu(resData);
   }
   )
   return resData;
}

function Restaurant(props) {
   // console.log("selected restaurant", props.restaurant);
   let userName = props.userName;

   const [modalShow, setModalShow] = React.useState(false);
   const [modalText, setModalText] = React.useState('Please login to order');

   const [menu, setMenu] = useState([
      { MenuItemName: "item_1", MenuItemDescription: "lorem ipsum", MenuItemPrice: 5 },
      { MenuItemName: "item_2", MenuItemDescription: "lorem ipsum", MenuItemPrice: 10 },
      { MenuItemName: "item_3", MenuItemDescription: "lorem ipsum", MenuItemPrice: 15 },
   ]);
   const [location, setLocation] = useState("");

   let restaurant = props.restaurant;

   const [radioValue, setRadioValue] = useState('Set Pickup Location:');
   const [selectedItems, setSelectedItems] = useState({});
   const [total, setTotal] = useState(0);

   const radios = [
      { name: 'Pickup', value: 'Set Pickup Location:' },
      { name: 'Delivery', value: 'Set Delivery Location:' },
   ];

   useEffect(() => {
      let restaurant = props.restaurant;
      console.log("restaurant", restaurant.RestaurantID)
      if (restaurant.RestaurantName) {
         getSearchRestaurants(restaurant.RestaurantName, setMenu)
      }
   }, [])

   let updateTotalCost = () => {
      let selectedItemsArr = Object.values(selectedItems);
      let total = 0;
      if (selectedItemsArr.length) {
         for (let i = 0; i < selectedItemsArr.length; i++) {
            total += (selectedItemsArr[i].price * selectedItemsArr[i].amount);
         }
      }
      return setTotal(total.toFixed(2));
   }

   let renderDeliveryOption = () => {
      if (radioValue === 'Set Pickup Location:') {
         return (
            <Pickup setLocation={setLocation} />
         )
      } else {
         return (
            <Delivery setLocation={setLocation} />
         )
      }
   }

   useEffect(() => {
      updateTotalCost();
   }, [selectedItems])

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
                        {menu.map((item) => (
                           <MenuItem id={item?.MenuItemID} name={item?.MenuItemName} description={item?.MenuItemDescription} price={item?.MenuItemPrice} selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
                        ))}
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
                              updateTotalCost={updateTotalCost}
                           />
                        ))}
                     </Card.Text>
                  </Card.Body>
               </Card>
               <Card style={{ width: '30vw' }}>
                  <Card.Body>Total: ${total}</Card.Body>
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
                  <Card.Header>{radioValue}</Card.Header>
                  <Card.Body className={styles["card-body"]}>
                     <Card.Text className={styles["restaurant-menu-items"]}>
                        {renderDeliveryOption()}
                     </Card.Text>
                  </Card.Body>
               </Card>
               <Button variant="secondary" size="sm" onClick={() => submitOrder(total, location, restaurant.RestaurantID, userName, setModalShow)}>Order</Button>
            </div>
         </div>
         <LoginRegisterModal
            text={modalText}
            show={modalShow}
            onHide={() => setModalShow(false)}
         />
      </div>
   )
}

export default Restaurant;