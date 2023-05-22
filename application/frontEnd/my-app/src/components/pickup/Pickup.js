/* 
Authors: Hieu Ma, Lin Tun, Shauhin Pourshayegan 
*/

import React, { useState } from "react";
import styles from "./Pickup.module.css";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Pickup(props) {
   let setLocation = props.setLocation;

   const [restaurantPickup, setRestaurantPickup] = useState(false);
   const [chavezPickup, setChavezPickup] = useState(false);
   const [upnPickup, setUPNPickup] = useState(false);
   const [mashoufPickup, setMashoufPickup] = useState(false);
   const [selectedPickup, setSelectedPickup] = useState('');

   let options = [
      "Restaurant Pickup",
      "Ceaser Chavez Pickup",
      "UPN Pickup",
      "Mashouf WC Pickup"
   ]

   let renderOptions = () => {
      // let optionsArr = options.map((option) => (
      //    <ToggleButton
      //       className={styles["pickup-option"]}
      //       id="toggle-check"
      //       type="checkbox"
      //       variant="outline-primary"
      //       value={option}
      //       checked={checked}
      //       onChange={(e) => setChecked(option)}
      //    >
      //       {option}
      //    </ToggleButton>
      // ))

      // return optionsArr;
   }

   return (
      <div id={styles["pickup-option-container"]}>
         {/* {renderOptions()} */}
         <ToggleButton
            className={styles["pickup-option"]}
            id="toggle-check1"
            type="checkbox"
            variant="outline-secondary"
            value={options[0]}
            checked={restaurantPickup}
            onChange={(e) => {
               setRestaurantPickup(!restaurantPickup);
               setChavezPickup(false);
               setUPNPickup(false);
               setMashoufPickup(false);
               setLocation(options[0]);
            }}
         >
            {options[0]}
         </ToggleButton>
         <ToggleButton
            className={styles["pickup-option"]}
            id="toggle-check2"
            type="checkbox"
            variant="outline-secondary"
            value={options[1]}
            checked={chavezPickup}
            onChange={(e) => {
               setRestaurantPickup(false);
               setChavezPickup(!chavezPickup);
               setUPNPickup(false);
               setMashoufPickup(false);
               setLocation(options[1]);
            }}
         >
            {options[1]}
         </ToggleButton>
         <ToggleButton
            className={styles["pickup-option"]}
            id="toggle-check3"
            type="checkbox"
            variant="outline-secondary"
            value={options[2]}
            checked={upnPickup}
            onChange={(e) => {
               setRestaurantPickup(false);
               setChavezPickup(false);
               setUPNPickup(!upnPickup);
               setMashoufPickup(false);
               setLocation(options[2]);
            }}
         >
            {options[2]}
         </ToggleButton>
         <ToggleButton
            className={styles["pickup-option"]}
            id="toggle-check4"
            type="checkbox"
            variant="outline-secondary"
            value={options[3]}
            checked={mashoufPickup}
            onChange={(e) => {
               setRestaurantPickup(false);
               setChavezPickup(false);
               setUPNPickup(false);
               setMashoufPickup(!mashoufPickup);
               setLocation(options[3]);
            }}
         >
            {options[3]}
         </ToggleButton>
      </div>
   )
}

export default Pickup;