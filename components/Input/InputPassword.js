export default function InputPassword(props) {
  return (
    <div>
        <lable>{props.lable|| ""}</lable>
        <input type="password" placeholder={props.placeholder||""} value={props.initValue}></input>
    </div>
  );
}