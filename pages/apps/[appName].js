import React, { useEffect, useState } from "react";
import usePageTransition from "../../components/pageTransition";
import { animated, useSpring } from "@react-spring/web";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FaArrowLeft } from "react-icons/fa";
import HoverButton from "../../components/HoverButton";
import { useRouter } from "next/router";
export default function Astro() {
  const [isShowing, setIsShowing] = useState(false);
  const router = useRouter()
  const transition = useSpring({
      from : {
          transform: isShowing ? `translateX(0%)` : `translateX(125%)`
      },
      to: {
          transform: isShowing ? `translateX(0%)` : `translateX(125%))`
      },
      onRest: () => {
          !isShowing && router.push("/")
      }

  });

  useEffect(() => {
    setIsShowing(true);
  }, [])
 


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
     padding: 50,
     perspective: 500,
     display: "flex",
     flexDirection: "column",
     width: "100%",
     height: "100%",
     margin: "0 auto",
     flex: 1,
     padding: 50,
     justifyContent: "center",}} 
    >
      <HoverButton style={{
        position: "absolute",
        top: "5%",
        left: "5%",
        cursor: "pointer",
        color: "#fff",
        fontSize: "2.5rem",
        cursor: "pointer",


      }}>
      <FaArrowLeft  onClick={() => {
        setIsShowing(false);
      }
      } />
</HoverButton>

      <animated.div
        style={{
          
           
          height: "50%",
          width: "50%",
          backgroundColor: "rgb(16, 19, 244)",
          
        }}
      />
    </animated.div>
  );
}
