import { useState } from "react"
import Forminput from "./Forminput"
import "./Register.css"

const Register = () => {
    const [values,setValues] = useState({
        username:"",
        email:"",
        firstname:"",
        lastname:"",
        phone:"",
        password:"",
        confirmPassword:""
    })
    //Input of the user information
    const inputs = [
        {
            id:1,
            name:"username",
            type:"text",
            placeholder:"Username",
            errorMessage:"Username should be 3-16 characters and shouldn't include any special character!",
            label:"Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id:2,
            name:"firstname",
            type:"text",
            placeholder:"First Name",
            errorMessage:" ",
            label:"First Name",
            required: true,
        },
        {
            id:3,
            name:"lastname",
            type:"text",
            placeholder:"Last Name",
            errorMessage:" ",
            label:"Last Name",
            required: true,
        },
        {
            id:4,
            name:"email",
            type:"email",
            placeholder:"Email",
            errorMessage:"It should be a vaild SFSU email, such as example@sfsu.edu",
            label:"Email",
            pattern: "[a-z0-9._%+-]+@sfsu.edu$",
            required: true,
        },
        {
            id:5,
            name:"phone",
            type:"tel",
            placeholder:"Phone Number",
            errorMessage:"Should have ten digit number, such as 555-555-5555.",
            label:"Phone Number",
            pattern:"^[0-9]{3}-[0-9]{3}-[0-9]{4}$",
            required: true,
        },
        {
            id:6,
            name:"password",
            type:"password",
            placeholder:"Password",
            errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label:"Password",
            pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
            required: true,
        },
        {
            id:7,
            name:"confirmPassword",
            type:"password",
            placeholder:"Confirm Password",
            errorMessage:"Password don't match!",
            label:"Confirm Password",
            pattern: values.password,
            required: true,
        }
    ]
    
    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    const onChange = (e)=>{
        setValues({...values,[e.target.name] : e.target.value});
    }

    console.log(values)

    return (
        <div className="Register">
            <form onSubmit={handleSubmit}>
                <h1>GatorGrub</h1>
                <h2>Register</h2>
                {inputs.map((input)=>(
                <Forminput key={input.id} {...input} value={values[input.name]} onChange = {onChange}></Forminput>))}
                <input type="checkbox" id="agree-checkbox" name="agree-checkbox" required={true} ></input>
                <label for="agree-checkbox">I agree to the <a href="/terms-and-conditions" target="_blank" rel="noopener">terms and conditions</a>.</label><br></br>
                <h3> </h3>
                <button type = "submit">Sign Up</button>
                <h3> </h3>
                <h6>Already have an account?<a href="http://localhost:3000/login">Log in</a></h6>
                <h3> </h3>
            </form>
        </div>
    )
}

export default Register