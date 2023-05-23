/* 
Authors: Hieu Ma, Lin Tun, Shauhin Pourshayegan 
*/

import React, { useState } from "react"
import Forminput from "./Forminput"
import styles from "./RestaurantLogin.module.css";
import "./RestaurantRegister"
import Button from "react-bootstrap/esm/Button"
import LoginRegisterModal from "../../components/loginRegisterModal/LoginRegisterModal";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    let setUserName = props.setUserName;
    let setUserID = props.setUserID;
    let setUserType = props.setUserType;
    let setRestaurantID = props.setRestaurantID;

    const navigate = useNavigate();

    const [modalShow, setModalShow] = React.useState(false);
    const [modalText, setModalText] = React.useState('');

    const [values, setValues] = useState({
        email: "",
        password: "",
    })
    //Input of the user information
    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a vaild SFSU email, such as example@sfsu.edu",
            label: "Email",
            pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Your email or password was incorrect",
            label: "Password",
            // pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
            required: true,
        }
    ]

    async function login() {
        try {
            const response = await fetch(`http://34.82.124.237:3001/api/login`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    r_type: "RestaurantOwner",
                    email: values.email,
                    password: values.password,
                })
            });

            if (response.ok) {
                const data = await response.json();
                let id = data[0].RestaurantOwnerID;
                let name = data[0].RestaurantOwnerName;
                let restID = data[0].RestaurantID;
                setUserName(name);
                setUserID(id);
                setUserType("RestaurantOwner");
                setRestaurantID(restID);
                navigate('/');
            } else {
                throw new Error('Login failed');
            }
        } catch (error) {
            setModalText("Login Unsuccessful");
            setModalShow(true);
        }
    }
    
    const handleSubmit = (e) => {
        login();
        e.preventDefault();

    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    return (
        <div className={styles["Login"]}>
            <form onSubmit={handleSubmit}>
                <div className={styles["Title"]}>
                    Restaurant Owner Login
                </div>
                {inputs.map((input) => (
                    <Forminput key={input.id} {...input} value={values[input.name]} onChange={onChange}></Forminput>))}
                <button style={{marginTop: "3%", width: "80%"}} onSubmit="submit" >Login</button>
                <div className={styles["Registerpath"]}>
                    {/* <Link to="/Forgot-password" passHref>
                        <a href="replace">Forgot the password?</a></Link> */}
                </div>
                <div className={styles["Registerpath"]}>
                    Need to register?<a href="http://localhost:3000/Restaurant-register"> Sign Up!</a>
                </div>
            </form>
            <LoginRegisterModal
                text={modalText}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default Login