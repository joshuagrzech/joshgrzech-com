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


import { SiFirebase } from "react-icons/si";
import TechCard from "./TechCard";

export default function SlideTechnology({
  slide,
 
  isMobile,
}) {

  return (
    <div style={{ flex: 1, alignSelf: 'center'}}>
      <div
        style={{
          fontSize: "2rem",
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
         <TechCard>
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
            </TechCard>
        )}
        {slide.technologies.includes("React Native") && (
         <TechCard
            backgroundImage={"linear-gradient(to top, rgba(0, 198, 251, 0.75) 0%, rgba(0, 91, 234, 0.75) 100%)"}
            >
            <FaReact size={75} />
            React Native
          
          </TechCard>
        )}
        {slide.technologies.includes("OpenAI") && (
          <TechCard
            backgroundImage={"linear-gradient(to top, #a3bded 0%, #6991c7 100%)"}
          >
            <FaRobot size={75} />
            OpenAI GPT3
          </TechCard>
        )}
        {slide.technologies.includes("Firebase") && (
          <TechCard backgroundImage={"linear-gradient(to right, rgba(248, 54, 0, 0.75) 0%, rgba(249, 212, 35, 0.75) 100%)"}>
            <SiFirebase size={75} style={{}} />
            Google Firebase
            </TechCard>
        )}
        {slide.technologies.includes("Plaid") && (
          <TechCard
          >
            <Image
              src={"/plaid.png"}
              alt="Plaid"
              height={"75px"}
              width={"75px"}
            />
            Plaid API
          </TechCard>
        )}
        {slide.technologies.includes("CoreML") && (
          <TechCard
            
          >
            <Image
              src={"/core-ml.png"}
              alt="Core ML"
              height={"75px"}
              width={"75px"}
            />
            CoreML
          </TechCard>
        )}
      </div>
    </div>
  );
}
