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
          background:
            "linear-gradient(90deg, hsla(202, 71%, 27%, 1) 0%, hsla(176, 45%, 66%, 1) 100%)",
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
