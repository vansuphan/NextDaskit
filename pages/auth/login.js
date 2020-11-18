import MasterPage from "components/page/MasterPage";
import resource from "plugins/assets/resource";
import CONFIG from "web.config";
import FullScreenLayout from "components/layout/FullscreenLayout";
import { FormLogin } from "components/FormLogin/FormLogin";
import { useRouter } from "next/router";
import {useState} from "react";
import Preloader from "components/Preloader/Preloader";
// import ApiCall from "modules/ApiCall";
import Axios from "axios";
import { Button, notification, Space } from "antd";
// context
import MainContentProvider from "contexts/MainContentContext"
import HeaderProvider from "contexts/HeaderContext";
//
let global;
export async function getServerSideProps(context) {
  // const params = context.params;
  // const query = context.query;
  // context.req.session ,
  // context.res
  global = {...context}
  console.log("SERVER CODE");
  console.log("Session", context.headers)
  var json = { data: [1, 2, 3, 4, 5] };
  return {
    props: {
      // params
      // query
    },
  };
}

export default function Login(props) {
  // console.log("Client",global.headers);
  if (typeof window == "undefined") {
    console.log("This code is on server-side");
  }
  const router = useRouter();
  const [statusLoader, setStatusLoader] = useState(false);
  const openNotificationWithIcon = (type = "success", message, description) => {
    notification[type]({
      message: message || "Success",
      description: description || ""
    });
  };

  // post email, password
  const postHandler = async (data) => {
    setStatusLoader(true);
    let res;
    try {
      res = await Axios({
        url: `${CONFIG.getBasePath()}/api/login`,
        method: 'POST',
        data: data,
      });
      if(res.status === 200){
        openNotificationWithIcon("success",`${res.data.message}`, "");
        router.push("/")
        setStatusLoader(false);
      }else{
        openNotificationWithIcon("error", `${res.data.message}`, "Email or password not found!");
        setStatusLoader(false);
      }
    } catch (error) {
      openNotificationWithIcon("error", "Login false", "Email or password not found!");
      setStatusLoader(false)
      return error;
    }
  }

  const handleLogin = (email, password) => {
    postHandler({email, password});
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
              handleOutSide={handleLogin}
            ></FormLogin>
            <Preloader
                size="large"
                status={statusLoader}
                fullScreen={true}
            ></Preloader>
          </HeaderProvider>
        </FullScreenLayout>
      </MainContentProvider>
    </MasterPage>
  );
}
