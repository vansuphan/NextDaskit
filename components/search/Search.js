import React, { useState, useRef, useEffect } from 'react'

export function SearchFullSize({children, dataSearch}) {

  const [classNamesClose, setClassNameClose] = useState('containerNotify hide')
  const [statusClose, setStatusClose] = useState(true)
  const [data, setData] = useState(dataSearch);

  useEffect(()=>{
    if(statusClose === true){
      setClassNameClose('containerNotify hide')
    }else{
      setClassNameClose('containerNotify')
    }
  },[statusClose]);

  useEffect(()=>{},[data]);

  const handleSearch = (word) => {
    let newData = dataSearch.filter((value)=>{
      if(value.title.toString().toLowerCase().indexOf(word) !== -1)
        return value;
    });
    setData(newData);
  }

  const handleStatus = () => setStatusClose(!statusClose);

  return(
      <div className={"search"}>
        <img alt="Search" src={"images/icon-search.png"} className="icon iconBell" onClick={handleStatus}/>
        
        <div className={classNamesClose}>
          <span className="closeContainerNotify" onClick={handleStatus}></span>

          <InputSearch
            width = {"80%"}
            height = {"40px"}
            handleSearch={handleSearch}>
          </InputSearch>
          <div className="contentItems">
              {
                data && data.map((value, index)=>
                  <ItemSearch
                        imgURL={"images/icon-mail-active.png"}
                        title={value.title}
                        textContent={value.textContent}
                        timer ={value.timer}
                        key={index}>
                        cb={()=>console.log("onclick item")}
                  </ItemSearch>)
              }
              {children}
          </div>
        </div>
        <style jsx>{`
            .search{
                  transition: 0.4s ease-in-out;
                  cursor: pointer;
                  max-width: 25px;
                  position: relative;
                  .number {
                    transition: 0.3s ease-in-out;
                    position: absolute;
                    width: 12px;
                    height: 12px;
                    font-size: 10px;
                    font-weight: bold;
                    bottom: 0;
                    right: 0;
                    border-radius: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    background: red;
                    top: 0;
                  }
              }
              .search.hide{
                  transition: 0.4s ease-in-out;
                  width: 0;
                  height: 0;
                  top: 100%;
                  left: unset;
                  position: absolute;
                  opacity: 0;
                  z-index: -1;   
                  border-radius: 100%;    
              }
              .containerNotify{
                  transition: 0.5s ease-in-out;
                  display: flex;
                  flex-direction: column;
                  position: fixed;
                  width: 300px;
                  height: 100%;
                  top: 0;
                  left: 0;
                  background-color: #fff;
                  justify-content: flex-start;
                  align-items: start;
                  z-index: 2;
                  transition: 0.4s ease-in-out;
                  h3{
                      width: 100%;
                      padding: 20px;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      text-align: center;
                      // font-family: $CerebriSansRegular;
                      margin: 0;
                      
                  }
                  a:hover {
                      text-decoration: unset;
                      color:snow;
                  }
              }
              .contentItems{
                  display: flex;
                  width: 100%;
                  flex-direction: column;
                  justify-content: flex-start;
                  align-items: flex-start;
                  overflow: hidden;
                  overflow-y: auto;
                  opacity: 1;
                  &::-webkit-scrollbar-track{
                    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                    border-radius: 10px;
                    background-color: #F5F5F5;
                  }

                  &::-webkit-scrollbar{
                    width: 10px;
                    background-color: #F5F5F5;
                  }

                  &::-webkit-scrollbar-thumb{
                    border-radius: 10px;
                    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
                    background-color: rgb(180, 175, 175);
                  }
              }
              .containerNotify.hide{
                  transition: 0.5s ease-in-out;
                  top: 0;
                  transform: translate(-100%,0%);
                  overflow: unset;
                  overflow: hidden;
                  z-index: -1;
                  opacity: 0;
              }
              .closeContainerNotify{
                  &::after{
                      content: "";
                      position: absolute;
                      background-color: rgba(0,0,0,0.5);
                      width: 100vw;
                      height: 100vh;
                      left: 300px;
                      top: 0;
                  }
              }
              .text-danger{
                color : red;
              }
        `}
        </style>
      </div>
    )
}


