import React from "react";

import { useState, useRef, useEffect } from "react";

import VerticalCarousel from "../components/VerticalCarousel";
import { config } from "react-spring";

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
        video: "./streamer.mp4",
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
        video: "./astro.mp4",
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
        video: "./whatbill.mp4",
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
        video: "./catchlog.mp4",
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
