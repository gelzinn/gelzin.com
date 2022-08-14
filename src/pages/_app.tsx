import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { GlobalStyles } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <>
      {!isSSR && (
        <>
          <Component {...pageProps} />
          <GlobalStyles />
        </>
      )}
    </>
  );
}

export default MyApp;
