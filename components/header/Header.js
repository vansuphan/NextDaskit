import {useContext} from "react";
import {HeaderContext} from "contexts/HeaderContext"

export default function Header({children, color}){
    const {
        className,
        background,
        header,
        setBgWhite,
        setBgBlack,
        setClass,
        setHeader,
      
    } = useContext(HeaderContext);
    return(
        <header className={header}>    
            <div>
                <span 
                style={{backgroundColor: `${background}`}}
                className={className}> 
                    Tets header context
                </span>
            </div>
            <button onClick={setBgWhite}>Set Bg White</button>
            <button onClick={setBgBlack}>Set Bg Black</button>
            <button onClick={setHeader}>Set Header Top</button>
        </header>
    )

}