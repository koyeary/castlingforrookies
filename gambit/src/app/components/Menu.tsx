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
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import BarChartIcon from "@mui/icons-material/BarChart";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import LineAxisIcon from "@mui/icons-material/LineAxis";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import "./components.css";

interface MenuProps {
  isOpen: boolean;
  userName: string;
  setIsOpen: (isOpen: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({ userName, isOpen, setIsOpen }) => {
  const [selectedIndex, setSelectedIndex] = useState([0, 1, 2, 3, 4]);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    if (!selectedIndex.includes(index)) {
      setSelectedIndex([...selectedIndex, index]);
    } else {
      setSelectedIndex(selectedIndex.filter((i) => i !== index));
    }
  };

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
        <ArrowBackIosNewIcon className="close-icon" onClick={handleClose} />
        <h2 className="menu-header">Hi, {userName}</h2>
        <List
          component="nav"
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <ListItem>
            <ListItemButton
              selected={selectedIndex.includes(0)}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <DonutSmallIcon style={{ marginRight: 10 }} />
              </ListItemIcon>
              <ListItemText primary="My Portfolio" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              selected={selectedIndex.includes(1)}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <BarChartIcon style={{ marginRight: 10 }} />
              </ListItemIcon>
              <ListItemText primary="Analysis" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              selected={selectedIndex.includes(2)}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <CurrencyExchangeIcon style={{ marginRight: 10 }} />
              </ListItemIcon>
              <ListItemText primary="ForEx" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              selected={selectedIndex.includes(3)}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon>
                <LineAxisIcon style={{ marginRight: 10 }} />
              </ListItemIcon>
              <ListItemText primary="Markets" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              selected={selectedIndex.includes(4)}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemIcon>
                <NewspaperIcon style={{ marginRight: 10 }} />
              </ListItemIcon>
              <ListItemText primary="Intel" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Menu;
