import { Button } from "@nextui-org/react";
import { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Slide } from "../components/Slide";
import { Controller, Scene } from "react-scrollmagic";
import { FaChevronCircleUp } from "react-icons/fa";

export default function Carousel({ slides }) {
  return slides.map((slide, index) => (
    <Slide key={slide.href} slideIndex={index}>
      {slide.component}
    </Slide>
  ));
}
