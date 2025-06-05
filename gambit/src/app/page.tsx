"use client";

import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

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
          isDarkMode={true}
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
