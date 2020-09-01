import {useCallback, useState, useEffect, useRef, useMemo} from "react";
import Link from "next/link";
import AOS from "aos";
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
        AOS.init({
            duration: 300,
        });
        setHeightRef(refEle.current.offsetHeight)
    },[]);

    useEffect(()=>{
        children ? setHasChild(true) : setHasChild(false);
        if(_displayChild==true && refEle.current.offsetHeight !== 0){
          
           
                setHeightRef(refEle.current.offsetHeight)
            
        }
    },[_displayChild])

    return (
        <div className={css["container-dropdown"]}>
            <>
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
                    <div className={css["dropdown-full"]}>
                        {
                            displayIcon ? 
                            <Link href={linkTo}>
                                <a><img src={srcIcon || "null"}></img></a>
                            </Link>
                            :
                            <Link href={linkTo}><a></a></Link>
                        }
                        
                        <Link href={linkTo || ""}>
                            <a className={css["title"]}>{title || ""}</a> 
                        </Link>
                        {
                            hasChild === true ? <span onClick={handleStatus} ><img src={srcArrow}></img></span> : <span></span>
                        }
                    </div>
                }
            </>
            {
                
                    <div className={css["children"]}
                    ref={refEle}
                   
                    style={ heightRef !== null ? {maxHeight: _displayChild === true ? 
                        heightRef : 0, transition: "all 0.3s ease"} : { transition: "all 0.3s ease"}}  
                    >
                        <ul>
                            {children}
                        </ul>
                    </div>
            }
            
        </div>
    )
}
