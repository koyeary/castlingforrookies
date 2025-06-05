"use client";

import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  /*   FormControlLabel,
  Switch, */
} from "@mui/material";
/* import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode"; */

import Navbar from "./components/Navbar";
import TitleAnimation from "./components/Animations/TitleAnimation";
import IconAnimation from "./components/Animations/IconAnimation";
import BylineAnimation from "./components/Animations/BylineAnimation";

const darkTheme = createTheme({ palette: { mode: "dark" } });

const Page: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="app-container">
        <Navbar
          user={{ userName: "", isLoggedIn: false }}
          DarkModeSwitch={null}
        />
        <main className="centered-content">
          <div className="title-animation-container">
            <TitleAnimation />
            <IconAnimation />
          </div>
          <BylineAnimation />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Page;
