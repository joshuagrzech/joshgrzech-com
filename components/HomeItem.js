import React, { useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";
import Image from "next/image";
import AppSlide from "./AppSlide";

const HomeItem = ({ slide, index, detailClick, isMobile }) => {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const springApi = useSpringRef();

  const background = useSpring({
    height: isMobile ? "50%" : "95%",
          width: hover ? isMobile ? "95%" : "75%" : "0%",
    backgroundColor: hover ? slide.color : "rgba(0,0,0,0)",
    boxShadow: hover ? "0 0 20px rgba(0,0,0,0.5)" : "0 0 10px rgba(0,0,0,0.0)",
  });
  const appIcon = useSpring({
    transform: isMobile ?  hover ? "scale(1)" : "scale(0.75)" : hover ? "scale(1.5)" : "scale(1)",
    opacity: hover ? 1 : 0.75,
    zIndex: hover ? 1000 : 1,
  });

  return (
    <div style={{marginTop: 20, marginBottom: 20, marginLeft: isMobile ? 0 : 50 }} onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}>
        <animated.img
          src={slide.image ? slide.image : "/"}
          alt={slide.title}
          width={100}
          height={100}
          style={{ borderRadius: 20, ...appIcon }}
          
        />
        {hover && (
            
      <animated.div
        style={{
          ...background,
          position: "absolute",
          top: isMobile ? 150 : 15,
          left: isMobile ? 10 : "15%",
     
          borderRadius: 20,
        }}
        onClick={() => setOpen(true)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <AppSlide isMobile={isMobile} detailClick={detailClick} slide={slide} index={index} visible={hover} />
        
      </animated.div>
      
        )}
    </div>
  );
};

export default HomeItem;
