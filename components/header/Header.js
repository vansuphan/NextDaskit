import {useContext} from "react";
import {TemplateContext} from "contexts/TemplateContext"

export default function Header({children, color}){
    const {
        className,
        background,
        header,
        layout,
        setBgWhite,
        setBgBlack,
        setClass,
        setHeader,
        setLayout
    } = useContext(TemplateContext);
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