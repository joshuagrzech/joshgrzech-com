/* eslint-disable @next/next/no-page-custom-font */
import '../styles/globals.css';

import {
  useEffect,
  useState,
} from 'react';

import { initializeApp } from 'firebase/app';
import Head from 'next/head';

import { NextUIProvider } from '@nextui-org/react';

import { MenuBar } from '../components/MenuBar';

const firebaseConfig = {
  apiKey: process.env.FB_KEY,
  authDomain: "joshgrzech-dc893.firebaseapp.com",
  projectId: "joshgrzech-dc893",
  storageBucket: "joshgrzech-dc893.appspot.com",
  messagingSenderId: "341331055951",
  appId: "1:341331055951:web:b0def87cffc85956aba13a",
  measurementId: "G-1R9NW80H3Q",
};
const app = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }) {
  const [size, setSize] = useState({height: 1920, width: 1080})
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth / window.innerHeight < 1.5);
    setSize({height: window.innerHeight, width: window.innerWidth});

    const handleResize = () => {
      setIsMobile(window.innerWidth / window.innerHeight < 1.5);
      setSize({height: window.innerHeight, width: window.innerWidth});
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const desktopHeight = () => {
    if (isMobile) {
      return
    }
    return {
      height: size.height
    };
  }
  return (
    <NextUIProvider>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          backgroundImage: 'linear-gradient( 135deg, #43CBFF 10%, #9708CC 100%)',
          height: isMobile ? "200vh" : "100%",
          position: "sticky",
      
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
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="crossorigin"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,700;1,300&display=swap"
            rel="stylesheet"
          />
        </Head>
        
        <div style={{...desktopHeight(), position: isMobile ? "relative" : "sticky", top: 0, zIndex: 1}}>
          <MenuBar isMobile={isMobile} />
        </div>
       
        <Component {...pageProps} isMobile={isMobile} size={size} firestore={app} />
      
      </div>
    </NextUIProvider>
  );
}

export default MyApp;
