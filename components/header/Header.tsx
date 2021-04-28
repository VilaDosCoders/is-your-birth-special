import Head from "next/head";
import { Fragment } from "react";

export default function Header() {
  return (
    <Fragment>
      <Head>
        <title>Is your birthday Special?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Is your birthday special?</h1>
        <p>
          put in your birthday date and discover if something special was
          happening
        </p>
        <p>or not</p>
      </main>
    </Fragment>
  );
}
