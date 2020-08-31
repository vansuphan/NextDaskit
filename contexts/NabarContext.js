import {useState} from "react"
export const NavbarContext = React.createContext();

export default function NavbarProvider( {children}){

    const [background, setBackground] = useState("white");
    const [type, setType] = useState("nav-default");
    const [side, setSide] = useState("navbar-side-full");

    const setBgWhite = ()=> setBackground("white");
    const setBgBlack = ()=> setBackground("black");

    const setNavBarTop = ()=> setType("navbar-top");
    const setNavBarDefault = ()=> setType("nav-default");

    const setSideFull = ()=> setSide("navbar-side-full");
    const setSideIcon = ()=> setSide("navbar-side-icon");

    return(
        <NavbarContext.Provider
            value = {{
                background : background,
                setBgWhite:setBgWhite,
                setBgBlack: setBgBlack,
                type : type,
                setNavBarTop : setNavBarTop,
                setNavBarDefault: setNavBarDefault,
                side: side,
                setSideFull : setSideFull,
                setSideIcon : setSideIcon
            }}
        >
            {children}
        </NavbarContext.Provider>
    )
}   