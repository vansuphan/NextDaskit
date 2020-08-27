import React, {useState, useEffect} from "react"
export default function Search(props){
    const [sizeSearch, setSizeSearch] = useState({
        width : props.width || "100%",
        height : props.height || "100%"
    });
    const [heightLabel, setHeightLabel] = useState()
    // console.log(props);
    return(
        <div>
            <label htmlFor="search"></label>
            <input id="search" type="search" placeholder="Search"></input>

            <style jsx>{`
                div{
                    width: ${sizeSearch.width};
                    height: ${sizeSearch.height};
                    min-height: 30px;
                    position: relative;
                    display: flex;
                    flex-direction: row;
                }
                label{
                    position: absolute;
                    width: 10%;
                    max-width: 30px;
                    height: 70%;
                    cursor: pointer;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: 100%;
                    background-image: url('./images/icon-search.png');
                    top: 50%;
                    left: 3%;
                    transform: translate(0,-50%)
                }
                input{
                    width: 100%;
                    padding: 0 10px 0 30px;
                    border: solid 1px gray;
                    border-radius: 3px;
                    outline: none;
                }
            `}
            </style>
        </div>
    )
}