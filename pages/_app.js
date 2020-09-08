import App from "next/app";
import "styles/global.scss";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
