import React from "react";
import { useChain, useSpring, useSpringRef, a } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKnight } from "@fortawesome/free-solid-svg-icons";

const IconAnimation = () => {
  const transYRef = useSpringRef();
  const translateY = useSpring({
    ref: transYRef,
    from: { opacity: 0, x: "100px", y: "-200px" },
    to: { opacity: 0.5, x: "100px", y: "0px" },
    config: { clamp: true },
  });

  const transXRef = useSpringRef();
  const translateX = useSpring({
    ref: transXRef,
    from: { opacity: 0.5, x: "100px" },
    to: { opacity: 1, x: "0px" },
    config: { clamp: true },
  });

  useChain([transYRef, transXRef]);

  return (
    <>
      <a.h1 style={{ ...translateY, ...translateX }}>
        <FontAwesomeIcon icon={faChessKnight} />
      </a.h1>
    </>
  );
};

export default IconAnimation;
