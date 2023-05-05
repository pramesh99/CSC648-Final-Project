import { useState } from "react"
import Forminput from "./Forminput"
import styles from "./Login.module.css";
import "./Register"
import Button from "react-bootstrap/esm/Button"
import { Link } from "react-router-dom";

const Login = (props) => {
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
            pattern: "[a-z0-9._%+-]+@sfsu.edu$",
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
        let resData = [];
        fetch(`http://34.82.124.237:3001/api/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                r_type: "SFSUCustomer",
                email: values.email,
                password: values.password,
            })
        })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
        
        return resData;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    // console.log(values)

    return (
        <div className={styles["Login"]}>
            <form onSubmit={handleSubmit}>
            <div className={styles["Title"]}>
                Login
            </div>
            {/* <div className={styles["Title2"]}>
                with GatorGrub!
            </div> */}
            {inputs.map((input) => (
            <Forminput key={input.id} {...input} value={values[input.name]} onChange={onChange}></Forminput>))}
            <button onSubmit="submit" >Login</button>
            <div className={styles["Registerpath"]}>
            <Link to="/Forgot-password" passHref>
                <a href="replace">Forgot the password?</a></Link>
            </div>
            <div className={styles["Registerpath"]}>
                Need to register?
                <Link to="/register" passHref>
                <a href="replace">Sing Up!</a></Link>
            </div>
            </form>
        </div>
    )
}

export default Login