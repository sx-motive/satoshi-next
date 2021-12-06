// dependencies
import Head from "next/head";

// components
import Headpage from "../src/components/headpage";

// nucleus
export default function Home() {
  return (
    <>
      <Head>
        <title>Satoshi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Headpage title="Home" description=" " />
    </>
  );
}
