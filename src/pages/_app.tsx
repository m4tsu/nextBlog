import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "@/lib/gtag";
import Layout from "../components/layouts/Layout";
import "../styles/global.css";

const App = ({ Component, pageProps }: AppProps) => {
  console.log(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID);
  const router = useRouter();
  useEffect(() => {
    if (!gtag.existsGaId) {
      return;
    }

    const handleRouteChange = (path: string) => {
      gtag.pageview(path);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
