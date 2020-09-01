import {useState} from "react"
export const MainContentContext = React.createContext();

export default function MainContentProvider( {children}){

    const [background, setBackground] = useState("white");
    const [classDefautl, setClass] = useState("main-content ");
    const [header, setHeader] = useState("")
    const [statusNavRigth, setStatusNavRight] = useState(true);

    const setBgWhite = ()=> setBackground("white");
    const setBgBlack = ()=> setBackground("black");
    const _setClass = ()=> setClass("main-content ");
    const setHeaderTop = ()=> setHeader("top");
    const setHeaderDefault = ()=> setHeader("");
    const _setStatusNavRight = ()=> setStatusNavRight(!statusNavRigth)
    
    return(
        <MainContentContext.Provider
            value = {{
                className : classDefautl,
                setClass : _setClass,
                background : background,
                setBgWhite : setBgWhite,
                setBgBlack : setBgBlack,
                header : header,
                setHeaderTop : setHeaderTop,
                setHeaderDefault : setHeaderDefault,
                statusNavRigth : statusNavRigth,
                setStatusNavRight :  _setStatusNavRight,
            }}
        >
            {children}
        </MainContentContext.Provider>
    )
}   