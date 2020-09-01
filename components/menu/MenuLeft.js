
import {useState} from "react";
import DropDown from "components/dropdown/DropdownCore";
import Link from "next/link";
export default function Menu(props){
    return(
        <div className={"menu-left"}>
            <ul>
                <DropDown
                    title="Dashboards"
                    srcIcon={"images/icon-home-active.png"}
                    displayChild={true}
                >
                    <Link href="">
                        <a>Default</a>
                    </Link>
                    <Link href="">
                        <a>Project Manager</a>
                    </Link>
                    <Link href="">
                        <a>E-Commerce</a>
                    </Link>
                </DropDown>
                <DropDown
                    title="Pages"
                    srcIcon={"images/icon-home-active.png"}
                    displayChild={false}
                >
                    <Link href="" >
                        Default
                    </Link>
                    <Link href="" >
                        Project Manager
                    </Link>
                    <DropDown
                        title="Sub dropdown"
                        srcIcon={"images/icon-home-active.png"}
                        displayIcon={false}
                        displayChild={false}
                    >
                        <Link href="" >Default</Link>
                        <Link href="" >Default</Link>
                        <Link href="" >Default</Link>
                    </DropDown>
                </DropDown>
                <DropDown
                    title="Widgets"
                    srcIcon={"images/icon-home-active.png"}
                    displayChild={false}
                ></DropDown>
                <DropDown
                    title="Authentication"
                    srcIcon={"images/icon-home-active.png"}
                    displayChild={false}
                ></DropDown>
            </ul>
            <style jsx>{`
                ul{
                    overflow: hidden;
                    position: relative;
                    z-index: 1;
                    ul{
                        z-index:-1;
                    }
                }
                .menu-left{
                    width: 100%;
                }    
            `}</style>
        </div>
    )
}