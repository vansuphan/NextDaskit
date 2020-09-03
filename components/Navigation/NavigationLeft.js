import css from "./Navigation.module.scss"
var classNames = require('classnames')
import React, {useState, useEffect} from "react"
export default function NavigationLeft (props) {
    const [colorDefault, setColor ]  = useState("#8492A6");
    const [textArr, setTextArr ]= useState([
        {
            name : "Dashboard", 
            active : true
        },
        {
            name : "Pages",
            active : false
        },
        {
            name : "Layouts",
            active : false
        },
        {
            name : "Docs",
            active : false
        }
    ]);
    
    return(
        <div className={"navbar-left"}>
            <ul>
                {textArr.map((value, index) => (
                    <li 
                    key= { index }
                    className= { classNames( value.name, {"active": value.active }) }>
                        { value.name }
                    </li>
                )) }
            </ul>
            <style jsx>{`
                    .logo{
                        width: 32px;
                        height: 30px;
                        justify-self: center;
                    }

            `}</style>
        </div>
    )
}