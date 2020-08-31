import { set } from "date-fns";
import {useState} from "react"
export const MainContentContext = React.createContext();

export default function MainContentProvider( {children}){
    const [background, setBackground] = useState("white");
    const [classDefautl, setClass] = useState("main-content ");
    const [header, setHeader] = useState("default")
    const setBgWhite = ()=> setBackground("white");
    const setBgBlack = ()=> setBackground("black");
    const _setClass = ()=> setClass("");
    const setHeaderTop =()=> setHeader("top");
    const setHeaderDefault =()=> setHeader("default");
    
    return(
        <MainContentContext.Provider
            value = {{
                className :classDefautl,
                setClass : _setClass,
                background : background,
                setBgWhite:setBgWhite,
                setBgBlack: setBgBlack,
                header : header,
                setHeaderTop:setHeaderTop,
                setHeaderDefault:setHeaderDefault,
            }}
        >
            {children}
        </MainContentContext.Provider>
    )
}   