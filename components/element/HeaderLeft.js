import Link from "next/link";
import config from "web.config";
import ButtonCustomizeTemplate from "components/button/CustomTemplate";
import Notify from "components/bellNotify/BellNotify";
import {SearchFullSize} from "components/search/Search";
import Menu from "components/menu/MenuLeft";

const dataTest = [
  {
      title:"Hello guy",
      textContent: "It's a broader card with text below as a natural lead-in to extra content.",
      timer: 1, 
  },
  {
    title: "Alphazap",
    textContent: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    timer: 65
  }, {
    title: "Voyatouch",
    textContent: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    timer: 59
  }, {
    title: "Lotlux",
    textContent: "Fusce consequat. Nulla nisl. Nunc nisl.",
    timer: 17
  }
]

export default function Header() {

  const iconColor = "#979797";
  
  return (
    <header className="header-left">
      <div className="container">
        <div className="logo">
          <Link href="#">
            <img alt={config.site.title} src="/images/header_logo.png" />
          </Link>
        </div>
        <div className="content">
          <Menu></Menu>
        </div>
        <div className="btn-customize">
            <ButtonCustomizeTemplate
              alignSelf={"flex-end"}>
            </ButtonCustomizeTemplate>
        </div>
        <div className="bottom">
           <div className={"notify"}>
                <Notify></Notify>
           </div>
           <div className={"avatar"}>
                <img alt="" src={"images/avatar-sm.png"}/>
                <span className="statusActive bg-success"></span>
           </div>
           <div className={"search"}>
                <SearchFullSize
                  dataSearch={dataTest}>
                </SearchFullSize>
           </div>
        </div>
      </div>
      <style jsx>{`
        .header-left {
          width: 250px;
          height: 100vh;
          position : fixed;
          left : 0;
          top : 0;
          box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
          z-index: 2;
          opacity: 1;
          transition: 0.3s;

        }
        .container {
            position: relative;
            width: 100%;
            height: 100%;
            max-width: 1180px;
            margin: auto;
            display:flex;
            flex-direction: column;
        }
        .content{
            padding: 10px 20px;
            display:flex;
            flex-direction:column;
            max-height : 100%;
            height: 100%;
            overflow: hidden;
            overflow-y: auto;
            &::-webkit-scrollbar-track{
              -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
              border-radius: 10px;
              background-color: #F5F5F5;
            }
            &::-webkit-scrollbar{
              width: 5px;
              background-color: #F5F5F5;
              border-radius:2px;
            }
            &::-webkit-scrollbar-thumb{
              border-radius: 10px;
              -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
              background-color: rgb(180, 175, 175);
            }
            
        }
        .bottom{
            height: 80px;
            padding: 10px 20px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
        }
        .logo{
            display:flex;
            justify-content: center;
            width : 100%;
            padding : 20px;
            cursor: pointer;
            img{
                max-width:60%;
            }
        }
        .btn-customize{
            padding: 10px 20px;
        }
        .notify,.search{
            width : 17px;
        }
        .avatar{
            width:40px;
            height:40px;
            display:flex;
            border-radius: 100%;
            align-items: center;
            justify-content: center;
        }
      `}</style>

    </header>
  );
}
