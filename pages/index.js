import React from "react";

import { useState, useRef, useEffect } from "react";

import VerticalCarousel from "../components/VerticalCarousel";
import Image from "next/image";
import HomeItem from "../components/HomeItem";


export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

 


  const [slides, setSlides] = useState([
    
    {
      key: 2,
      content: {
        title: "Astro",
        subtitle: "A 21st century astrology guide",
        platforms: ["Android", "iOS"],
        technologies: ["React Native", "Swift", "Firebase", "OpenAI"],
        image: "/1024.png",
        video: "./astro.mp4",
        color: "rgb(214, 180, 244)",
        backPic: "/astro-back.png"
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
        color: "rgb(253, 219, 3)",
        backPic: "/whatbill-back.png"

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
        backPic: "/catchlog-back.png",
        color: "rgb(16, 19, 244)"

      },
    },
    {
      key: 1,
      content: {
        title: "Streamer",
        subtitle: "Stream your local files in true resolution",
        platforms: ["macOs", "iOS"],
        technologies: ["Swift"],
        video: "./streamer.mp4",
        backPic: "/astro-back.png",
        color: "rgb(155, 155, 156)",
        image: "/streamer-icon.png",

      },
    },
  ]);

  const renderRow = (slides) => {
    return 
  }
  

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        
        width: "100%",
        height: "100%",
        margin: "0 auto",
        flex: 1,
        padding: 50,
        justifyContent: "center",
      }}
    >
      
        {slides.map((slide, index) => (
      
    
      <HomeItem slide={slide.content} key={index} index={index}/>

  ))}

  
    </div>
  );
}
