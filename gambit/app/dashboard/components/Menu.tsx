"use client";
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";
//import "./components.css";

interface Selection {
  name: string;
  text: string;
  icon: React.JSX.Element;
  selected: boolean;
}

interface MenuProps {
  open: boolean;
  userName: string;
  selections: Selection[];
  menuItems: Selection[];
  handleSelect: (item: {
    name: string;
    text: string;
    icon: React.JSX.Element;
    selected: boolean;
  }) => void;
  setOpen: (open: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({
  menuItems,
  open,
  setOpen,
  selections,
  handleSelect,
  userName,
}) => {
  const handleClose = () => setOpen(false);

  const [drawerWidth, setDrawerWidth] = useState("fit-content");

  const toggleWidth = () => {
    setDrawerWidth((prevWidth) =>
      prevWidth === "fit-content" ? "300px" : "fit-content"
    );
  };

  return (
    <Drawer
      anchor="left"
      variant="persistent"
      open={open}
      onClose={handleClose}
      elevation={16}
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
        },
      }}
    >
      <ArrowBackIosNew className="close-icon" onClick={toggleWidth} />
      {drawerWidth === "300px" && (
        <h2 className="menu-header">Hi, {userName}</h2>
      )}
      <List
        component="nav"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          "& .MuiListItemButton-root": {
            width: "100%",
            justifyContent: "center",
            padding: 1,
          },
          "& .MuiListItemIcon-root": {
            minWidth: "30px",
            marginLeft: 1,
          },
          "& .MuiListItemText-root": {
            display: drawerWidth === "fit-content" ? "none" : "block",
            marginLeft: 2,
          },
        }}
      >
        {menuItems.map((item, index) => (
          <ListItem key={item.name} disableGutters>
            <ListItemButton
              sx={{
                justifyContent:
                  drawerWidth === "fit-content" ? "center" : "flex-start",
                padding: 1,
              }}
              selected={selections[index].selected}
              onClick={() => handleSelect(item)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              {drawerWidth === "fit-content" ? null : (
                <ListItemText primary={item.text} />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Menu;
