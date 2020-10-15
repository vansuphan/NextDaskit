

import GrandMasterPage from "components/page/GrandMasterPage";
import BasicLayout from "components/layout/BasicLayout";
import { DropdownCates, DropdownButton, DropdownContent } from 'components/DropDown/DropDownCates';
import { Container, Row, Col, Card, CardHeader, CardBody, Button, ButtonOutline, Avatar } from "components/PopularContent/node_modules/components";
import asset from "plugins/assets/asset";
import Alert from "components/Alerts/Alerts";
import withAuth from 'components/page/withAuth';
import AutoTextArea from 'components/AutoTextArea/AutoTextArea';
import Avatar2 from 'components/Avatar/Avatar2';
function ComponentsPage(props) {

    return (

        <GrandMasterPage className="root" id="caidm">

            {/* override default css by using global selector */}
            <style jsx global>{`                 
                #caidm .card.custom-card {
                    background-color: blue;
                }
            `}</style>
            <BasicLayout>
                <Container>
                    <Row>
                        <Col xs={10}><h2>Containers</h2></Col>
                        <Container >
                            <div style={{
                                background: "pink",
                                padding: "0 10px"
                            }}>
                                <h4>Default container</h4>
                            </div>
                        </Container>
                        <br />
                        <Container
                            fluid
                        >
                            <div style={{ background: "hotpink", padding: "0 10px" }}>
                                <h4 >Fluid container</h4>
                            </div>
                        </Container>
                    </Row>

                    <Row
                        justify="flex-start"
                        gutter={30}
                    >
                        <Col xs={10}><h2>Grid System</h2></Col>
                        <Col xs={1} style={{ background: "aliceblue " }}> <p>one</p> </Col>
                        <Col xs={2} className="" style={{ background: "cyan" }}> <p>two</p> </Col>
                        <Col xs={3} className="" style={{ background: "cornflowerblue" }}> <p>three</p> </Col>
                        <Col xs={4} className="" style={{ background: "blue" }}> <p>four</p> </Col>
                    </Row>

                    <Row>
                        <Col xs={10}><h2>Buttons</h2></Col>
                        <Col xs={10}>
                            <Button>Default Button</Button>
                            <ButtonOutline
                                text="Outline Button"
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={10}><h2>Card</h2></Col>
                        <Col xs={10}>
                            <Card className="custom-card">
                                <CardHeader>
                                    <h3>Header</h3>
                                </CardHeader>

                                <CardBody>
                                    card Body content.
                                </CardBody>
                                <div className="card-footer">
                                    card Footer.
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={8}></Col>
                    </Row>
                    <Row>
                        <Col xs={10}><h2>Alert</h2></Col>
                        <Col xs={10}>
                            <Card className="">
                                <CardBody style={{paddingBottom:"10px"}}>
                                    <Alert className={"primary"}>
                                        A simple primary alert—check it out!
                                    </Alert>
                                </CardBody>
                                <CardBody style={{paddingTop:"10px", paddingBottom:"10px"}}>
                                    <Alert className={"danger"}>
                                        A simple danger alert—check it out!
                                    </Alert>
                                </CardBody>
                                <CardBody style={{paddingTop:"10px", paddingBottom:"10px"}}> 
                                    <Alert 
                                    className={"secondary"}>
                                        A simple secondary alert—check it out!
                                        <hr/>
                                        <p>Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                                    </Alert>
                                </CardBody>
                                <CardBody style={{paddingTop:"10px", paddingBottom:"10px"}}>
                                    <Alert 
                                    closeIcon={true}
                                    className={"warning"}>
                                        A simple warning alert—check it out!
                                    </Alert>
                                </CardBody>
                                <CardBody style={{paddingTop:"10px", paddingBottom:"10px"}}>
                                    <Alert 
                                    closeIcon={true}
                                    className={"info"}>
                                        A simple info alert—check it out!
                                    </Alert>
                                </CardBody>
                                <CardBody style={{paddingTop:"10px", paddingBottom:"10px"}}>
                                    <Alert 
                                    closeIcon={true}
                                    className={"success"}>
                                        A simple info alert—check it out!
                                    </Alert>
                                </CardBody>
                                <CardBody style={{paddingTop:"10px", paddingBottom:"10px"}}>
                                    <Alert 
                                    closeIcon={true}
                                    className={"light"}>
                                        A simple light alert—check it out!
                                    </Alert>
                                </CardBody>
                                <CardBody style={{paddingTop:"10px"}}>
                                    <Alert 
                                    closeIcon={true}
                                    className={"dark"}>
                                        A simple dark alert—check it out!
                                    </Alert>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col xs={10}><h2>Autosize</h2></Col>
                        <Col xs={10}>
                            <Card className="">
                                <CardBody style={{paddingTop:"10px", paddingBottom:"10px"}}>
                                    <AutoTextArea
                                        label="Auto Text Area default"
                                    >
                                    </AutoTextArea>
                                </CardBody>
                                <CardBody style={{paddingTop:"10px", paddingBottom:"10px"}}>
                                    <AutoTextArea
                                        label="Auto Text Area custom"
                                        color={"red"}
                                        backgroundColor={"snow"}
                                        text="A small, stand-alone script to automatically adjust textarea height."
                                    >
                                    </AutoTextArea>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10}><h2>Avatar</h2></Col>
                        <Col xs={10}><h3>Sizing</h3></Col>
                        <Col xs={10}>
                            <Card>
                                <CardBody>
                                    <Avatar2
                                        size={"xxl"}
                                    ></Avatar2>
                                    <Avatar2
                                        size={"xl"}
                                    ></Avatar2>
                                    <Avatar2
                                        size={"lg"}
                                    ></Avatar2>
                                    <Avatar2
                                      
                                    ></Avatar2>
                                    <Avatar2
                                        size={"sm"}
                                    ></Avatar2>
                                    <Avatar2
                                        size={"xs"}
                                    ></Avatar2>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10}><h2>Avatar</h2></Col>
                        <Col xs={10}><h3>Status Indicator</h3></Col>
                        <Col xs={10}>
                            <Card>
                                <CardBody>
                                    <Avatar2
                                        hasStatus={true}
                                        size={"xxl"}
                                    ></Avatar2>
                                    <Avatar2
                                        hasStatus={true}
                                        online={true}
                                        size={"xl"}
                                    ></Avatar2>
                                    <Avatar2
                                        hasStatus={true}
                                        size={"lg"}
                                    ></Avatar2>
                                    <Avatar2
                                        hasStatus={true}
                                        online={true}
                                    ></Avatar2>
                                    <Avatar2
                                        hasStatus={true}
                                        online={true}
                                        size={"sm"}
                                    ></Avatar2>
                                    <Avatar2
                                        hasStatus={true}
                                        online={true}
                                        size={"xs"}
                                    ></Avatar2>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10}><h2>Avatar</h2></Col>
                        <Col xs={10}><h3>Shape</h3></Col>
                        <Col xs={10}>
                            <Card>
                                <CardBody>
                                    <Avatar2
                                        shape={"rounded"}
                                        size={"xxl"}
                                    ></Avatar2>
                                    <Avatar2
                                        shape={"rounded-circle"}
                                        size={"xl"}
                                    ></Avatar2>
                                    <Avatar2
                                        shape={"rounded"}
                                        size={"lg"}
                                    ></Avatar2>
                                    <Avatar2
                                        shape={"rounded-circle"}
                                    ></Avatar2>
                                    <Avatar2
                                        shape={"rounded"}
                                        size={"sm"}
                                    ></Avatar2>
                                    <Avatar2
                                        shape={"rounded-circle"}
                                        size={"xs"}
                                    ></Avatar2>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10}><h2>Avatar</h2></Col>
                        <Col xs={10}><h3>Ratio</h3></Col>
                        <Col xs={10}>
                            <Card>
                                <CardBody>
                                    <Avatar2
                                        ratio={true}
                                        shape={"rounded"}
                                        size={"xxl"}
                                    ></Avatar2>
                                    <Avatar2
                                        ratio={true}
                                        shape={"rounded"}
                                        size={"xl"}
                                    ></Avatar2>
                                    <Avatar2
                                        ratio={true}
                                        shape={"rounded"}
                                        size={"lg"}
                                    ></Avatar2>
                                    <Avatar2
                                        ratio={true}
                                        shape={"rounded"}
                                    ></Avatar2>
                                    <Avatar2
                                        ratio={true}
                                        shape={"rounded"}
                                        size={"sm"}
                                    ></Avatar2>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10}><h2>Avatar</h2></Col>
                        <Col xs={10}><h3>Initials</h3></Col>
                        <Col xs={10}>
                            <Card>
                                <CardBody>
                                    <Avatar2
                                        initials={true}
                                        initialsName={"PS"}
                                        shape={"rounded-circle"}
                                        size={"xxl"}
                                    ></Avatar2>
                                    <Avatar2
                                        initials={true}
                                        shape={"rounded-circle"}
                                        size={"xl"}
                                    ></Avatar2>
                                    <Avatar2
                                        initials={true}
                                        shape={"rounded-circle"}
                                        size={"lg"}
                                    ></Avatar2>
                                    <Avatar2
                                        initials={true}
                                        shape={"rounded-circle"}
                                    ></Avatar2>
                                    <Avatar2
                                        initials={true}
                                       
                                        shape={"rounded-circle"}
                                        size={"sm"}
                                    ></Avatar2>
                                    <Avatar2
                                        initials={true}
                                        shape={"rounded-circle"}
                                        size={"xs"}
                                    ></Avatar2>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10}><h2>Avatar</h2></Col>
                        <Col xs={10}><h3>Group</h3></Col>
                        <Col xs={10}>
                            <Card>
                                <CardBody>
                                    <Avatar2 typeGroup={true}>
                                        <Avatar2
                                            shape={"rounded-circle"}
                                            size={"lg"}
                                        ></Avatar2>
                                        <Avatar2
                                           
                                            shape={"rounded-circle"}
                                            size={"lg"}
                                        ></Avatar2>
                                        <Avatar2
                                            shape={"rounded-circle"}
                                            size={"lg"}
                                        ></Avatar2>
                                        <Avatar2
                                            shape={"rounded-circle"}
                                            size={"lg"}
                                        ></Avatar2>
                                        <Avatar2
                                            initials={true}
                                            shape={"rounded-circle"}
                                            size={"lg"}
                                        ></Avatar2>
                                    </Avatar2>
                                </CardBody>
                                <CardBody>
                                    <Avatar2 typeGroup={true}>
                                        <Avatar2
                                            shape={"rounded-circle"}
                                        ></Avatar2>
                                        <Avatar2
                                            shape={"rounded-circle"}
                                        ></Avatar2>
                                        <Avatar2
                                            shape={"rounded-circle"}
                                        ></Avatar2>
                                        <Avatar2
                                            shape={"rounded-circle"}
                                        ></Avatar2>
                                        <Avatar2
                                            initials={true}
                                            shape={"rounded-circle"}
                                        ></Avatar2>
                                    </Avatar2>
                                </CardBody>
                                <CardBody>
                                    <Avatar2 typeGroup={true}>
                                        <Avatar2
                                            shape={"rounded-circle"}
                                            size={"xs"}
                                        ></Avatar2>
                                        <Avatar2
                                            shape={"rounded-circle"}
                                            size={"xs"}
                                        ></Avatar2>
                                        <Avatar2
                                            shape={"rounded-circle"}
                                            size={"xs"}
                                        ></Avatar2>
                                        <Avatar2
                                            initials={true}
                                            initialsName={"PS"}
                                            shape={"rounded-circle"}
                                            size={"xs"}
                                        ></Avatar2>
                                    </Avatar2>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </BasicLayout>
        </GrandMasterPage>
    );
}


export default withAuth(["PRIVATE"])(ComponentsPage);