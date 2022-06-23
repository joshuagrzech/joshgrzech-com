import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { MenuBar } from "../components/MenuBar";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundImage: "linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <MenuBar />
        <Component {...pageProps} />
      </div>
    </NextUIProvider>
  );
}

export default MyApp;
