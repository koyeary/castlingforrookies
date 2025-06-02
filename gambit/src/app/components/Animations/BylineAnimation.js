import React from "react";

import { useTrail, a } from "react-spring";

const BylineAnimation = () => {
  const byline = ["Every", "Move", "Matters."];

  const trail = useTrail(byline.length, {
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { clamp: true },
    delay: 1000,
  });

  return (
    <div>
      <h2 style={{ display: "flex", flexDirection: "row", gap: 5 }}>
        {trail.map((style, index) => (
          <a.span key={index} style={style}>
            {byline[index]}
          </a.span>
        ))}
      </h2>
    </div>
  );
};

export default BylineAnimation;
