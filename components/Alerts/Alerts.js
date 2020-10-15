
import { background } from 'jimp';
import React, { useState, useEffect, Children } from 'react';
export default function Switch ({
    children,
    status=true, 
    closeIcon=false,
    onClick,
    borderRadius="5",
    className="",
    padding="10",
    color="#000",
    fontSize="15",
    backgroundCircle="#fff"}) {
    const [statusAlert, setStatusAlert] = useState(status);
    const  [close, setClose] = useState(closeIcon);
    const handleChecked = ()=>{
        setStatusAlert(!statusAlert);
    }
    const handleClose = (e) => setStatusAlert(false)
    useEffect(()=>{
        if(onClick){
            onClick(statusAlert);
        }
    },[statusAlert])
    return(
        statusAlert &&
        <>
            <div className={`alert-container ${className}`}>
                {children}
                {close === true ? (<>
                    <span onClick={handleClose} className="iconClose"></span>
                </>) : <></>}

            <style jsx>{`
                .alert-container{
                    position: relative;
                    width: 100%;
                    border-radius:${borderRadius+"px"};
                    background:${backgroundCircle};
                    color:${color};
                    padding: ${padding+"px"};
                    font-size: ${fontSize+"px"};

                    .iconClose{
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
                }
                .alert-container.primary{
                    color: #fff;
                    background-color: #2c7be5;
                    border-color: #2c7be5;
                    p{
                        color: #fff;
                    }
                }
                .alert-container.secondary{
                    color: #fff;
                    background-color: #6e84a3;
                    border-color: #6e84a3;
                }
                .alert-container.danger{
                    color: #fff;
                    background-color: #e63757;
                    border-color: #e63757;
                }
                .alert-container.success{
                    color: #fff;
                    background-color: #00d97e;
                    border-color: #00d97e;
                }
                .alert-container.warning {
                    color: #283e59;
                    background-color: #f6c343;
                    border-color: #f6c343;
                }
                .alert-container.info {
                    color: #fff;
                    background-color: #39afd1;
                    border-color: #39afd1;
                }
                .alert-container.light {
                    color: #283e59;
                    background-color: #edf2f9;
                    border-color: #edf2f9;
                }
                .alert-container.dark {
                    color: #fff;
                    background-color: #12263f;
                    border-color: #12263f;
                }
            `}
            </style>
        </div>
        </>
        
    );
}

