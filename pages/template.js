import MasterPage from "components/page/MasterPage";
import resource from "plugins/assets/resource";
import CONFIG from "web.config";
import BasicLayout from "components/layout/BasicLayout";
import ChartCol from "components/charts/Conversions/index";
// import RecentActive from "components/recentActive/recentActive";

// context
import MainContentProvider from "contexts/MainContentContext"
import HeaderProvider from "contexts/HeaderContext";
import MenuTop from "components/menu/MenuTop";
import {Input} from "components/input/Input"

//

// list component
import {InputSearch} from "components/search/Search";
import {Tabs, TabsContent, TabsName} from "components/tabs/Tabs";
import {Selection,SelectItem} from "components/selection/Selection";
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
  // if (typeof window == "undefined") {
  //   console.log("This code is on server-side");
  // }

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
              <div style={{width: "300px", height:"auto"}}>
                <Tabs
                  tabsName={["Tab 1", "Tab 2", "Tab 3"]}
                  tabActive={1}
                  widthTab="70px"
                  tabsDirection="row"
                  tabNameDirection="column"
                  >
                  
                  <TabsContent
                  flexDirection="column"
                  alignItems="flex-end"
                  justifyContent="center"
                  >
                    <h3>Hello Word !</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor sodales eros in tincidunt. Aenean at dolor eleifend, blandit eros a, varius ligula. Nulla purus neque, ornare vitae nulla a, pretium rhoncus elit. Sed aliquam libero a tortor ornare bibendum. Morbi venenatis quis nunc hendrerit convallis. Fusce sagittis ultrices nunc, ac fermentum justo tempus sagittis. Vivamus interdum venenatis blandit.</span>
                  </TabsContent>
                  <TabsContent
                  flexDirection="column"
                  alignItems="flex-start"
                  justifyContent="center"
                  >
                    <h3>Tab 2</h3>
                    <span>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla facilisi.</span>
                    </span>
                  </TabsContent>
                </Tabs>
              
              </div>
              <div style={{width: "300px", height:"auto"}}>

                <Input
                  label="Input text"
                  placeholder="Input"
                  heightInput="60px"
                  borderRadius="4px"
                  typeInput="text">  
                </Input>

                <Input
                  
                  label="Input password"
                  typeInput="password">  
                </Input>
                <Input
                  validate={true}
                  
                  label="Input password validate"
                  typeInput="password">  
                </Input>

                <Input
                  description="This contact will be shown to others publicly, so choose it carefully."
                  label="Input email"
                  widthInput="280px"
                  typeInput="email">
                </Input>
                 
                <Input
                  validate ={true}
                  label="Input email validate"
                  widthInput="280px"
                  typeInput="email"> 
                </Input>

                <Input
                  widthInput="280px"
                  label="Input number"
                  typeInput="number"> 
                   
                </Input>

                <Input
                  label="Input textarea"
                  placeholder="Input textarea"
                  heightInput="100px"
                  widthInput="280px"
                  borderRadius="4px"
                  typeInput="textarea"
                  description="This contact will be shown to others publicly, so choose it carefully."
                >
                </Input>
                <Input
                  label="Input Phone"
                  placeholder="0xx-xxx-xxxx"
                  heightInput="40px"
                  typeInput="phone"
                  widthInput="280px"
                >
                </Input>
                <Input
                  typeInput="quill"
                  label="Input quill"
                  description="Input Quill"
                  widthInput="280px"
                >
                </Input>

                <Input
                  label="Input calendar"
                  typeInput="calendar"
                  // description="Input Calender"
                  widthInput="280px"
                >
                </Input>

                <Input
                  label="Input selection"
                  typeInput="selection"
                  description="Input selection tag"
                  widthInput="280px"
                >
                </Input>
                <Input
                  label="Input images"
                  typeInput="image"
                  description="Please use an image no larger than 1200px * 600px."
                  widthInput="300px"
                  heightInput="200px"
                >
                </Input>
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
