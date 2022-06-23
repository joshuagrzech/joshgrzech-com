import React from "react";
import styled from "@emotion/styled";
import { Spring, animated } from "react-spring";
import { withGesture } from "react-with-gesture";
import AppSlide from "./AppSlide";

const SlideContainer = styled.div``;

const SlideCard = styled.div``;

function Slide({
  content,
  offsetRadius,
  index,
  animationConfig,
  moveSlide,
  delta,
  slideKey,
  down,
  up,
}) {
  const offsetFromMiddle = index - offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;
  const distanceFactor = 1 - Math.abs(offsetFromMiddle / (offsetRadius + 1));

  const offsetCardClick = (i) => {
    console.log(i);
  };

  const translateYoffset =
    50 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));
  let translateY = -50;

  if (offsetRadius !== 0) {
    if (index === 0) {
      translateY = 0;
    } else if (index === totalPresentables - 1) {
      translateY = -100;
    }
  }

  if (offsetFromMiddle === 0 && down) {
    translateY += delta[1] / (offsetRadius + 1);
    if (translateY > -40) {
      moveSlide(-1);
    }
    if (translateY < -100) {
      moveSlide(1);
    }
  }
  if (offsetFromMiddle > 0) {
    translateY += translateYoffset;
  } else if (offsetFromMiddle < 0) {
    translateY -= translateYoffset;
  }

  return (
    <Spring
      to={{
        transform: `translateX(0%) translateY(${translateY}%) scale(${distanceFactor})`,
        top: `${
          offsetRadius === 0 ? 50 : 50 + (offsetFromMiddle * 50) / offsetRadius
        }%`,
        opacity: distanceFactor * distanceFactor,
      }}
      config={animationConfig}
    >
      {(style) => (
        <animated.div
          style={{
            ...style,
            zIndex: Math.abs(Math.abs(offsetFromMiddle) - 2),
            position: "absolute",
            height: "70%",
            top: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transformOrigin: "50% 50%",
          }}
        >
          <animated.div
            style={{
              position: "relative",
              maxWidth: "50%",
              minWidth: "30%",
              width: "100vw",
              height: "100%",
              fontSize: "35px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transformOrigin: "50% 50%",
            }}
            onClick={() => moveSlide(offsetFromMiddle)}
          >
            <AppSlide
              slide={content}
              index={slideKey}
              visible={offsetFromMiddle === 0}
            />
          </animated.div>
        </animated.div>
      )}
    </Spring>
  );
}

export default withGesture()(Slide);
