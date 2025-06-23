"use client";
import React from "react";
import Menu from "./components/Menu";
import { useMenuSelect } from "../providers/MenuSelectProvider";
import DashboardComponents from "./components/DashboardComponents";

const Dashboard: React.FC = () => {
  const { menuItems } = useMenuSelect();

  return (
    <>
      <Menu
        open={true}
        setOpen={() => {}}
        menuItems={menuItems}
        userName="User"
      />
      <DashboardComponents />
    </>
  );
};

export default Dashboard;
