import MasterPage from "components/page/MasterPage";
import resource from "plugins/assets/resource";
import CONFIG from "web.config";
import BasicLayout from "components/layout/BasicLayout";
import Navigation from "components/Navigation/Navigation";
import NotifyBell from "components/bellNotify/BellNotify";
import ChartCol from "components/charts/Conversions/index";
import SwitchButton from "components/button/SwitchButton";
import Search from "components/search/Search";
import Popup from "components/popup/Popup";

import RandomNumber from "components/RamdomNumber";
import Context from "contexts/NumberContext";

import Header from "components/header/Header";
import TemplateContext from "contexts/TemplateContext";

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
      <BasicLayout padding="50px">
      <TemplateContext>
        <h1>Template</h1>
        <hr />
        <Navigation></Navigation>
        <p>Something goes here.</p>
        <div>
         
            <Header>
              <span> children he</span>
            </Header>
          
          <NotifyBell
            notifyNumber={"hihihiads"}>
          </NotifyBell>
          <Search></Search>
          <br></br>
          <SwitchButton></SwitchButton>
          <br></br>
            <Popup
              isVisible = {true}
            >
              <span>Children Popup</span>
            </Popup>
          <br></br>
          <br/>

          <Context>
             <RandomNumber> hehee </RandomNumber>
          </Context>
          
          <ChartCol></ChartCol>
        </div>
        </TemplateContext>
      </BasicLayout>
    </MasterPage>
  );
}
