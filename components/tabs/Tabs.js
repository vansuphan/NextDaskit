import {useState, useRef, useEffect} from "react";
export function Tabs({
    onChange,
    children, 
    tabsName, 
    tabActive=0,
    widthTab="auto",
    justifyContent="flex-start",
    tabsDirection="column",
    tabNameDirection="row"}){
    const [status, setStatus] = useState(false);
    const [indexGlobal, setIndexGlobal] = useState(tabActive||0);
    const refEle = useRef();
    const refContent = useRef();
    
    // const handelStatus = () => {
    //     setStatus(!status);
    // }

    useEffect( () => {
      
        if(onChange){
            onChange(indexGlobal);
        }
    },[indexGlobal])

    useEffect(()=>{
        const listTabs = Array.from(refEle.current.children);
        const listContent = Array.from(refContent.current.children);
        if(listContent.length > 0){
            listTabs[indexGlobal > 0 ? indexGlobal - 1 : 0 ].classList.add("active");
            if(listContent[indexGlobal-1]){
                listContent[indexGlobal > 0 ? indexGlobal - 1 : 0 ].classList.add("active");
            }
            
        }
        listTabs.map((values, index)=>{
            values.addEventListener("click",(e)=>{
                listTabs.map((_values,_index)=>{
                    _values.classList.remove("active");
                });
                values.classList.add("active");
                setIndexGlobal(index)
                if(listContent){
                    listContent.map((_values, _index)=>{
                        _values.classList.remove("active");
                    })
                    if(listContent.find((_values,_index)=>index == _index)){
                        // setIndex()
                        listContent.find((_values,_index)=>index == _index).classList.add("active");
                        
                    }else{
                        console.warn(`Content tab ${index+1} null !! Please add component TabsContent below component TabsName!`);
                    }
                }
            })
        })
    },[])

    return (
        <div className="container-tabs">
            <ul className="tabs" ref={refEle}>
                {tabsName.map((value, index) =>(
                    <TabsName
                        widthTab={widthTab}
                        key={index}
                        className={"tab"}>
                        {value}
                    </TabsName>
                    )) 
                }
            </ul>
            <hr></hr>
            <div ref={refContent}>
                {children}
            </div>

            <style jsx>{`
                .container-tabs{
                    display:flex;
                    flex-direction: ${tabsDirection};
                    .tabs{
                        width : 100%;
                        display: flex;
                        flex-direction:${tabNameDirection}; 
                        justify-content: ${justifyContent};
                        margin: 10px 0;
                    }
                    .content-tab.active{
                        display : flex;
                        opacity : 1;
                    }
                    .content-tab{
                        transition : 0.2s;
                        height : 0;
                        opacity : 0;
                    }
                }
                
                
            `}</style>
        </div>
    )
}

export function TabsName({children, className, widthTab}){
    return (
        <li className={className}>

            {children}

            <style jsx>{`
                .tab{
                    padding : 10px 10px;
                    width: ${widthTab};
                    border-radius:2px;
                    font-weight: bold;
                    text-align: center;
                    cursor : pointer;
                }
                .tab.active{
                    color: white;
                    font-weight: bold;
                    background-color: #0088ff;
                }
            `}</style>
        </li>
    )
}

export function TabsContent(
    {children,
    background="snow",
    flexDirection="column",
    alignItems="center",
    justifyContent="center"}){
    return (
        <div className={"content-tab"}>
            {children}
            <style jsx>{`
                .content-tab.active{
                    padding: 10px 10px;
                    height: auto;
                    display : flex;
                    flex-direction: ${flexDirection};
                    opacity : 1;
                    background-color: ${background};
                    align-items: ${alignItems};
                    justify-content: ${justifyContent};
                    overflow: unset;
                    z-index: 1;
                }
                .content-tab{
                    padding: 0px 10px;
                    padding-bottom:0;
                    transition : 0.4s;
                    height : 0;
                    opacity : 0;
                    z-index : -1;
                    overflow: hidden;
                }
            `}</style>
        </div>
    )
} 