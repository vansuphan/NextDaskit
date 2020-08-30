import React from 'react';
// import {Link} from 'react-router-dom'
// import { CImg, } from '@coreui/react'
import './style.scss'

const PopularItem  = function(props) {
   
    return(
        <div className='itemPopularContent'>
            <div className="row-item">
              <h3 className="title">{props.title}</h3>
            </div>
            <div className="row-item">
              <span>{props.pageViews}</span>
            </div>
            <div className="row-item">
              <span className="statcardItem text-info" >{props.pagePecent}</span>
            </div>
            <div className="row-item">
              <span>{props.timePage}</span>
            </div>
            <div>
              <div className="tools">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
        </div>
      ) 
   
    
}
export default PopularItem;
