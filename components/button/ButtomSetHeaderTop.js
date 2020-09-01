import {useContext} from "react";
import {MainContentContext} from "contexts/MainContentContext";
export default function BtnSetHeaderTop({ children, onClick }) {
    const contexts = useContext(MainContentContext)
  return (
    <button onClick={contexts.setHeaderTop}>
      Header Top
    </button>
  );
}
