import { useState } from "react";
import { useSpring, animated } from "react-spring";

const HoverButton = ({ children, style, onClick}) => {
  const [hover, setHover] = useState(false);

  const hoverAnimation = useSpring({
    transform: hover ? "scale(1.15)" : "scale(1)",
  });

  return (
    <animated.div
    onClick={onClick}
      style={{ ...hoverAnimation, alignItems: "center", justifyContent: "center", alignContent: "center", alignSelf: "center", display: 'flex', cursor: 'pointer', ...style}}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </animated.div>
  );
};

export default HoverButton;
