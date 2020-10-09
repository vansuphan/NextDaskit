import {useContext} from "react";
import {MainContentContext} from "contexts/MainContentContext";
export default function ButtonChangeBg({ children, onClick }) {
  
    const contexts = useContext(MainContentContext)
    console.log("Context",contexts)
  return (
    <button onClick={contexts.setBgWhite}>
      Background White
    </button>
  );
}
