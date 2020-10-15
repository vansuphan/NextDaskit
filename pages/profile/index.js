import MasterPage from "components/page/MasterPage";
import resource from "plugins/assets/resource";
import CONFIG from "web.config";
import FullScreenLayout from "components/layout/FullscreenLayout";
import { Input } from "components/input/Input";
import { Tabs, TabsContent, TabsName } from "components/tabs/Tabs";
import BasicLayout from "components/layout/BasicLayout";
// context
import MainContentProvider from "contexts/MainContentContext"
import HeaderProvider from "contexts/HeaderContext";
import { useEffect, useState } from "react";
//

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://localhost:3000/api/users/profile')
    const data = await res.json()

    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            data,
        },
    }
}

export default function Profile({ ...dataPages }) {
    // console.log(props.query);
    if (typeof window == "undefined") {
        console.log("This code is on server-side");
    }

    const [indexTab, setIndexTab] = useState(null)
    const [data, setData] = useState(null);

    function handleChangeTab(index) {
        console.log(index);
        setIndexTab(index);
    }

    useEffect(() => {
        setData(dataPages.data.data.list[0]);
        console.log("111", data)
    },[]);
    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <MasterPage>
            <MainContentProvider>
                <BasicLayout>
                    <HeaderProvider>
                        <div>
                            <div>
                                <h5>OVERVIEW</h5>
                                <h1>Account</h1>
                            </div>
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
                                        <div className="list-items-input" style={{ width: "500px", height: "auto" }}>
                                            <div className="item">
                                                <Input
                                                    label="Your avatar"
                                                    description="PNG or JPG no bigger than 1000px wide and tall."
                                                    typeInput="avatar"
                                                    widthInput="50px"
                                                    heightInput="50px"
                                                    borderRadius="100%"
                                                    placeholder="Upload"
                                                >
                                                <hr style={{margin: "20px 0"}}></hr>
                                                </Input>
                                                <Input
                                                    label="Họ tên"
                                                    value={data !== null ? data.name : ""}
                                                    placeholder="Input name..."
                                                    borderRadius="2px"
                                                    typeInput="text">
                                                </Input>
                                                <Input
                                                    description=""
                                                    label="Email"
                                                    value={data !== null ? data.email : ""}
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
                                                    dataOption={["Developer", "Tester", "Designer"]}
                                                    label="Nhóm nhân viên"
                                                    value="Developer"
                                                    typeInput="selection"
                                                ></Input>
                                                <input type="submit" value="Save changes"/>
                                                <div className="">
                                                    <div>
                                                        <h3>Public profile</h3>
                                                        <span>Making your profile public means that anyone on the Dashkit network will be able to find you.</span>
                                                        <div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
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
                                        <div className="list-items-input" style={{ width: "400px", height: "auto" }}>
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
                                <TabsContent
                                    flexDirection="column"
                                    alignItems="flex-start"
                                    justifyContent="center"
                                    background="white">
                                    <form action="profile" method="POST">
                                        <div className="list-items-input" style={{ width: "400px", height: "auto" }}>
                                            <div className="item">
                                                <Input
                                                    label="Họ tên 3"
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
                                                    name="role"
                                                    label="Nhóm nhân viên"
                                                    typeInput="tag"
                                                    description="Input selection tag"
                                                ></Input>
                                            </div>
                                        </div>
                                    </form>

                                </TabsContent>

                            </Tabs>

                        </div>

                    </HeaderProvider>
                </BasicLayout>
            </MainContentProvider>
        </MasterPage>
    );
}
