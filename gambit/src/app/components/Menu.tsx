"use client";
import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ArrowBackIosNew as ArrowBackIosNewIcon } from "@mui/icons-material";
import "./components.css";
import useMenuSelect from "../hooks/useMenuSelect";

interface MenuProps {
  open: boolean;
  isDarkMode: boolean;
  userName: string;
  setOpen: (open: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({ userName, open, setOpen, isDarkMode }) => {
  const { menuItems, selections, handleSelect } = useMenuSelect();

  const handleClose = () => setOpen(false);

  return (
    <Drawer
      anchor="left"
      variant="persistent"
      open={open}
      onClose={handleClose}
      elevation={16}
      sx={{
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 360,
          backgroundColor: isDarkMode ? "#1e1e1e" : "#fff",
          color: isDarkMode ? "#fff" : "#1e1e1e",
        },
      }}
    >
      <ArrowBackIosNewIcon className="close-icon" onClick={handleClose} />
      <h2 className="menu-header">Hi, {userName}</h2>
      <List
        component="nav"
        sx={{ display: "flex", flexDirection: "column", width: "100%" }}
      >
        {menuItems.map((item, index) => (
          <ListItem key={item.name} disableGutters>
            <ListItemButton
              selected={selections[index].selected}
              onClick={() => handleSelect(item)}
            >
              <ListItemIcon sx={{ marginRight: 1 }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Menu;
