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
import useMenuSelect from "../hooks/useMenuSelect";

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
  const [selectedIndices, setSelectedIndices] = useState<number[]>([
    0, 1, 2, 3, 4,
  ]);

  const { selections, setSelections } = useMenuSelect();

  const menuItems = [
    { name: "analysis", text: "Analysis", icon: <BarChartIcon /> },
    { name: "forex", text: "ForEx", icon: <CurrencyExchangeIcon /> },
    { name: "intel", text: "Intel", icon: <NewspaperIcon /> },
    { name: "markets", text: "Markets", icon: <LineAxisIcon /> },
    { name: "portfolio", text: "My Portfolio", icon: <DonutSmallIcon /> },
  ];

  const handleSelect = (index: number) => {
    setSelectedIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
    console.log(selections);
    setSelections((prevVal) => ({
      ...selections,
      [menuItems[index].name]: !prevVal,
    }));
  };

  const handleClose = () => setIsOpen(false);

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
              onClick={() => handleSelect(index)}
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
