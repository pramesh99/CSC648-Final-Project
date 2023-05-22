/* 
Authors: Hieu Ma, Lin Tun, Shauhin Pourshayegan 
*/

import React, { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from "./RestaurantSignup.module.css";
import Card from 'react-bootstrap/Card';

let daysOfWeek = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday"
]

let hoursOfOperation = () => {
   return (
      <Form.Group controlId="restaurantAddress">
         <Form.Label>Sunday</Form.Label>
         <div className={styles["restaurant-hours-container"]}>
            <Form.Select aria-label="Default select example">
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
               <option value="6">6</option>
               <option value="7">7</option>
               <option value="8">8</option>
               <option value="9">9</option>
               <option value="10">10</option>
               <option value="9">11</option>
               <option value="10">12</option>
            </Form.Select>
            <Form.Select aria-label="Default select example">
               <option value="AM">AM</option>
               <option value="PM">PM</option>
            </Form.Select>
            <div className={styles["to"]}>to</div>
            <Form.Select aria-label="Default select example">
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
               <option value="6">6</option>
               <option value="7">7</option>
               <option value="8">8</option>
               <option value="9">9</option>
               <option value="10">10</option>
               <option value="9">11</option>
               <option value="10">12</option>
            </Form.Select>
            <Form.Select aria-label="Default select example">
               <option value="AM">AM</option>
               <option value="PM">PM</option>
            </Form.Select>
         </div>
      </Form.Group>
   )
}


const RestaurantSignup = (props) => {
   return (
      <div id={styles["restaurant-signup"]}>
         <h1 id={styles["signup-title"]}>Restaurant Registration Form</h1>
         <div id={styles["forms-container"]}>
            <Form id={styles["form"]}>
               <div className={styles["restaurant-form"]}>
                  <Form.Group className="mb-3" controlId="restaurantName">
                     <Form.Label>Restaurant Name</Form.Label>
                     <Form.Control type="text" placeholder="Restaurant Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="restaurantAddress">
                     <Form.Label>Restaurant Address</Form.Label>
                     <Form.Control type="text" placeholder="Restaurant Address" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="phoneNumber">
                     <Form.Label>Phone Number</Form.Label>
                     <Form.Control type="number" placeholder="Phone Number" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label>Cuisine Type:</Form.Label>
                     <Form.Control type="text" placeholder="Cuisine Type" />
                  </Form.Group>
               </div>

               <div className={styles["restaurant-form"]}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label>Edit Menu Items</Form.Label>
                     <Form.Group className="mb-3" controlId="restaurantAddress">
                        <Form.Label>Item Name:</Form.Label>
                        <Form.Control type="text" placeholder="Item Name" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="restaurantAddress">
                        <Form.Label>Item Price:</Form.Label>
                        <Form.Control type="text" placeholder="Item Price" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="restaurantAddress">
                        <Form.Label>Item Type:</Form.Label>
                        <Form.Select aria-label="Default select example">
                           <option value="American">Entree</option>
                           <option value="Chinese">Appetizer</option>
                           <option value="Chinese">Drink</option>
                        </Form.Select>
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="restaurantAddress">
                        <Form.Label>Item Description:</Form.Label>
                        <Form.Control type="text" placeholder="Item Description" />
                     </Form.Group>
                     <Button variant="primary" type="submit" size="sm">
                        Add Item
                     </Button>
                  </Form.Group>

               </div>
               <div className={styles["restaurant-form"]}>
                  <Card id={styles["menu-items-form"]}>
                     <Card.Header>Menu Items</Card.Header>
                     <Card.Body>
                        <Card.Text>
                        </Card.Text>
                     </Card.Body>
                  </Card>
                  <Form.Group className="mb-3" controlId="phoneNumber">
                     <Form.Label>Avg Prep Time (In Minutes)</Form.Label>
                     <Form.Control type="number" label="Avg Prep Time" />
                  </Form.Group>
               </div>
               <div id={styles["hours-of-op"]} className={styles["restaurant-form"]}>
                  <h5>Hours of Operation:</h5>
                  {daysOfWeek.map((day) => (
                     <Form.Group controlId="restaurantAddress">
                        <Form.Label>{day}</Form.Label>
                        <div className={styles["restaurant-hours-container"]}>
                           <Form.Select aria-label="Default select example">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                              <option value="9">11</option>
                              <option value="10">12</option>
                           </Form.Select>
                           <Form.Select className={styles["time-form"]} aria-label="Default select example">
                              <option value="AM">AM </option>
                              <option value="PM">PM </option>
                           </Form.Select>
                           <div className={styles["to"]}>to</div>
                           <Form.Select aria-label="Default select example">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                              <option value="9">11</option>
                              <option value="10">12</option>
                           </Form.Select>
                           <Form.Select aria-label="Default select example">
                              <option value="AM">AM</option>
                              <option value="PM">PM</option>
                           </Form.Select>
                        </div>
                     </Form.Group>
                  ))}
                  <Button variant="primary" type="submit" size="sm" style={{marginTop: "5%"}}>
                     Submit Restaurant
                  </Button>
               </div>
            </Form>
         </div>
      </div>
   )
}

export default RestaurantSignup