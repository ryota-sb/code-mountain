import "styles/globals.css";
import type { AppProps } from "next/app";

// フォント適用
import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"], weight: "200" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={raleway.className}>
      <Component {...pageProps} />
    </div>
  );
}
