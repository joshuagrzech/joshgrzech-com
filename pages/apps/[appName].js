import React, {
  useEffect,
  useState,
} from 'react';

import {
  doc,
  getDoc,
  getFirestore,
} from 'firebase/firestore';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';

import {
  animated,
  useSpring,
} from '@react-spring/web';

import AppDetail from '../../components/AppDetail';
import HoverButton from '../../components/HoverButton';
import { MenuButton } from '../../components/MenuButton';

export default function Astro({ firebase, isMobile, size }) {
  const [isShowing, setIsShowing] = useState(false);
  const router = useRouter();
  const [slide, setSlide] = useState();
  const [index, setIndex] = useState(0);
  const [featuresShowing, setFeaturesShowing] = useState(true);
  const [devShowing, setDevShowing] = useState(false);
const featuresOpacity = useSpring({
  from: {
    opacity: featuresShowing ? 1 : 0,
  },
  to: {
    opacity: featuresShowing ? 1 : 0,
  },
});
const devOpacity = useSpring({
  from: {
    opacity: devShowing ? 1 : 0,
  },
  to: {
    opacity: devShowing ? 1 : 0,
  },
});

  const changePage = () => {
    setDevShowing(!devShowing);
    setFeaturesShowing(!featuresShowing);
  }

  const transition = useSpring({
    from: {
      transform: isMobile ? "translateX(0)" : isShowing ? `translateX(0%)` : `translateX(125%)`,
      width: size.width * 0.75,
    },
    to: {
      transform: isMobile ? "translateX(0)" : isShowing ? `translateX(0%)` : `translateX(125%)`,
      width: size.width * 0.75,
    },
    onRest: () => {
      !isShowing && router.push("/");
    },
  });

  useEffect(() => {
    const path = router.asPath.split("/")[2];
    const loadSlide = async () => {
      const db = getFirestore(firebase);

      const querySnapshot = await getDoc(
        doc(db, "portfolio", path === "whatbill" ? "whatbill?" : path)
      );

      const slide = querySnapshot.data();
      console.log(slide);
      setSlide(slide);
      setIsShowing(true);
    };
    loadSlide();
  }, [router, firebase]);

  return (
    <div style={{height: isMobile ? '1500%' : '100%', width: '100%', padding: 20, background: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898',
    backgroundBlendMode: 'multiply,multiply',}}>
      {slide && (
        <animated.div
          style={{
            ...transition,
            borderTopRightRadius: 100,
            borderBottomRightRadius: 100,
            marginTop: 10,
            marginBottom: 20,
            display: "flex",
            padding: 50,
            perspective: 500,
            display: "flex",
            flexDirection: "column",
   
        
            margin: "0 auto",
            flex: 1,
            padding: 50,
            justifyContent: "center",
          }}
        >
          <HoverButton
            style={{
              position: "absolute",
              top: "5%",
              left: "5%",
              cursor: "pointer",
              color: "#fff",
              fontSize: "2.5rem",
              cursor: "pointer",
            }}
          >
            <FaArrowLeft
              onClick={() => {
                setIsShowing(false);
                router.push("/");
              }}
            />
          </HoverButton>

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <animated.img
              src={slide.image}
              alt={slide.title}
              style={{
                width: 150,
                height: 150,
                borderRadius: "20%",
                alignSelf: "center",
              }}
            />
            <div
              style={{ display: "flex", flexDirection: "row"}}
            >
              <MenuButton
              isMobile={isMobile}
                selected={featuresShowing}
                title="Features"
                onClick={() => changePage()}
              />
              <MenuButton
                            isMobile={isMobile}

                selected={devShowing}
                title="Technical Info"
                onClick={() => changePage()}
              />
            </div>

          </div>
   
  
        </animated.div>
      )}
      <animated.div
        style={{
          ...featuresOpacity
        }}
      >
          {slide && slide.details && (   
              <AppDetail details={slide.details} browserDimensions={size} isMobile={isMobile}/>
            )}
       </animated.div>   
       

    </div>
  );
}
