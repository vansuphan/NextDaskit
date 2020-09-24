
import React from "react";
import { useState, useEffect, useRef } from 'react';
// import Link from "next/link";
import classNames from 'classnames';
import DatePicker from 'react-modern-calendar-datepicker';
import Dropzone from "react-dropzone";
import { element } from "prop-types";
// import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export function Input({
    dataOption,
    dataSelect,
    children,
    name,   // name input
    value,
    typeInput = "text",   // type input ex : "password" || "mail" || "text"
    label = "Please enter props label",      // label Input
    placeholder = "Please enter props placeholder!", // placeholder input
    description,
    validate = false,
    heightInput = "40px",
    widthInput,
    borderRadius = "2px",
}) {
    const refInputText = useRef();
    // const [stateValue, setValue] = useState();
    // useEffect(()=>{
    //     if(value){
    //         setValue(value);
    //     }
    // },[])
    return (
        <>
            {
                (typeInput === "text" || typeInput === "") ? (
                    <div className="content-input">
                        <InputBasic
                            borderRadius={borderRadius}
                            heightInput={heightInput}
                            widthInput={widthInput}
                            value={value}
                            name={name}
                            typeInput={typeInput}
                            label={label}
                            forwardRef={refInputText}
                            ref={refInputText}
                            placeholder={placeholder}
                            description={description}
                        />
                        {children}
                    </div>
                ) : null
            }
            {
                (typeInput === "password") ? (
                    validate === true ?
                        (
                            <div className="content-input">
                                <PasswordInputValidate
                                    borderRadius={borderRadius}
                                    heightInput={heightInput}
                                    widthInput={widthInput}
                                    value={value}
                                    name={name}
                                    typeInput={typeInput}
                                    label={label}
                                    forwardRef={refInputText}
                                    ref={refInputText}
                                    placeholder={placeholder}
                                    description={description}
                                />
                                {children}
                            </div>
                        ) : (
                            <div className="content-input">
                                <InputBasic
                                    borderRadius={borderRadius}
                                    widthInput={widthInput}
                                    heightInput={heightInput}
                                    value={value}
                                    name={name}
                                    typeInput={typeInput}
                                    label={label}
                                    forwardRef={refInputText}
                                    ref={refInputText}
                                    placeholder={placeholder}
                                    description={description}
                                />
                                {children}
                            </div>
                        )
                ) : null
            }
            {
                (typeInput === "email") ? (
                    validate === true ?
                        (
                            <div className="content-input">
                                <EmailInputValidate
                                    borderRadius={borderRadius}
                                    widthInput={widthInput}
                                    heightInput={heightInput}
                                    value={value}
                                    name={name}
                                    typeInput={typeInput}
                                    label={label}
                                    forwardRef={refInputText}
                                    ref={refInputText}
                                    placeholder={placeholder}
                                    description={description}
                                />
                                {children}
                            </div>
                        ) : (
                            <div className="content-input">
                                <InputBasic
                                    borderRadius={borderRadius}
                                    widthInput={widthInput}
                                    heightInput={heightInput}
                                    value={value}
                                    name={name}
                                    typeInput={typeInput}
                                    label={label}
                                    forwardRef={refInputText}
                                    ref={refInputText}
                                    placeholder={placeholder}
                                    description={description}
                                />
                                {children}
                            </div>
                        )
                ) : null
            }
            {
                (typeInput === "number") ? (
                    <div className="content-input">
                        <InputBasic
                            borderRadius={borderRadius}
                            heightInput={heightInput}
                            widthInput={widthInput}
                            value={value}
                            name={name}
                            typeInput={typeInput}
                            label={label}
                            forwardRef={refInputText}
                            ref={refInputText}
                            placeholder={placeholder}
                            description={description}
                        />
                        {children}
                    </div>
                ) : null
            }
            {
                (typeInput === "textarea") ? (
                    <div className="content-input">
                        <InputTextarea
                            borderRadius={borderRadius}
                            widthInput={widthInput}
                            heightInput={heightInput}
                            value={value}
                            name={name}
                            typeInput={typeInput}
                            label={label}
                            forwardRef={refInputText}
                            ref={refInputText}
                            placeholder={placeholder}
                            description={description}
                        />
                        {children}
                    </div>
                ) : null
            }

            {
                (typeInput === "phone") ? (
                    <div className="content-input">
                        <InputPhone
                            borderRadius={borderRadius}
                            widthInput={widthInput}
                            heightInput={heightInput}
                            value={value}
                            name={name}
                            typeInput={typeInput}
                            label={label}
                            forwardRef={refInputText}
                            ref={refInputText}
                            placeholder={placeholder}
                            description={description}
                        />
                        {children}
                    </div>
                ) : null
            }

            {
                (typeInput === "quill") ? (
                    <div className="content-input">
                        <InputQuill
                            borderRadius={borderRadius}
                            widthInput={widthInput}
                            heightInput={heightInput}
                            name={name}
                            typeInput={typeInput}
                            label={label}
                            forwardRef={refInputText}
                            ref={refInputText}
                            placeholder={placeholder}
                            description={description}
                        ></InputQuill>
                        {children}
                    </div>
                ) : null
            }

            {
                (typeInput === "calendar") ? (
                    <div className="content-input">
                        <InputCalendar
                            borderRadius={borderRadius}
                            widthInput={widthInput}
                            heightInput={heightInput}
                            value={value}
                            name={name}
                            typeInput={typeInput}
                            label={label}
                            forwardRef={refInputText}
                            ref={refInputText}
                            placeholder={placeholder}
                            description={description}
                        ></InputCalendar>
                        {children}
                    </div>
                ) : null
            }
            {
                (typeInput === "tag") ? (
                    <div className="content-input">
                        <InputTag
                            borderRadius={borderRadius}
                            widthInput={widthInput}
                            heightInput={heightInput}
                            value={value}
                            dataOption={dataOption}
                            dataSelect={dataSelect}
                            name={name}
                            typeInput={typeInput}
                            label={label}
                            forwardRef={refInputText}
                            ref={refInputText}
                            placeholder={placeholder}
                            description={description}
                        ></InputTag>
                        {children}
                    </div>
                ) : null
            }
            {
                (typeInput === "image" || typeInput === "files" ) ? (
                    <div className="content-input">
                        <InputImage
                        borderRadius={borderRadius}
                        widthInput={widthInput}
                        heightInput={heightInput}
                        value={value}
                        name={name}
                        typeInput={typeInput}
                        label={label}
                        forwardRef={refInputText}
                        ref={refInputText}
                        placeholder={placeholder}
                        description={description}>
                        </InputImage>
                        {children}
                    </div>
                ) : null
            }
            {
                typeInput==="avatar" ? (
                    <div className="content-input">
                        <InputImageAvatar
                        borderRadius={borderRadius}
                        widthInput={widthInput}
                        heightInput={heightInput}
                        value={value}
                        name={name}
                        typeInput={typeInput}
                        label={label}
                        forwardRef={refInputText}
                        ref={refInputText}
                        placeholder={placeholder}
                        description={description}>
                        </InputImageAvatar>
                        {children}
                    </div>
                ) : null
            }
            {
                typeInput === "selection" ? (
                    <div className="content-input">
                        <InputSelection
                        borderRadius={borderRadius}
                        widthInput={widthInput}
                        heightInput={heightInput}
                        dataOption={dataOption}
                        dataSelect={dataSelect}
                        value={value}
                        name={name}
                        typeInput={typeInput}
                        label={label}
                        forwardRef={refInputText}
                        ref={refInputText}
                        placeholder={placeholder}
                        description={description}>
                        </InputSelection>
                        {children}
                    </div>
                ) : null
            }
            <style jsx>{`
                .content-input{
                    position: relative
                }
            `}</style>
        </>
    )
}

