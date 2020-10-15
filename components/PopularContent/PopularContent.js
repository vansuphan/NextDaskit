import { useState, useEffect, useRef, useReducer } from "react";
import { Row, Col, Card, CardHeader, CardBody, Button, ButtonOutline, Avatar } from "components";

const fakeData = [
    {
        "id": 100,
        "pageTitle": "ABC Del Castello",
        "pageViews": 235,
        "pageViewsPercent": 23.4,
        "TimePage": "10:17 AM"
        
    },
{
    "id": 2,
    "pageTitle": "Zonnya Del Castello",
    "pageViews": 235,
    "pageViewsPercent": 23.4,
    "TimePage": "10:17 AM"
    
},{
"id": 1,
"pageTitle": "Lorrie Aish",
"pageViews": 173,
"pageViewsPercent": 57.8,
"TimePage": "12:07 AM"
},{
    "id": 3,
    "pageTitle": "Matty Mault",
    "pageViews": 387,
    "pageViewsPercent": 60.4,
    "TimePage": "2:38 PM"
}, {
    "id": 5,
    "pageTitle": "Ruby Langman",
    "pageViews": 89,
    "pageViewsPercent": 58.9,
    "TimePage": "4:11 PM"
}, {
    "id": 4,
    "pageTitle": "Hilario Pippard",
    "pageViews": 401,
    "pageViewsPercent": 83.2,
    "TimePage": "10:02 PM"
}, {
    "id": 6,
    "pageTitle": "Frannie Goolding",
    "pageViews": 183,
    "pageViewsPercent": 15.9,
    "TimePage": "9:18 AM"
}, {
    "id": 7,
    "pageTitle": "Jarad Calterone",
    "pageViews": 222,
    "pageViewsPercent": 80.8,
    "TimePage": "9:03 AM"
}, {
    "id": 8,
    "pageTitle": "Tann Dallmann",
    "pageViews": 194,
    "pageViewsPercent": 26.0,
    "TimePage": "8:36 AM"
}, {
    "id": 9,
    "pageTitle": "Kay Killough",
    "pageViews": 386,
    "pageViewsPercent": 78.7,
    "TimePage": "8:05 AM"
}]
const typeData = Object.keys(fakeData[0])
const keySort = {
    ID:"id",
    PAGE_TITLE:"pageTitle",
    PAGE_VIEWS: "pageViews",
    PAGE_VIEWS_PERCENT: "pageViewsPercent",
    TIME:"TimePage"
}
const sortString = ( a, b, keyAB, type="up" )=>{
    var stringA = a[keyAB]; 
    var stringB = b[keyAB]; 
    if(type === "up"){
        if ( stringA < stringB ){
            return -1;
        }
        if ( stringA > stringB ){
            return 1;
        }
        return 0;
    }else{
        if ( stringA < stringB ){
            return 1;
        }
        if ( stringA > stringB ){
            return -1;
        }
            return 0;
        }
    
}

