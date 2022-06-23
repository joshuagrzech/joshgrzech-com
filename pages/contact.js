import { useSpring, animated } from "react-spring";

export default function Home() {
  return (
    <animated.div
      style={{
        width: "100%",
        height: "100%",
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        marginTop: 10,
        marginBottom: 20,

        textAlign: "center",
        display: "flex",
        padding: 50,
        perspective: 500,
      }}
    ></animated.div>
  );
}
