"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  FormControlLabel,
  Switch,
} from "@mui/material";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import DashboardComponents from "../components/Dashboard";
import { MenuSelectProvider } from "../contexts/MenuSelectContext";

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

const Dashboard: React.FC = () => {
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
    <MenuSelectProvider>
      <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
        <CssBaseline />
        <div className="app-container">
          <Navbar
            title="Dashboard"
            user={{ userName: "Guest", isLoggedIn: true }}
            DarkModeSwitch={DarkModeSwitch}
            isDarkMode={mode === "dark"}
          />
          <main className="centered-content">
            <DashboardComponents />
          </main>
        </div>
      </ThemeProvider>
    </MenuSelectProvider>
  );
};

export default Dashboard;
