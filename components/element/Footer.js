import Svg from "../image/Svg"

function Footer() {
  return (
    <div className="footer">
      <style jsx>{`
        .footer {
          border-top: 1px solid #eee;
          font-family: "Cabin";

          .holder {
            padding: 60px 0;
          }

          p, li {
            color: #979797;
          }

          h2 {
            font-family: "Playfair Display";
            font-weight: 900;
            margin: 0;
          }
          
          .holder {
            display: flex;
          }
          .info {
            flex-grow: 1;
          }

          .info p {
            max-width: 300px;
          }

          .shortcut {
            padding: 0 30px;
            font-size: 16px;

            h3 {
              font-size: 18px;
            }

            li {
              display: block;
              line-height: 1.8em;
            }
          }

          .social li {
            display: inline-block;
            margin-right: 10px;
          }

          .copyright {
            border-top: 1px solid #eee;
            padding: 30px 0;
            display: flex;
            justify-content: space-between;

            p, ul {
              margin: 0;
              line-height: normal;
            }
            li {
              cursor: pointer;
              padding: 0 20px;
            }
            li:last-child {
              padding-right: 0;
            }
          }
        }
      `}</style>
      <div className="container">
        <div className="holder">
          <div className="info">
            <h2>DigiNEXT</h2>
            <p>A Next.js Framework for DIGITOP / T.O.P Group</p>
          </div>
          <div className="shortcut social">
            <h3>Social connect</h3>
            <ul>
              <li><Svg src="icons/icon-social-fb" /></li>
              <li><Svg src="icons/icon-social-youtube" /></li>
              <li><Svg src="icons/icon-social-insta" /></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>©2020 - T.O.P Group Vietnam. All Right Reserved.</p>
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer