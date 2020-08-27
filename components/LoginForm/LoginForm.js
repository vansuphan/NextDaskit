// import style from "./LoginForm.module.scss";
import InputUserName  from "components/Input/InputUserName";
// import InputPassword from "components/Input/InputPassword"
export default function LoginForm() {
  return (
    <div>
      <form>
          <InputUserName
            label="ABC" 
            placeholder="username"
            TextColor={"white"}
            id="username"
            display="colum"
          >
          </InputUserName>
      </form>

    </div>
  );
}
