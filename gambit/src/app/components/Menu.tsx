"use client";
import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import BarChartIcon from "@mui/icons-material/BarChart";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import "./components.css";

interface MenuProps {
  isOpen: boolean;
  userName: string;
  setIsOpen: (isOpen: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({ userName, isOpen, setIsOpen }) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Drawer
        anchor="left"
        variant="persistent"
        open={isOpen}
        onClose={handleClose}
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 360,
            backgroundColor: "#1e1e1e",
            color: "#fff",
            borderRight: "none",
          },
        }}
      >
        <ArrowBackIosNewIcon
          style={{
            //height: "100%",
            width: 50,
            cursor: "pointer",
            position: "absolute",
            right: 0,
            top: 20,
          }}
          onClick={handleClose}
        />
        <h2 className="menu-header">Hi, {userName}</h2>
        <List style={{ marginRight: 50 }}>
          <ListItem onClick={() => {}}>
            <FilePresentIcon style={{ marginRight: 10 }} />
            <ListItemText primary="My Portfolio" />
          </ListItem>
          <ListItem onClick={() => {}}>
            <BarChartIcon style={{ marginRight: 10 }} />
            <ListItemText primary="Analysis" />
          </ListItem>
          <ListItem onClick={() => {}}>
            <BarChartIcon style={{ marginRight: 10 }} />
            <ListItemText primary="ForEx" />
          </ListItem>
          <ListItem onClick={() => {}}>
            <BarChartIcon style={{ marginRight: 10 }} />
            <ListItemText primary="Markets" />
          </ListItem>
          <ListItem onClick={() => {}}>
            <BarChartIcon style={{ marginRight: 10 }} />
            <ListItemText primary="Intel" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Menu;
