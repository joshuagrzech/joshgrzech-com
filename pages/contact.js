import { useSpring, animated } from "react-spring";
import { Slide } from "../components/Slide";

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
    >
      <Slide viewIndex={1} />
      <Slide viewIndex={2} />
      <Slide viewIndex={3} />
    </animated.div>
  );
}
