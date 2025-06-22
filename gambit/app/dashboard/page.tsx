"use client";
import React, { useState } from "react";
import Menu from "./components/Menu";
import {
  BarChart,
  CurrencyExchange,
  Newspaper,
  LineAxis,
  DonutSmall,
} from "@mui/icons-material";

interface MenuItem {
  name: string;
  text: string;
  icon: React.JSX.Element;
  selected: boolean;
}
interface Selection extends MenuItem {
  selected: boolean;
}
type Selections = MenuItem[];

const menuItems = [
  {
    name: "analysis",
    text: "Analysis",
    icon: <BarChart />,
    selected: true,
  },
  {
    name: "forex",
    text: "ForEx",
    icon: <CurrencyExchange />,
    selected: true,
  },
  { name: "intel", text: "Intel", icon: <Newspaper />, selected: true },
  {
    name: "markets",
    text: "Markets",
    icon: <LineAxis />,
    selected: true,
  },
  {
    name: "portfolio",
    text: "My Portfolio",
    icon: <DonutSmall />,
    selected: true,
  },
];

const Dashboard: React.FC = () => {
  const [open, setOpen] = useState(true);

  const [selections, setSelections] = useState<Selections>(menuItems);

  const handleSelect = (item: Selection): void => {
    setSelections((prev) => {
      const updatedSelections = prev.map((selection) =>
        selection.name === item.name
          ? { ...selection, selected: !selection.selected }
          : selection
      );
      console.log("Updated selections:", updatedSelections);
      return updatedSelections;
    });
  };

  return (
    <>
      <h1>Dashboard</h1>
      <Menu
        open={open}
        selections={selections}
        handleSelect={handleSelect}
        setOpen={setOpen}
        userName="Guest"
        menuItems={menuItems}
      />
      {/*  <DashboardComponents /> */}
    </>
  );
};

export default Dashboard;
