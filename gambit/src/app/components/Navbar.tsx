"use client";
import React from "react";
import { useRouter, redirect } from "next/navigation";
import Menu from "./Menu";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import "./components.css";

interface User {
  userName: string;
  isLoggedIn: boolean;
}

interface NavbarProps {
  user: User;
  DarkModeSwitch?: React.ReactNode;
  title?: string;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  user,
  DarkModeSwitch,
  isDarkMode,
  title,
}) => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    redirect("/");
  };

  const handleLogin = () => {
    router.push("/dashboard");
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const { userName } = user;
  return (
    <>
      <header>
        <nav>
          {user.isLoggedIn ? (
            <>
              <div className="nav-group">
                <Tooltip title="Edit Dashboard">
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer}
                  >
                    <DashboardCustomizeRoundedIcon className="nav-icon" />
                  </IconButton>
                </Tooltip>
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
                {DarkModeSwitch && DarkModeSwitch}
              </div>
            </>
          ) : (
            <>
              <div>
                <span>Login</span>
                <Tooltip title="Log in">
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="log in"
                    onClick={handleLogin}
                  >
                    <AccountCircleRoundedIcon className="nav-icon" />
                  </IconButton>
                </Tooltip>
              </div>
            </>
          )}
        </nav>
      </header>
      {user.isLoggedIn && (
        <Menu
          isDarkMode={isDarkMode}
          open={open}
          setOpen={setOpen}
          userName={userName}
        />
      )}
    </>
  );
};

export default Navbar;
