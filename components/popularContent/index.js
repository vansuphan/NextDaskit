import React from 'react';
// import { useSelector, useDispatch, useStore } from 'react-redux';
import ItemsRecentActive from './items/index'
import './style.scss';

const PopularContent = function (props) {
    const data = [
        {id: 0, title: 'Homepage', pageViews: 97.028, timePage:"2:14", pagePecent: '15.5%'},
        {id: 1, title: 'Blog', pageViews: 97.028, timePage:"2:14", pagePecent: '35.5%'},
        {id: 2, title: 'My Account', pageViews: 97.028, timePage:"2:14", pagePecent: '37.5%'},
        {id: 3, title: 'Why Dashkit?', pageViews: 97.028, timePage:"2:14", pagePecent: '15.5%'},
        {id: 4, title: 'Documentation', pageViews: 97.028, timePage:"2:14", pagePecent: '35.5%'},
        {id: 5, title: 'Friderik Dávid', pageViews: 97.028, timePage:"2:14", pagePecent: '45.5%'},
        {id: 6, title: 'Yiorgos Avraamu', pageViews: 97.028, timePage:"2:14", pagePecent: '35.5%'},
        {id: 7, title: 'Avram Tarasios', pageViews: 97.028, timePage:"2:14", pagePecent: '35.5%'},
        {id: 8, title: 'Quintin Ed', pageViews: 97.028, timePage:"2:14", pagePecent: '55.5%'},
        {id: 9, title: 'Enéas Kwadwo', pageViews: 97.028, timePage:"2:14", pagePecent: '5.5%'},
        {id: 10, title: 'Agapetus Tadeáš', pageViews: 97.028, timePage:"2:14", pagePecent: '3.5%'}
      ]
    return (
        <div className='containerMain containerPopular'>
            <div className="titleContent">
                <h3>Popular Content</h3>
                <div className="trafficTabs btnExport">
                    <a href="#/audience" className="active nav-link" >Export</a>
                </div>
            </div>
            <div className="headerPopular">
                    <div>
                        <h3 className="title">Page TItle</h3>
                    </div>
                    <div>
                        <h3 className="title">Pageviews</h3>
                    </div>
                    <div>
                        <h3 className="title">PAGEVIEW %</h3>
                    </div>
                    <div>
                        <h3 className="title">Time/Page</h3>
                    </div>
                    <div>
                        <h3 className="title"></h3>
                    </div>
                </div>
            <div className='contentPopular'>
                
                {
                    data.map((value, index)=>(
                        <ItemsRecentActive
                            key ={index}
                            title ={value.title}
                            pageViews={value.pageViews}
                            pagePecent={value.pagePecent}
                            timePage={value.timePage}
                        />
                    ))
                }

                
            </div>
        </div>
    );
}
export default PopularContent;
