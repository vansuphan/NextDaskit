import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import SwitchButton from "components/button/SwitchButton";
const data = [
    {
        labels: ["Oct 1", "Oct 2", "Oct 3","Oct 4", "Oct 5", "Oct 6", "Oct 7", "Oct 8","Oct 9", "Oct 10","Oct 11","Oct 12"],
        datasets: [
                {
                    label: "2019",
                    data: [0.5,5.5,5,3,4,5,1.1,2,5,3,5,5,3],
                    backgroundColor: " #2C7BE5",
                    borderRadius:10,
                    borderCapStyle: "round",
                    lineDashType: "dash", 
                    borderWidth: 0 ,
                }
        ]
    },
    {
        labels: ["Oct 1", "Oct 2", "Oct 3","Oct 4", "Oct 5", "Oct 6", "Oct 7", "Oct 8","Oct 9", "Oct 10","Oct 11","Oct 12"],
        datasets: [
                {
                    label: "2019",
                    data: [0.5,5.7,5,3,4,5,1.1,2,5,3,5,5.2,3],
                    backgroundColor: " #2C7BE5",
                    borderRadius:10,
                    borderCapStyle: "round",
                    lineDashType: "dash",      
                    borderWidth: 0,
                },
                {
                    label: "2018",
                    data: [0.5,2,5,3,7,1.5,2,5,3,5.4,5,5],
                    backgroundColor: "#D2DDEC",
                    borderRadius:10,
                    borderCapStyle: "round",
                    lineDashType: "dash",  
                    borderSkipped : 4,  
                    borderWidth: 0,
                }
        ]
    }
]
const ConversionsChart = function (props) {
    
    const [dataChart, setDataChart] = useState(data[0]);
    const [statusChart, setStatusChart] = useState(false);
    const onChangeData = ()=>{
        setStatusChart(!statusChart);
    }
    useEffect(()=>{
        window.chartTheme.init();
        // window.chartTheme.globalOptions();
    },[]);

    useEffect(()=>{
        if(statusChart === true){
            setDataChart(data[1]);
        }else{
            setDataChart(data[0])
        }
        
    },[statusChart]);

    const options = {
        borderWidth: 0,
        scales: {
            xAxes: [
                {
                    barPercentage: 0.5,
                    radius: 6,
                    gridLines: {
                        display: false,
                        color:"#E3EBF6",
                    }
                },
                
            ],
            yAxes: [
                {
                    ticks: {
                        beginAtZero:true
                    },
                    gridLines: {
                        display: true,
                        color:"#E3EBF6",
                    
                    },
                }
            ]
        },
        elements: {
            cornerRadius: 6,
            borderRadius:10,
            borderCapStyle: "round",
        },
        lineDash:{
            lineDashOffset : 4,
            strokeStyle : 'red',
        },
        title: {
            display: false,
            text: "hi su"
        },
        legend: {
            display: false,
            position: "bottom",
            cornerRadius: 6,
        },
        tooltips: {
            backgroundColor: "rgba(255,255,255,1)",
            bodyAlign: "left",
            bodyFontColor: "#000",
            bodySpacing: 2,
            borderColor: 'rgba(48, 117, 227, 1)',
            borderWidth: 0.2,
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
            titleFontFamily:"CerebriSansRegular",
            titleFontSize:15,
            titleSpacing: 2,
            xPadding: 15,
            yPadding: 15,
            radius:10,
        },
    }
  
    return (
        <div className='conversionChart'>
            <div className='titleContent row col-md-12'>
                    <h3>Conversions</h3>
                    <div className="switchData">
                        <span>Last year comparison:</span>
                        <SwitchButton
                            color='success'
                            value='success'
                            shape="pill"
                            onClick={onChangeData}
                            checked ={statusChart}
                        ></SwitchButton>
                            
                    </div>
            </div>
            <div className='contentChart'>
                    <Bar
                        className="bar"
                        type="bar" 
                        datasets={dataChart}
                        options={options}
                        label={data.labels}
                        data={dataChart}
                    />
            </div>
            <style jsx>{`
                .conversionChart{
                    // height: 370px;
                    width: 100%;
                    .titleContent{
                        padding-right: 0;
                        padding: 0;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        padding: 0 25px;
                        align-items: center;
                        font-size: 15px;
                        font-family: "CerebriSansRegular";
                        color: black;
                        border-bottom: 1px solid #EDF2F9;
                        height: 60px;
                        margin-bottom: 25px;
                        h3{
                            font-size: 15px;
                            font-weight: bold;
                            margin: 0;
                        }
                        .item{
                            padding-right: 0;
                        }
                    }
                    .contentChart{
                        display: flex;
                        // width: 100%;
                        padding: 5px 25px;
                        padding-bottom: 25px;
                        position: relative;
                        height: 65%;
                        .bar{
                            width: 100%;
                        }
                    }
                    .c-switch-slider{
                        background-color: #e3ebf6;
                        border: none;
                    }
                    .c-switch-success .c-switch-input:checked + .c-switch-slider {
                        background-color: #2C7BE5;
                        border-color: #2C7BE5;
                    }
                    .c-switch {
                        height: 22px;
                    }
                    .c-switch-success .c-switch-input:checked + .c-switch-slider::before {
                        height: 18px;
                        width: 18px;
                        left: 5px;
                    }
                    .c-switch-slider::before {
                        width: 18px;
                        height: 18px;
                        // left: 5px;
                    }
            
                    .switchData {
                        display: flex;
                        span{
                            color: #95AAC9;
                            padding-right: 5px;
                        }
                    }
                }
            `}
            </style>
        </div>
    );
}
export default ConversionsChart;
