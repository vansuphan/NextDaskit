import React from 'react';
import { CCol,CCallout } from '@coreui/react'
import './style.scss'
const StatcardItem  = function(props) {
    if(props.percent !== null){
      return (
        <div className='statcardItem'>
          <CCol>
              <CCallout  className={'bg-white rounded-lg border-secondary'} border="none">
                <small className="text-muted">{props.title}</small><br/>
                <strong className="h4">{props.content}</strong>
                <span className="text-success rounded-sm">{props.percent}</span>
                <img alt="" src={props.icon} className={"icon-statcard " + props.className}></img>
              </CCallout>
          </CCol> 
        </div>      
      );
    }else{
      return(
        <div className='statcardItem'>
          <CCol>
              <CCallout  className={'bg-white rounded-lg border-secondary'} border="none">
                <small className="text-muted">{props.title}</small><br/>
                <strong className="h4">{props.content}</strong>
                <img alt="" src={props.icon} className={"icon-statcard " + props.className}></img>
              </CCallout>
          </CCol> 
        </div>         
      )
    }
    
}
export default StatcardItem;
