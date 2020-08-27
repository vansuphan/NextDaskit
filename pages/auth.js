import BlankMasterPage from "components/page/BlankMasterPage";
import resource from "plugins/assets/resource";
import CONFIG from "web.config";
import LoginForm from "components/LoginForm/LoginForm";
export async function getServerSideProps(context) {
  console.log("SERVER CODE");
  return {
    props: {
      // params
      // query
    },
  };
}

export default function Home(props) {
  console.log(props.query);
  // console.log(CONFIG);

  if (typeof window == "undefined") {
    console.log("This code is on server-side");
  }

  return (
    <BlankMasterPage>
        <LoginForm></LoginForm>
    </BlankMasterPage>
  );
}
