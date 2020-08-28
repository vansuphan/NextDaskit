import Head from "next/head";
import Header from "../element/Header";
import Footer from "../element/Footer";
import CONFIG from "web.config";
import { useRouter } from "next/router";

function MasterPage({ pageName, children }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          {CONFIG.site.title} | {pageName || "Trang chủ"}
        </title>
        
        <meta name="description" content={CONFIG.site.description}></meta>

        <meta property="og:title" content={CONFIG.site.title} />
        <meta property="og:description" content={CONFIG.site.description} />
        <meta
          property="og:url"
          content={CONFIG.NEXT_PUBLIC_BASE_PATH + router.asPath}
        />
        <meta
          property="og:image"
          content={`${CONFIG.NEXT_PUBLIC_BASE_PATH}/share.png`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="fb:app_id" content={CONFIG.NEXT_PUBLIC_FB_APP_ID} />
        <script src="js/charts.js"></script>
        {/* <script src="js/Chart.extension.js"></script> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,700;1,400;1,700&family=Lora:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}

export default MasterPage;
