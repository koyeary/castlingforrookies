import React from "react";
import Menu from "./Menu";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import LightModeIcon from "@mui/icons-material/LightMode";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import ModeNightIcon from "@mui/icons-material/ModeNight";

import "./components.css";

interface User {
  userName: string;
  isLoggedIn: boolean;
}

interface NavbarProps {
  user: User;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  /*   //const navigate = useNavigate();
  const handleLogout = () => {
    // navigate("/gambit");
  };
  const handleLogin = () => {
    // navigate("/gambit/dashboard");
  }; */
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    //document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
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
                <FormControlLabel
                  control={
                    <Switch
                      checked={isDarkMode}
                      onChange={toggleDarkMode}
                      name="darkModeToggle"
                      color="primary"
                    />
                  }
                  label={
                    isDarkMode ? (
                      <ModeNightIcon className="nav-icon" />
                    ) : (
                      <LightModeIcon className="nav-icon" />
                    )
                  }
                />
              </div>
              <div>
                <Tooltip title="Log out">
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="log out"
                    //onClick={toggleDrawer}
                  >
                    <LogoutRoundedIcon
                      className="nav-icon"
                      /* style={{ marginLeft: 20, cursor: "pointer" }} */
                      // onClick={handleLogout}
                    />
                  </IconButton>
                </Tooltip>
              </div>
            </>
          ) : (
            <>
              <div></div>
              <div>
                <span>Login</span>
                <Tooltip title="Log in">
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="log in"
                    //onClick={handleLogin}
                  >
                    <AccountCircleRoundedIcon
                      className="nav-icon"
                      /*  style={{ marginLeft: 20, cursor: "pointer" }} */
                    />
                  </IconButton>
                </Tooltip>
              </div>
            </>
          )}
        </nav>
      </header>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} userName={userName} />
    </>
  );
};

export default Navbar;
