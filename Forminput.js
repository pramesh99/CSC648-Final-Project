import { useState } from "react";
import "./FormInput.css"

const Forminput = (props) => {
    const [focused,setFocused] = useState(false);
    const {label, errorMessage, onChange, id, ...inputProps} = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className="RegisterForm">
            <label>{label}</label>
            <input {...inputProps} 
            onChange = {onChange} 
            onBlur={handleFocus} 
            focused = {focused.toString()} 
            onFocus={() =>
                inputProps.name === "confirmPassword" && setFocused(true)}></input>
            <span>{errorMessage}</span>
        </div>
    )
}

export default Forminput