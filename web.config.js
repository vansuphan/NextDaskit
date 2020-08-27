const CONFIG = {
  environment: process.env.NEXT_PUBLIC_ENV || "development",
  site: {
    title: "Website",
    description: "Lorem ipsum dolor sid amed",
  },
  links: {
    facebookPage: "https://www.samsung.com/vn/smartphones/galaxy-note20/",
  },
  // these variables can be exposed to front-end:
  NEXT_PUBLIC_FB_APP_ID: process.env.NEXT_PUBLIC_FB_APP_ID || "",
  NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || "",
  NEXT_PUBLIC_API_BASE_PATH: process.env.NEXT_PUBLIC_API_BASE_PATH || "",
  NEXT_PUBLIC_CDN_BASE_PATH: process.env.NEXT_PUBLIC_CDN_BASE_PATH || "",
  NEXT_PUBLIC_APP_DOMAIN: process.env.NEXT_PUBLIC_APP_DOMAIN || "",
  // some secret keys which won't be exposed to front-end:
  SOME_SECRET_KEY: process.env.SOME_SECRET_KEY || "",
};

if (typeof window != "undefined") window.__config__ = CONFIG;

export default CONFIG;
