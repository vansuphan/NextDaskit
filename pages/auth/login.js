import MasterPage from "components/page/MasterPage";
import resource from "plugins/assets/resource";
import CONFIG from "web.config";
import FullScreenLayout from "components/layout/FullscreenLayout";
import {FormLogin} from "components/FormLogin/FormLogin";

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

  return (
    <MasterPage>
      <MainContentProvider>
      <FullScreenLayout>
        <HeaderProvider>
            <FormLogin
              method="POST"
              nameForm="Sign in"
              type="signin"
              action="api/login"
            ></FormLogin>
        </HeaderProvider>
      </FullScreenLayout>
      </MainContentProvider>
    </MasterPage>
  );
}
