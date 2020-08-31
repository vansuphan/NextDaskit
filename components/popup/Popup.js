import {useState, useEffect, useMemo} from "react";

export default function Popup({classDefault="popup-default",children, isVisible}){
    const [_isVisible, setIsVisible] = useState(isVisible)
    if(_isVisible === true){
        classDefault = classDefault + " show";
    }
    useEffect(()=>{
        if(_isVisible === true ){
            document.querySelector("body").classList.add("visible")
        }else{
            document.querySelector("body").classList.remove("visible");
        }
        
    },[_isVisible])
    
    return(
        <>
            <div className={classDefault}>
                <span>popup</span>
                <button>Open Popup</button>
            </div>
            <div>
                {children}
            </div>
            <div>
                <button>Ok</button>
                <button>Cancel</button>
            </div>
        </>
    )
}