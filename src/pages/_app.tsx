import "styles/globals.css";
import type { AppProps } from "next/app";

// フォント適用
import { Gloock } from "next/font/google";
const gloock = Gloock({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={gloock.className}>
      <Component {...pageProps} />;
    </div>
  );
}
