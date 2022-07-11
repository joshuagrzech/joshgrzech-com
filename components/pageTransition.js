import { useState, useEffect } from "react";
import { useSpring } from "react-spring";
import { useRouter } from "next/router";

const usePageTransition = ({isShowing, isFirst}) => {
  const router = useRouter();
  const [width, setWidth] = useState(1920);

  const [nextRoute, setNextRoute] = useState(null);
  const transition = useSpring({
    from:{
        transform: isFirst ? `translateX(-125%)` : `translateX(125%))`
    },
    to: {
        transform: isShowing ? `translateX(0%)` : isFirst ? `translateX(-125%)` : `translateX(125%))`
    },

    onRest: () => {
      !isShowing && nextRoute && router.push(nextRoute)
    }
  });

 

  return { transition, setNextRoute };
};

export default usePageTransition;
