import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import css from "./DropDownCore.module.scss";

function DropDown ({
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
        <div className={css["container-dropdown"]}>
            {
                displayTitle === false ?
                <div className={"dropdown-icon"}>
                    <Link href={linkTo}>
                        <a><img src={srcIcon || ""}></img></a>
                    </Link>
                    {
                        hasChild === true ? <span onClick={handleStatus}><img src={srcArrow}></img></span> : <span></span>
                    }
                </div> 
                :
                <div className={css["dropdown-full"]}>
                    {
                        displayIcon ? 
                        <Link href={linkTo}>
                            <a><img src={srcIcon || "null"}></img></a>
                        </Link>
                        :<a></a>
                    }
                    <Link href={linkTo || ""}>
                        <a className={css["title"]}>{title || ""}</a> 
                    </Link>
                    {
                        hasChild === true ? <span onClick={handleStatus}><img src={srcArrow}></img></span> : <span></span>
                    }
                </div>
            }
            <div 
                className={css["children"]}
                ref={refEle}
                style={
                    heightRef !== null ? {maxHeight: _displayChild === true ? 
                    heightRef : 0, transition: "0.3s ease"} : { transition: "0.3s ease"}
                }>
                <ul>
                    {children}
                </ul>
            </div>
        </div>
    )
}

function DropDownItem({children, linkTo=""}){
    return(
        <Link href={linkTo} >
            <a>{children}</a>
        </Link>
    )
}

export {DropDown, DropDownItem}