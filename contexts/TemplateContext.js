import {useState} from "react"
export const TemplateContext = React.createContext();

export default function TemplateProvider( {children}){
    const [background, setBackground] = useState("white");
    const [classDefautl, setClass] = useState("light"); 
    const [header, setHeader] = useState("header-s");
    const [layout, setLayout] = useState("layout");
    const setBgWhite = ()=> setBackground("white");
    const setBgBlack = ()=> setBackground("black");
    const _setClass = ()=> setClass();
    const _setHeader = ()=> setHeader("header-top");
    const _setLayout = () => setLayout();
    return(
        <TemplateContext.Provider
            value = {{
                className :classDefautl,
                background : background,
                header: header,
                layout: layout,
                setBgWhite:setBgWhite,
                setBgBlack: setBgBlack,
                setClass : _setClass,
                setHeader: _setHeader,
                setLayout : _setLayout,
            }}
        >
            {children}
        </TemplateContext.Provider>
    )
}   