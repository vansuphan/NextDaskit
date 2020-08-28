import React from 'react';
const Item  = function(props) {
  const onClickNotify = (props) =>{
    console.log(props);
  }
    return(
      <div to="#" className='itemNotify' onClick={onClickNotify}>
          <div className="row-item">
            <div className="img">
                <img src={props.imgURL}/> 
            </div>
            <div className="contentActiveItems">
                <h5 className="title">{props.title}</h5>
                <p className="text-dark">{props.textContent}</p>
                <p className="text-dark"><small className="text-muted">Last updated {props.timer} mins ago</small></p>
            </div>
          </div>
          <style jsx>{`
            .itemNotify{
              width: 100%;
              display: flex;
              align-items: center;
              padding:0px 10px;
              padding-bottom: 0;
              position: relative;
              &:hover{
                  background-color: #EDF2F9;
              }
              img{
                  border-radius:100%;
                  width: 100%;
                  height: 100%;
                  max-width: 50px;
                  max-height: 50px;
                  border-radius: 100%;
                  z-index: 2;
              }
              
              .img{
                  max-width: 50px;   
                  height: 50px;
                  position: relative;
                  z-index: 2;
                  background-color: white;
                  border-radius: 100%;
                
              }
          }
          .itemNotify:not(:last-child){
              .img{
                  &::before {
                      content: '';
                      position: absolute;
                      top: 100%;
                      left: 50%;
                      height: 100%;
                      border-left: 1px solid #eaf2fd;
                      z-index: -1;
                  }
              }
          }
          .itemNotify{
              .row-item{
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  padding: 10px 0;
              }
              
              .contentActiveItems{
                  margin-left: 10px;
                  width: 100%;
                  flex: 1;
                  overflow: hidden;
                  text-overflow: ellipsis; 
              }
              .title{
                  font-size: 13px;
                  font-weight: bold;
                  color: #12263F;
                  margin-bottom: 0px;
                  margin: 0;
                  font-family: "CerebriSansRegular", sans-serif;
              }
              .text-dark{
                  font-size: 13px;
                  color: #6E84A3;
                  margin-bottom: 0px;
                  margin-top: 5px;
                  overflow: hidden;
                  width: 100%;
                  text-overflow: ellipsis; 
                  overflow: hidden;
                  white-space: nowrap;    
              }
              
          }
          .itemNotify:not(:last-child){
              .img{
                  &::before {
                      content: '';
                      position: absolute;
                      top: 100%;
                      left: 50%;
                      height: 100%;
                      border-left: 1px solid #eaf2fd;
                      z-index: -1;
                  }
              }
          }

            `}
          </style>
      </div>
    )
}
export default Item;
