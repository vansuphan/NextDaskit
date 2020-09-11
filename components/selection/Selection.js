import {useState, useRef, useEffect} from "react";
const listItemsTest = ["option 1", "option 2", "option 3"]
export function Selection({children, listItems=listItemsTest, heightContentSelect}){
    
    const refSelect = useRef()
    const [value, setValue] = useState(null)
    const handleChange = (e) => {setValue(e.target.value);console.log(setValue(e.target.value))}
   
    return(
       <div className={"container-select"}>
            <div className={"content-select"}>

                <div className="selection-control">
                    <span className={"clear"}></span>
                    <span className={"open"}></span>
                </div>
            </div>
            
            <div className={"content-value"}>
                {listItems.map((value, index)=>(
                    <div key={index}>
                        {value}
                    </div>
                ))}
            </div>
           <style jsx>{`
               .content-select{
                   position: relative;
                   border: solid 1px #c2c3c3;
                   border-radius: 2px;
                   height: ${heightContentSelect ? heightContentSelect : "30px"} ;
               }
               .container-select{
                   position: relative;
               }
                .clear{
                    position: absolute;
                    right: 15px;
                    top: 0;
                    width: 20px;
                    height: 30px;
                    transition: 0.5s;
                    cursor: pointer;
                    &::after, &::before{
                      content:"";
                      position: absolute;
                      top:13px;
                      left:0;
                      width:20px;
                      height : 3px;
                      border-radius: 2px;
                      background-color: #c2c3c3;
                    }
                    &:hover::after, &:hover::before{
                      background-color: red;
                      
                    }
                    &::after{
                      transform: rotate(45deg);
                    }
                    &::before{
                      transform: rotate(-45deg);
                    }
                 
                  }
           `}</style>
       </div>
    )
}