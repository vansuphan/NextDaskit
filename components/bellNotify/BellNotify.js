import React, { useState, useEffect } from 'react'
import Item from './item/index'

const BellNotify  = function(props) {
  // const [classNames, setClassName] = useState('notify')
  const [classNamesClose, setClassNameClose] = useState('containerNotify hide')
  const [statusClose, setStatusClose] = useState(true)
  const [notifyNumber, setNotifyNumber] = useState(props.notifyNumber || false)

  useEffect(()=>{
    if(notifyNumber === 0){
      setNotifyNumber(false)
    }
    if(notifyNumber >= 10){
      setNotifyNumber("!")
    }
    if(typeof(notifyNumber) === "string"){
      setNotifyNumber("!")
    }
  }, [notifyNumber])

  useEffect(()=>{
    if(statusClose === true){
      setClassNameClose('containerNotify hide')
    }else{
      setClassNameClose('containerNotify')
    }
  },[statusClose]);
  const onClickClose = () =>{
    setStatusClose(!statusClose)
  }
  const onClickOpen = () =>{
    setStatusClose(!statusClose)
  }
  return(
      <div className={"notify"}>
        <img alt="Notify" src={"images/bell-icon.png"} className="icon iconBell" onClick={onClickOpen}/>
        {
          notifyNumber && <span className="number text-danger">{notifyNumber}</span>
        }
        <div className={classNamesClose}>
          <h3 className=" bg-dark closeContainerNotify" onClick={onClickClose}>Notifications</h3>
          <div className="contentItems">
            <Item
              imgURL={"images/icon-mail-active.png"}
              title="Hello"
              textContent="It's a broader card with text below as a natural lead-in to extra content."
              timer ={1}
            />
            <Item
               imgURL={"images/icon-mail-active.png"}
               textContent="It's a broader card with text"
               title="Hello"
            />
            <Item
               imgURL={"images/icon-mail-active.png"}
               title="Hello"
            />
            <Item
              imgURL={"images/icon-mail-active.png"}
              title="Hello"
              textContent="It's a broader card with text below as a natural lead-in to extra content."
              timer ={1}
            />
            <Item
               imgURL={"images/icon-mail-active.png"}
               textContent="It's a broader card with text"
               title="Hello"
            />
            <Item
               imgURL={"images/icon-mail-active.png"}
               textContent="It's a broader card with text"
               title="Hello"
            />
            <Item
              imgURL={"images/icon-mail-active.png"}
              title="Hello"
              textContent="It's a broader card with text below as a natural lead-in to extra content."
              timer ={1}
            />
            <Item
               imgURL={"images/icon-mail-active.png"}
               textContent="It's a broader card with text"
               title="Hello"
            />
            <Item
               imgURL={"images/icon-mail-active.png"}
               textContent="It's a broader card with text"
               title="Hello"
            />
            <Item
              imgURL={"images/icon-mail-active.png"}
              title="Hello"
              textContent="It's a broader card with text below as a natural lead-in to extra content."
              timer ={1}
            />
            <Item
               imgURL={"images/icon-mail-active.png"}
               textContent="It's a broader card with text"
               title="Hello"
            />
            <Item
               imgURL={"images/icon-mail-active.png"}
               textContent="It's a broader card with text"
               title="Hello"
            />
            <Item
              imgURL={"images/icon-mail-active.png"}
              title="Hello"
              textContent="It's a broader card with text below as a natural lead-in to extra content."
              timer ={1}
            />
          </div>
        </div>
        <style jsx>{`
            .notify{
                  transition: 0.4s ease-in-out;
                  cursor: pointer;
                  max-width: 25px;
                  position: relative;
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
              .notify.hide{
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
                  left: 0;
                  background-color: #fff;
                  justify-content: flex-start;
                  align-items: start;
                  z-index: 2;
                  transition: 0.4s ease-in-out;
                  h3{
                      width: 100%;
                      padding: 20px;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      text-align: center;
                      // font-family: $CerebriSansRegular;
                      margin: 0;
                      
                  }
                  a:hover {
                      text-decoration: unset;
                      color:snow;
                  }
              }
              .contentItems{
                  display: flex;
                  width: 100%;
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
              }
              .containerNotify.hide{
                  transition: 0.5s ease-in-out;
                  top: 0;
                  transform: translate(-100%,0%);
                  overflow: unset;
                  overflow: hidden;
                  z-index: -1;
                  opacity: 0;
              }
              .closeContainerNotify{
                  &::after{
                      content: "";
                      position: absolute;
                      background-color: rgba(0,0,0,0.5);
                      width: 100vw;
                      height: 100vh;
                      left: 300px;
                      top: 0;
                  }
              }
              .text-danger{
                color : red;
              }
        `}
        </style>
      </div>
    )
    
}
export default BellNotify;
