import React, {
  useEffect,
  useState,
} from 'react';

import {
  collection,
  getDocs,
  getFirestore,
} from 'firebase/firestore';
import { useRouter } from 'next/router';

import {
  animated,
  useSpring,
} from '@react-spring/web';

import HomeItem from '../components/HomeItem';

export default function Home({ firebase, isMobile, size }) {
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
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        marginTop: 10,
        marginBottom: 20,
        display: "flex",
        flexDirection: isMobile ? "row" : "column",
        
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
