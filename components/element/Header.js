import Link from "next/link";
import ButtonOutline from "components/button/ButtonOutline";
import Svg from "components/image/Svg";
import config from "web.config";

export default function Header() {
  const iconColor = "#979797";
  // <div className={styles.right}>

  return (
    <header className="header">
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

      <div className="container">
        <div className="col left">
          <Link href="/">
            <img alt={config.site.title} src="/images/header_logo.png" />
          </Link>
        </div>
        <div className="col right">
          <ul className="icons">
            <li>
              <Svg src="icons/close" fill={iconColor} />
            </li>
            <Link href="/terms">
              <li>
                <ButtonOutline text="Sign in" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}
