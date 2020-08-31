import React, {useState, useRef} from "react"
export default function Search(props){

    const [sizeSearch, setSizeSearch] = useState({
        width : props.width || "100%",
        height : props.height || "100%"
    });

    const inputSearch = useRef(null);

    const HandleChange =() => {
        if(props.handleSearch){
            props.handleSearch(inputSearch.current.value);
        }
    }

    return(
        <div>
            <label htmlFor="search"></label>
            <input 
                ref={inputSearch}
                onChange={HandleChange}
                id="search" 
                type="search" 
                placeholder="Search">
            </input>

            <style jsx>{`
                div{
                    width: ${sizeSearch.width};
                    height: ${sizeSearch.height};
                    min-height: 30px;
                    position: relative;
                    display: flex;
                    flex-direction: row;
                    margin: 20px;
                    margin-left: auto;
                    margin-right: auto;
                }
                label{
                    position: absolute;
                    width: 6%;
                    max-width: 30px;
                    height: 70%;
                    cursor: pointer;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: 100%;
                    background-image: url('./images/icon-search.png');
                    top: 50%;
                    left: 6%;
                    transform: translate(0,-50%)
                }
                input{
                    width: 100%;
                    height: 100%;
                    padding: 0 10px 0 40px;
                    border: solid 1px #c3d0e1;
                    border-radius: 20px;
                    outline: none;
                    justify-content: center;

                }
                ::-webkit-input-placeholder { /* Edge */
                    color: #c3d0e1;
                }

                :-ms-input-placeholder { /* Internet Explorer 10-11 */
                    color: #c3d0e1;
                }

                ::placeholder {
                    color: #c3d0e1;
                }
            `}
            </style>
        </div>
    )
}