import Image from "next/image";

import { FaGithub, FaTwitter, FaYoutube, FaLinkedin, FaSleigh } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";

import { MenuButton } from "./MenuButton";
import Lottie from "lottie-react";
import * as menuButton from "../components/menu-button.json";

export const MenuBar = ({ isMobile }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [styles, api] = useSpring(() => ({ translateX: -500 }));
  const [mobileExpanded, setMobileExpanded] = useState();
  const lottieRef = useRef();
  const { asPath } = useRouter();

  const mobileHeight = useSpring({
    from: {
      height: isMobile ? mobileExpanded ? `${height - 50}px` : "150px" : "100%"
    },
    to: {
      height: isMobile ? mobileExpanded ? `${height - 50}px` : "150px" : "100%"
    }
  });

  useEffect(() => {

    if (isMobile === false) {
      setMobileExpanded(true);
      api.start({ translateX: 0 });
    } else {
      setMobileExpanded(false);
    }

    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    
  }, [api, isMobile]);

  const defaultOptions = {
    autoplay: false,
    animationData: menuButton,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (

      
      
      <animated.nav
        style={{
          ...styles,
          ...mobileHeight,
          background: 'linear-gradient(to bottom, rgba(40,48,72, 0.5), rgba(133,147,152, 0.5))',

          backdropFilter: "blur(5px) opacity(0.5)",
        
          boxShadow: "0px 0px 50px rgba(0, 0, 0, .25)",
          textAlign: "center",
          display: "flex",
          padding: mobileExpanded ? 50 : 0,
          width: isMobile ? "100%" : width * 0.2,
          justifyContent: "space-between",
     
          
        }}
      >
        
        <div style={{position: 'absolute', zIndex: 100, top: 20, left: 20, display: "flex", flexDirection: "row"}}>
        
        {isMobile === true && (
          <>
          <Lottie
           onClick={() => {
            if (mobileExpanded === true) {
             lottieRef.current.setDirection(-1)
             lottieRef.current.play()
             setMobileExpanded(false);
           } else {
             lottieRef.current.setDirection(1)
             lottieRef.current.play()
             setMobileExpanded(true)
           }
         }}
          animationData={menuButton}
          style={{ height: 100, width: 100, flex: 1}}
          autoplay={false}
          loop={false}
          lottieRef={lottieRef}
        />
          <animated.img
            src="/jglogo.png"
            width={150}
            height={75}
            alt="logo"
            style={{ marginLeft: width * 0.5, marginTop: 10 }}
          />
          </>
          )}
        </div>
        
        <animated.div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            opacity: mobileExpanded === false ? 0 : 1,
          }}
        >
          {isMobile === false && (
          <Image
            src="/jglogo.png"
            width={isMobile ? "200px" : "300px"}
            height={isMobile ? "100px" : "150px"}
            alt="logo"
          />
          )}
          <MenuButton
            href="/"
            selected={asPath === "/" || asPath.includes("/apps")}
            title="Apps"
          />
          <MenuButton
            href="/articles"
            selected={asPath === "/articles"}
            title="Articles"
          />
          <MenuButton
            href="/about"
            selected={asPath === "/about"}
            title="About"
          />
          <MenuButton
            href="/contact"
            selected={asPath === "/contact"}
            title="Contact"
          />

          <div
            style={{
              flex: 1,
              flexDirection: "row",
              display: "flex",
              marginBottom: 20,
              marginTop: 70,
            }}
          >
            <FaGithub size={50} color="white" style={{ marginRight: 10 }} />
            <FaTwitter size={50} color="white" style={{ marginRight: 10 }} />
            <FaYoutube size={50} color="white" style={{ marginRight: 10 }} />
          </div>
        </animated.div>
      </animated.nav>

  );
};
