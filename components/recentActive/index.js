import React, { useState } from 'react';
// import { useDispatch, useStore } from 'react-redux';
import ItemsRecentActive from './items/index'
import './style.scss';
const AudienceChart = function (props) {
    // const [status, setStatus] = useState(false);
    return (
        <div className='containerMain containerActiveRecent'>
            <div className="titleContent">
                <h3>Recent Activity</h3>
                <div className="trafficTabs">
                    <a href="/audience" className="active nav-link"> Views all</a>
                </div>
            </div>
            <div className='contentActiveRecent'>
                <ItemsRecentActive
                    title="Launchday 1.4.0 update email sent"
                    textContent="Sent to all 1,851 subscribers over a 24 hour period"
                />
                <ItemsRecentActive
                    title="Launchday 1.4.0 update email sent"
                    textContent="Sent to all 1,851 subscribers over a 24 hour period"
                />
                <ItemsRecentActive
                    title="Launchday 1.4.0 update email sent"
                    textContent="Sent to all 1,851 subscribers over a 24 hour period"
                />
                <ItemsRecentActive
                    title="Launchday 1.4.0 update email sent"
                    textContent="Sent to all 1,851 subscribers over a 24 hour period"
                />
                <ItemsRecentActive
                    title="Launchday 1.4.0 update email sent"
                    textContent="Sent to all 1,851 subscribers over a 24 hour period"
                />
            </div>
        </div>
    );
}
export default AudienceChart;
