"use client";

import React, { useState } from "react";
import { useTrail, animated } from "react-spring";
import TitleAnimation from "@/app/components/Animations/TitleAnimation";
import IconAnimation from "@/app/components/Animations/IconAnimation";
import BylineAnimation from "@/app/components/Animations/BylineAnimation";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

const Page: React.FC = () => {
  const [show, setShow] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const trail = useTrail(64, {
    from: { opacity: 0 },
    to: { opacity: show ? 0.25 : 0 },
    config: { duration: 30 },
    onRest: () => setShow(false),
  });

  const handleClose = () => setShowModal(false);

  const Dialog = () => (
    <Modal
      open={showModal}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      aria-labelledby="Learn More about Gambit"
      aria-describedby="learn more about Gambit"
    >
      <Fade in={showModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            maxWidth: "90vw",
            bgcolor: "#FFF",
            color: "#000",
            border: "2px solid #000",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            theme: "light",
          }}
        >
          <div className="modal-content">
            <Typography
              id="modal-title"
              variant="h6"
              component="h2"
              sx={{ mb: 2, fontWeight: "bold", color: "rgba(74, 20, 86, 1)" }}
            >
              About Gambit
            </Typography>

            <Typography id="modal-description">
              {" "}
              Gambit uses global news sources and your own proprietary
              intelligence to provide a clearer view of geopolitical events, and
              corresponding swings in the currency markets. It's your research,
              but faster.
            </Typography>

            <Typography id="modal-description" sx={{ mt: 2 }}>
              If you want to learn more, reach out to us at katyeary@gmail.com.
            </Typography>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
  return (
    <>
      <Dialog />
      <div className="page-wrapper">
        <div className="checkerboard">
          {trail.map((style, i) => (
            <animated.div
              key={i}
              style={{
                ...style,
                height: "12.5vh",
                width: "12.5vh",
              }}
              className={(Math.floor(i / 8) + i) % 2 === 0 ? "odd" : "even"}
            />
          ))}
        </div>
        <div className="checkerboard">
          {trail.map((style, i) => (
            <animated.div
              key={i}
              style={{
                ...style,
                height: "12.5vh",
                width: "12.5vh",
              }}
              className={(Math.floor(i / 8) + i) % 2 === 0 ? "odd" : "even"}
            />
          ))}
        </div>
        <div className="checkerboard">
          {trail.map((style, i) => (
            <animated.div
              key={i}
              style={{
                ...style,
                height: "12.5vh",
                width: "12.5vh",
              }}
              className={(Math.floor(i / 8) + i) % 2 === 0 ? "odd" : "even"}
            />
          ))}
        </div>
        <div className="headers">
          <div className="title">
            <TitleAnimation />
            <IconAnimation />
          </div>
          <BylineAnimation showModal={showModalHandler} />
        </div>
      </div>
    </>
  );
};

export default Page;
