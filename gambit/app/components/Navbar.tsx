"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { ThemeSwitch, useTheme } from "../providers/ThemeProvider";
import { useSession } from "next-auth/react";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import "./components.css";

interface NavbarProps {
  title?: string; // page title for Navbar to match html title (to do)
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { mode } = useTheme();
  const { status } = useSession();

  const buttonStyles = {
    color: mode === "dark" ? "#fff" : "#000",
    borderColor: mode === "dark" ? "#fff" : "#000",
    backgroundColor: mode === "dark" ? "#ffffff10" : "#fff",
    "&:hover": {
      backgroundColor: mode === "dark" ? "#cddc3925" : "#cddc3985",
      borderColor: mode === "dark" ? "#cddc39" : "#000",
      color: mode === "dark" ? "#cddc39" : "#000",
    },
  };

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/");
  };

  const goToAuth = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("goToAuth called");
    router.push("/auth");
  };

  return (
    <nav>
      {status === "authenticated" ? (
        <>
          <div className="nav-group">
            <Divider orientation="vertical" flexItem />
            {title && <h1>{title}</h1>}

            <Tooltip title="Dashboard">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="dashboard"
                sx={buttonStyles}
                //onClick={toggleDrawer}
              >
                <DashboardIcon className="nav-icon" />
              </IconButton>
            </Tooltip>
            <Divider orientation="vertical" flexItem />
            <Tooltip title="Log out">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="log out"
                onClick={handleLogout}
                sx={buttonStyles}
              >
                <LogoutRoundedIcon className="nav-icon" />
              </IconButton>
            </Tooltip>
            <Divider orientation="vertical" flexItem />
          </div>
        </>
      ) : (
        <>
          <div className="nav-group">
            {pathname === "/auth" ? (
              <Tooltip title="Return Home">
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="Return Home"
                  onClick={() => router.push("/")}
                  sx={{ ...buttonStyles, marginLeft: 1 }}
                >
                  <HomeFilledIcon className="nav-icon" />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Login or Sign up">
                <Button
                  variant="outlined"
                  sx={buttonStyles}
                  aria-label="Login or Sign up"
                  startIcon={<AccountCircleRoundedIcon />}
                  onClick={goToAuth}
                >
                  Login
                </Button>
              </Tooltip>
            )}
          </div>
        </>
      )}
      <ThemeSwitch />
    </nav>
  );
};

export default Navbar;
