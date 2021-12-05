import { useEffect } from "react";

import Layout from "../components/layout";

import "../styles/style.css";
import "../styles/sections.css";
import "../styles/shop.css";

function MyApp({ Component, pageProps }) {
  // locomotive scroll
  useEffect(() => {
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: true,
        touchMultiplier: 0.3,
        resetNativeScroll: true,
        lerp: 0.085,
      });
    });

    return () => scroll.destroy();
  });

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
