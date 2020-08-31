import {useState} from "react"
export const HeaderContext = React.createContext();

export default function HeaderProvider( {children}){
    const [background, setBackground] = useState("white");
    const [classDefautl, setClass] = useState("light"); 
    const [header, setHeader] = useState("");
    const setBgWhite = ()=> setBackground("white");
    const setBgBlack = ()=> setBackground("black");
    const _setClass = ()=> setClass("");
    const _setHeader = ()=> setHeader("header-top");
    return(
        <HeaderContext.Provider
            value = {{
                className :classDefautl,
                background : background,
                header: header,
                setBgWhite:setBgWhite,
                setBgBlack: setBgBlack,
                setClass : _setClass,
                setHeader: _setHeader,
            }}
        >
            {children}
        </HeaderContext.Provider>
    )
}   