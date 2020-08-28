import React from 'react';
import { CCol,CCallout } from '@coreui/react'
import './style.scss'
const Process  = function(props) {
    return(
        <div className='statcardItem'>
            <CCol>
                <CCallout  className={'bg-white rounded-lg border-secondary'} border="none">
                    <small className="text-muted">{props.title}</small><br/>
                    <strong className="h4">{props.content}</strong>
                    <img src={props.icon} className={"icon-statcard " + props.className}></img>
                </CCallout>
            </CCol> 
        </div>         
    )
    
}
export default Process;
