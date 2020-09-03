import React from 'react';
import {Link} from 'next/link'
export default function ActiveItem(props) {

    return(
        <Link href="/audience" className={'itemActiveRecent'}>
            <a>
                <div className={"row-item"}>
                <div className={"img"}>
                    <img src={"images/icon-mail-active.png"} alt=""/> 
                </div>
                <div className={"contentActiveItems"}>
                    <h5 className={"title"}>{props.title}</h5>
                    <p className={"text-dark"}>{props.textContent}</p>
                    <p className={"text-dark"}><small className={"text-muted"}>2m ago</small></p>
                </div>
                </div>
            </a>
            
            <style jsx>{`
            .itemActiveRecent{
                width: 100%;
                display: flex;
                align-items: center;
                padding:0px 23px;
                padding-bottom: 0;
                position: relative;
                .row-item{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    padding: 10px 0;
                }
                .img{
                    max-width: 40px;
                    width: 20%;
                    height: 40px;
                    position: relative;
                    z-index: 2;
                    background-color: white;
                }
            
                img{
                    width: 100%;
                    height: 100%;
                    max-width: 40px;
                    max-height: 40px;
                    border-radius: 100%;
                    z-index: 2;
                    
                }
                .contentActiveItems{
                    margin-left: 10px;
                    width: 100%;
                    flex: 1;
                    overflow: hidden;
                    text-overflow: ellipsis; 
                }
                .title{
                    font-family: "CerebriSansRegular", sans-serif;
                    font-size: 13px;
                    font-weight: bold;
                    color: #12263F;
                    margin-bottom: 0px;
                }
                .text-dark{
                    font-family: "CerebriSansRegular", sans-serif;
                    font-size: 13px;
                    color: #6E84A3;
                    margin-bottom: 0px;
                    overflow: hidden;
                    width: 100%;
                    text-overflow: ellipsis; 
                }
                
            }
            .itemActiveRecent:not(:last-child){
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
            `}</style>
        </Link>
      ) 
   
    
}
