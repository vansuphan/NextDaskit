
import { background } from 'jimp';
import React, { useState, useEffect } from 'react';
export default function Switch ({
    name="switch",
    status, 
    onClick, 
    widthSwitch = 53, 
    heightSwitch = 25,
    marginCircleInit=1, 
    widthCircle = 23,
    heightCircle = 23,
    backgroundCircle="#fff"}) {
    const [isChecked, setChecked] = useState( status || false);
    const handleChecked = ()=>{
        setChecked(!isChecked);
    }
    useEffect(()=>{
        if(onClick){
            onClick();
        }
    },[isChecked])
    return(
        <>
            <div className="switch-container">
                <label>
                    <input value={isChecked || false} name={name} checked={ isChecked } onChange={ handleChecked } className="switch" type="checkbox" />
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
                    width: ${widthSwitch + "px"};
                    height: ${heightSwitch + "px"};
                    display: flex;
                    align-items: center;
                    vertical-align: middle;
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
                    width: ${widthSwitch + "px"};
                    background-position: 0 0;
                    background-color: #3b89ec;
                }
                
                input[type="checkbox"].switch + div > div {
                    float: left;
                    width: ${widthCircle + "px"}; 
                    height: ${heightCircle + "px"};
                    border-radius: inherit;
                    background:${backgroundCircle};
                    -webkit-transition-timing-function: cubic-bezier(1,0,0,1);
                    transition-timing-function: cubic-bezier(1,0,0,1);
                    -webkit-transition-duration: 0.4s;
                    transition-duration: 0.4s;
                    -webkit-transition-property: transform, background-color;
                    transition-property: transform, background-color;
                    pointer-events: none;
                    margin-left: ${marginCircleInit+ "px"};
                }
                
                input[type="checkbox"].switch:checked + div > div {
                    -webkit-transform: translate3d(${(widthSwitch-widthCircle-2) + "px" || "25px"}, 0, 0);
                    transform: translate3d(${(widthSwitch-widthCircle-marginCircleInit-2) + "px" || "25px"}, 0, 0);
                    background-color: #ffffff;
                }
            `}
            </style>
        </div>
        </>
        
    );
}