export function InputSearch({
  children,
  width, 
  height, 
  handleSearch, 
  type, 
  status,
  data }){

  const [dataLocal, setData] = useState(data);
  const [statusSearch, setStatus] = useState(status||false);

  const [typeSearch, setType] = useState(type||"");
  const [sizeSearch, setSizeSearch] = useState({
    width : width || "100%",
    height : height || "100%"
  });

  const inputSearch = useRef(null);

  const HandleChange = () => {
    // console.log("onchange")
    if(handleSearch){
      handleSearch(inputSearch.current.value);
    }else{
      setStatus(true);
      handleSearchLocal(inputSearch.current.value)
    }
  }

  const handleSearchLocal = (word) => {
    if(data){
      let newData = data.filter((value)=>{
        if(value.title.toString().toLowerCase().indexOf(word) !== -1)
          return value;
      });
      setData(newData);
    }
  }

  return(
      <div className={ type || "default" } onMouseLeave={()=>setStatus(false)}>
          <label htmlFor="search"></label>
          <input 
              ref={inputSearch}
              onChange={HandleChange}
              id="search"
              type="search" 
              placeholder="Search">
              
          </input>
          {
            statusSearch === true && typeSearch === "mini" && dataLocal.length > 1 ? 
              (
                <div className="contentItems">
                  {dataLocal && dataLocal.map((value, index)=>
                    <ItemSearch
                        imgURL={"images/icon-mail-active.png"}
                        title={value.title}
                        textContent={value.textContent}
                        timer ={value.timer}
                        key={index}>
                    </ItemSearch>)
                  }
                </div>
              )
            : <div></div>
          }


          <style jsx>{`
            
              .mini{
                width: ${sizeSearch.width};
                height: ${sizeSearch.height};
                min-height: 30px;
                position: relative;
                display: flex;
                flex-direction: row;
                margin: 20px;
                margin-left: auto;
                margin-right: auto;
                max-width: 300px;
              }
              .contentItems{
                display: flex;
                flex-direction: column;
                position: absolute;
                max-height: 325px;
                width: auto;
                max-width: 100%;
                top:100%;
                right:0;
                background-color: #fff;
                overflow: hidden;
                overflow-y: auto;
                height: auto;
                z-index: 2;
                box-shadow: 0px 2px 9px 5px #ececec;
                border-radius: 5px;
                padding: 5px 10px;
                border: solid 10px white;
                border-right: 0;
                border-left: 0;
              }
              .default{
                  width: ${sizeSearch.width};
                  height: ${sizeSearch.height};
                  min-height: 30px;
                  position: relative;
                  display: flex;
                  flex-direction: row;
                  margin: 20px;
                  margin-left: auto;
                  margin-right: auto;
              }
              label{
                  position: absolute;
                  width: 6%;
                  max-width: 30px;
                  height: 70%;
                  cursor: pointer;
                  background-position: center;
                  background-repeat: no-repeat;
                  background-size: 100%;
                  background-image: url('./images/icon-search.png');
                  top: 50%;
                  left: 6%;
                  transform: translate(0,-50%)
              }
              input{
                  width: 100%;
                  height: 100%;
                  padding: 0 10px 0 40px;
                  border: solid 1px #c3d0e1;
                  border-radius: 20px;
                  outline: none;
                  justify-content: center;

              }
              ::-webkit-input-placeholder { /* Edge */
                  color: #c3d0e1;
              }

              :-ms-input-placeholder { /* Internet Explorer 10-11 */
                  color: #c3d0e1;
              }

              ::placeholder {
                  color: #c3d0e1;
              }
          `}
          </style>
      </div>
  )
}

export function ItemSearch ({
  linkTo="",
  imgURL,
  title, 
  textContent, 
  timer}){

  const onClickNotify = () => {
    console.log(window.location.href)
    window.location.href = linkTo;
  }
  
  return(
      <div to="#" className='itemNotify' onClick={onClickNotify}>
          <div className="row-item">
            <div className="img">
                <img src={imgURL}/> 
            </div>
            <div className="contentActiveItems">
                <h5 className="title">{title}</h5>
                <p className="text-dark">{textContent}</p>
                {
                  timer ? 
                  <p className="text-dark"><small className="text-muted">Last updated {timer} mins ago</small></p>
                  : 
                  <p className="text-dark"></p>
                }
                
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
              cursor: pointer;
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