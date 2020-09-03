import MasterPage from "components/page/MasterPage";
import resource from "plugins/assets/resource";
import CONFIG from "web.config";
import BasicLayout from "components/layout/BasicLayout";
import ChartCol from "components/charts/Conversions/index";
// import RecentActive from "components/recentActive/recentActive";
import {InputSearch} from "components/search/Search";
import {Tabs} from "components/tabs/Tabs";

// context
import MainContentProvider from "contexts/MainContentContext"
import HeaderProvider from "contexts/HeaderContext";
import MenuTop from "components/menu/MenuTop";
//

const dataTest = [
  {
      title:"Hello guy",
      textContent: "It's a broader card with text below as a natural lead-in to extra content.",
      timer: 1, 
  },
  {
    title: "Alphazap",
    textContent: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    timer: 65
  }, {
    title: "Voyatouch",
    textContent: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    timer: 59
  }, {
    title: "Lotlux",
    textContent: "Fusce consequat. Nulla nisl. Nunc nisl.",
    timer: 17
  }
]

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
            <MenuTop></MenuTop>
            <br></br>
            <div style={{width: "auto"}}>
              <InputSearch
                width={"300px"}
                height={"40px"}
                type="mini"
                data={dataTest}
              ></InputSearch>
            </div>
              <div style={{width: "300px", height:"300px"}}>
                <Tabs></Tabs>
              </div>
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
