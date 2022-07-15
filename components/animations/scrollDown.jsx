import Lottie from "lottie-react";
import { isMobile, isSafari } from "react-device-detect";
import scrollDownAnimation from "./scroll-down.json";

const ScrollDown = () => {
  return <Lottie id="scrollDown" animationData={scrollDownAnimation} loop style={{ position: 'fixed', zIndex: 5, height: 200, bottom: '1vh', right:  isMobile ? isSafari ? '-20vw' : 0 : isSafari ? '-4vw' : '0vw' }} />;
};

export default ScrollDown;