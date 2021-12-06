// dependencies
import { useEffect } from "react";

// components
import Layout from "../src/components/layout";

// styles
import "../src/styles/style.css";
import "../src/styles/sections.css";
import "../src/styles/shop.css";

// nucleus
function MyApp({ Component, pageProps }) {
  // locomotive scroll
  useEffect(() => {
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
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
