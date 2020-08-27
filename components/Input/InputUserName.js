import {useState} from "react"

function InputUserName(props) {
    var [ className, setClassName] = useState("");
    if(props.className){
        setClassName = props.className;
    }
    return (
      <>
        <div className={className + " containerForm"}>
            <label htmlFor={props.id}>{props.label|| ""}</label>
            <input id={props.id} type="text" placeholder={props.placeholder||""} value={props.initValue} required></input>
        </div>
          
        <style jsx>
            {`
                label{
                    
                }
                .containerForm{
                    display: flex;
                    flex-direction: ${props.display || "column"};
                }
            `}
        </style>
      </>
    );
  }
export default InputUserName