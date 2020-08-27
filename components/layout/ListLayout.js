import CONFIG from "web.config";

class ListItemSize {
  static get AUTO() {
    return "AUTO";
  } // default
  static get STRETCH() {
    return "STRETCH";
  } // default
}

class VerticalListAlign {
  static get LEFT() {
    return "LEFT";
  } // default
  static get CENTER() {
    return "CENTER";
  }
  static get RIGHT() {
    return "RIGHT";
  }
}

class HorizontalListAlign {
  static get TOP() {
    return "TOP";
  } // default
  static get MIDDLE() {
    return "MIDDLE";
  }
  static get BOTTOM() {
    return "BOTTOM";
  }
}

class ListType {
  static get STRETCH() {
    return "STRETCH";
  } // default
  static get SPACE_BETWEEN() {
    return "SPACE_BETWEEN";
  }
  static get SPACE_AROUND() {
    return "SPACE_AROUND";
  }
  static get START() {
    return "START";
  }
  static get CENTER() {
    return "CENTER";
  }
  static get END() {
    return "END";
  }
}

function ListItem({
  key,
  children,
  size,
  background,
  padding,
  margin,
  border,
  borderRadius,
  style,
}) {
  let flexValue = "";

  if (typeof size != "undefined") {
    switch (size) {
      case ListItemSize.STRETCH:
        flexValue = "flex: 1;";
        break;
      case ListItemSize.AUTO:
        flexValue = "flex: 0;";
        break;
      default:
        flexValue = size;
        // console.warn(`ListItemSize of "${size}" is not valid.`);
        break;
    }
  }

  return (
    <>
      <style jsx>{`
        .item {
          ${flexValue}
          ${padding ? `padding: ${padding};` : ""}
          ${margin ? `margin: ${margin};` : ""}
          ${background ? `background: ${background};` : ""}
          ${border ? `border: ${border};` : ""}
          ${borderRadius ? `border-radius: ${borderRadius};` : ""}
        }
      `}</style>
      <div className="item" key={key} style={style}>
        {children}
      </div>
    </>
  );
}

function HorizontalList({
  children,
  type,
  wrap,
  align,
  scrollable = true,
  style,
}) {
  const wrapContent = wrap ? `flex-wrap: wrap;` : `flex-wrap: nowrap;`;

  let justifyContent = "";

  if (typeof type !== "undefined") {
    switch (type) {
      case ListType.SPACE_BETWEEN:
        justifyContent = "justify-content: space-between;";
        break;
      case ListType.SPACE_AROUND:
        justifyContent = "justify-content: space-around;";
        break;
      case ListType.CENTER:
        justifyContent = "justify-content: center;";
        break;
      case ListType.END:
        justifyContent = "justify-content: flex-end;";
        break;
      default:
        // START
        justifyContent = "justify-content: flex-start;";
        break;
    }
  }

  let alignConfig = "";
  if (typeof align !== "undefined") {
    switch (align) {
      case HorizontalListAlign.TOP:
        alignConfig = "align-items: flex-start;";
        break;
      case HorizontalListAlign.MIDDLE:
        alignConfig = "align-items: center;";
        break;
      case HorizontalListAlign.BOTTOM:
        alignConfig = "align-items: flex-end;";
        break;
      default:
        console.warn(`HorizontalListAlign of "${align}" is not valid.`);
        break;
    }
  }

  const scrollConfig = scrollable ? `overflow-x: auto;` : "";

  return (
    <>
      <style jsx>{`
        .layout-list {
          display: flex;
          flex-direction: row;
          ${scrollConfig}
          ${justifyContent}
          ${wrapContent}
          ${alignConfig}
        }
      `}</style>
      <div className="layout-list" style={style}>
        {children}
      </div>
    </>
  );
}

function VerticalList({
  children,
  type,
  wrap,
  align,
  scrollable = true,
  style,
}) {
  const wrapContent = wrap ? `flex-wrap: wrap;` : `flex-wrap: nowrap;`;

  let alignConfig = "";
  if (typeof align !== "undefined") {
    switch (align) {
      case VerticalListAlign.LEFT:
        alignConfig = "align-items: flex-start;";
        break;
      case VerticalListAlign.CENTER:
        alignConfig = "align-items: center;";
        break;
      case VerticalListAlign.RIGHT:
        alignConfig = "align-items: flex-end;";
        break;
      default:
        console.warn(`VerticalListAlign of "${align}" is not valid.`);
        break;
    }
  }

  const scrollConfig = scrollable ? `overflow-y: auto;` : "";

  return (
    <>
      <style jsx>{`
        .layout-list {
          display: flex;
          flex-direction: column;
          ${wrapContent}
          ${alignConfig}
          ${scrollConfig}
        }
      `}</style>
      <div className="layout-list" style={style}>
        {children}
      </div>
    </>
  );
}

function GridList({ children, col }) {
  const wrapContent = `flex-wrap: wrap;`;
  const itemSize = `flex: 0 0 ${Math.round((100 / col) * 100) / 100}%;`;

  let _children = [];
  children.map((child, index) => {
    let _child;
    if (typeof child === "string") {
      _child = (
        <ListItem size={itemSize} key={index}>
          child.props.children
        </ListItem>
      );
    } else {
      _child = React.cloneElement(
        child,
        {
          size: itemSize,
          key: index,
        },
        child.props.children
      );
    }
    _children.push(_child);
  });

  return (
    <>
      <style jsx>{`
        .layout-list {
          display: flex;
          ${wrapContent}
        }
      `}</style>
      <div className="layout-list">{_children}</div>
    </>
  );
}

export {
  HorizontalList,
  VerticalList,
  GridList,
  ListItem,
  ListItemSize,
  ListType,
  VerticalListAlign,
  HorizontalListAlign,
};
