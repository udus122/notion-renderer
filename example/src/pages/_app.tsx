import "katex/dist/katex.min.css";
import "@udus/notion-renderer/styles/globals.css";

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
