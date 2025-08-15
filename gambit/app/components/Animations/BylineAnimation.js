import React from "react";
import Button from "@mui/material/Button";

import { a, useTrail, config } from "react-spring";
import "../components.css";

const BylineAnimation = ({ showModal }) => {
  const learnMore = (
    <Button
      variant="text"
      onClick={showModal}
      sx={{
        color: "white",
        textTransform: "none",
        fontSize: "1.15rem",
        fontWeight: 500,
        borderRadius: "20px",
        padding: "2px 60px",
        marginTop: "50px",
        backgroundColor: "rgba(42, 38, 43, 0.25)",
        transition: "background-color 0.5s ease",
        "&:hover": {
          backgroundColor: "rgba(48, 21, 54, 0.75)",
        },
      }}
    >
      Learn More
    </Button>
  );

  const byline = [
    "To-the-Minute Global Intelligence",
    "for Successful Currency Strategy",
    learnMore,
  ];

  const trail = useTrail(byline.length, {
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: config.stiff,
    delay: 1500,
  });

  return (
    <div className="byline-animation-container">
      <h2 style={{ display: "flex", flexDirection: "column" }}>
        {trail.map((style, index) => (
          <a.span key={index} style={style} className="byline-text">
            {byline[index]}
          </a.span>
        ))}
      </h2>
    </div>
  );
};

export default BylineAnimation;
