import { defaultStyle } from "./Avatar.style";
import { cloneChild } from "plugins/utils/Helper";

const baseWidth = 48;

function Avatar({
    children,
    className = "",
    status = "default",
    ratio = "1:1",
    ...rest
}) {

    const defaultStyleHash = defaultStyle.__hash || "";
    const defaultChildClass = "jsx-" + defaultStyleHash;
    const ratioString = ratio.toString();
    const ratioWidthHeight = ratioString.includes(":")
        ? ratioString.split(":")
        : ratioString.includes("/")
            ? ratioString.split("/")
            : ["1", "1"];
    const ratioWidth = ratioWidthHeight.length > 0 ? ratioWidthHeight[0] : 1;
    const ratioHeight = ratioWidthHeight.length > 1 ? ratioWidthHeight[1] : 1;


    let _children = [];

    if (children.length) {
        children.forEach((child, index) => {

            let _child = cloneChild(child, index, {
                className: [defaultChildClass, child.props.className].join(" ")
            })
            _children.push(_child);
        });

    } else {
        _children.push(cloneChild(children, 0, {
            className: [defaultChildClass, children.props.className].join(" ")
        }));
    }
    const statusClassName = status.trim() === "" ? "" : "status-" + status;
    const classNames = ["avatar", `ratio-${ratioWidth}-${ratioHeight}`, className, statusClassName];

    return (
        <>
            <style jsx>{defaultStyle}</style>
            <style jsx>{`
                $width: ${baseWidth};
                $height: ${baseWidth / ratioWidth * ratioHeight};
                $fontSize: ${baseWidth / 3};
                .avatar {
                    width: #{$width}px;
                    height: #{$height}px;
                    font-size: #{$fontSize}px;
                }    
            `}</style>
            <span className={classNames.join(" ")} {...rest}  >
                {_children}
            </span>
        </>

    );
}


export default Avatar;