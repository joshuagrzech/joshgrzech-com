import React, { useLayoutEffect } from "react";

import { useState, useRef, useEffect } from "react";

import VerticalCarousel from "../components/VerticalCarousel";
import Image from "next/image";
import HomeItem from "../components/HomeItem";
import { animated, useSpring } from "@react-spring/web";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import { config } from "react-spring";

export default function Home({ firebase, isMobile }) {
  const router = useRouter();
  const [isShowing, setIsShowing] = useState(false);
  const [nextRoute, setNextRoute] = useState(null);
  const transition = useSpring({
    from: {
      transform: isShowing ? `translateX(0%)` : `translateX(-125%)`,
    },
    to: {
      transform: isShowing ? `translateX(0%)` : `translateX(-125%))`,
    },
    onRest: () => {
      !isShowing && router.push(nextRoute);
    },
  });



  const [slides, setSlides] = useState()
  
  useEffect(() => {
    
   const loadSlides = async () => {
    const db = getFirestore(firebase);

    const querySnapshot = await getDocs(collection(db, "portfolio"));

    const slides = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        content: {
          ...doc.data(),
        },
      };
    })
    setSlides(slides);
  }
 
    setIsShowing(true);
    loadSlides();

  }, [firebase]);

  

  const detailClick = (pageName) => {
    setNextRoute(`/apps/${pageName}`);
    setIsShowing(false);
  };

  return (
    <animated.div
      style={{
        ...transition,
        width: "100%",
        height: "100%",
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        marginTop: 10,
        marginBottom: 20,

        display: "flex",
        flexDirection: isMobile ? "row" : "column",
        width: "100%",
        height: "100%",
        margin: "0 auto",
        flex: 1,
        padding: isMobile ? 0 : 50,
        paddingLeft: isMobile ? 25 : 0,
        paddingRight: isMobile ? 25 : 0,
        justifyContent: "space-between",
      }}
    >
       {slides && slides.map((slide, index) => (
        <HomeItem
        isMobile={isMobile}
          detailClick={detailClick}
          slide={slide.content}
          key={index}
          index={index}
        />
      ))}
      
    </animated.div>
  );
}
