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
import {
  ArrowBackIosNew as ArrowBackIosNewIcon,
  BarChart as BarChartIcon,
  CurrencyExchange as CurrencyExchangeIcon,
  DonutSmall as DonutSmallIcon,
  LineAxis as LineAxisIcon,
  Newspaper as NewspaperIcon,
} from "@mui/icons-material";
import "./components.css";

interface MenuProps {
  isOpen: boolean;
  isDarkMode: boolean;
  userName: string;
  setIsOpen: (isOpen: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({
  userName,
  isOpen,
  setIsOpen,
  isDarkMode,
}) => {
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  const handleListItemClick = (index: number) => {
    setSelectedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleClose = () => setIsOpen(false);

  const menuItems = [
    { text: "My Portfolio", icon: <DonutSmallIcon /> },
    { text: "Analysis", icon: <BarChartIcon /> },
    { text: "ForEx", icon: <CurrencyExchangeIcon /> },
    { text: "Markets", icon: <LineAxisIcon /> },
    { text: "Intel", icon: <NewspaperIcon /> },
  ];

  return (
    <Drawer
      anchor="left"
      variant="persistent"
      open={isOpen}
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
          <ListItem key={index} disableGutters>
            <ListItemButton
              selected={selectedIndices.includes(index)}
              onClick={() => handleListItemClick(index)}
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
