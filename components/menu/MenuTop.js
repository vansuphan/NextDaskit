
import DropDown from "components/dropdown/DropDownAbsolute";
import DropDownItem from "components/dropdown/DropDownItem";
export default function Menu({children}){
    return(
        <div className={"menu-top"}>
            <ul>
                <DropDown
                    title="Dashboards"
                    srcIcon={"images/icon-home-active.png"}
                    displayIcon={false}
                    displayChild={false}>
                    <DropDownItem linkTo="">Default</DropDownItem>
                    <DropDownItem linkTo="">Project Manager </DropDownItem>
                    <DropDownItem linkTo="">E-Commerce</DropDownItem>
                </DropDown>
                <DropDown
                    title="Pages"
                    displayIcon={false}
                    displayChild={false}>
                    <DropDownItem linkTo="">Default</DropDownItem>
                    <DropDownItem linkTo="">Project Manager </DropDownItem>
                    <DropDownItem linkTo="">E-Commerce</DropDownItem>
                    <DropDown
                        title="Sub dropdown 1"
                        displayIcon={false}
                        displayChild={false}>
                        <DropDownItem linkTo="">Default</DropDownItem>
                        <DropDownItem linkTo="">Project Manager </DropDownItem>
                        <DropDownItem linkTo="">E-Commerce</DropDownItem>
                    </DropDown>
                    <DropDown
                        title="Sub dropdown 2"
                        displayIcon={false}
                        displayChild={false}>
                        <DropDownItem linkTo="">Default</DropDownItem>
                        <DropDownItem linkTo="">Project Manager </DropDownItem>
                        <DropDownItem linkTo="">E-Commerce</DropDownItem>
                    </DropDown>
                    <DropDown
                        title="Sub dropdown 3"
                        displayIcon={false}
                        displayChild={false}>
                        <DropDownItem linkTo="">Default</DropDownItem>
                        <DropDownItem linkTo="">Project Manager </DropDownItem>
                        <DropDownItem linkTo="">E-Commerce</DropDownItem>
                    </DropDown>
                </DropDown>

                <DropDown
                    title="Widgets"
                    displayIcon={false}>
                </DropDown>

                <DropDown
                    title="Authentication"
                    displayIcon={false}>
                </DropDown>

                <DropDown
                title="Component"
                displayIcon={false}
                srcIcon={"images/book-open-icon.png"}
                displayChild={false}>
                    <DropDownItem linkTo="">Default</DropDownItem>
                    <DropDownItem linkTo="">Project Manager </DropDownItem>
                    <DropDownItem linkTo="">E-Commerce</DropDownItem>
                </DropDown>

                {children}

            </ul>
            <style jsx>{`
                .menu-top{
                    display: flex;
                    ul{
                        display:flex;
                    }
                }
                ul{
                    position: relative;
                    z-index: 1;
                    ul{
                        z-index:-1;
                    }
                }
                .menu-top{
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