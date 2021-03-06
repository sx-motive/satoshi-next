// dependencies
import Head from "next/head";

// components
import Headpage from "../src/components/headpage";

// nucleus
export default function Constacts() {
  return (
    <>
      <Head>
        <title>Contacts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Headpage title="Constacts" description=" " />
    </>
  );
}
