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

export default function AppSlide({ slide, visible, index }) {
  const lottieRef = useRef();
  const [opacity, api] = useSpring(() => ({
    opacity: 0,
    height: "0%",
  }));

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        api.start({
          opacity: 1,
          height: "100%",
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
    <>
      <animated.div
        style={{
          position: "absolute",
          height: "120%",
          width: "105%",
          right: "3%",
          backgroundColor: "rgba(255, 253, 255, 1)",
          backdropFilter: "blur(5px)",
          borderRadius: 20,
        }}
      />
      <animated.div
        style={{
          ...opacity,
          position: "absolute",
          width: "100%",
          marginRight: "95%",
          zIndex: 100,
          transform: "rotate(-90deg)",
          fontSize: "10rem",
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          fontFamily: "Menlo",
          textShadow: "0 0 20px rgba(0,0,0,0.5)",
        }}
      >
        {slide.title}
      </animated.div>
      <div
        style={{
          height: "100%",
          width: "100%",
          flexDirection: "row",
          display: "flex",
        }}
      >
        {visible ? (
          <video
            src={slide.video}
            autoPlay
            style={{ zIndex: 100, marginRight: 75 }}
          />
        ) : (
          <Image
            alt="screenshot"
            src="/0.png"
            width={300}
            height={300}
            style={{
              zIndex: 100,
              backgroundBlendMode: "multiply",
            }}
          />
        )}

        <animated.div
          style={{
            ...opacity,
            backgroundColor: "rgba(255, 255, 255, .95)",
            backdropFilter: "blur(5px)",
            boxShadow: "0px 0px 50px rgba(0, 0, 0, .25)",
            width: "50%",
            borderRadius: 20,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ transform: "translateY(-5vh) translateX(-2vw)" }}>
            {slide.image && (
              <Image
                src={slide.image}
                alt={slide.title}
                width={"100vw"}
                height={"100vw"}
                style={{
                  objectFit: "cover",
                  borderRadius: 20,
                }}
              />
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              alignSelf: "center",
              transform: "scale(1.25)",
              marginTop: "-5vh",
              marginBottom: "1vh",
            }}
          >
            {slide.platforms.includes("iOS") && (
              <ReactSVG
                src="/app-store-badge.svg"
                style={{ alignSelf: "center", flex: 1, height: "75%" }}
              />
            )}
            {slide.platforms.includes("Android") && (
              <Image
                src="/google-play-store-badge.png"
                alt="Google Play"
                height={"40%"}
                width={130}
                style={{
                  alignSelf: "center",
                  flex: 1,
                }}
              />
            )}
          </div>
          <div
            style={{
              fontSize: "1.5rem",
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
              fontFamily: "Arial",
            }}
          >
            {slide.subtitle.toUpperCase()}
          </div>
          <div
            style={{
              fontSize: "2rem",
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
              fontFamily: "Menlo",
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              height: "100px",
              width: "75%",
              alignSelf: "center",
              marginTop: 20,
              boxShadow: `inset 0 0 10px rgba(0, 0, 0, 0.5)`,
              backgroundColor: "rgba(0, 0, 0, 0.25)",
              borderRadius: 10,
            }}
          >
            Details
            <FaChevronCircleRight size={50} />
          </div>
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
              flexDirection: "row",
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
      </div>
    </>
  );
}
