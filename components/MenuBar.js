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
import { MenuButton } from "./MenuButton";

export const MenuBar = () => {
  const [width, setWidth] = useState(0);
  const [styles, api] = useSpring(() => ({ translateX: -500 }));
  const [boxShadow, shadowApi] = useSpring(() => ({
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
  }));

  const { asPath } = useRouter();

  const bottomBorder = (routeName) => {
    if (asPath === routeName) {
      return "5px solid #fff";
    }
    return "";
  };

  const insetShadow = (routeName) => {
    if (asPath === routeName) {
      return "inset 0 0 10px rgba(0, 0, 0, .55)";
    }
    return "";
  };

  useEffect(() => {
    api.start({ translateX: 0 });
    setWidth(window.innerWidth);
  }, [api]);

  return (
    <animated.nav
      style={{
        ...styles,
        width: width * 0.25,
        backgroundColor: "rgba(0, 0, 0, .15)",
        backdropFilter: "blur(5px)",
        height: "100%",
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        marginTop: 10,
        marginBottom: 20,
        boxShadow: "0px 0px 50px rgba(0, 0, 0, .25)",
        textAlign: "center",
        display: "flex",
        padding: 50,
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/jglogo.png"
          width={"300vw"}
          height={"150vh"}
          alt="logo"
          style={{ flex: 1 }}
        />

        <MenuButton href="/" selected={asPath === "/"} title="Applications" />
        <MenuButton
          href="/articles"
          selected={asPath === "/articles"}
          title="Articles"
        />
        <MenuButton
          href="/about"
          selected={asPath === "/about"}
          title="About"
        />
        <MenuButton
          href="/contact"
          selected={asPath === "/contact"}
          title="Contact"
        />

        <div
          style={{
            flex: 1,
            flexDirection: "row",
            display: "flex",
            marginTop: 250,
            marginBottom: 20,
            alignSelf: "center",
          }}
        >
          <FaGithub size={50} color="white" style={{ marginRight: 10 }} />
          <FaTwitter size={50} color="white" style={{ marginRight: 10 }} />
          <FaYoutube size={50} color="white" style={{ marginRight: 10 }} />
          <FaLinkedin size={50} color="white" style={{ marginRight: 10 }} />
        </div>
      </div>
    </animated.nav>
  );
};