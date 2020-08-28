
import React, { useState, useEffect } from 'react';
export default function Switch (props) {
    const [isChecked, setChecked] = useState( props.status || false);
    const handleChecked = ()=>{
        setChecked(!isChecked);
    }
    useEffect(()=>{
        if(props.onClick){
            props.onClick();
        }
    },[isChecked])
    return(
        <>
            <div className="switch-container">
                <label>
                    <input checked={ isChecked } onChange={ handleChecked } className="switch" type="checkbox" />
                    <div>
                        <div></div>
                    </div>
                </label>
            <style jsx>{`
                .switch-container {
                   
                }

                input[type="checkbox"].switch  {
                    position: absolute;
                    opacity: 0;
                }

                input[type="checkbox"].switch + div {
                    vertical-align: middle;
                    width: 40px;
                    height: 20px;
                    border-radius: 999px;
                    background-color: #b1c2d9;
                    -webkit-transition-duration: .4s;
                    transition-duration: .4s;
                    -webkit-transition-property: background-color, box-shadow;
                    transition-property: background-color, box-shadow;
                    cursor: pointer;
                }

                input[type="checkbox"].switch + div span {
                    position: absolute;
                    font-size: 1.6rem;
                    color: white;
                    margin-top: 12px;
                }

                input[type="checkbox"].switch:checked + div {
                    width: 60px;
                    background-position: 0 0;
                    background-color: #3b89ec;
                }

                input[type="checkbox"].switch + div {
                    width: 60px;
                    height: 32px;
                }

                input[type="checkbox"].switch + div > div {
                    float: left;
                    width: 30px; height: 30px;
                    border-radius: inherit;
                    background: #ffffff;
                    -webkit-transition-timing-function: cubic-bezier(1,0,0,1);
                    transition-timing-function: cubic-bezier(1,0,0,1);
                    -webkit-transition-duration: 0.4s;
                    transition-duration: 0.4s;
                    -webkit-transition-property: transform, background-color;
                    transition-property: transform, background-color;
                    pointer-events: none;
                    margin-top: 1px;
                    margin-left: 1px;
                }

                input[type="checkbox"].switch:checked + div > div {
                    -webkit-transform: translate3d(20px, 0, 0);
                    transform: translate3d(20px, 0, 0);
                    background-color: #ffffff;
                }

                input[type="checkbox"].bigswitch.switch + div > div {
                    width: 44px;
                    height: 44px;
                    margin-top: 1px;
                }
                input[type="checkbox"].switch:checked + div > div {
                    -webkit-transform: translate3d(28px, 0, 0);
                    transform: translate3d(28px, 0, 0);
                }


            `}
            </style>
        </div>
        </>
        
    );
}

