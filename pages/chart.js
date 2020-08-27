import MasterPage from "components/page/MasterPage";
import resource from "plugins/assets/resource";
import CONFIG from "web.config";
import BasicLayout from "components/layout/BasicLayout";
// import CircleChart from "../components/charts/CircleChart";
export async function getServerSideProps(context) {
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
  console.log(props.query);
  // console.log(CONFIG);

  if (typeof window == "undefined") {
    console.log("This code is on server-side");
  }

  return (
    <MasterPage>
      <BasicLayout padding="50px">
        {/* <CircleChart></CircleChart> */}
      </BasicLayout>
    </MasterPage>
  );
}
