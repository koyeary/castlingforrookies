"use client";

import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  FormControlLabel,
  Switch,
} from "@mui/material";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";

import Navbar from "./components/Navbar";
import TitleAnimation from "./components/Animations/TitleAnimation";
import IconAnimation from "./components/Animations/IconAnimation";
import BylineAnimation from "./components/Animations/BylineAnimation";

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

const Page: React.FC = () => {
  const [mode, setMode] = useState<"dark" | "light">("dark");

  const toggleDarkMode = () =>
    setMode((prev) => (prev === "dark" ? "light" : "dark"));

  const DarkModeSwitch = (
    <FormControlLabel
      control={
        <Switch
          checked={mode === "dark"}
          onChange={toggleDarkMode}
          name="darkModeToggle"
          color="primary"
        />
      }
      label={
        mode === "dark" ? (
          <ModeNightIcon className="nav-icon" style={{ paddingTop: 5 }} />
        ) : (
          <LightModeIcon className="nav-icon" style={{ paddingTop: 5 }} />
        )
      }
    />
  );

  return (
    <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className="app-container">
        <Navbar
          user={{ userName: "Guest", isLoggedIn: true }}
          DarkModeSwitch={DarkModeSwitch}
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
