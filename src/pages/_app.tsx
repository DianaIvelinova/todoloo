import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.min.css';

const getOswaldLatin = localFont({
  src: "./VT323-Regular.woff",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={getOswaldLatin.className} style={{ fontWeight: "bold" }}>
      <Component {...pageProps} />
    </main>
  );
}
