import Lottie from "lottie-react";
import loadingAnimation from "./loading.json";

const Loading = () => {
  return <Lottie animationData={loadingAnimation} loop  />;
};

export default Loading;