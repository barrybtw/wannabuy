import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StrictMode, Suspense } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(typeof []);

  return (
    <StrictMode>
      <Suspense fallback={<>Loading... Something went wrong.</>}>
        <Component {...pageProps} />
      </Suspense>
    </StrictMode>
  );
}

export default MyApp;
