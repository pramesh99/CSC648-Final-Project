/* 
Authors: Hieu Ma, Lin Tun, Shauhin Pourshayegan 
*/

import { useState } from "react"
import Forminput from "./Forminput"
import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import LoginRegisterModal from "../../components/loginRegisterModal/LoginRegisterModal";

const Register = () => {
    const [modalShow, setModalShow] = useState(false);
    const [modalText, setModalText] = useState('');

    const [values, setValues] = useState({
        email: "",
        firstname: "",
        lastname: "",
        phone: "",
        password: "",
        confirmPassword: ""
    })
    //Input of the user information
    const inputs = [
        {
            id: 1,
            name: "firstname",
            type: "text",
            placeholder: "First Name",
            errorMessage: " ",
            label: "First Name",
            required: true,
        },
        {
            id: 2,
            name: "lastname",
            type: "text",
            placeholder: "Last Name",
            errorMessage: " ",
            label: "Last Name",
            required: true,
        },
        {
            id: 3,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a vaild SFSU email, such as example@sfsu.edu",
            label: "Email",
            pattern: "[a-z0-9._%+-]+@sfsu.edu$",
            required: true,
        },
        {
            id: 4,
            name: "phone",
            type: "tel",
            placeholder: "Phone Number",
            errorMessage: "Should have ten digit number, such as 555-555-5555.",
            label: "Phone Number",
            pattern: "^[0-9]{3}-[0-9]{3}-[0-9]{4}$",
            required: true,
        },
        {
            id: 5,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
            pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
            required: true,
        },
        {
            id: 6,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Password don't match!",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
        }
    ]

    async function register() {
        try {
            const response = await fetch('http://34.82.124.237:3001/api/submit/registrationForm', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    r_type: "SFSUCustomer",
                    name: values.firstname,
                    email: values.email,
                    phone: values.phone,
                    password: values.password,
                })
            })
            if (response.ok) {
                const data = await response.json();
                setModalText("Registration Successful");
                setModalShow(true);
            } else {
                throw new Error('Registration failed');
            }

        } catch (error) {
            setModalText("Registration Unsuccessful");
            setModalShow(true);
        }
    }

    const handleSubmit = (e) => {
        register();
        e.preventDefault();
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }


    return (
        <div className={styles["Register"]}>
            <form onSubmit={handleSubmit}>
                <div className={styles["Title"]}>
                    Register
                </div>
                {/* <div className={styles["Title2"]}>
                    Be a Member!
                </div> */}
                {inputs.map((input) => (
                    <Forminput key={input.id} {...input} value={values[input.name]} onChange={onChange}></Forminput>))}
                {/* <div className="Agreement" >
                    <input type="checkbox" id="agree-checkbox" name="agree-checkbox" required={true} ></input>
                    <label for="agree-checkbox"> I agree to the <a href="/terms-and-conditions" target="_blank" rel="noopener">terms and conditions</a>.</label>
                </div> */}
                <button style={{marginTop: "3%"}} className="Submit" type="submit">Sign Up</button>
                <div className={styles["Loginpath"]}>
                    Already have an account?
                    <Link to="/login" passHref>
                        <a href="replace">Log in!</a></Link>
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

export default Register