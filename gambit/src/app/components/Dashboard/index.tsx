import React from "react";
import Analysis from "./Analysis";
import ForEx from "./ForEx";
import Intel from "./Intel";
import Markets from "./Markets";
import Portfolio from "./Portfolio";
import useMenuSelect from "@/app/hooks/useMenuSelect";

const DashboardComponents: React.FC = () => {
  const { selections } = useMenuSelect();

  const components = [
    { name: "analysis", component: <Analysis key="analysis" /> },
    { name: "forex", component: <ForEx key="forex" /> },
    { name: "intel", component: <Intel key="intel" /> },
    { name: "markets", component: <Markets key="markets" /> },
    { name: "portfolio", component: <Portfolio key="portfolio" /> },
  ];

  return (
    <div>
      <h1>Dashboard Components</h1>
      {selections.map(
        (item) =>
          item.selected &&
          components.find((comp) => comp.name === item.name)?.component
      )}
    </div>
  );
};

export default DashboardComponents;
