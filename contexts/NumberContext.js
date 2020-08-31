import {useState} from "react";
export const NumberContext = React.createContext();

export default function NumberProvider({children}){

    const [number, setNumber] = useState(0);
    const updateNumber = ()=>{
        setNumber(Math.random());
    }
    
    return(
        <NumberContext.Provider
        value={{
            numberP: number,
            updateNumberP: updateNumber
        }}>
            {children}
        </NumberContext.Provider>
    )
}