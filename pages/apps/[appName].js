import React, { useEffect, useState } from "react";
import usePageTransition from "../../components/pageTransition";
import { animated, useSpring } from "@react-spring/web";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FaArrowLeft } from "react-icons/fa";
import HoverButton from "../../components/HoverButton";
import { useRouter } from "next/router";
import { MenuButton } from "../../components/MenuButton";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import Image from "next/image";
export default function Astro({ firebase, isMobile }) {
  const [isShowing, setIsShowing] = useState(false);
  const router = useRouter();
  const [slide, setSlide] = useState();
  const [index, setIndex] = useState(0);

  const transition = useSpring({
    from: {
      transform: isShowing ? `translateX(0%)` : `translateX(125%)`,
    },
    to: {
      transform: isShowing ? `translateX(0%)` : `translateX(125%))`,
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
    <>
      {slide && (
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
              }}
            />
          </HoverButton>

          <animated.div
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
            <animated.div
              style={{ display: "flex", flexDirection: "row" }}
            >
              <MenuButton
              isMobile={isMobile}
                selected={index === 0}
                title="Features"
                onClick={() => setIndex(0)}
              />
              <MenuButton
                            isMobile={isMobile}

                selected={index === 1}
                title="Development Info"
                onClick={() => setIndex(1)}
              />
            </animated.div>

            {slide.details && (
              <animated.div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "80%",
                  alignSelf: "center",
                  backgroundColor: "",
                  borderRadius: 10,
                }}
              >
                <animated.div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    color: "#fff",
                    wordWrap: "break-word",
                    fontSize: isMobile ? "2rem" : "4em",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontFamily: "Barlow",
                    marginTop: "5%",
                    padding: "5%",
                    backgroundColor: isMobile ? 'transparent' : slide.color,
                    alignItems: "center",
                    borderRadius: 20,
                    width: "50%",
                    height: 600,
                  }}
                >
                  {slide.details.map((detail) => {
                    return (
                      <>
                        <video
                          src={detail.video}
                          autoPlay={true}
                          muted={true}
                          playsInline={true}
                          style={{
                            width: isMobile ? (window.innerWidth - 20) : "1070px",
                            position: "absolute",
                            right: isMobile ? "10" : "15%",
                            borderRadius: 20,
                            overflow: "hidden",
                          }}
                        />
                        <div style={{ zIndex: 100 }}>{detail.caption}</div>
                      </>
                    );
                  })}
                </animated.div>
              </animated.div>
            )}
          </animated.div>
        </animated.div>
      )}
    </>
  );
}
