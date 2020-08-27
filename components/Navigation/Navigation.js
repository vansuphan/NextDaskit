import css from "./Navigation.module.scss"
var classNames = require('classnames')
import React, {useState, useEffect} from "react"
import Search from './Search'
export default function Navigation (props) {
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
        <div className={css.navbar + " navbar"}>
            <ul>
                {textArr.map((value, index) => (
                    <li 
                    key= { index }
                    className= { classNames( value.name, {"active": value.active }) }>
                        { value.name }
                    </li>
                )) }
            </ul>
            <div className="logo">
                <img src={'./images/dashkit-logo.png'}></img>
            </div>
            <div className="search-and-user">
                <div className="seach">
                    <Search
                        width={"250px"}
                    />
                </div>
                <div className="user">

                </div>
            </div>
            <style jsx>{`
                    .navbar{
                        justify-content: flex-start;
                    }
                    ul{
                        width: 40%;
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;
                    }
                    ul li{
                        color: ${colorDefault};
                        padding: 5px 10px;
                        cursor: pointer;
                    }
                    ul li.active{
                        color: #1F2D3D;
                    }
                    .logo{
                        width: 32px;
                        height: 30px;
                        justify-self: center;
                    }

            `}</style>
        </div>
    )
}