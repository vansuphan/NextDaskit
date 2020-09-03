import {MainContentContext} from "contexts/MainContentContext";
import {useContext} from "react";
import HeaderLeft from "components/element/HeaderLeft";
import HeaderTop from "components/element/HeaderTop";
import NavigationRight from "components/Navigation/NavigationRight";
export default ({children,style}) => {
  const valuesContext = useContext(MainContentContext);
  // {
  //  header
  //   className,
  //   setClass,
  //   background,
  //   setBgWhite,
  //   setBgBlack,
  // }
  return (
    <>
      {valuesContext.header === "top" ? <HeaderTop/> : <HeaderLeft/>}
      <div className={valuesContext.className} style={style}>
        {children}
        
      </div>
      <NavigationRight/>
      <style global jsx>{`
        body {
          background:${valuesContext.background};
          transition : 0.3s;
        }
        @media (min-width: 768px){
          .main-content {
            margin-left: 250px;
            padding : 0 20px;
          }
        }
      `}</style>
    </>
  );
};
