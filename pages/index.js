import React from "react";

import { Button } from "@nextui-org/react";
import { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Slide } from "../components/Slide";
import { Controller, Scene } from "react-scrollmagic";
import { FaChevronCircleUp } from "react-icons/fa";
import Carousel from "../components/Carousel";
import VerticalCarousel from "../components/VerticalCarousel";
import { config } from "react-spring";
import Image from "next/image";
import AppSlide from "../components/AppSlide";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState([
    {
      key: 1,
      content: {
        title: "Streamer",
        subtitle: "Stream your local files in true resolution",
        platforms: ["macOs", "iOS"],
        technologies: ["Swift"],
      },
    },
    {
      key: 2,
      content: {
        title: "Astro",
        subtitle: "A 21st century astrology guide",
        platforms: ["Android", "iOS"],
        technologies: ["React Native", "Swift", "Firebase", "OpenAI"],
        image: "/1024.png",
      },
    },
    {
      key: 3,
      content: {
        title: "whatBill?",
        technologies: ["Firebase", "React Native", "Plaid"],
        platforms: ["iOS", "Android"],
        subtitle: "Track, share, & split bills with housemates",
        image: "/512.png",
      },
    },
    {
      key: 4,
      content: {
        title: "DexLog",
        subtitle: "Keep track of Pokemon Go encounters",
        platforms: ["macOs", "iOS"],
        technologies: ["Swift", "CoreML"],
        href: "/organizer",
        image: "/180.png",
      },
    },

    {
      key: 6,
      content: {
        title: "Organizer",
        subtitle: "Organize anything",
        platforms: ["macOs"],
        technologies: ["Swift"],
        href: "/organizer",
      },
    },
  ]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        margin: "0 auto",
        flex: 1,
      }}
    >
      <VerticalCarousel
        slides={slides}
        offsetRadius={3}
        showNavigation
        animationConfig={config.gentle}
      />
    </div>
  );
}
