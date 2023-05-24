/* 
Authors: Hieu Ma, Lin Tun, Shauhin Pourshayegan 
*/

import React, { useState } from "react"
import Forminput from "./Forminput"
import styles from "./DriverLogin.module.css";
import "./DriverRegister"
import Button from "react-bootstrap/esm/Button"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import LoginRegisterModal from "../../components/loginRegisterModal/LoginRegisterModal";

const Login = (props) => {
    let setUserName = props.setUserName;
    let setUserID = props.setUserID;
    let setUserType = props.setUserType;

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
            errorMessage: "It should be a vaild SFSU email, such as example@gmail.com",
            label: "Email",
            pattern: "[a-z0-9._%+-]+@gmail.com$",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Your email or password was incorrect",
            label: "Password",
            pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
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
                    r_type: "Driver",
                    email: values.email,
                    password: values.password,
                })
            })
            if (response.ok) {
                const data = await response.json();
                let id = data[0].DriverID;
                let name = data[0].DriverName;
                setUserName(name);
                setUserID(id);
                setUserType("Driver");
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
                    Driver Login
                </div>
                {inputs.map((input) => (
                    <Forminput key={input.id} {...input} value={values[input.name]} onChange={onChange}></Forminput>))}
                <button style={{marginTop: "3%"}} onSubmit="submit" >Login</button>
                <div className={styles["Registerpath"]}>
                    {/* <a href="/forgotpassword">Forgot password?</a> */}
                </div>
                <div className={styles["Registerpath"]}>
                    Want to be a driver? <a href="http://localhost:3000/Driver-register">Sign Up!</a>
                    {/* <Link to="/Forgot-password" passHref>
                        <a href="replace">Forgot the password?</a></Link> */}
                </div>
                <div className={styles["Registerpath"]}>
                    Want to be a customer?
                    <Link to="/Driver-register" passHref>
                        <a href="replace"> Sign Up!</a></Link>
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