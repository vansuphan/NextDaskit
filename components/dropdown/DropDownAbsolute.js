import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import css from "./DropDown.module.scss";
export default function DropDown ({
    children,
    displayChild,
    displayIcon=true,
    displayTitle, 
    linkTo="", 
    title="", 
    srcIcon="", 
    srcArrow="images/ar-ft.png"}){

    const [_displayChild, setDisplayChild] = useState( displayChild || false);
    const [hasChild, setHasChild] = useState(false);
    const [heightRef, setHeightRef] = useState(null)
    const refEle = useRef();
    
    const handleStatus = () => setDisplayChild(!_displayChild);
   
    useEffect(()=>{
        setHeightRef(refEle.current.offsetHeight);
    },[]);

    useEffect(()=>{
        children ? setHasChild(true) : setHasChild(false);
    },[_displayChild])

    return (
        <div className={css["container-dropdown-absolute"]}>
            {
                displayTitle === false ?
                <div className={"dropdown-icon"}>
                    <Link href={linkTo}>
                        <a><img src={srcIcon || ""}></img></a>
                    </Link>
                    {
                        hasChild === true ? <span onClick={handleStatus} ><img src={srcArrow}></img></span> : <span></span>
                    }
                </div> 
                :
                <div className={"dropdown-full"}>
                    {
                        displayIcon ? 
                        <Link href={linkTo}>
                            <a><img src={srcIcon || "null"}></img></a>
                        </Link>
                        :<a></a>
                    }
                    <Link href={linkTo || ""}>
                        <a className={"title"}>{title || ""}</a> 
                    </Link>
                    {
                        hasChild === true ? <span onClick={handleStatus}><img src={srcArrow}></img></span> : <span></span>
                    }
                </div>
            }
            <div className={_displayChild === true ? "children-absolute" : "children-absolute.hide"}
            ref={refEle}>
                <ul>
                    {children}
                </ul>
            </div>
            <style jsx>{`
            .children-absolute{
                display: flex;
                flex-direction: column;
                position: absolute;
                opacity:1;
                transition: 0.4s ease;
                background-color:white;
                padding: 10px;
                box-shadow: 0px 1px 5px #aaaaaa;
                background-color: white;
                ul{
                    display: flex;
                    flex-direction:column;
                }

            }
            .children-absolute.hide{
                opacity: 0;
                height: 0;
                z-index: -1;
                ul{
                    display: none;
                }
            }
            .container-dropdown-absolutte{
                .dropdown-icon,.dropdown-full{
                    width: 100%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    padding: 5px 0px;
                    transition : 0.5s;
                    position: relative;
                    a{
                        max-height: 100%;
                        color: black;
                    }
                    span{
                        display: flex;
                        cursor: pointer;
                        width : 10px;
                        justify-content : flex-end;
                        &::after{
                            content: "";
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            top: 0;
                            left: 0;
                            cursor: pointer;
                            background-color: rgba(255, 255, 255, 0.2);
                        }
                    }
                    span:hover::after{
                        background-color: rgba(255, 255, 255, 0);
                    }
                }
            }
            `}</style>
        </div>
    )
}
