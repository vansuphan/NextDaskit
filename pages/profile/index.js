import MasterPage from "components/page/MasterPage";
import resource from "plugins/assets/resource";
import CONFIG from "web.config";
import FullScreenLayout from "components/layout/FullscreenLayout";
import {Input} from "components/input/Input";
import {Tabs, TabsContent, TabsName} from "components/tabs/Tabs";
import BasicLayout from "components/layout/BasicLayout";
// context
import MainContentProvider from "contexts/MainContentContext"
import HeaderProvider from "contexts/HeaderContext";
import { useState } from "react";
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
    const [data, setData] = useState([]);
    setData[
        {
            id: 0,
        }
    ]
    function handleChangeTab(index) {

        console.log(index);

    }



  return (
    <MasterPage>
      <MainContentProvider>
      <BasicLayout>
        <HeaderProvider>
                <Tabs
                    tabsName={["General", "Billing", "Members", "Security", "Notifications"]}
                    tabActive={1}
                    onChange={handleChangeTab}
                    widthTab="auto"
                    tabsDirection="column"
                    tabNameDirection="row">
                    <TabsContent
                        flexDirection="column"
                        alignItems="flex-start"
                        justifyContent="center"
                        background="white">
                        <form action="profile" method="POST">
                            <div className="list-items-input" style={{width: "400px", height:"auto"}}>
                                <div className="item">
                                    <Input
                                        label="Họ tên"
                                        placeholder="Input name..."
                                        borderRadius="2px"
                                        typeInput="text">  
                                    </Input>
                                    <Input
                                        description=""
                                        label="Email"
                                        placeholder="Input email..."
                                        typeInput="email">
                                    </Input>
                                    <Input
                                        label="Mật khẩu"
                                        validate={true}
                                        placeholder="Input password..."
                                        typeInput="password">  
                                    </Input>
                                    <Input
                                        label="Nhập lại mật khẩu"
                                        placeholder="Input password..."
                                        typeInput="password">  
                                    </Input>
                                    <Input
                                        label="Input tag selection"
                                        typeInput="tag"
                                        description="Input selection tag"
                                    ></Input>
                                </div>
                            </div>
                        </form>
                        
                    </TabsContent>
                    <TabsContent
                        flexDirection="column"
                        alignItems="flex-start"
                        justifyContent="center"
                        background="white">
                        <form action="profile" method="POST">
                            <div className="list-items-input" style={{width: "400px", height:"auto"}}>
                                <div className="item">
                                    <Input
                                        label="Họ tên 2"
                                        placeholder="Input name..."
                                        borderRadius="2px"
                                        typeInput="text">  
                                    </Input>
                                    <Input
                                        description=""
                                        label="Email"
                                        placeholder="Input email..."
                                        typeInput="email">
                                    </Input>
                                    <Input
                                        label="Mật khẩu"
                                        validate={true}
                                        placeholder="Input password..."
                                        typeInput="password">  
                                    </Input>
                                    <Input
                                        label="Nhập lại mật khẩu"
                                        placeholder="Input password..."
                                        typeInput="password">  
                                    </Input>
                                    <Input
                                        label="Input tag selection"
                                        typeInput="tag"
                                        description="Input selection tag"
                                    ></Input>
                                </div>
                            </div>
                        </form>
                        
                    </TabsContent>
                </Tabs>
        
        </HeaderProvider>
      </BasicLayout>
      </MainContentProvider>
    </MasterPage>
  );
}
            