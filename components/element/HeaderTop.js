import Link from "next/link";
import ButtonOutline from "components/button/ButtonOutline";
import Svg from "components/image/Svg";
import Menu from "components/menu/MenuTop"
import config from "web.config";
export default function Header() {

  const iconColor = "#979797";

  return (
    <header className="header">
      <div className="container">
        <div className="col left">
          <Link href="/">
            <img alt={config.site.title} src="/images/header_logo.png" />
          </Link>
        </div>
        <Menu></Menu>
        <div className="col right">
        
        </div>
      </div>
      <style jsx>{`
        .header {
          width: 100%;
          height: 72px;
          box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
          .col {
            height: 100%;
          }
          .left {
            float: left;
            padding: 12px 0;

            img {
              height: 100%;
            }
          }
          .right {
            float: right;
            line-height: 72px;

            ul {
              display: inline-block;
              vertical-align: middle;
              line-height: 0;
            }

            li {
              vertical-align: middle;
              margin-right: 24px;
              line-height: 0;
            }

            li:last-child {
              margin-right: 0;
            }
          }
        }
      `}</style>

    </header>
  );
}
