import React from "react";
import styles from "./LoginRegisterModal.module.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function LoginRegisterModal(props) {
   console.log(props)
   let text = props?.text;
   return (
      <Modal
         {...props}
         size="sm"
         aria-labelledby="contained-modal-title-vcenter"
         centered
      >
         <Modal.Header id={styles["header"]} closeButton>
         </Modal.Header>
         <Modal.Body>
            <h1 id={styles["login-text"]}>{text}</h1>
         </Modal.Body>
      </Modal>
   )
}

export default LoginRegisterModal;