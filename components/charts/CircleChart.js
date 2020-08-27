import React, { useState } from 'react'
import {  useDispatch, useStore } from 'react-redux'
// import { CTabs, CNavItem, CNavLink, CNav} from '@coreui/react'
// import "../coreui/coreui/scss/coreui";
// import { CChart } from '@coreui/react-chartjs'
import style from './CircleChart.module.scss'

const TrafficChannelChart = function (props) {
    const dispatch = useDispatch()
    var store = useStore();
    const data = {
        labels: [
          'Desktop',
          'Tablet',
          'Mobile',
        ],
        datasets: [
            [{
                data: [120, 50, 20],
                backgroundColor: [
                '#2C7BE5',
                '#D2DDEC',
                '#C4C4C4',
                ],
                hoverBackgroundColor: [
                '#2C7BE5',
                '#D2DDEC',
                '#C4C4C4',
                ],
                borderCapStyle: "round",
                lineTension: 0.5,
                strokeWidth: 2,
            }],
            [
                {
                    data: [20, 30, 50],
                    backgroundColor: [
                    '#2C7BE5',
                    '#D2DDEC',
                    '#C4C4C4',
                    ],
                    hoverBackgroundColor: [
                    '#2C7BE5',
                    '#D2DDEC',
                    '#C4C4C4',
                    ],
                    borderCapStyle: "round",
                    lineTension: 0.5,
                    strokeWidth: 2,
                }
            ]
            

        ],
    };
    
    const options={
        cutoutPercentage:85,
        strokeWidth: 2,
        weight:5,
        tooltips: {
            enabled: true,
            // custom: customTooltips
        },
        maintainAspectRatio: false,
        title: {
            display: false,
            // text: "hi su"
        },
        legend: {
            display: false,
            position: "bottom",
            cornerRadius: 100,
            legendShape:'Circle'
        },
        body: {
            borderColor:"#fff",
            lineColor:'#fff',
            backgroundColor: "rgba(255,255,255,0.2)",
            cornerRadius: 6,
        },
        tooltips: {
            backgroundColor: "rgba(255,255,255,1)",
            bodyAlign: "left",
            bodyFontColor: "#000",
            bodySpacing: 2,
            borderColor: 'rgba(48, 117, 227, 1)',
            borderWidth: 0.1,
            // callbacks: {beforeTitle: ƒ, title: ƒ, afterTitle: ƒ, beforeBody: ƒ, beforeLabel: ƒ, …},
            caretPadding: 20,
            caretSize: 10,
            cornerRadius: 6,
            custom: null,
            displayColors: true,
            enabled: true,
            footerAlign: "left",
            footerFontColor: "#fff",
            footerFontStyle: "bold",
            footerMarginTop: 6,
            footerSpacing: 2,
            intersect: true,
            mode: "nearest",
            multiKeyBackground: "#fff",
            position: "average",
            titleAlign: "left",
            titleFontColor: "#000",
            titleFontStyle: "bold",
            titleMarginBottom: 10,
            titleSpacing: 2,
            titleFontFamily:"CerebriSansRegular",
            titleFontSize:15,
            xPadding: 15,
            yPadding: 15,
          }
    }

    const [dataChart, setDataChart] = useState(data.datasets[0]);
    const onChangeAll = ()=>{
        dispatch({type:"nameTab", nameTab:"All"});
       
    }
    const onChangeDirect = () =>{
        dispatch({type:"nameTab", nameTab:"Direct"});
    }
    store.subscribe(()=>{
        const nameTab = store.getState().theTrafficChartReducer.nameTab
        if(nameTab === "All"){
            setDataChart(data.datasets[0])
        }
        if(nameTab === "Direct"){
            setDataChart(data.datasets[1])
        }
    })
    return (
        <div className={style}>
                <div className='titleContent'>
                    <h3>Traffic Channels</h3>
                    <div className="trafficTabs">
                    <CTabs activeTab="all">
                    <CNav variant="tabs">
                        <CNavItem>
                            <CNavLink data-tab="all" onClick={onChangeAll}>
                                All
                            </CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink data-tab="direct" onClick={onChangeDirect}>
                                Direct
                            </CNavLink>
                        </CNavItem>
                    </CNav>
                    </CTabs>
                    </div>
                </div>
                <div  className='contentChart'>
                    <CChart className="doughnut"
                        type="doughnut" 
                        datasets={dataChart} 
                        labels={data.labels} 
                        options={options}
                        size={100}
                    />
                </div>
                <div className="legendChart">
                    {
                        data.labels.map((value,index)=>(
                            <span key={index} className={"legendClass "+value }>{value}</span>
                        ))
                    }
                </div>
        </div>
    );
}
export default TrafficChannelChart;
