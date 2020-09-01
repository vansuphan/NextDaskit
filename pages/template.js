import MasterPage from "components/page/MasterPage";
import resource from "plugins/assets/resource";
import CONFIG from "web.config";
import BasicLayout from "components/layout/BasicLayout";
import NotifyBell from "components/bellNotify/BellNotify";
import ChartCol from "components/charts/Conversions/index";
import SwitchButton from "components/button/SwitchButton";
import Search from "components/search/Search";
import Popup from "components/popup/Popup";
import menu from "components/menu/MenuLeft";

// context
import MainContentProvider from "contexts/MainContentContext"
import HeaderProvider from "contexts/HeaderContext";
import Menu from "components/menu/MenuLeft";
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
      <BasicLayout>
        <HeaderProvider>
          <h1>Template</h1>
          <hr />
          <p>Something goes here.</p>
          <div>
            <br></br>
              <Popup
                isVisible = {true}
              >
                <span>Children Popup</span>
              </Popup>
            <br></br>
            <br/>
            <ChartCol></ChartCol>
          </div>
        </HeaderProvider>
      </BasicLayout>
      </MainContentProvider>
    </MasterPage>
  );
}
