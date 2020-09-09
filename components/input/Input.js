
import React from "react";
import { useState, useEffect, useRef } from 'react';
// import Link from "next/link";
import classNames from 'classnames';

import DatePicker from 'react-modern-calendar-datepicker';
// import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export function Input({
    children,
    name,   // name input
    typeInput = "text",   // type input ex : "password" || "mail" || "text"
    label = " Please enter props label",      // label Input
    placeholder = "Please enter props placeholder!", // placeholder input
    description,
    validate = false,
    heightInput = "40px",
    widthInput,
    borderRadius = "2px",
}) {
    const refInputText = useRef();
    return (
        <>
            {
                (typeInput === "text" || typeInput === "") ? (
                    <div className="content-input">
                        <InputBasic
                            borderRadius={borderRadius}
                            heightInput={heightInput}
                            widthInput={widthInput}
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
                (typeInput === "selection") ? (
                    <div className="content-input">
                        <InputSelection
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
                        ></InputSelection>
                        {children}
                    </div>
                ) : null
            }
            {
                (typeInput === "image") ? (
                    <div className="content-input">
                        <InputImage
                        borderRadius={borderRadius}
                        widthInput={widthInput}
                        heightInput={heightInput}
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

            <style jsx>{`
                .content-input{
                    position: relative
                }
            `}</style>
        </>
    )
}

export const InputBasic = React.forwardRef(({
    
    name, // name input
    borderRadius,
    widthInput,
    heightInput,  // height input
    typeInput,   // type input
    label,      // label Input
    placeholder, // placeholder input
    description, // description below title
    forwardRef }, { ref }) => {

    const [passwords, setPassword] = useState("");
    const [statusShow, setStatusShow] = useState(false);

    function onChangePassword(event) {
        setPassword(event.target.value);
    }

    const handleStatus = () => setStatusShow(!statusShow);

    return (
        <div ref={forwardRef} > 
            <label >{label}</label>
            {description ? (<span className="description-input">{description}</span>) : null}
            {
                typeInput === "password" ? (

                    statusShow === true ? (
                        <input
                            name={name || "password"}
                            className={"success"}
                            type="text"
                            placeholder={placeholder} value={undefined}
                            onChange={onChangePassword} />
                    ) : (
                            <input
                                
                                name={name || "password"}
                                className={"success"}
                                type="password"
                                placeholder={placeholder} value={undefined}
                                onChange={onChangePassword} />
                        )

                ) : (
                        <input
                            name={name || ""}
                            className={"success"}
                            type={typeInput} 
                            name={name || ""}
                            placeholder={placeholder} value={undefined}
                            onChange={onChangePassword} />
                    )
            }
            {
                typeInput === "password" ? (
                    <div onClick={handleStatus} className={"show-password"}><img src={"images/icon-eye.png"} /></div>
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
                        right: 10px;
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

    function checkEmailPattern(email) {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }

    function onChangeEmail(event) {
        const checked = checkEmailPattern(event.target.value);
        if (event.target.value.trim() === "") {
            setError(true);
            setMsError("Email không được để trống");
        } else {
            checked === true ? setError(false) : setError(true);
            error === true ? setMsError("Email không đúng") : setMsError("");
        }
    }

    return (
        <div ref={forwardRef} className={classNames({ "error": error, "success": !error })}>
            <label>{label}</label>
            {description ? (<span className="description-input">{description}</span>) : null}
            <input
                name={name || "email"}
                className={classNames({ "error": error, "success": !error })}
                type="email"
                placeholder={placeholder} value={undefined}
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
                        color: #008eff !important;
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
                        color: #008eff !important;
                    }   
            `}</style>
        </div>
    )
});

export const InputTextarea = React.forwardRef(({

    name,
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
                placeholder={placeholder} value={undefined}
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
            error === true ? setMsError("Phone không đúng") : setMsError("");
        }

    }

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
                value={undefined}
                onChange={onChange}
            />
            <span>{msError}</span>
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
                        color: #008eff !important;
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
    const [data, setData] = useState('')


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

    const onEditorChange = (event, editor) => {
        const data = editor.getData();
        console.log("editor",{ event, editor, data });
    }

    return editorLoader ?
        (
            <div ref={forwardRef} style={{width: widthInput}}>
                <label htmlFor={ name !== undefined ? name + " calendar" : "calendar"}>{label}</label>
                {description ? (<span className="description-input">{description}</span>) : null}
                <CKEditor 
                    name={name || ""}
                    className={"editorCustom"}
                    editor={ClassicEditor}
                    config={{
                        ckfinder:{
                            uploadUrl: "https://vi.imgbb.com/"
                        }
                    }}
                    data={data}
                    // data="<p>Hello from CKEditor 5!</p>"
                    onInit={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={onEditorChange}
                    // onBlur={(event, editor) => {
                    //     console.log('Blur.', editor);
                    // }}
                    // onFocus={(event, editor) => {
                    //     console.log('Focus.', editor);
                    // }}
                />
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
                `}</style>
            </div>
        )
        : <></>
})

export const InputCalendar = React.forwardRef(({

    name,
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
    const [value, setValue] = useState(undefined);

    const handleChange = (selectedDay)=>{
        let formatDate = selectedDay.day + "/" + selectedDay.month+ "/" + selectedDay.year;
        setValue(formatDate)
        inputRefHide.current.focus();
        inputRefHide.current.value = value;
    }

    const onFocus = ()=>{
        inputRefHide.current.focus();
    }

    useEffect(()=>{
        if(selectedDay !== undefined){
            handleChange(selectedDay)
        }
    }, [selectedDay])
    
    const renderCustomInput = ({ ref }) => (
        <>
            <input
                readOnly
                className="custom-input-hide" // a styling class
                ref={ref} // necessary
                placeholder={placeholder}
                value={selectedDay || ""}
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
                value={value||""}
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

export const InputSelection = React.forwardRef(({

    name, // name input
    widthInput,
    borderRadius,
    heightInput,  // height input
    typeInput,   // type input
    label,      // label Input
    placeholder, // placeholder input
    description,
    forwardRef }, { ref }) => {

    const listItemsTest = ["option 1", "option 2", "option 3", "option 4", "option 5", "option 6","option 7"]

    const refSelect = useRef()
    const refContentItems = useRef();
    const refInput = useRef();

    const [listItemsSelect, setListItemsSelect] = useState([]);
    const [listItemsDefault, setListItemsDefault] = useState(listItemsTest);
    const [lisItemsSearch, setLisItemsSearch] = useState(listItemsTest);
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

    const handelLeaveInput = (e)=>{
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
            setListItemsDefault(listItemsTest);
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
        <div className={"container-select"} onMouseLeave={handelLeaveInput}onClick={handleChange}>
            <label>{label}</label>
            {description ? (<span className="description-input">{description}</span>) : null}
            <div className={"content-select"}>
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

        let currentFiles = data;
        
        
        
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