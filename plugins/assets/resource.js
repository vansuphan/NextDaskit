import CONFIG from "web.config";

export default (src) => {
  // console.log(CONFIG.NEXT_PUBLIC_CDN_BASE_PATH);
  return (CONFIG.environment == "production") ? CONFIG.NEXT_PUBLIC_CDN_BASE_PATH + src : src;
}