import './style.module.scss';
import React from "react";
import {useState, useEffect, useRef, useLayoutEffect} from 'react';
import classNames from 'classnames';

export const EmailInput =  React.forwardRef(({label="Email Address",placeholder="name@address.com", forwardRef},{ref}) => {
    
    const [error, setError] = useState(false);
    const [msError, setMsError] = useState(""); 
    function checkEmailPattern (email) {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }
    function onChangeEmail (event) {
        const checked = checkEmailPattern(event.target.value);
        if(event.target.value === ""){
            setMsError("Email không được để trống")
        }else{
            checked === true ? setError(false) : setError(true);
            setMsError("Email không đúng")
        }
    }
    return(
        <div ref={forwardRef} className={classNames({"error": error, "success":!error })} >
            <label>{label}</label>
            <input
                className={classNames({"error": error, "success":!error})} 
                type="email" name="email" 
                placeholder={placeholder} value={undefined} 
                onChange={onChangeEmail}/>
            <span>{msError}</span>
            <style jsx>{`
                    input[type="email"]{
                        display: block;
                        box-sizing: border-box;
                        margin-bottom: 20px;
                        padding: 4px 15px;
                        min-width: 310px;
                        width: 100%;
                        height: 40px;
                        border: 1px solid #E3EBF6;
                        font-weight: 400;
                        font-size: 15px;
                        transition: 0.2s ease;
                        outline: none;
                        border-radius: 2px;
                        ::placeholder{
                            color: #95AAC9;
                        }
                    }
                    label{
                        font-size: 15px;
                        display: block;
                        margin: 5px 0;
                    }
                    input[type="email"]:focus {
                        color: #12263f;
                        background-color: #fff;
                        border-color: #2c7be5;
                        outline: 0;
                        box-shadow: transparent;
                    }
                    .error{
                        position: relative;
                    }
                    .error input{
                        position: relative !important;
                        color: #F44336 !important;
                        border-color: red;
                    }
                    .error span{
                        position: absolute !important;
                        color: #F44336 !important;
                        top : 4px;
                        right : 0;
                        font-size: 10px
                    }
                    .success span{
                        display:none;
                    }
                    .success input{
                        color: #008eff !important;
                    }
            `}</style>
        </div>
    )
})
export function PasswordInput({label="Password",placeholder="Enter your password"}){
    const [passwords, setPassword] = useState("");
    const [msError, setMsError] = useState(""); 
    const [error, setError] = useState(false);
   
    const [statusShow, setStatusShow] = useState(false);
    
    function checkPasswordPattern (password) {
        var minMaxLength = /^[\s\S]{8,30}$/,
        upper = /[A-Z]/,
        lower = /[a-z]/,
        number = /[0-9]/,
        special = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
        if(upper.test(password) === false){
            setMsError("Password phải chưa ký tự viết hoa")
        }
        if(number.test(password) === false){
            setMsError("Password phải chưa ký tự số")
        }
        if(special.test(password) === false){
            setMsError("Password phải chứa ký tự đặc biệt")
        }
        if(lower.test(password) === false){
            setMsError("Password phải chứa ký tự thường")
        }
        if(minMaxLength.test(password) === false){
            setMsError("Password có từ 8 đến 30 kí tự")
        }
        if(password === ""){
            setMsError("Password không được để trống")
        }
        if (minMaxLength.test(password) 
            && upper.test(password)
            && lower.test(password) 
            && number.test(password) 
            && special.test(password)
        ){
            return true;
        }
        return false;
    }
    function onChangePassword (event) {
        const checked = checkPasswordPattern(event.target.value);
        setPassword(event.target.value);
        if(checked === true){
            setError(false)
        }else{
            setError(true)
            setPassword(event.target.value);
        }
       
    }

    const handleStatus = ()=> setStatusShow(!statusShow);
    return(
        <div className={classNames({"error": error, "success":!error})}>
            <label>{label}</label>
            {statusShow === true ? (
                <input 
                className={classNames({"error": error, "success":!error})} 
                type="text" name="password" 
                placeholder={placeholder} value={undefined}
                onChange={onChangePassword}/>
            ):(
                <input 
                className={classNames({"error": error, "success":!error})} 
                type="password" name="password" 
                placeholder={placeholder} value={undefined} 
                onChange={onChangePassword}/>
            )
            }
            <span>{msError}</span>
            <div onClick={handleStatus} className={"show-password"}><img src={"images/icon-eye.png"}/></div>
            <style jsx>{`
                    *:focus {
                        outline: none;
                    }
                    label{
                        font-size: 15px;
                        display: block;
                        margin: 5px 0;
                    }
                    .show-password{
                        position: absolute;
                        width: 15px;
                        right: 15px;
                        top: 60%;
                        cursor: pointer;
                    }
                    input[type="password"],input[type="text"]{
                        display: block;
                        box-sizing: border-box;
                        margin-bottom: 20px;
                        padding: 4px 15px;
                        min-width: 310px;
                        width: 100%;
                        height: 40px;
                        border: 1px solid #E3EBF6;
                        font-weight: 400;
                        font-size: 15px;
                        transition: 0.2s ease;
                        outline: none;
                        border-radius: 2px;
                        ::placeholder{
                            color: #95AAC9;
                        }
                    }
                    input[type="password"]:focus, input[type="text"]:focus {
                        color: #12263f;
                        background-color: #fff;
                        border-color: #2c7be5;
                        outline: 0;
                        box-shadow: transparent;
                    }
                    .error{
                        position: relative;
                    }
                    .error input{
                        position: relative !important;
                        color: #F44336 !important;
                        border-color: red;
                    }
                    .error span{
                        position: absolute !important;
                        color: #F44336 !important;
                        top : 4px;
                        right : 0;
                        font-size: 10px
                    }
                    .success{
                        position: relative;
                    }
                    .success span{
                        display:none;
                    }
                    .success input{
                        color: #008eff !important;
                    }   
            `}</style>
        </div>
    )
}


