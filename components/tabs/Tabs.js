import {useState, useRef, useEffect} from "react";
const dataTest = [
    {
        title : "Tabs 1",
        content: {
            name: " tabs 1",
            description: "/Volumes/SuPhan/data/digitop/DigiNext/NextBasic/"
        }
    },
    {
        title : "Tabs 2",
        content: {
            name: " tabs 39",
            description: "/Volumes//"
        }
    }
]
export function Tabs({children, tabsName}){

    const [status, setStatus] = useState(false);
    const refEle = useRef();
    const refContent = useRef();

    const handelStatus = ()=>{
        setStatus(!status)
    }

    useEffect(()=>{
        const listTabs = Array.from(refEle.current.children);
        const listContent = Array.from(refContent.current.children);

        listTabs.map((values, index)=>{
            values.addEventListener("click",(e)=>{
                listTabs.map((_values,_index)=>{
                    _values.classList.remove("active");
                });
                values.classList.add("active");
                if(listContent){
                    listContent.map((_values, _index)=>{
                        _values.classList.remove("active");
                    })
                    listContent.find((_values,_index)=>index == _index).classList.add("active");
                }
                
            })
        })
    },[])

    return (
        <div>
            <ul className="tabs" ref={refEle}>
                {tabsName.map((value, index) =>
                        index === 0 ? 
                        (
                            <li
                            className={"tab active"}
                            onClick={handelStatus}>
                            {value}
                            </li>
                        ):(
                            <li
                                className={"tab " + status}
                                onClick={handelStatus}>
                                {value}
                            </li>
                        )
                    ) 
                }
            </ul>
            <div ref={refContent}>
                {children}
            </div>

            <style jsx>{`

                .content-tab.active{
                    display : flex;
                }
                .content-tab{
                    display : none;
                }
                .tab.active{
                    color: blue;
                }
                
            `}</style>
        </div>
    )
}
export function TabsName({children, handelStatus, status=""}){
    const handleClick = () => handelStatus;
    return (
        <li
            className={"tab " + status}
            onClick={handleClick}>
            {children}
            <style jsx>{`
                .tab.active{
                    color: blue;
                }
                
            `}</style>
        </li>
        
    )
} 
export function TabsContent({children, status}){
    return (
        <div className={"content-tab " + status}>
            {children}
            <style jsx>{`
                .content-tab.active{
                    display : flex;
                }
                .content-tab{
                    display : none;
                }
               
            `}</style>
        </div>
    )
} 