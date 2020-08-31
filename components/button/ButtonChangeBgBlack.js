import {useContext} from "react";
import {MainContentContext} from "contexts/MainContentContext";
export default function ButtonChangeBg({ children, onClick }) {
    const contexts = useContext(MainContentContext)
  return (
    <button onClick={contexts.setBgBlack}>
      Background Black
    </button>
  );
}
