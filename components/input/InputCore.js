
import React from "react";
import { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import classNames from 'classnames';

// import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export function InputCore({
    children,
    typeInput = "text",   // type input ex : "password" || "mail" || "text"
    label = " Please enter props label",      // label Input
    placeholder = "Please enter props placeholder!", // placeholder input
    description,
    validate = false,
    heightInput = "40px",
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
                (typeInput === "email") ? (
                    validate === true ?
                        (
                            <div className="content-input">
                                <EmailInputValidate
                                    borderRadius={borderRadius}
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
                        ) : (
                            <div className="content-input">
                                <InputBasic
                                    borderRadius={borderRadius}
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
                ) : null
            }
            {
                (typeInput === "phone") ? (
                    <div className="content-input">
                        <InputPhone
                            borderRadius={borderRadius}
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
                ) : null
            }
            {
                (typeInput === "quill") ? (
                    <div className="content-input">
                        <InputQuill></InputQuill>
                        {children}
                    </div>
                ) : null

            }
        </>

    )
}

export const InputBasic = React.forwardRef(({

    borderRadius,
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
            <label>{label}</label>
            {description ? (<span className="description-input">{description}</span>) : null}
            {
                typeInput === "password" ? (

                    statusShow === true ? (
                        <input
                            className={"success"}
                            type="text" name="password"
                            placeholder={placeholder} value={undefined}
                            onChange={onChangePassword} />
                    ) : (
                            <input
                                className={"success"}
                                type="password" name="password"
                                placeholder={placeholder} value={undefined}
                                onChange={onChangePassword} />
                        )

                ) : (
                        <input
                            className={"success"}
                            type={typeInput} name="password"
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
                        min-width: 310px;
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

    borderRadius,
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
                className={classNames({ "error": error, "success": !error })}
                type="email" name="email"
                placeholder={placeholder} value={undefined}
                onChange={onChangeEmail} />
            <span>{msError}</span>
            <style jsx>{`
                    input[type="email"]{
                        display: block;
                        box-sizing: border-box;
                        margin-bottom: 20px;
                        padding: 4px 15px;
                        min-width: 310px;
                        width: 100%;

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

    borderRadius,
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
                    className={classNames({ "error": error, "success": !error })}
                    type="text" name="password"
                    placeholder={placeholder} value={undefined}
                    onChange={onChangePassword} />
            ) : (
                    <input
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
                        min-width: 310px;
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

    borderRadius,
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
                        min-width: 310px;
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

    borderRadius,
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
                name="phone"
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
                        min-width: 310px;
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

export function InputQuill() {
    
    
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


    const onEditorChange = (event, editor) => {
        const data = editor.getData();
        console.log("editor",{ event, editor, data });
    }
    


    return editorLoader ?
        (
            <>
                <CKEditor
                    editor={ClassicEditor}
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
            </>
        )

        : <></>


}






