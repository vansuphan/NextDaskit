import React, { useState, useEffect } from 'react'
import Item from './item/index'
import ItemSearch from "./item/search";

const dataTest = [
  {
      title:"Hello guy",
      textContent: "It's a broader card with text below as a natural lead-in to extra content.",
      timer: 1, 
  },
  {
    title: "Alphazap",
    textContent: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    timer: 65
  }, {
    title: "Voyatouch",
    textContent: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    timer: 59
  }, {
    title: "Lotlux",
    textContent: "Fusce consequat. Nulla nisl. Nunc nisl.",
    timer: 17
  }, {
    title: "Viva",
    textContent: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    timer: 51
  }, {
    title: "Ventosanzap",
    textContent: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    timer: 21
  }, {
    title: "Alphazap",
    textContent: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    timer: 75
  }, {
    title: "Flexidy",
    textContent: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    timer: 98
  }, {
    title: "Bytecard",
    textContent: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    timer: 25
  }, {
    title: "Vagram",
    textContent: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    timer: 17
  }, {
    title: "Domainer",
    textContent: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    timer: 33
  }
]

const Search  = function(props) {

  const [classNamesClose, setClassNameClose] = useState('containerNotify hide')
  const [statusClose, setStatusClose] = useState(true)
  const [data, setData] = useState(dataTest);

  useEffect(()=>{
    if(statusClose === true){
      setClassNameClose('containerNotify hide')
    }else{
      setClassNameClose('containerNotify')
    }
  },[statusClose]);

  const handleSearch = (word) => {
    let newData = dataTest.filter((value)=>{
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

          <ItemSearch
            width = {"80%"}
            height = {"40px"}
            handleSearch={handleSearch}
          >

          </ItemSearch>
          <div className="contentItems">
            {
              data && data.map((value, index)=>
                <Item
                  imgURL={"images/icon-mail-active.png"}
                  title={value.title}
                  textContent={value.textContent}
                  timer ={value.timer}
                  key={index}
                ></Item>
              )
            }
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
export default Search;
