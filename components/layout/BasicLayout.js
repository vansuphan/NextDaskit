export default ({
  children,
  background,
  padding,
  margin,
  border,
  borderRadius,
  style,
}) => {
  return (
    <>
      <style jsx>{`
        .layout-basic {
          ${padding ? `padding: ${padding};` : ""}
          ${margin ? `margin: ${margin};` : ""}
          ${background ? `background: ${background};` : ""}
          ${border ? `border: ${border};` : ""}
          ${borderRadius ? `border-radius: ${borderRadius};` : ""}
        }
      `}</style>
      <div className="layout-basic" style={style}>
        {children}
      </div>
    </>
  );
};
