import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.min.css';

const geistSans = localFont({
  src: "./oswald-latin-400-normal.woff",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={geistSans.className} style={{ fontWeight: "bold" }}>
      <Component {...pageProps} />
    </main>
  );
}
