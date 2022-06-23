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

export const MenuButton = ({ href, selected, title }) => {
  const [boxShadow, api] = useSpring(() => ({
    boxShadow: `inset 0 0 10px rgba(0, 0, 0, 0.0)`,
  }));

  const bottomBorder = () => {
    if (selected) {
      return "5px solid #fff";
    }
    return "";
  };

  useEffect(() => {
    selected &&
      api.start({
        boxShadow: `inset 0 0 10px rgba(0, 0, 0, 0.5)`,
      });
    selected === false &&
      api.start({
        boxShadow: `inset 0 0 10px rgba(0, 0, 0, 0.0)`,
      });
  }, [selected, api]);

  return (
    <animated.div
      style={{
        ...boxShadow,
        flex: 1,
        marginTop: 20,
        backgroundColor: selected
          ? "rgba(0, 0, 0, 0.25)"
          : "rgba(0, 0, 0, 0.05)",
        borderRadius: 10,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        display: "flex",
      }}
    >
      <NextLink href={href} passHref>
        <Link>
          <Text
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              fontFamily: "Menlo",
              textAlign: "center",
              color: selected ? "#fff" : "rgba(0, 0, 0, 0.85)",
              flex: 1,
              padding: 15,
              borderBottom: bottomBorder(),
            }}
          >
            {title}
          </Text>
        </Link>
      </NextLink>
    </animated.div>
  );
};
