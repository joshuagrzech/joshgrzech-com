import Lottie from "lottie-react";
import rightArrowAnimation from "./right-arrow.json";

const RightArrow = ({style}) => {
  return <Lottie animationData={rightArrowAnimation} loop style={style} />;
};

export default RightArrow;