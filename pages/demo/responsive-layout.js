import BlankMasterPage from "components/page/BlankMasterPage";
import {
  HorizontalList,
  VerticalList,
  ListItem,
  ListItemSize,
} from "components/layout/ListLayout";
import BasicLayout from "components/layout/BasicLayout";

export default function ResponsiveLayoutExample(props) {
  return (
    <BlankMasterPage>
      <HorizontalList>
        <ListItem size={ListItemSize.STRETCH}>
          <VerticalList>
            <ListItem>
              <h2>This is item 1</h2>
            </ListItem>
            <ListItem>
              <h2>This is item 2</h2>
            </ListItem>
            <ListItem>
              <h2>This is item 3</h2>
            </ListItem>
          </VerticalList>
        </ListItem>

        <BasicLayout
          background="#dadada"
          padding="30px"
          style={{ width: "400px", height: "100vh" }}
        >
          <h2>This is side bar</h2>
          <VerticalList>
            <li>Post 1</li>
            <li>Post 2</li>
            <li>Post 3</li>
            <li>Post 4</li>
          </VerticalList>
        </BasicLayout>
      </HorizontalList>
    </BlankMasterPage>
  );
}
