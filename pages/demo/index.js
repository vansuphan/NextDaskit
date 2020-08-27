import MasterPage from "components/page/MasterPage";
import resource from "plugins/assets/resource";
import CONFIG from "web.config";
import BasicLayout from "components/layout/BasicLayout";
import AppLink from "components/link/AppLink";

export default function DemoHome(props) {
  // console.log(props);
  // console.log(CONFIG);

  return (
    <MasterPage>
      <BasicLayout padding="50px">
        <style jsx>{`
          ul {
            display: block;
            padding: 20px 0;
          }
          li {
            list-style-type: disc;
            display: list-item;
            line-height: 1.5;
            list-style: disc;
            font-size: 18px;
            margin-left: 20px;
          }
        `}</style>
        <h1>List of all available demos</h1>
        <div>Examples:</div>
        <div>
          <ul>
            <li>
              <AppLink href="/demo/list-layout">
                List layout (Horizontal, Vertical, Grid)
              </AppLink>
            </li>
            <li>
              <AppLink href="/demo/request-api">
                How to fetch API for data
              </AppLink>
            </li>
            <li>
              <AppLink href="/demo/dynamic/12345">
                Parsing dynamic URL params
              </AppLink>
            </li>
            <li>
              <AppLink href="/demo/responsive-layout">
                Responsive layout exmaple 1
              </AppLink>
            </li>
          </ul>
        </div>
      </BasicLayout>
    </MasterPage>
  );
}
