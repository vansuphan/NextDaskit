import style from "./FullscreenLayout.module.scss";
import CONFIG from "web.config";

function FullscreenLayout({ children }) {
  return (
    <>
      <div className={style.layout}>{children}</div>
    </>
  );
}

export default FullscreenLayout;
