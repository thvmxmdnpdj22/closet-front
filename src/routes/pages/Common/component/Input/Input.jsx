import React from "react";
import './Input.css'
import { SignUpBox } from "../../SignUp/component/SignUPBox";

export const Input =({
    title,
    type,
    placeholder,
    value,
    onChange
}) => {
    return(
        <div className='Input-id'>
             <h4>{title}</h4>
            <input type={type} placeholder={placeholder}
            value={value}
            onChange={onChange}/>
        </div>
    )
}

//