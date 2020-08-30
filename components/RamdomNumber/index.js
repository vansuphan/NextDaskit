import { NumberContext } from "contexts/NumberContext";
import { useContext } from "react";

export default function({children}){
    const {numberP, updateNumberP} = useContext(NumberContext);
    return(
        <div>
            <div>{numberP}</div>
            <button onClick={updateNumberP}>onClick</button>
            {children}
        </div>
    )
} 