import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Into the Dust: The Virgin - A Burning Man Story by Jack Lyons</title>
        <meta name="description" content="Available in paperback, hardcover and e-book, read Jack Lyons's new novel about the intense, life-changing experiences a woman has on her first trip to Burning Man." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main style={{ flex: "1 1 100%", width: "100%" }}>

      </main>
      <Footer />
    </>
  );
}
