import {
  Button,
  Card,
  Col,
  Container,
  Grid,
  Text,
  Link,
} from "@nextui-org/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FaGithub, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import { route } from "next/dist/server/router";
import NextLink from "next/link";

export const MenuButton = ({ href, selected, title, onClick, isMobile }) => {
 const [hover, setHover] = useState(false);
  const button = useSpring({
    transform: selected ? "scale(1.5)" : "scale(1)",
    color: selected ? "#fff" : "rgba(0, 0, 0, 0.85)",

  });
  const hoverAnimation = useSpring({
    transform: selected ? "scale(1)" : hover ? "scale(1.15)" : "scale(1)" 
  });




  return (
    <animated.div
      style={{
        ...hoverAnimation,
        flex: 1,
        marginTop: 20,
        
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        display: "flex",
        textShadow: "0 0 10px rgba(0,0,0,0.55)",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {href && (
<NextLink href={href} passHref>
<Link>
  <animated.div
    style={{
      fontSize: "3rem",
      fontWeight: "bold",
      fontFamily: 'Barlow',
      textAlign: "center",
      ...button,
    }}
  >
    {title}
  </animated.div>
</Link>
</NextLink>

      )}
      {!href && (
        <animated.div
        style={{

          fontSize: isMobile ? "1.5rem" : "3rem",
          fontWeight: "bold",
          fontFamily: 'Barlow',
          textAlign: "center",
          cursor: "pointer",
          ...button,
        }}
        onClick={onClick}
      >
        {title}
      </animated.div>
      )}
      
    </animated.div>
  );
};