export default function PopularContent() {

    const initialState = fakeData;
    function init(initialData) {
        return initialData;
    }
    const [dataAPI, setDataAPI] = useState([]);
    
    const sortUp = (value) => {
        var newData = [...dataAPI];
        // console.log("UP_state", value);
        switch (value.payload) {
            case keySort.ID:
                newData.sort((a,b)=>a[keySort.ID]-b[keySort.ID])
                setDataAPI(newData)
                break;
            case keySort.PAGE_TITLE:
                newData.sort((a,b)=>sortString(a,b,keySort.PAGE_TITLE, value.type))
                setDataAPI(newData)
                break;
            case keySort.PAGE_TITLE:
                newData.sort((a,b)=>a[keySort.PAGE_TITLE]-b[keySort.PAGE_TITLE])
                setDataAPI(newData)
                console.log(newData)
                break;
            case keySort.PAGE_VIEWS:
                newData.sort((a,b)=>a[keySort.PAGE_VIEWS]-b[keySort.PAGE_VIEWS])
                setDataAPI(newData)
                break;
            case keySort.PAGE_VIEWS_PERCENT:
                newData.sort((a,b)=>a[keySort.PAGE_VIEWS_PERCENT]-b[keySort.PAGE_VIEWS_PERCENT])
                setDataAPI(newData)
                break;
            case keySort.TIME:
                break;
            default:
                break;
        }
    }

    const sortDown = (value) => {
        var newData = [...dataAPI];
        // console.log("UP_state", value);
        switch (value.payload) {
            case keySort.ID:
                newData.sort((a,b)=>b[keySort.ID]-a[keySort.ID])
                setDataAPI(newData)
                break;
            case keySort.PAGE_TITLE:
                newData.sort((a,b)=>sortString(a,b,keySort.PAGE_TITLE,value.type));
                console.log(newData)
                setDataAPI(newData)
                break;
            case keySort.PAGE_VIEWS:
                newData.sort((a,b)=>b[keySort.PAGE_VIEWS]-a[keySort.PAGE_VIEWS])
                setDataAPI(newData)
                break;
            case keySort.PAGE_VIEWS_PERCENT:
                newData.sort((a,b)=>b[keySort.PAGE_VIEWS_PERCENT]-a[keySort.PAGE_VIEWS_PERCENT])
                setDataAPI(newData)
                break;
            
            case keySort.TIME:
                break;
            default:
                break;
        }
    }

    function reduce(state, action){
        switch (action.type){
            case "up":
                // console.log("UP", state)
                return sortUp(action);
            case "down":
                // console.log("DOWN", state)
                return sortDown(action);
            default:
                break;
        }   
    }
    const [state, dispatch] = useReducer(reduce, initialState, init);
    
    useEffect(() => {
       setDataAPI(fakeData);
       init(initialState)
    }, []);

    // useEffect(() => {
    //     console.log("dataAPI-", dataAPI);
    // }, [dataAPI]);

    function handleSort(type, payload){
        if(type==="up"){
            return dispatch({type:'up', payload: payload})
        }else{
            if(type==="down"){
                return dispatch({type:'down',  payload: payload})
            }
        }
    }

    return (
        <>
            <Col xs={10}>
                <Card className="">
                    <CardHeader>
                        <h4 className={`card-header-title `} style={{ marginTop: "auto", marginBottom: "auto" }}>Popular Content</h4>
                        <ButtonOutline variant="blue" text={"Export"}></ButtonOutline>
                    </CardHeader>
                    <CardBody style={{ backgroundColor: "#f9fbfd" }}>
                        <Row style={{ marginLeft: "0px", marginRight: "auto" }}>
                            <Col md={2}>
                                <Row>
                                    <span>PAGE TITLE</span>
                                    <Sort
                                        typeSort={keySort.PAGE_TITLE}
                                        sortUpGlobal={handleSort}
                                        sortDownGlobal={handleSort}
                                    ></Sort>
                                </Row>
                            </Col>
                            <Col md={2}>
                                <Row>
                                    <span
                                        style={{ margin: "auto"}}
                                    >Popular Content</span>
                                    <Sort
                                        typeSort={keySort.PAGE_VIEWS}
                                        sortUpGlobal={handleSort}
                                        sortDownGlobal={handleSort}
                                    ></Sort>
                                </Row>
                            </Col>
                            <Col md={2}>
                                <Row>
                                    <span
                                     style={{ margin: "auto"}}
                                    >Popular Content</span>
                                    <Sort
                                        typeSort={keySort.PAGE_VIEWS_PERCENT}
                                        sortUpGlobal={handleSort}
                                        sortDownGlobal={handleSort}
                                    ></Sort>
                                </Row>
                            </Col>
                            <Col md={2}>
                                <Row>
                                    <span
                                         style={{ margin: "auto"}}
                                    >Popular Content</span>
                                    <Sort
                                        typeSort={keySort.PAGE_VIEWS_PERCENT}
                                        sortUpGlobal={handleSort}
                                        sortDownGlobal={handleSort}
                                    ></Sort>
                                </Row>
                            </Col>
                            <Col md={1}>
                                <Row>
                                    <span style={{ marginLeft: "auto" }}>
                                        Popular
                                    </span>
                                    <Sort></Sort>
                                </Row>
                            </Col>
                        </Row>

                    </CardBody>
                    
                    <CardBody style={{padding: "15px 24px 24px 24px"}}>
                        {dataAPI.length !== 0 ? dataAPI.map((value, index)=>(
                            <Row key={index} style={{ marginLeft: "0px", marginRight: "auto", padding: "10px 0" }}>
                            <Col md={2}>
                                <Row>
                                    <span>{value.pageTitle}</span>
                                </Row>
                            </Col>
                            <Col md={2}>
                                <Row>
                                    <span
                                        style={{ margin: "auto"}}
                                    >{value.pageViews}</span>
                                </Row>
                            </Col>
                            <Col md={2}>
                                <Row>
                                    <span
                                         style={{ margin: "auto"}}
                                    >{value.pageViewsPercent}</span>
                                </Row>
                            </Col>
                            <Col md={2}>
                                <Row>
                                    <span
                                         style={{ margin: "auto"}}
                                    >{value.TimePage}</span>
                                </Row>
                            </Col>
                            <Col md={1}>
                                <Row>
                                    <span style={{ marginLeft: "auto" }}>
                                        Popular
                                    </span>
                                </Row>
                            </Col>
                        </Row>
                            )):(<></>)
                        }
                    </CardBody>
                    
                </Card>

            </Col>
        </>
    )
}
export function Sort({
    sortUpGlobal, 
    sortDownGlobal,
    typeSort="",
}){
    const [type, setType] = useState(typeSort);
    // useEffect(() => {
    //     setType(typeSort);
    // }, [type]);
    const sortUp = ()=>sortUpGlobal ? sortUpGlobal("up",type) : null
    const sortDown = ()=> sortDownGlobal ? sortDownGlobal("down",type) : null
    return (
        <div className="sort-data">
            <p onClick={sortUp}><img src={"../images/ar-ft.png"}/></p>
            <p onClick={sortDown}><img src={"../images/ar-ft.png"}/></p>
            <style jsx>{`
                p{
                    margin : 0;
                    img{
                        width: 8px
                    }
                }
                   
                .sort-data{
                    margin: 0 5px;
                    display: flex;
                    flex-direction: column;
                    justify-content:center;
                    align-items: center;
                    cursor: pointer;
                    left: 100%;
                    p{
                        opacity: 0.5;
                        margin: 2px;
                        &:hover{
                            opacity: 1;
                        }
                    }
                }
                .sort-data>p:first-child{
                    transform: rotate(180deg);
                }
            `}</style>
        </div>
    )
}