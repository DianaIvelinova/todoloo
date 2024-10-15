import Header from "../Components/Header";
import Homepage from "../Components/Homepage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Todoloo</title>
        <meta name="description" content="To-do list created by Diyana Ivanova " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/heart.png" />
      </Head>
      <Header />
      <Homepage />
    </>
  );
}
