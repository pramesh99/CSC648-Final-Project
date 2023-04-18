import { useState } from "react"
import Forminput from "./Forminput"
import styles from "./Login.module.css";
import "./Register"
import Button from "react-bootstrap/esm/Button"

const Login = () => {
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
            errorMessage: "Your password was incorrect",
            label: "Password",
            pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
            required: true,
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    console.log(values)

    return (
        <div className={styles["Login"]}>
            <form onSubmit={handleSubmit}>
                <h1>Welcome Back</h1>
                <h2>GatorGrub</h2>
                {inputs.map((input) => (
                    <Forminput key={input.id} {...input} value={values[input.name]} onChange={onChange}></Forminput>))}
                <h3> </h3>
                <button onSubmit="submit" >Login</button>
                <h3> </h3>
                <h6>Need to register?<a href="http://localhost:3000/register">Sign Up!</a></h6>
                <h3> </h3>
            </form>
        </div>
    )
}

export default Login