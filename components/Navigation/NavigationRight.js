import React, { useState, useEffect, useContext } from 'react'
import ButtonChangeBgBlack from "components/button/ButtonChangeBgBlack";
import ButtonChangeBgWhite from "components/button/ButtonChangeBgWhite";
import BtnSetHeaderTop from "components/button/ButtomSetHeaderTop";
import {MainContentContext} from "contexts/MainContentContext";
import BtnSetHeaderDefault from "components/button/ButtomSetHeaderDefault";
const CustomTemplate  = function(props) {

    const valueContext = useContext(MainContentContext);

    const [classNamesClose, setClassNameClose] = useState('containerNotify hide');
    const [alignSelf, setAlignSelf] = useState( props.alignSelf || "unset");

    useEffect(()=>{
        valueContext.statusNavRigth === true ? 
        setClassNameClose('containerNotify hide') : setClassNameClose('containerNotify');
    },[valueContext]);

    const handleStatus = () => valueContext.setStatusNavRight();

    return(
        <div className={"nav-right"}>
        <div className={classNamesClose}>
          <h3 className="closeContainerNotify" onClick={handleStatus}><span></span></h3>
          <div className="contentItems">
            <div className={"img"}>
              <img src={"images/designer-life.svg"}/>
            </div>
            <h2 className="text-center">
              Make Dashkit Digitop
            </h2>
            <p className="text-center">
              Set preferences that will be cookied for your live preview demonstration.
            </p>

            <ButtonChangeBgBlack/>
            <ButtonChangeBgWhite/>
            <BtnSetHeaderTop/>
            <BtnSetHeaderDefault/>
            
          </div>
        </div>


        <style jsx>{`
            .text-center{
              text-align: center;
            }
            .nav-right{
                  transition: 0.4s ease-in-out;
                  cursor: pointer;
                  position: relative;
                  width:100%;
                  align-self: ${alignSelf};
                  .number {
                    transition: 0.3s ease-in-out;
                    position: absolute;
                    width: 12px;
                    height: 12px;
                    font-size: 10px;
                    font-weight: bold;
                    bottom: 0;
                    right: 0;
                    border-radius: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    background: red;
                    top: 0;
                  }
              }
              .nav-right.hide{
                  transition: 0.4s ease-in-out;
                  width: 0;
                  height: 0;
                  top: 100%;
                  left: unset;
                  position: absolute;
                  opacity: 0;
                  z-index: -1;   
                  border-radius: 100%;    
              }
              .containerNotify{
                  transition: 0.5s ease-in-out;
                  display: flex;
                  flex-direction: column;
                  position: fixed;
                  width: 300px;
                  height: 100%;
                  top: 0;
                  right: 0;
                  background-color: #fff;
                  justify-content: flex-start;
                  align-items: start;
                  z-index: 2;
                  transition: 0.4s ease-in-out;
                  h3{
                      width: 100%;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      text-align: center;
                      margin: 0;
                      display: flex;
                      justify-content: flex-end;
                      position: relative;

                      span{
                        position: absolute;
                        right: 15px;
                        top: 0;
                        width: 20px;
                        height: 30px;
                        transition: 0.5s;

                        &::after, &::before{
                          content:"";
                          position: absolute;
                          top:15px;
                          left:0;
                          width:20px;
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
                  a:hover {
                      text-decoration: unset;
                      color:snow;
                  }
              }
              .contentItems{
                  display: flex;
                  width: 100%;
                  padding: 20px;
                  
                  flex-direction: column;
                  justify-content: flex-start;
                  align-items: flex-start;
                  overflow: hidden;
                  overflow-y: auto;
                  opacity: 1;
                  &::-webkit-scrollbar-track{
                    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                    border-radius: 10px;
                    background-color: #F5F5F5;
                  }

                  &::-webkit-scrollbar{
                    width: 10px;
                    background-color: #F5F5F5;
                  }

                  &::-webkit-scrollbar-thumb{
                    border-radius: 10px;
                    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
                    background-color: rgb(180, 175, 175);
                  }
                  .img{
                    width: 100%;
                    display: flex;
                    justify-content: center;
                  }
                  h2,p{
                    width: 100%;
                    margin: 2px;
                  }
                  p{
                    padding-bottom: 20px;
                    border-bottom: 1px solid #e3ebf6;
                  }
                 
              }
              .containerNotify.hide{
                  transition: 0.5s ease-in-out;
                  top: 0;
                  transform: translate(100%,0%);
                  overflow: unset;
                  overflow: hidden;
                  z-index: -1;
                  opacity: 0;
              }
              .closeContainerNotify{
                position: relative;
                  &::after{
                      content: "";
                      position: absolute;
                      background-color: rgba(0,0,0,0.5);
                      width: 100vw;
                      height: 100vh;
                      right: 300px;
                      top: 0;
                  }
                  
              }
              .text-danger{
                color : red;
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
