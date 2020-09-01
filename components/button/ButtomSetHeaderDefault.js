import {useContext} from "react";
import {MainContentContext} from "contexts/MainContentContext";
export default function BtnSetHeaderDefault({ children, onClick }) {
    const contexts = useContext(MainContentContext)
  return (
    <button onClick={contexts.setHeaderDefault}>
      Header Default
    </button>
  );
}
