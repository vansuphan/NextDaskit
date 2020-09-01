import React, { useState, useContext } from 'react';
import {MainContentContext} from "contexts/MainContentContext"; 

const CustomTemplate  = function(props) {
  const valuesContext = useContext(MainContentContext)
  const [alignSelf, setAlignSelf] = useState( props.alignSelf || "unset");

  return(
    <div className={"btn-blue"}>
      <div className={"button-customize"} onClick={valuesContext.setStatusNavRight}>
        <img alt="images" src={"images/sliders.png"} className="icon iconBell" />
        <span>Customize</span>
      </div>


      <style jsx>{`
            .text-center{
              text-align: center;
            }
            .btn-blue{
                  transition: 0.4s ease-in-out;
                  cursor: pointer;
                  position: relative;
                  width:100%;
                  align-self: ${alignSelf};
              }
              .button-customize{
                width: auto;
                background-color : #2c7be5;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 5px;
                padding: 7px 10px;
                transition: 0.2s;
                &:hover {
                  color: #fff;
                  background-color: #1a68d1;
                  border-color: #1862c6;
                }
                img{
                  max-width: 15px
                }
                span{
                  padding-left:10px;
                  color:white;
                  font-size: 15px;
                }
              }
        `}
        </style>
    </div>
  )
}
export default CustomTemplate;
