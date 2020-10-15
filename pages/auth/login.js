import MasterPage from "components/page/MasterPage";
import resource from "plugins/assets/resource";
import CONFIG from "web.config";
import FullScreenLayout from "components/layout/FullscreenLayout";
import { FormLogin } from "components/FormLogin/FormLogin";
// import ApiCall from "modules/ApiCall";
import Axios from "axios";
import { Button, notification, Space } from "antd";
// context
import MainContentProvider from "contexts/MainContentContext"
import HeaderProvider from "contexts/HeaderContext";
//
export async function getServerSideProps(context) {
  // const params = context.params;
  // const query = context.query;
  // context.req.session ,
  // context.res

  console.log("SERVER CODE");

  var json = { data: [1, 2, 3, 4, 5] };

  return {
    props: {
      // params
      // query
    },
  };
}

export default function Home(props) {
  // console.log(props.query);
  if (typeof window == "undefined") {
    console.log("This code is on server-side");
  }

  const openNotificationWithIcon = (type = "success", message, description) => {
    notification[type]({
      message: message || "Success",
      description: description || ""
    });
  };

  // post email, password
  const postHandler = async (data) => {
    let res = await Axios({
        url: `/api/auth/login`,
        method: 'POST',
        data: data,
    });
    if(res){
      console.log(res);
    }
  }
  
  const handleLogin = (email, password) => {
    openNotificationWithIcon("success", "Login success", email)
    postHandler({email, password});
    console.log("login", email);
  }
  return (
    <MasterPage>
      <MainContentProvider>
        <FullScreenLayout>
          <HeaderProvider>
            <FormLogin
              method="POST"
              nameForm="Sign in"
              styleFrom="illustration"
              type="signin"
              action="http://localhost:3030/api/login"
              handleOutSide={handleLogin}
            ></FormLogin>
          </HeaderProvider>
        </FullScreenLayout>
      </MainContentProvider>
    </MasterPage>
  );
}
