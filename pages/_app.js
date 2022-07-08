import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { MenuBar } from "../components/MenuBar";
import { useEffect, useState } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#0093E9",
          backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",

          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Head>
          <title>The Z is Silent</title>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          ></link>
          <link rel="manifest" href="/site.webmanifest"></link>
          <link
            rel="mask-icon"
            href="/safari-pinned-tab.svg"
            color="#5bbad5"
          ></link>
          <meta name="msapplication-TileColor" content="#da532c"></meta>
          <meta name="theme-color" content="#ffffff"></meta>
        </Head>
        <MenuBar />
        <Component {...pageProps} />
      </div>
    </NextUIProvider>
  );
}

export default MyApp;
