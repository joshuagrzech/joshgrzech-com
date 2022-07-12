import React from "react";

import { useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";

import {
  FaChevronCircleRight,

} from "react-icons/fa";


import HoverButton from "./HoverButton";
import SlideTechnology from "./SlideTechnology";

export default function AppSlide({ slide, visible, index, detailClick, isMobile }) {
  const [opacity, api] = useSpring(() => ({
    opacity: 0,
    height: "0%",
  }));

  const videoOpacity = useSpring({
    delay: 500,
    from: { opacity: 0 },
    to: { opacity: visible ? 1 : 0 },
  });

  const picOpacity = useSpring({
    delay: 200,
    from: { opacity: 1 },
    to: { opacity: visible ? 0 : 1 },
  });

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        api.start({
          opacity: 1,
          height: "50%",
        });
      }, 1000);
    } else {
      api.start({
        opacity: 0,
        height: "0%",
      });
    }
  }, [visible, api]);
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: "center"}}>
      <animated.div
        style={{
          ...opacity,
          width: "100%",
          zIndex: 100,
          fontSize: isMobile ? "3rem" :  "6rem",
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          fontFamily: "Barlow",
          textShadow: "0 0 20px rgba(0,0,0,0.5)",

        }}
      >
        {slide.title}
      </animated.div>

      <div
        style={{
          height: "65%",
          width: "90%",
          flexDirection: isMobile ? "column" : "row",
          display: "flex",
          alignContent: "center",
          alignSelf: 'center',
          backgroundColor: slide.color,
          borderRadius: 10,
          boxShadow: "0 0 20px inset rgba(0,0,0,0.5)",
          paddingTop: "20px",
        }}
      >
        {visible && (
          <animated.div style={{ ...videoOpacity, flex: 1, display: 'flex', zIndex: 100, justifyContent: 'center'  }}>
            <video
              src={slide.video}
              autoPlay={true}
              muted={true}
              playsInline={true}
              style={{width: isMobile ? window.innerWidth - 100 : "340px", alignSelf: 'center', overflow: 'hidden'}}
            />
          </animated.div>
        )}

        <animated.div
          style={{
            ...opacity,
            marginTop: "5%",
            flexDirection: "column",
            display: "flex",
            alignContent: "center",
            flex: 1,
          }}
        >
          <div
            style={{
              width: "100%",
              fontSize: isMobile ? "1.5rem" :  "2rem",
              fontWeight: "bold",
              color: 'white',
              fontStyle: "italic",
              textAlign: "center",
              fontFamily: "Barlow",
              marginBottom: "10%",

              textShadow: "0 0 10px rgba(0,0,0,0.25)",
            }}
          >
            {slide.subtitle.toUpperCase()}
          </div>
          <animated.div
            style={{
              ...opacity,
              marginBottom: "15%",
              backgroundColor: "rgba(255, 255, 255, .95)",
              backdropFilter: "blur(5px)",
              boxShadow: "0px 0px 50px rgba(0, 0, 0, .25)",
              borderRadius: 20,
              display: "flex",
              flexDirection: "column",
              width: isMobile ? window.innerWidth - 150 : "95%",
         
              padding: isMobile ? 0 : 20,
              alignSelf: "center",
            }}
          >
            <HoverButton onClick={
              () => detailClick(slide.route)
            }
             style={{ fontSize: "2rem",
                color: "black",
                fontWeight: "bold",
                textAlign: "center",
                fontFamily: "Menlo",
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, .35)",
                alignSelf: "center",
                marginTop: 20,
                color: 'white',
                backgroundColor: slide.color,
                borderRadius: 10,   padding: 10, height: "75px",
                width: "75%"}}>
            
              Details
              <FaChevronCircleRight size={50} />
            </HoverButton>
            <SlideTechnology  slide={slide} />
          </animated.div>
        </animated.div>
      </div>
    </div>
  );
}
