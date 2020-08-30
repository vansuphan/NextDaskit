import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
// import { CImg } from '@coreui/react'
import IconMail from '../../../assets/images/icon-mail-active.png'
import './style.scss'

const ActiveItem  = function(props) {
    //   const dispatch = useDispatch()
  // const changPage = useSelector(state => state.changPage);
  // const idPage = useSelector(state => state.idPage);

    return(
        <Link to="/audience" className='itemActiveRecent'>
            <div className="row-item">
              <div className="img">
                  <img src={IconMail} alt=""/> 
              </div>
              <div className="contentActiveItems">
                  <h5 className="title">{props.title}</h5>
                  <p className="text-dark">{props.textContent}</p>
                  <p className="text-dark"><small className="text-muted">2m ago</small></p>
              </div>
            </div>
        </Link>
      ) 
   
    
}
export default ActiveItem;
