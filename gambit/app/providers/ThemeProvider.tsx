"use client";

import React, { createContext, useContext, useState } from "react";
import {
  FormControlLabel,
  Switch,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

type ThemeMode = "dark" | "light";

interface ThemeContextProps {
  mode: ThemeMode;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeSwitch = () => {
  const { mode, toggleDarkMode } = useTheme();

  return (
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
};

const ThemeRegistry = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("dark");

  const toggleDarkMode = () =>
    setMode((prev) => (prev === "dark" ? "light" : "dark"));

  const theme = mode === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ mode, toggleDarkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeRegistry;
