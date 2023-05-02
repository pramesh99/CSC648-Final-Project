import React from "react";
import styles from "./Delivery.module.css";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Delivery(props) {

   return (
      <>
         <div id={styles["delivery-form-container"]}>
            <InputGroup className="mb-3">
               <InputGroup.Text id="basic-addon1">Address</InputGroup.Text>
               <Form.Control
                  aria-label="Address"
                  aria-describedby="basic-addon1"
               />
            </InputGroup>
            <div id={styles["if-applicable"]}>If Applicable:</div>
            <InputGroup className="mb-3">
               <InputGroup.Text id="basic-addon1">Building</InputGroup.Text>
               <Form.Control
                  aria-label="Building"
                  aria-describedby="basic-addon1"
               />
            </InputGroup>
            <InputGroup className="mb-3">
               <InputGroup.Text id="basic-addon1">Room #</InputGroup.Text>
               <Form.Control
                  aria-label="Room #"
                  aria-describedby="basic-addon1"
               />
            </InputGroup>
         </div>
      </>
   )
}

export default Delivery;