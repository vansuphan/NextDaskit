import {MainContentContext} from "contexts/MainContentContext";
import {useContext} from "react";

export default ({children,style}) => {
  const {
    className,
    setClass,
    background,
    setBgWhite,
    setBgBlack,
  } = useContext(MainContentContext);
  return (
    <>
      <div className={className} style={style}>
        {children}
      </div>

      <style global jsx>{`
        body {
          background:${background};
          transition : 0.3s;
        }
        @media (min-width: 768px){
          .main-content {
            margin-left: 250px;
          }
        }
      `}</style>
    </>
  );
};
