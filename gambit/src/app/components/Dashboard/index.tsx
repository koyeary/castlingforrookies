import React from "react";
import Analysis from "./Analysis";
import ForExWatched from "./ForExWatched";
import Intel from "./Intel";
import Markets from "./Markets";
import Portfolio from "./Portfolio";
import useMenuSelect from "@/app/hooks/useMenuSelect";

const DashboardComponents: React.FC = () => {
  const { selections } = useMenuSelect();

  const components = [
    { name: "analysis", component: <Analysis key="analysis" /> },
    { name: "forex", component: <ForExWatched key="forex" /> },
    { name: "intel", component: <Intel key="intel" /> },
    { name: "markets", component: <Markets key="markets" /> },
    { name: "portfolio", component: <Portfolio key="portfolio" /> },
  ];

  return (
    <div style={{ height: "80vh", overflow: "hidden" }}>
      {selections.map(
        (item) =>
          item.selected &&
          components.find((comp) => comp.name === item.name)?.component
      )}
    </div>
  );
};

export default DashboardComponents;
