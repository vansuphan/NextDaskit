import {useState} from "react"
export const MainContentContext = React.createContext();

export default function MainContentProvider( {children}){
    const [background, setBackground] = useState("white");
    const [classDefautl, setClass] = useState("main-content "); 
    const setBgWhite = ()=> setBackground("white");
    const setBgBlack = ()=> setBackground("black");
    const _setClass = ()=> setClass("");
    return(
        <MainContentContext.Provider
            value = {{
                className :classDefautl,
                setClass : _setClass,
                background : background,
                setBgWhite:setBgWhite,
                setBgBlack: setBgBlack,
            }}
        >
            {children}
        </MainContentContext.Provider>
    )
}   