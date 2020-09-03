import DropDown from "components/dropdown/DropDownCore";
import DropDownItem from "components/dropdown/DropDownItem";

export default function Menu({children}){
    return(
        <div className={"menu-left"}>
            <ul>
                <DropDown
                    title="Dashboards"
                    srcIcon={"images/icon-home-active.png"}
                    displayChild={true}
                >
                    <DropDownItem linkTo="">Default</DropDownItem>
                    <DropDownItem linkTo="">Project Manager </DropDownItem>
                    <DropDownItem linkTo="">E-Commerce</DropDownItem>
                </DropDown>
                <DropDown
                    title="Pages"
                    srcIcon={"images/icon-page.png"}
                    displayChild={false}
                >
                    <DropDownItem linkTo="">Default</DropDownItem>
                    <DropDownItem linkTo="">Project Manager </DropDownItem>
                    <DropDownItem linkTo="">E-Commerce</DropDownItem>

                    <DropDown
                        title="Sub dropdown 1"
                        srcIcon={"images/icon-home-active.png"}
                        displayIcon={false}
                        displayChild={false}
                    >
                        <DropDownItem linkTo="">Default</DropDownItem>
                        <DropDownItem linkTo="">Project Manager </DropDownItem>
                        <DropDownItem linkTo="">E-Commerce</DropDownItem>
                    </DropDown>
                    <DropDown
                        title="Sub dropdown 2"
                        srcIcon={"images/icon-home-active.png"}
                        displayIcon={false}
                        displayChild={false}
                    >
                        <DropDownItem linkTo="">Default</DropDownItem>
                        <DropDownItem linkTo="">Project Manager </DropDownItem>
                        <DropDownItem linkTo="">E-Commerce</DropDownItem>
                    </DropDown>
                    <DropDown
                        title="Sub dropdown 3"
                        srcIcon={"images/icon-home-active.png"}
                        displayIcon={false}
                        displayChild={false}
                    >
                        <DropDownItem linkTo="">Default</DropDownItem>
                        <DropDownItem linkTo="">Project Manager </DropDownItem>
                        <DropDownItem linkTo="">E-Commerce</DropDownItem>
                    </DropDown>
                </DropDown>
                <DropDown
                    title="Widgets"
                    srcIcon={"images/icon-home-active.png"}
                ></DropDown>
                <DropDown
                    title="Authentication"
                    srcIcon={"images/icon-home-active.png"}
                ></DropDown>

                <DropDown
                title="Component"
                srcIcon={"images/book-open-icon.png"}
                displayChild={false}
                >
                    <DropDownItem linkTo="">Default</DropDownItem>
                    <DropDownItem linkTo="">Project Manager </DropDownItem>
                    <DropDownItem linkTo="">E-Commerce</DropDownItem>
                </DropDown>

                <hr/>
                <h3>Documentation</h3>
                <DropDown
                    title="Sub dropdown 1"
                    srcIcon={"images/icon-home-active.png"}
                    displayChild={false}
                    >
                    <DropDownItem linkTo="">Default</DropDownItem>
                    <DropDownItem linkTo="">Project Manager </DropDownItem>
                    <DropDownItem linkTo="">E-Commerce</DropDownItem>
                </DropDown>

                <DropDown
                    title="Component"
                    srcIcon={"images/book-open-icon.png"}
                    displayChild={false}
                    >
                        <DropDownItem linkTo="">Default</DropDownItem>
                        <DropDownItem linkTo="">Project Manager </DropDownItem>
                        <DropDownItem linkTo="">E-Commerce</DropDownItem>
                </DropDown>

                {children}

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
                hr{
                    height: 1px;
                    width: 100%;
                    border-color: #ffffff82;
                    border-radius: 2px;
                    margin-top: 10px;
                }
                h3{
                    margin-top:5px;
                    margin-bottom:10px;
                    font-size: 14px;
                    color: gray;
                    font-weight: 100;
                }
            `}</style>
        </div>
    )
}