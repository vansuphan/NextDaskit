import MasterPage from "components/page/MasterPage";
import resource from "plugins/assets/resource";
import CONFIG from "web.config";
import BasicLayout from "components/layout/BasicLayout";
import Navigation from "components/Navigation/Navigation";
import NotifyBell from "components/bellNotify/BellNotify";
import ChartCol from "components/charts/Conversions/index";
import SwitchButton from "components/button/SwitchButton";
import Search from "components/search/Search";
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
        <h1>Template</h1>
        <hr />
        <Navigation></Navigation>
        <p>Something goes here.</p>
        <div>
          <NotifyBell
            notifyNumber={"hihihiads"}>
          </NotifyBell>
          <Search></Search>
          <br></br>
          <SwitchButton></SwitchButton>
          <br></br>
          <ChartCol></ChartCol>
        </div>
      </BasicLayout>
    </MasterPage>
  );
}
