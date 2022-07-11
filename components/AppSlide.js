import React from "react";

import { Button } from "@nextui-org/react";
import { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";

import {
  FaChevronCircleRight,
  FaReact,
  FaRobot,
  FaSwift,
} from "react-icons/fa";

import Image from "next/image";
import { ReactSVG } from "react-svg";

import { SiFirebase } from "react-icons/si";
import HoverButton from "./HoverButton";

export default function AppSlide({ slide, visible, index, detailClick, isMobile }) {
  const lottieRef = useRef();
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
    <div style={{ flex: 1 }}>
      <animated.div
        style={{
          ...opacity,
          width: "100%",
          zIndex: 100,
          fontSize: isMobile ? "3rem" :  "7rem",
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
          height: "100%",
          width: "100%",
          flexDirection: isMobile ? "column" : "row",
          display: "flex",
          alignContent: "center",
        }}
      >
        {visible && (
          <animated.div style={{ ...videoOpacity, flex: 1 }}>
            <video
              src={slide.video}
              autoPlay={true}
              muted={true}
              playsInline={true}
              style={{ zIndex: 100, width: isMobile ? "100%" : "85%", height: "65%" }}
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
              fontSize: isMobile ? "1rem" :  "2rem",
              fontWeight: "bold",
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
              marginRight: isMobile ? 0 : 50,
              marginLeft: isMobile ? "15%" : 0,
              padding: isMobile ? 0 : 20,
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
            
                alignSelf: "center",
                marginTop: 20,
                backgroundColor: "rgba(0, 0, 0, 0.25)",
                borderRadius: 10,   padding: 10, height: "150px",
                width: "75%"}}>
            
              Details
              <FaChevronCircleRight size={50} />
            </HoverButton>
            <div
              style={{
                fontSize: "1.5rem",
                color: "black",
                fontWeight: "bold",
                textAlign: "center",
                fontFamily: "Menlo",
                marginTop: "5vh",
              }}
            >
              Built with:
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                marginTop: "1vh",
                alignSelf: "center",
              }}
            >
              {slide.technologies.includes("Swift") && (
                <div
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, .5)",
                    backdropFilter: "blur(5px)",
                    color: "white",
                    borderRadius: 20,
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, .25)",
                    textAlign: "center",

                    padding: "10px",
                    margin: "10px",
                  }}
                >
                  <FaSwift
                    size={75}
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)",
                      borderRadius: 20,
                      padding: "10px",
                      margin: "10px",
                      boxShadow: "0px 0px 10px rgba(0, 0, 0, .25)",
                    }}
                  />
                  Swift
                </div>
              )}
              {slide.technologies.includes("React Native") && (
                <div
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundImage:
                      "linear-gradient(to top, rgba(0, 198, 251, 0.75) 0%, rgba(0, 91, 234, 0.75) 100%)",
                    backdropFilter: "blur(5px)",
                    color: "white",
                    borderRadius: 20,
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, .25)",
                    padding: "10px",
                    margin: "10px",
                    textAlign: "center",
                    fontFamily: "Menlo",
                    textShadow: "0 0 10px rgba(0,0,0,0.5)",
                  }}
                >
                  <FaReact size={75} />
                  React Native
                </div>
              )}
              {slide.technologies.includes("OpenAI") && (
                <div
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundImage:
                      "linear-gradient(to top, #a3bded 0%, #6991c7 100%)",
                    backdropFilter: "blur(5px)",
                    color: "white",
                    borderRadius: 20,
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, .25)",
                    padding: "10px",
                    textAlign: "center",
                    margin: "10px",
                  }}
                >
                  <FaRobot size={75} />
                  OpenAI GPT3
                </div>
              )}
              {slide.technologies.includes("Firebase") && (
                <div
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundImage:
                      "linear-gradient(to right, rgba(248, 54, 0, 0.75) 0%, rgba(249, 212, 35, 0.75) 100%)",
                    backdropFilter: "blur(5px)",
                    color: "white",
                    borderRadius: 20,
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, .25)",
                    padding: "10px",
                    margin: "10px",
                    textAlign: "center",
                    fontFamily: "Roboto",
                    textShadow: "0 0 10px rgba(0,0,0,0.5)",
                  }}
                >
                  <SiFirebase size={75} style={{}} />
                  Google Firebase
                </div>
              )}
              {slide.technologies.includes("Plaid") && (
                <div
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, .5)",

                    backdropFilter: "blur(5px)",
                    color: "white",
                    borderRadius: 20,
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, .25)",
                    padding: "10px",
                    margin: "10px",
                    textAlign: "center",
                    fontFamily: "Roboto",
                    textShadow: "0 0 10px rgba(0,0,0,0.5)",
                  }}
                >
                  <Image
                    src={"/plaid.png"}
                    alt="Plaid"
                    height={"75px"}
                    width={"75px"}
                  />
                  Plaid API
                </div>
              )}
              {slide.technologies.includes("CoreML") && (
                <div
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, .5)",

                    backdropFilter: "blur(5px)",
                    color: "white",
                    borderRadius: 20,
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, .25)",
                    padding: "10px",
                    margin: "10px",
                    textAlign: "center",
                    fontFamily: "Roboto",
                    textShadow: "0 0 10px rgba(0,0,0,0.5)",
                  }}
                >
                  <Image
                    src={"/core-ml.png"}
                    alt="Core ML"
                    height={"75px"}
                    width={"75px"}
                  />
                  CoreML
                </div>
              )}
            </div>
          </animated.div>
        </animated.div>
      </div>
    </div>
  );
}