export const InputBasic = React.forwardRef(({
    
    name, // name 
    value,
    borderRadius,
    widthInput,
    heightInput,  // height input
    typeInput,   // type input
    label,      // label Input
    placeholder, // placeholder input
    description, // description below title
    forwardRef }, { ref }) => {
    
    const [stateValue, setStateValue] = useState("")
    const [passwords, setPassword] = useState("");
    const [statusShow, setStatusShow] = useState(false);
    const [statusChange, setStatusChange] = useState(false);
        
    function onChange(event) {
        setPassword(event.target.value);
        setStateValue(event.target.value);    
    }

    function onClick(event){
        setStatusChange(true);
        setStateValue(value);
        if(statusChange===true){
            setStateValue(event.target.value);
        }
    }
   
    const handleStatus = () => setStatusShow(!statusShow);

    return (
        <div ref={forwardRef} style={{position:"relative"}} > 
            <label >{label}</label>
            {description ? (<span className="description-input" style={{marginBottom:"10px"}}>{description}</span>) : null}
            {
                typeInput === "password" ? (
                    statusShow === true ? (
                        <input
                            name={name || "password"}
                            className={"success"}
                            type="text"
                            placeholder={placeholder} value={undefined}
                            onChange={onChange} />
                    ) : (
                            <input
                                
                                name={name || "password"}
                                className={"success"}
                                type="password"
                                placeholder={placeholder} value={undefined}
                                onChange={onChange} />
                        )

                ) : (
                        <input
                            readOnly={false}
                            name={name || ""}
                            className={"success"}
                            type={typeInput} 
                            name={name || ""}
                            placeholder={placeholder} 
                            value={ statusChange === true  ? stateValue : value || ""}
                            onClick={onClick}
                            onChange={onChange}/>
                    )
            }
            {
                typeInput === "password" ? (
                    <div onClick={handleStatus} className={"show-password"}><img src={"../images/icon-eye.png"} /></div>
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
                    input[type="password"],
                    input[type="text"], 
                    input[type="email"],
                    input[type="number"],
                    input[type=""]{
                        display: block;
                        box-sizing: border-box;
                        margin-bottom: 20px;
                        padding: 4px 15px;
                        min-width: ${widthInput||"310px"};
                        width: ${widthInput||"100%"};
                        height: ${heightInput || "40px"};
                        border: 1px solid #E3EBF6;
                        font-weight: 400;
                        font-size: 15px;
                        transition: 0.2s ease;
                        outline: none;
                        border-radius: ${borderRadius || "2px"};
                        ::placeholder{
                            color: #95AAC9;
                        }
                    }
                    input[type="password"]:focus, 
                    input[type="text"]:focus,  
                    input[type="email"]:focus,
                    input[type=""]:focus,
                    input[type="number"]:focus{
                        
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
                    .description-input{
                        color: #6E84A3;
                        font-size: 13px; 
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

export const EmailInputValidate = React.forwardRef(({

    name, // name input
    value,
    borderRadius,
    widthInput,
    heightInput,  // height input
    typeInput,   // type input
    label,      // label Input
    placeholder, // placeholder input
    description,
    forwardRef }, { ref }) => {

    const [stateValue, setValue] = useState("");
    const [error, setError] = useState(false);
    const [msError, setMsError] = useState("");
    const [statusChange, setStatusChange] = useState(false);

    function onClick(event){
        setStatusChange(true);
        setValue(value);
        if(statusChange===true){
            setValue(event.target.value);
        }
    }

    function checkEmailPattern(email) {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }

    function onChangeEmail(event) {
        const checked = checkEmailPattern(event.target.value);
        setValue(event.target.value);
        if (event.target.value.trim() === "") {
            setError(true);
            setMsError("Email không được để trống");
        } else {
            checked === true ? setError(false) : setError(true);
        }
    }

    useEffect(()=>{
        error === true ? setMsError("Email không đúng") : setMsError("");
    },[error])

    return (
        <div ref={forwardRef} className={classNames({ "error": error, "success": !error })}>
            <label>{label}</label>
            {description ? (<span className="description-input">{description}</span>) : null}
            <input
                name={name || "email"}
                className={classNames({ "error": error, "success": !error })}
                type="email"
                placeholder={placeholder} 
                value={ statusChange === true  ? stateValue : value || ""}
                // value={ stateVlaue ||value || undefined}
                onClick={onClick}
                onChange={onChangeEmail} />
            <span>{msError}</span>
            <style jsx>{`
                    input[type="email"]{
                        display: block;
                        box-sizing: border-box;
                        margin-bottom: 20px;
                        padding: 4px 15px;
                        min-width: ${widthInput||"310px"};
                        width: ${widthInput||"100%"};

                        height: ${heightInput || "40px"};
                        border: 1px solid #E3EBF6;
                        font-weight: 400;
                        font-size: 15px;
                        transition: 0.2s ease;
                        outline: none;
                        border-radius: ${borderRadius || "2px"};
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
                    .description-input{
                        color: #6E84A3;
                        font-size:  13px; 
                    }
                    .success span{
                        display:none;
                    }
                    .success input{
                        /* color: #008eff !important; */
                    }
            `}</style>
        </div>
    )
})

export const PasswordInputValidate = React.forwardRef(({

    name, // name input
    borderRadius,
    widthInput,
    heightInput,  // height input
    typeInput,   // type input
    label,      // label Input
    placeholder, // placeholder input
    description,

    forwardRef }, { ref }) => {

    const [passwords, setPassword] = useState("");
    const [msError, setMsError] = useState("");
    const [error, setError] = useState(false);
    const [statusShow, setStatusShow] = useState(false);

    function checkPasswordPattern(password) {

        var minMaxLength = /^[\s\S]{8,30}$/,
            upper = /[A-Z]/,
            lower = /[a-z]/,
            number = /[0-9]/,
            special = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;

        if (upper.test(password) === false) {
            setMsError("Password phải chưa ký tự viết hoa")
        }
        if (number.test(password) === false) {
            setMsError("Password phải chưa ký tự số")
        }
        if (special.test(password) === false) {
            setMsError("Password phải chứa ký tự đặc biệt")
        }
        if (lower.test(password) === false) {
            setMsError("Password phải chứa ký tự thường")
        }
        if (minMaxLength.test(password) === false) {
            setMsError("Password có từ 8 đến 30 kí tự")
        }
        if (password === "") {
            setMsError("Password không được để trống")
        }
        if (minMaxLength.test(password)
            && upper.test(password)
            && lower.test(password)
            && number.test(password)
            && special.test(password)
        ) {
            return true;
        }
        return false;
    }

    function onChangePassword(event) {
        const checked = checkPasswordPattern(event.target.value);
        setPassword(event.target.value);
        if (checked === true) {
            setError(false)
        } else {
            setError(true)
            setPassword(event.target.value);
        }
    }

    const handleStatus = () => setStatusShow(!statusShow);

    return (
        <div ref={forwardRef} className={classNames({ "error": error, "success": !error })}>
            <label>{label}</label>
            {description ? (<span className="description-input">{description}</span>) : null}
            {statusShow === true ? (
                <input
                    name={name || "password"}
                    className={classNames({ "error": error, "success": !error })}
                    type="text" name="password"
                    placeholder={placeholder} value={undefined}
                    onChange={onChangePassword} />
            ) : (
                    <input
                        name={name || "password"}
                        className={classNames({ "error": error, "success": !error })}
                        type="password" name="password"
                        placeholder={placeholder} value={undefined}
                        onChange={onChangePassword} />
                )
            }
            <span>{msError}</span>
            <div onClick={handleStatus} className={"show-password"}><img src={"../images/icon-eye.png"} /></div>
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
                        min-width: ${widthInput||"310px"};
                        width: ${widthInput||"100%"};
                        height: ${heightInput || "40px"};
                        border: 1px solid #E3EBF6;
                        font-weight: 400;
                        font-size: 15px;
                        transition: 0.2s ease;
                        outline: none;
                        border-radius: ${borderRadius || "2px"};
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
                    .description-input{
                        color: #6E84A3;
                        font-size:  13px; 
                    }
                    .success{
                        position: relative;
                    }
                    .success span{
                        display:none;
                    }
                    .success input{
                        /* color: #008eff !important; */
                    }   
            `}</style>
        </div>
    )
});

export const InputTextarea = React.forwardRef(({

    name,
    value,
    borderRadius,
    widthInput,
    heightInput,  // height input
    typeInput,   // type input
    label,      // label Input
    placeholder, // placeholder input
    description,
    forwardRef }, { ref }) => {

    const [passwords, setPassword] = useState("");
    const [statusShow, setStatusShow] = useState(false);

    function onChangePassword(event) {
        setPassword(event.target.value);
    }

    return (
        <div ref={forwardRef} >
            <label>{label}</label>
            {description ? (<span className="description-input">{description}</span>) : null}
            <textarea
                name={name || ""}
                className={"success"}
                name="Textarea"
                placeholder={placeholder} value={value || undefined}
                onChange={onChangePassword}
            />
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
                        right: 10px;
                        top: 60%;
                        cursor: pointer;
                    }
                    textarea{
                        display: block;
                        box-sizing: border-box;
                        margin-bottom: 20px;
                        padding: 4px 15px;
                        min-width: ${widthInput||"310px"};
                        width: ${widthInput||"100%"};
                        height: ${heightInput || "40px"};
                        border: 1px solid #E3EBF6;
                        font-weight: 400;
                        font-size: 15px;
                        transition: 0.2s ease;
                        outline: none;
                        border-radius: ${borderRadius || "2px"};
                        ::placeholder{
                            color: #95AAC9;
                        }
                    }
                    textarea:focus{
                        background-color: #fff;
                        border-color: #2c7be5;
                        outline: 0;
                        box-shadow: transparent;
                    }
                    .description-input{
                        color: #6E84A3;
                        font-size:  13px; 
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

export const InputPhone = React.forwardRef(({

    name, // name input
    value,
    borderRadius,
    widthInput,
    heightInput,  // height input
    typeInput,   // type input
    label,      // label Input
    placeholder, // placeholder input
    description,
    forwardRef }, { ref }) => {


    const [error, setError] = useState(false);
    const [msError, setMsError] = useState("");



    function checkPhonePattern(phone) {
        const regex = /0[0-9]{9}$/;
        return regex.test(phone);
    }

    function onChange(event) {
        const value = event.target.value.trim();
        let newValue = value.replace(/[^0-9]/g, "");
        event.target.value = newValue;
        if (newValue) {
            event.target.value = newValue;
            const checked = checkPhonePattern(event.target.value);
            checked === true ? setError(false) : setError(true);
           
        }

    }
    useEffect(()=>{
        error === true ? setMsError("Phone không đúng") : setMsError("");
    },[error])
    return (
        <div ref={forwardRef} className={classNames({ "error": error, "success": !error })}>
            <label>{label}</label>
            {description ? (<span className="description-input">{description}</span>) : null}
            <input
                className={"success"}
                name={name || "phone"}
                type="text"
                maxLength="10"
                placeholder={placeholder || "0xx-xxx-xxxx"}
                value={value || undefined}
                onChange={onChange}
            />
            {error ? (<span>{msError}</span>) : <></>}
            
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
                        right: 10px;
                        top: 60%;
                        cursor: pointer;
                    }
                    input[type="text"],input[type="number"]{
                        display: block;
                        box-sizing: border-box;
                        margin-bottom: 20px;
                        padding: 4px 15px;
                        min-width: ${widthInput||"310px"};
                        width: ${widthInput||"100%"};
                        height: ${heightInput || "40px"};
                        border: 1px solid #E3EBF6;
                        font-weight: 400;
                        font-size: 15px;
                        transition: 0.2s ease;
                        outline: none;
                        border-radius: ${borderRadius || "2px"};
                        ::placeholder{
                            color: #95AAC9;
                        }
                    }
                    input[type="text"]:focus, input[type="number"]{
                        background-color: #fff;
                        border-color: #2c7be5;
                        outline: 0;
                        box-shadow: transparent;
                    }
                    .description-input{
                        color: #6E84A3;
                        font-size:  13px; 
                    }
                    .success{
                        position: relative;
                    }
                    .success span{
                        display:none;
                    }
                    .success input{
                       
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
            `}</style>
        </div>
    )
})

export const InputQuill = React.forwardRef(({

    name, // name input
    borderRadius,
    widthInput,
    heightInput,  // height input
    typeInput,   // type input
    label,      // label Input
    placeholder, // placeholder input
    description,
    forwardRef }, { ref }) => {

    const editorRef = useRef();
    const [editorLoader, setEditorLoaded] = useState(false)
    const { CKEditor, ClassicEditor } = editorRef.current || {}
    const [dataState, setData] = useState('')


    useEffect(() => {
        editorRef.current = {
            CKEditor: require('@ckeditor/ckeditor5-react'),
            ClassicEditor: require('@ckeditor/ckeditor5-build-classic')
        }
        setEditorLoaded(true)
    }, [])

    useEffect(()=>{
        onEditorChange
    },[editorLoader])

    useEffect(()=>{
        const htmlRender = forwardRef.current;
        if(htmlRender){
            setData(htmlRender.querySelector(".ck-editor__main .ck-content").innerHTML)
        }
    }, [dataState])

    const onEditorChange = (event, editor) => {
        const data = editor.getData();
        editor.updateSourceElement();
        setData(data);
        // console.log("editor",{ event, editor, data });
        // console.log("Data editor",{ data });
    }

    return editorLoader ?
        (
            <div ref={forwardRef} style={{width: widthInput, marginBottom:"20px"}}>
                <label htmlFor={name !== undefined ? name + " calendar" : "calendar"}>{label}</label>
                {description ? (<span className="description-input" style={{display:"block"}}>{description}</span>) : null}
                <CKEditor 
                    name={name || ""}
                    className={"editorCustom"}
                    editor={ClassicEditor}
                    config={{
                        ckfinder:{
                            uploadUrl: "/api/editor-post-image"
                        }
                    }}
                    // data={data}
                    // data="<p>Hello from CKEditor 5!</p>"
                    onInit={editor => {
                        // You can store the "editor" and use when it is needed.
                        // console.log('Editor is ready to use!', editor);
                    }}
                    onChange={onEditorChange}
                    // onBlur={(event, editor) => {
                    //     console.log('Blur.', editor);
                    // }}
                    // onFocus={(event, editor) => {
                    //     console.log('Focus.', editor);
                    // }}
                />
                <div style={{display:"none"}}>
                <textarea onChange={()=>{}} id={name+"-editor"} name={name||"data-editor"} value={ dataState ||""}></textarea>
                </div>
                <style jsx>{`
                    .description-input{
                        color: #6E84A3;
                        font-size:  13px;
                        padding-bottom:10px;
                    }
                    label{
                        font-size: 15px;
                        display: block;
                        margin: 5px 0;
                    }    
                `}</style>
            </div>
        )
        : <></>
})

export const InputCalendar = React.forwardRef(({

    name,
    value,
    borderRadius,
    heightInput,  // height input
    widthInput,
    typeInput,   // type input
    label,      // label Input
    placeholder, // placeholder input
    description,
    forwardRef }, { ref }) =>{

    const inputRefHide = useRef()
    const [selectedDay, setSelectedDay] = useState(undefined);
    const [valueLocal, setValue] = useState( selectedDay ||undefined);
    const refDatePicker = useRef();

    const handleChange = (selectedDay)=>{
        let formatDate = selectedDay.day + "/" + selectedDay.month+ "/" + selectedDay.year;
        setValue(formatDate)
        inputRefHide.current.focus();
        inputRefHide.current.value = valueLocal;
    }

    const onFocus = ()=>{
        inputRefHide.current.focus();
    }

    useEffect(()=>{
        if(selectedDay !== undefined){
            handleChange(selectedDay)
        }
    }, [selectedDay])
    
    useEffect(()=>{
        // Style for "DatePicker" width = 100%
        const datePickerEle = Array.from(forwardRef.current.children).find((element, index)=>{
            return Array.from(element.classList).find(ele => ele === "DatePicker");
        });
        datePickerEle.style.width = "100%";
    },[])

    const renderCustomInput = ({ ref }) => (
        <>
            <input
                readOnly
                className="custom-input-hide" // a styling class
                ref={ref} // necessary
                placeholder={placeholder}
                value={ selectedDay || value || "" }
                onChange={handleChange}
                onFocus={onFocus}
            />
             <input
                readOnly
                name={ name || "calendar"}
                type="text"
                id={ name !== undefined ? name + " calendar" : "calendar"}
                className="custom-input-calendar" // a styling class
                ref={inputRefHide} // necessary
                placeholder={placeholder}
                value={ valueLocal || value|| "" }
                onChange={handleChange}
            />
            <style jsx>{`
                .custom-input-hide{
                    opacity: 0;
                    position: absolute;
                }
                input,input[type="number"]{
                        display: block;
                        box-sizing: border-box;
                        margin-bottom: 20px;
                        padding: 4px 15px;
                        min-width: ${widthInput||"310px"};
                        width: 100%;
                        height: ${heightInput || "40px"};
                        border: 1px solid #E3EBF6;
                        font-weight: 400;
                        font-size: 15px;
                        transition: 0.2s ease;
                        outline: none;
                        border-radius: ${borderRadius || "2px"};
                        ::placeholder{
                            color: #95AAC9;
                        }
                    }
                    input:focus, input[type="number"]{
                        background-color: #fff;
                        border-color: #2c7be5;
                        outline: 0;
                        box-shadow: transparent;
                    }
            `}</style>
        </>
    )
    
    return (
        <div ref={forwardRef}>
            <label htmlFor={ name !== undefined ? name + " calendar" : "calendar"}>{label}</label>
            {description ? (<span className="description-input">{description}</span>) : null}
            <DatePicker
                value={selectedDay}
                onChange={setSelectedDay}
                shouldHighlightWeekends
                renderInput={renderCustomInput} // render a custom input
                locale="en" // add this
            />

            <style jsx>{`
                    *:focus {
                        outline: none;
                    }
                    label{
                        font-size: 15px;
                        display: block;
                        margin: 5px 0;
                    }
                    .description-input{
                        color: #6E84A3;
                        font-size:  13px; 
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
    );
});

export const InputTag = React.forwardRef(({

    name, // name input
    widthInput,
    dataOption=["text 1", "text 2"],
    dataSelect=[],
    borderRadius,
    heightInput,  // height input
    typeInput,   // type input
    label,      // label Input
    placeholder, // placeholder input
    description,
    forwardRef }, { ref }) => {

    const refInput = useRef();
    const refSelect = useRef()
    const refContentItems = useRef();

    const [listItemsSelect, setListItemsSelect] = useState( dataSelect);
    const [listItemsDefault, setListItemsDefault] = useState(dataOption);
    const [lisItemsSearch, setLisItemsSearch] = useState(dataOption);
    const [clearAllItems, setClearAllItems] = useState(false);
    const [clearOneItem, setClearOneItem] = useState(false);
    const [valueSearch, setValueSearch] = useState(null);
    const [statusInput, setStatusInput] = useState(false);

    const handleInputSelect = () => refInput.current.focus();
    const handleClearAll = () => setClearAllItems(true);

    const handleClearOneItem = (e)=> {
        const value = e.target.parentNode.textContent;
        setListItemsDefault([...listItemsDefault,value]);
        setListItemsSelect(listItemsSelect.filter((item) => item !== value));
        setClearOneItem(true)
    };
    
    const handleSearch = (word) => {
        if(listItemsDefault){
          let newData = listItemsDefault.filter((value)=>{
            if(value.toString().toLowerCase().indexOf(word) !== -1)
              return value;
          });
          setLisItemsSearch(newData);
        }
    }

    function hasClass(element, className) {
        return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
    }

    const handleChange = (e) => {
        setValueSearch(e.target.value);
        setStatusInput(true);
    };

    const handleLeaveInput = (e)=>{
        setStatusInput(false);
    }

    // them 1 item
    const onClickItems = (e) => {
        if(hasClass(e.target, "select-item") === true){
            const value = e.target.textContent;
            if(listItemsSelect.indexOf(value) === -1){
                setListItemsSelect([...listItemsSelect,e.target.textContent])
                setListItemsDefault(listItemsDefault.filter((item) => item !== value))
                setLisItemsSearch(lisItemsSearch.filter((item) => item !== value))
                if(listItemsDefault.length===0){
                    setStatusInput(false);
                }
            }
        }
    }

    useEffect(()=>{
        if(statusInput=== true){
            refInput.current.focus();
        }
    }, [statusInput])

    // tim cac item
    useEffect(() => {
        handleSearch(valueSearch);
    },[valueSearch])

    // xoa tat ca cac item
    useEffect(()=>{
        if( clearAllItems === true ){
            setListItemsSelect([]);
            setListItemsDefault(dataOption);
            refInput.current.value="";
            setClearAllItems(false);
        }
    },[clearAllItems]);

    /// xoa 1 item da chon
    useEffect( () =>{
        if( clearOneItem === true ){
            refInput.current.value = "";
            setClearOneItem(false);
        }
    },[clearOneItem])

    return(
        <div className={"container-select"} onMouseLeave={handleLeaveInput}onClick={handleChange}>
            <label>{label}</label>
            {description ? (<span className="description-input" >{description}</span>) : null}
            <div className={"content-select"} style={{marginTop:"10px"}}>
                <div onClick={handleInputSelect} ref={refSelect} className="selection-control">
                    {listItemsDefault ? (
                        listItemsSelect.map((value, index)=>(
                            <div key={index}
                                className="select-item"
                                >
                                {value}
                                <span onClick={handleClearOneItem}></span>
                            </div>
                        ))
                    ):(<></>)}
                    {
                        statusInput === true ? (
                        <input
                            defaultValue=""
                            ref={refInput}
                            type="text"
                            onChange={handleChange}
                            onClick={handleChange}
                            
                        />
                        ) : (
                        <input
                            ref={refInput}
                            type="text"
                            onChange={handleChange}
                            style={{display:"none"}}
                        />)
                    }
                     <input
                        onChange={()=>{console.log("")}}
                        defaultValue={undefined}
                        name={ name || "list-tag" }
                        value={listItemsSelect}
                        style={{display:"none"}}
                    />
                    { 
                        statusInput === true ? (
                            <span onClick={handleClearAll} className={"clear"}></span>
                        ) : (<></>)
                    }
                    <span className={"open"}></span>
                </div>
            </div>
            <div ref={refContentItems} className={ statusInput === true? "content-value active" : "content-value" }>
                {
                    statusInput === true ? (
                        lisItemsSearch.length !== 0 ? (
                            lisItemsSearch.map((value, index)=>(
                                <div key={index}
                                    className="select-item"
                                    onClick={onClickItems}
                                >
                                    {value}
                                </div>
                            ))
                        ) : (
                                listItemsDefault.map((value, index)=>(
                                    <div key={index}
                                        className="select-item"
                                        onClick={onClickItems}
                                    >
                                        {value}
                                    </div>))
                            )
                    ) : (<></>)
                }
            </div>
            
            <style jsx>{`
               
                .description-input{
                    color: #6E84A3;
                    font-size:  13px; 
                }
                label{
                    font-size: 15px;
                    display: block;
                    margin: 5px 0;
                }
                .content-select{
                    position: relative;
                    border: 1px solid #E3EBF6;
                    border-radius: ${ borderRadius || "2px"};
                    min-height: ${heightInput || "40px"};
                    background-color:#fff;
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    flex-direction: row;
                    input[type="text"]{
                        outline: none;
                        display: flex;
                        flex: 1;
                        border:none;
                        height:22px;
                        margin: 2px 0;
                    }
                    .selection-control{
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        padding: 5px 40px 5px 10px;
                        width: 100%;
                        height: 100%;
                    }
                    .select-item{
                        display: flex;
                        margin: 2px 5px;
                        align-items: center;
                        padding-left: .375rem;
                        padding-right: .375rem;
                        margin: 0 .25rem .25rem 0;
                        font-size: .8125rem;
                        background-color: #edf2f9;
                        border-radius: .1875rem;
                        span{
                            position: relative;
                            width: 15px;
                            height: 100%;
                            transition: 0.5s;
                            cursor: pointer;
                            &::after, &::before{
                                content:"";
                                position: absolute;
                                top: 47%;
                                left: 40%;
                                width: 8px;
                                height : 2px;
                                border-radius: 1px;
                                background-color: #c2c3c3;
                            }
                            &:hover::after, &:hover::before{
                                background-color: red;
                            
                            }
                            &::after{
                                transform: rotate(45deg);
                            }
                            &::before{
                                transform: rotate(-45deg);
                            }
                        }
                    }
                }
                .container-select{
                    position: relative;
                    width: ${widthInput || "100%"};
                    margin-bottom: 20px;
                }
                .content-value{
                    position: absolute;
                    display: flex;
                    flex-direction: column;
                    
                    .add{
                        display: none;
                    }
                    .select-item{
                        color: #6e84a3;
                        cursor: pointer;
                        font-size: .9375rem;
                        &:hover{
                            color: #12263f;
                        }
                    }
                }
                .content-value.active{
                    max-height: 325px;
                    width: 100%;
                    max-width: 100%;
                    top:100%;
                    right:0;
                    background-color: #fff;
                    overflow: hidden;
                    overflow-y: auto;
                    height: auto;
                    z-index: 2;
                    box-shadow: 0px 2px 9px 5px #ececec;
                    border-radius: 5px;
                    padding: 5px 10px;
                    border: solid 10px white;
                    border-right: 0;
                    border-left: 0;
                }
                .clear{
                        position: absolute;
                        right: 10px;
                        top: 50%;
                        width: 20px;
                        height: 30px;
                        transform: translate(0,-50%);
                        transition: 0.5s;
                        cursor: pointer;
                        &::after, &::before{
                          content:"";
                          position: absolute;
                          top:13px;
                          left:0;
                          width:15px;
                          height : 3px;
                          border-radius: 2px;
                          background-color: #c2c3c3;
                        }
                        &:hover::after, &:hover::before{
                          background-color: red;
                          
                        }
                        &::after{
                          transform: rotate(45deg);
                        }
                        &::before{
                          transform: rotate(-45deg);
                        }
                }
               `}</style>
           </div>
    )
})

export const InputImage2 = React.forwardRef(({
    name, // name input
    borderRadius,
    widthInput,
    heightInput,  // height input
    typeInput,   // type input
    label,      // label Input
    placeholder, // placeholder input
    description,
    forwardRef }, { ref }) => {
    
    const refInput = useRef();
    const refContent = useRef()
    const handleClick = () => {
        refInput.current.click();
    }
    const [data, setData] = useState(null);
    const [statusImage, setStatusImage] = useState(false);
    const [allFiles, setAllFiles] = useState([]);

    const handleFilesChange = async (event) => {
        event.preventDefault();
        event.persist();
        
        const files = event.target.files || [];

        // let currentFiles = data;
        
        // get item
        let file = files.item(0);
        // ensure it's small enough
        // if (file.size > 10000) {
        //     console.error(`${"upload-file-oversize"} - ` + file.name);
        //     continue;
        // };
        let newFile;
        // BASE64 FILE:
        let reader = new FileReader();
        reader.onload = async (readerEvent) => {
            console.log(reader.result);
            newFile = reader.result;
            setData(newFile);
        }
        
        reader.readAsDataURL(file);
        event.target.value = null;
    }

    return (
        <div ref={forwardRef} >
            <label>{label}</label>
            {description ? (<span className="description-input">{description}</span>) : null}
   
                <div className="content-image" 
                    ref={refContent}
                    onClick={handleClick}
                    onDrop={handleClick}
                    style={{backgroundImage: `url(${data})`}}
                >
                        {data !== null ? (
                            <> </>
                        ):( <span>handleClick</span>) }
                </div>
            
                    <input
                        className={"success"}
                        name={name || "image"}
                        type="file" id="img" accept="image/*"
                        placeholder={placeholder || ""}
                        ref={refInput}
                        data={data}
                        onChange={handleFilesChange}
                        style={{display:"none"}}
                                
                    />
             
            <style jsx>{`
                    *:focus {
                        outline: none;
                    }
                    label{
                        font-size: 15px;
                        display: block;
                        margin: 5px 0;
                    }
                    .description-input{
                        color: #6E84A3;
                        font-size:  13px; 
                    }
                   .content-image{
                        height: ${heightInput || "50px"};
                        width: ${widthInput || "100%"};
                        border-radius: ${borderRadius ||"2px"};
                        background-color: #fff;
                        border: 1px dashed #d2ddec;
                        text-align: center;
                        color: #95aac9;
                        transition: all .2s ease-in-out;
                        background-size: 100%;
                        background-position: center;
                        background-repeat: no-repeat;
                        display: flex;
                        align-items: center;
                        justify-content:center;
                        cursor:pointer; 
                        span{
                            display:flex;
                        }
                        img{
                            max-width: 100%;
                            max-height: 100%;
                            width: 100%;
                            height: 100%;
                            border: "none";
                        }
                    }
            `}</style>
        </div>
    )
})

export const InputImage = React.forwardRef(({
    name, // name input
    borderRadius,
    widthInput,
    heightInput,  // height input
    typeInput,   // type input
    label,      // label Input
    placeholder, // placeholder input
    description,
    forwardRef }, { ref }) => {
    const [file, setFile] = useState([]);
    const [files, setFiles] = useState([])
    const handleDrop = async (acceptedFiles) => {
        setFile([
            ...acceptedFiles.map(file =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            )
        ]);
    }
    const handleDropMuti = async (acceptedFiles) => {
      
        setFiles([
            ...files,...acceptedFiles.map(file =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            )
        ]);
    }
    const handleRemoveItem = (e)=>{
        const nameFileRemove = Array.from(Array.from(e.target.parentElement.children).find(
            element => Array.from(element.classList).indexOf("file-info") !== -1).children).find(
                el => Array.from(el.classList).indexOf("name-file") !== -1).innerText;
        console.log(nameFileRemove);
        // const indexFile = 
        
        setFiles(files.filter((value, index)=>{
            return value.name !== nameFileRemove
        }))
    }

    useEffect(()=>{
        // if(files.length !==0){
        //     console.log("files",files);
        //     console.log("file", file);
        // }
     },[files, file])
    return (
        <div ref={forwardRef} style={{marginBottom:"20px"}}>
            <label>{label}</label>
            {description ? (<span className="description-input" style={{display:"block", marginBottom:"10px"}}>{description}</span>) : null}  
                {
                    typeInput === "image" ? (
                        <div className="content-image">
                        <Dropzone onDrop={handleDrop}>
                            {({ getRootProps, getInputProps }) => (
                            <div className="drop-zone" {...getRootProps({ className: "dropzone" })}>
                                <input  type="file" name={name || "image"} {...getInputProps()} />
                                {
                                    file[0] ? null : <p>{placeholder||"Drop files here upload"}</p>
                                }
                                {file[0] ? <img src={file[0].preview}/> : null}
                            </div>
                            )}
                        </Dropzone>
                        </div>
                    ):(
                        null
                    )
                }
                {
                    typeInput === "files" ? (
                        <>
                            <div className="content-image" style={{border:"none", padding: "20px"}}>
                                <Dropzone onDrop={handleDropMuti}>
                                    {({ getRootProps, getInputProps }) => (
                                    <div className="drop-zone dropzone" {...getRootProps()} 
                                        style={{border: "1px dashed #d2ddec", borderRadius: `${borderRadius ||"2px"}`}}>
                                        <input multiple  type="file" name={name || "files"} {...getInputProps()} />
                                        {
                                            <p>{placeholder||"Drop files here upload"}</p>
                                        }
                                    </div>
                                    )}
                                </Dropzone>
                            </div>
                            <div className="list-items-upload">
                                    {
                                        files.length !== 0 ? (
                                        <>
                                            <ul>
                                                
                                                {files.map((file, index) => (
                                                    <li key={index} className="item-upload">
                                                        <img src={file.preview}/>
                                                        <div className="file-info">
                                                            <h4 className={"name-file"} style={{margin:"0 0 7px 0"}}>{file.name}</h4>
                                                            <span className={"description-input"}>{file.size/1000 + " KB"}</span>
                                                        </div>
                                                        <span onClick={handleRemoveItem}>Remove</span>
                                                        
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                        ):null
                                    }
                            </div>
                        </>
                    ):(
                        null
                    )
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
                    .description-input{
                        color: #6E84A3;
                        font-size:  13px; 
                    }
                   .content-image{
                        height: ${heightInput || "50px"};
                        width: ${widthInput || "100%"};
                        border-radius: ${borderRadius ||"2px"};
                        background-color: #fff;
                        border: 1px dashed #d2ddec;
                        text-align: center;
                        color: #95aac9;
                        transition: all .2s ease-in-out;
                        background-size: 100%;
                        background-position: center;
                        background-repeat: no-repeat;
                        display: flex;
                        align-items: center;
                        justify-content:center;
                        overflow: hidden;
                        position: relative;
                        .drop-zone{
                            width:100%;
                            height:100%;
                            justify-content: center;
                            align-items: center;
                            overflow: hide;
                        }
                        p{
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            z-index: 1;
                            cursor:pointer;
                            width:100%;
                            height: 100%;
                            margin:0;
                        }
                        img{
                            max-width: 100%;
                            max-height: 100%;
                            width: 100%;
                            height: 100%;
                            border: "none";
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            cursor:pointer;
                        }
                       
                    }
                    ul{
                        width: 100%;
                        background-color: #fff;
                        padding: 20px;
                        li{
                            align-items: center;
                            padding:20px 0px;
                        }
                    }
                    .item-upload{
                        display: flex;
                        justify-content: space-between;
                        width : 100%;
                        img{
                            border-radius: 5px;
                            width: 40px !important;
                            height: 40px !important;
                            margin-right: 10px;
                        }
                        .file-info{
                            flex: auto;
                        }
                    }
                    .item-upload:first-child{
                        padding-top: 0;
                    }
                    .item-upload:last-child{
                        padding-bottom: 0;
                    }
                    .item-upload:not(:last-child){
                        position: relative;
                        &::after{
                            content:"";
                            position: absolute;
                            width:100%;
                            height: 1px;
                            top: 100%;
                            left:50%;
                            transform: translate(-50%,0);
                            background-color: #e3ebf6;
                        }
                    }
            `}</style>
        </div>
    )
})

export const InputSelection = React.forwardRef(({
    
    name, // name 
    value,
    dataOption=["Data test 1","Data test 2", "Data test 3"],
    dataSelect,
    borderRadius,
    widthInput,
    heightInput,  // height input
    typeInput,   // type input
    label,      // label Input
    placeholder, // placeholder input
    description, // description below title
    forwardRef }, { ref }) => {

    const [listItemsSelect, setListItemsSelect] = useState( dataOption || []);
    const [statusShow, setStatusShow] = useState(false);
    const [valueLocal,setValueLocal] = useState("Select role");
    const [statusChange, setStatusChange] = useState(false);
    const refInput = useRef();

    const handleStatus = () => {
        setStatusShow(!statusShow);
        setStatusChange(true);
    };
    const handleClickItem = (e) => {
        setStatusShow(false)
        if(e.target.textContent){
            setValueLocal(e.target.textContent);
        }
    }
    useEffect(()=>{
        if(statusShow === true){
            refInput.current.focus()
        }
    },[statusShow]);

    function onChange(event) {
        setStateValue(event.target.value);
        // console.log(value, "value");
        // console.log(stateValue, "stateValue");
        
    }

    return (
        <div ref={forwardRef} className="input-selection" onMouseLeave={()=>setStatusShow(false)} > 
            <label >{label}</label>
            {description ? (<span className="description-input" style={{marginBottom:"10px"}}>{description}</span>) : null}
            <div className="content-input-select">
                <input
                    ref={refInput}
                    readOnly={true}
                    name={ name || ""}
                    className={"success"}
                    defaultValue={undefined}
                    type={"text"}
                    onChange={()=>null}
                    placeholder={placeholder} 
                    value={ statusChange === true ? valueLocal : value || ""}
                    onClick={handleStatus}
                />
                <div className="show-list-items" onClick={handleStatus}><img src="../images/ar-ft.png"/></div>
            </div>
                   
            <div className={`${statusShow === true ? "content-list-items-select active" : "content-list-items-select"}`} >
                {dataOption.length > 0 ? (
                    <ul>
                        {
                            dataOption.map((value,index)=>(
                                <li 
                                    key={index}
                                    onClick={handleClickItem}
                                >
                                    {statusShow === true ? value : null}
                                </li>
                            ))
                        }
                    </ul>
                ): null}
                
            </div>
            
            <style jsx>{`
                    *:focus {
                        outline: none;
                    }
                    .input-selection{
                        position: relative;
                    }
                    .show-list-items{
                        position: absolute;
                        width: 10px;
                        right: 15px;
                        top: 50%;
                        cursor: pointer;
                        opacity: 0.5;
                        transform: translate(0,-50%);
                        transition: 0.3s;
                    }
                    .content-input-select{
                        position: relative;
                        min-width: ${widthInput||"310px"};
                        width: ${widthInput||"100%"};
                    }
                    .content-list-items-select{
                        display: flex;
                        min-width: ${widthInput||"310px"};
                        width: ${widthInput||"100%"};
                        transition: 0.3s ease-in-out;
                        overflow: hidden;
                        ul{
                            display: flex;
                            width: 100%;
                            flex-direction: column;
                            z-index: -1;
                            height: 0;
                            opacity: 0;
                            box-shadow: 0px 2px 9px 5px #ececec;
                            transition: 0.3s ease-in-out;
                        }
                        li{
                            padding: 5px;
                            transition: 0.3s ease-in-out;
                        }
                    }
                   
                    .content-list-items-select.active{
                        transition: 0.3s ease-in-out;
                        overflow: unset;
                        ul{
                            height: auto;
                            z-index: auto;
                            opacity: 1;
                            padding: 10px;
                            box-shadow: 0px 2px 9px 5px #ececec;
                            max-height: 250px;
                            overflow: auto;
                            transition: 0.3s ease-in-out;
                        }
                        li{
                            margin: 10px 0;
                            margin-top:0;
                            cursor: pointer;
                            transition: 0.3s ease-in-out;
                            &:hover{
                                background-color: #ececec;
                               
                            }
                        }
                    }
                    label{
                        font-size: 15px;
                        display: block;
                        margin: 5px 0;
                    }
                   
                    input{
                        display: block;
                        box-sizing: border-box;
                        margin-bottom: 20px;
                        padding: 4px 15px;
                        min-width: ${widthInput||"310px"};
                        width: ${widthInput||"100%"};
                        height: ${heightInput || "40px"};
                        border: 1px solid #E3EBF6;
                        font-weight: 400;
                        font-size: 15px;
                        transition: 0.2s ease;
                        outline: none;
                        border-radius: ${borderRadius || "2px"};
                        ::placeholder{
                            color: #95AAC9;
                        }
                        &::after{
                            content: "";
                            position: absolute;
                            width: 15px;
                            height: 15px;
                            color : red;
                            z-index: 5;
                        }
                    }
                    input:focus,{
                        background-color: #fff;
                        border-color: #2c7be5;
                        outline: 0;
                        box-shadow: transparent;
                    }
                    .description-input{
                        color: #6E84A3;
                        font-size: 13px; 
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

export const InputImageAvatar = React.forwardRef(({
    value,
    name, // name input
    borderRadius,
    widthInput,
    heightInput,  // height input
    typeInput,   // type input
    label,      // label Input
    placeholder, // placeholder input
    description,
    forwardRef }, { ref }) => {
    
    const [fileNames, setFileNames] = useState([]);
    const [file, setFile] = useState([]);
    // const [fileBase64, setFileBase64] = useState(value);
    const [files, setFiles] = useState([]);
    const onChangeImage =  async (event) =>{
        event.preventDefault();
        event.persist();
       
    }
    const handleDrop = async (acceptedFiles) => {

        setFileNames([acceptedFiles.map(file => file.name)]);
        // let newFile;
        // // BASE64 FILE:
        // let reader = new FileReader();
        // reader.onload = async (readerEvent) => {
        //     // console.log(reader);
        //     newFile = reader.result;
        //     setFileBase64(newFile);
        // }
        // reader.readAsDataURL(acceptedFiles[0]);
        setFile([
            ...acceptedFiles.map(file =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            )
        ]);
    }
    
    return (
        <div ref={forwardRef} className="input-avatar-upload">
            <div className={"avatar-upload"}><img src={`${file[0] ? file[0].preview : value ||  "../images/avatar-default.png"}`}/></div>
            <div style={{flex:"auto", padding:"0 10px"}}>
                <label>{label}</label>
                {description ? (<span className="description-input">{description}</span>) : null}
            </div>
                {
                    typeInput === "avatar" ? (
                        <div className="content-avatar-input">
                            <Dropzone onDrop={handleDrop}>
                                {({ getRootProps, getInputProps }) => (
                                <div className="drop-zone" {...getRootProps({ className: "dropzone" })}>

                                    <input accept="base64/*" name={name || "avatar"} {...getInputProps()} />

                                    {
                                        <p className="btn-upload" style={{padding:"5px 15px"}}>{placeholder||"Upload"}</p>
                                    }
                                </div>
                                )}
                            </Dropzone>
                        </div>
                    ):(
                        null
                    )
                }
               
            <style jsx>{`
                    *:focus {
                        outline: none;
                    }
                    .input-avatar-upload{
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                        .btn-upload {
                            cursor: pointer;
                            color: #fff;
                            background-color: #2c7be5;
                            border-color: #2c7be5;
                            border-radius: 3px;
                            &:hover{
                                background-color: #1a68d1;
                                border-color: #1862c6;
                            }
                        }
                    }
                    
                    label{
                        font-size: 15px;
                        display: block;
                        margin: 5px 0;
                    }
                    .description-input{
                        color: #6E84A3;
                        font-size:  13px; 
                    }
                    .avatar-upload{
                        border-radius: ${borderRadius ||"2px"};
                        height: ${heightInput || "50px"};
                        width: ${widthInput || "50px"};
                        overflow: hidden;
                        justify-content: center;
                        align-items: center;
                        display: flex;
                    }
                   .content-avatar-input{
                        background-color: blue;
                        text-align: center;
                        color: #fff;
                        transition: all .2s ease-in-out;
                        display: flex;
                        align-items: center;
                        justify-content:center;
                        overflow: hidden;
                        position: relative;
                        border-radius: 4px;
                        .drop-zone{
                            width:100%;
                            height:100%;
                            justify-content: center;
                            align-items: center;
                        }
                        p{
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            z-index: 1;
                            cursor:pointer;
                            width:100%;
                            height: 100%;
                            margin:0;
                        }
                        img{
                            max-width: 100%;
                            max-height: 100%;
                            width: 100%;
                            height: 100%;
                            border: "none";
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            cursor:pointer;
                        }
                       
                    }
                   
                    
            `}</style>
        </div>
    )
})