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
export function Tabs({children, dataTabs=dataTest}){

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
                })
                listContent.map((_values, _index)=>{
                    _values.classList.remove("active");
                })
                values.classList.add("active");
                listContent.find((_values,_index)=>index == _index).classList.add("active");
            })
        })
    },[])

    return (
        <div>
            <ul className="tabs" ref={refEle}>
                {dataTabs && dataTabs.map((values, index)=>(
                    index === 0 ? (
                        <li
                        className={"tab" + " active"}
                        onClick={handelStatus}
                        key={index}>
                            {values.title}
                        </li>
                    ):(   
                        <li
                        className={"tab"}
                        onClick={handelStatus}
                        key={index}>
                            {values.title}
                        </li>
                    )
                ))}
            </ul>
            <div ref={refContent}>
                {dataTabs && dataTabs.map((values, index)=>(
                    index === 0 ? (
                        <div className={"content-tab" + " active"}>
                            {values.content.description}
                        </div>
                    ):(
                        <div className={"content-tab"}>
                            {values.content.description}
                        </div>
                    )
                ))}
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