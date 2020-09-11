import './style.module.scss';
import React from "react";
import {useState, useRef} from 'react';
import Link from "next/link";
import classNames from 'classnames';

export const EmailInput = React.forwardRef(({

    label="Email Address",
    placeholder="name@address.com", 
    forwardRef},{ref}) => {

    const [error, setError] = useState(false);
    const [msError, setMsError] = useState(""); 

    function checkEmailPattern (email) {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }

    function onChangeEmail (event) {
        const checked = checkEmailPattern(event.target.value);
        if(event.target.value.trim() === ""){
            setError(true);
            setMsError("Email không được để trống");
        }else{
            checked === true ? setError(false) : setError(true);
            error === true ? setMsError("Email không đúng") : setMsError("");
        }
    }

    return(
        <div ref={forwardRef} className={classNames({"error": error, "success":!error })}>
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
                        color: #12263f;
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

export const PasswordInput = React.forwardRef(({
    label="Password",
    placeholder="Enter your password", 
    forwardRef}, {ref}) => {

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



    const handleStatus = () => setStatusShow(!statusShow);

    return(
        <div ref={forwardRef} className={classNames({"error": error, "success":!error})}>
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
            <div onClick={handleStatus} className={"show-password"}><img src={"../images/icon-eye.png"}/></div>
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
})


export function FormLogin ({

    method="POST",
    action="/api/login",
    styleFrom="",   // has 3 mode :  "illustration" || "cover" || default is ""
    type="signup", // has 3 mode:  "sigup" || "signin" || r"eset-password"
    nameForm="Sign in", // title form
    nameSubmit,     // name button submit
    linkTo=""       // link bottom form 
    }) {
    
    const refEmail = useRef();
    const refPassword = useRef();
    
    const handleSubmit = (event) => { 
        if(type === "reset-password"){
            const emailEle = Array.from(refEmail.current.children).find((value)=>{
                if(value.tagName === "INPUT"){
                    return value;
                }
            });
            if(emailEle.value.trim() === "" || 
                Array.from(emailEle.classList).indexOf("error") !== -1){
                emailEle.focus();
                event.preventDefault();
            }
        }else{
            const emailEle = Array.from(refEmail.current.children).find((value)=>{
                if(value.tagName === "INPUT"){
                    return value;
                }
            });
            const passwordEle = Array.from(refPassword.current.children).find((value)=>{
                if(value.tagName === "INPUT"){
                    return value;
                }
            });
            if(passwordEle){
                if(passwordEle.value.trim() === "" || 
                    Array.from(passwordEle.classList).indexOf("error") !== -1){
                    passwordEle.focus();
                    event.preventDefault();
                }
            }
            if(emailEle){
                if(emailEle.value.trim() === "" || 
                    Array.from(emailEle.classList).indexOf("error") !== -1){
                    emailEle.focus();
                    event.preventDefault();
                }
            }
        }
    };
    
    return(
        <div className={"formSignUp " + styleFrom}>
            <form action={action} method={method}>
                <div className="login-box">
                    <div className="left">
                        <h1>{nameForm}</h1>
                        <span>Free access to our dashboard.</span>
                        {
                            type === "reset-password" ? (
                                <EmailInput forwardRef={refEmail} ref={refEmail} ></EmailInput>
                            ):(
                                <>
                                    <EmailInput forwardRef={refEmail} ref={refEmail} ></EmailInput>
                                    {
                                        type === "signup" ? (
                                            <PasswordInput forwardRef={refPassword} ref={refPassword}></PasswordInput>
                                        ):(
                                            <>
                                                <Link href="reset-password"><a className={"forgot-password"}>Forgot Password?</a></Link>
                                                <InputUnverified typeInput="password" forwardRef={refPassword} ref={refPassword}></InputUnverified>
                                            </>
                                        )
                                    }
                                </>
                            )
                        }
                        

                        <div className={"btn-submit"}>
                            <input
                                type="submit"
                                name="signup-submit" 
                                value= {nameSubmit||nameForm}
                                onClick={handleSubmit}
                            />
                        </div>
                        {type === "signup" ? (<span style={{ marginTop:"10px" }}>Already have an account? <Link href={linkTo ||"login"}><a style={{color: "#2C7BE5"}}>Log in</a></Link>.</span>):null}
                        {type === "signin" ? (<span style={{ marginTop:"10px" }}>Don’t have an account yet? <Link href={linkTo ||"signup"}><a style={{color: "#2C7BE5"}}>Sign up</a></Link>.</span>):null}                       
                    </div>

                    {
                        styleFrom.toLocaleLowerCase() === "cover" ? (
                            <div className="right">
                                <img src={"images/"}/>
                            </div>
                        ):null
                    }

                    {
                        styleFrom.toLocaleLowerCase() === "illustration" ? (
                            <div className="right">
                                <img src={"../images/illustration-form.png"}/>
                            </div>
                        ):null
                    }

                    {/* <div className="right">
                    </div> */}
                </div>
            </form>
            <style jsx>{`
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

                    .illustration{
                        form{
                            max-width: 1000px;
                            padding-left:7%;
                        }
                        .login-box{
                            position: relative;
                            flex-direction:row;
                            display:flex;
                            justify-content: center;
                            flex-wrap: wrap;
                        }

                        .left{
                            max-width:500px;
                            position: relative;
                        }
                        .right{
                            flex:1;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                        
                    }
                    .login-box {
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
                            padding: 0px 0 35px 0;
                            text-align: center;
                            color: #6E84A3;
                            font-size: 15px;
                        }
                        h1 {
                            text-align: center;
                            font-weight: bold;
                            font-size:32px;
                            margin: 10px 0;
                            margin-bottom: 0;
                            color: #12263F;
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
                    .forgot-password{
                        position: absolute;
                        right: 0;
                        transform: translate(0, 2px);
                        font-size: 12px;
                        color: #6E84A3;
                        cursor: pointer;
                        z-index: 3;
                        :hover{
                            color: #2c7be5;
                        }
                    }

                    @media only screen and (max-width : 767px){
                       
                        .illustration{
                            .right{
                                display:none;
                            }
                            form{
                                max-width: 1000px;
                                padding-left:0;
                            }
                        }
                            
                    }
                `}
            </style>
        </div>
    )
}

export const InputUnverified =  React.forwardRef(({

    typeInput="text",
    label="Password",
    placeholder="Enter your password", 
    forwardRef}, {ref}) => {

    const [passwords, setPassword] = useState("");
    const [statusShow, setStatusShow] = useState(false);
    
    

    function onChangePassword (event) {
        setPassword(event.target.value);
    }
    
    const handleStatus = () => setStatusShow(!statusShow);

    return(
        <div ref={forwardRef} className={"success"}>
            <label>{label}</label>
            {
                typeInput === "password" ? (
                    
                    statusShow === true ? (
                        <input 
                            className={"success"} 
                            type="text" name="password" 
                            placeholder={placeholder} value={undefined}
                            onChange={onChangePassword}/>
                        ):(
                        <input 
                            className={"success"} 
                            type="password" name="password" 
                            placeholder={placeholder} value={undefined} 
                            onChange={onChangePassword}/>
                    )
                    
                ):(
                    <input 
                        className={"success"} 
                        type={typeInput} name="password" 
                        placeholder={placeholder} value={undefined} 
                        onChange={onChangePassword}/>
                )
            }
            {
                typeInput === "password" ? (
                    <div onClick={handleStatus} className={"show-password"}><img src={"../images/icon-eye.png"}/></div>
                ) : null
            }
        
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
})