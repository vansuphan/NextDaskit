import App from "next/app";
import "styles/global.scss";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
