import React from "react";
import { useSpring, a } from "react-spring";

const TitleAnimation = () => {
  const style = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { clamp: true },
  });

  return <a.h1 style={style}>Gambit</a.h1>;
};

export default TitleAnimation;