export function FormLogin ({children}) {
    const [error, setError] = useState(false);
    
    const refEmail = useRef();
    const refPassword = useRef();
    const handleSubmit = (event) => {
        const classError = Array.from(refEmail.current.children).find((value, index)=>{
            if( Array.from(value.classList).indexOf("error") !== -1 ){
                return value;
            }
        })
        if(classError){
            classError.focus()
            event.preventDefault();
        }
        // 
    };
    
    return(
        <div className="formSignUp">
            <form action="/api/login" method="POST">
                <div id="login-box">
                    <div className="left">
                        <h1>Sign up</h1>
                        <span>Free access to our dashboard.</span>
                        <EmailInput forwardRef={refEmail} ref={refEmail}s></EmailInput>
                        <PasswordInput ref={refPassword}></PasswordInput>
                        <div className={"btn-submit"}>
                            <input 
                                type="submit" 
                                name="signup-submit" 
                                value="Sign up"
                                onClick={handleSubmit}
                            />
                        </div>
                    </div>
                    <div className="right">
                    </div>
                </div>
            </form>
            <style jsx>
                {`
                    *:focus {
                        outline: none;
                    }
                    .formSignUp {
                        margin: 0;
                        padding: 0;
                        font-size: 16px;
                        font-weight: 300;
                        color: #222;
                        width : 100%;
                        height : 100%;
                        display: flex;
                        justify-content: center;
                        form{
                            width: 100%;
                            height: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                        .btn-submit{
                            display: flex;
                            justify-content: center;
                            input{
                                width:100%;
                                font-size: 15px;
                                height: 55px;
                                border-radius: 5px;
                            }
                        }
                    }
                    #login-box {
                        position: absolute;
                        width: auto;
                        height: auto;
                    }
                    .left {
                        box-sizing: border-box;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        span{
                            display: block;
                            padding: 0px 0 20px 0;
                            text-align: center;
                            color: #6E84A3;
                            font-size: 15px;
                        }
                        h1 {
                            text-align: center;
                            font-weight: 300;
                            font-size:32px;
                            margin: 10px 0;
                            margin-bottom: 0;
                        }
                    }
                    input[type="submit"] {
                        margin-top: 20px;
                        width: 120px;
                        height: 32px;
                        background: #2C7BE5;
                        border: none;
                        border-radius: 2px;
                        color: #FFF;
                        font-weight: 500;
                        text-transform: uppercase;
                        transition: 0.1s ease;
                        cursor: pointer;
                    }
                    input[type="submit"]:hover,
                    input[type="submit"]:focus {
                        opacity: 0.8;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
                        transition: 0.1s ease;
                    }
                    input[type="submit"]:active {
                        opacity: 1;
                        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
                        transition: 0.1s ease;
                    }
                `}
            </style>
        </div>
    )
}
