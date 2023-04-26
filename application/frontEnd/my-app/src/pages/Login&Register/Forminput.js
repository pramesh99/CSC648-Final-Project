import { useState } from "react";
import styles from "./FormInput.module.css"

const Forminput = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className={styles["RegisterForm"]}>
            <label>{label}</label>
            <input {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                focused={focused.toString()}
                onFocus={() =>
                    inputProps.name === "confirmPassword" && setFocused(true)}></input>
            <span>{errorMessage}</span>
        </div>
    )
}

export default Forminput