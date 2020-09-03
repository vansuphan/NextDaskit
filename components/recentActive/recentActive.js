import React, { useState } from 'react';
import {ActiveItem} from './items'
const AudienceChart = function (props) {
    return (
        <div className='containerMain containerActiveRecent'>
            <div className="titleContent">
                <h3>Recent Activity</h3>
                <div className="trafficTabs">
                    <a href="/audience" className="active nav-link"> Views all</a>
                </div>
            </div>
            <div className='contentActiveRecent'>
                <ActiveItem
                    title="Launchday 1.4.0 update email sent"
                    textContent="Sent to all 1,851 subscribers over a 24 hour period"
                />
                <ActiveItem
                    title="Launchday 1.4.0 update email sent"
                    textContent="Sent to all 1,851 subscribers over a 24 hour period"
                />
                <ActiveItem
                    title="Launchday 1.4.0 update email sent"
                    textContent="Sent to all 1,851 subscribers over a 24 hour period"
                />
                <ActiveItem
                    title="Launchday 1.4.0 update email sent"
                    textContent="Sent to all 1,851 subscribers over a 24 hour period"
                />
                <ActiveItem
                    title="Launchday 1.4.0 update email sent"
                    textContent="Sent to all 1,851 subscribers over a 24 hour period"
                />
            </div>
            <style jsx>{`
                .containerActiveRecent{
                    display: flex;
                    flex-direction: column;
                    .titleContent{
                        display: flex;
                        width: 100%;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        padding-right: 0;
                        padding: 0;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        padding: 0 25px;
                        align-items: center;
                        font-size: 15px;
                        font-family: "CerebriSansRegular", sans-serif;
                        color: black;
                        border-bottom: 1px solid #666;
                        height: 60px;
                        margin-bottom: 15px;
                        h3{
                            font-size: 15px;
                            font-weight: bold;
                            margin: 0;
                        }
                    }
                }
                .contentActiveRecent{
                    width: 100%;
                    overflow-y: scroll;
                    max-height: 270px;
                    
                    &::-webkit-scrollbar-track
                    {
                        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                        border-radius: 10px;
                        background-color: #F5F5F5;
                    }

                    &::-webkit-scrollbar
                    {
                        width: 0px;
                        background-color: #F5F5F5;
                    }

                    &::-webkit-scrollbar-thumb
                    {
                        border-radius: 10px;
                        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
                        background-color: #555;
                    }
                }    
            `}</style>
        </div>
    );
}
export default AudienceChart;
