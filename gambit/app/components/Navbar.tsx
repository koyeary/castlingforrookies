"use client";
import React from "react";
import { useRouter, redirect } from "next/navigation";
import { ThemeSwitch } from "../providers/ThemeProvider";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import "./components.css";

interface User {
  userName: string;
  isLoggedIn: boolean;
}

interface NavbarProps {
  user: User;
  title?: string; // Optional page title for Navbar to match html title (to do)
}

const Navbar: React.FC<NavbarProps> = ({ user, title }) => {
  const router = useRouter();

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    redirect("/");
  };

  const handleLogin = () => {
    router.push("/dashboard");
  };

  return (
    <>
      <header>
        <nav>
          {user.isLoggedIn ? (
            <>
              <div className="nav-group">
                <Divider orientation="vertical" flexItem />
                {title && <h1>{title}</h1>}
              </div>
              <div className="nav-group">
                <Tooltip title="Home">
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="home"
                    //onClick={toggleDrawer}
                  >
                    <HomeFilledIcon className="nav-icon" />
                  </IconButton>
                </Tooltip>
                <Divider orientation="vertical" flexItem />
                <Tooltip title="Dashboard">
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="dashboard"
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
                  >
                    <LogoutRoundedIcon className="nav-icon" />
                  </IconButton>
                </Tooltip>
                <Divider orientation="vertical" flexItem />
                <ThemeSwitch />
              </div>
            </>
          ) : (
            <>
              <div className="nav-group">
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    "&:hover": {
                      borderRadius: "8px",
                      borderColor: "white",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                  startIcon={<AccountCircleRoundedIcon />}
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </div>
              <ThemeSwitch />
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
