import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
