import React from "react";
import Currencies from "./Currencies";
import { useMenuSelect } from "@/app/providers/MenuSelectProvider";

const DashboardComponents: React.FC = () => {
  const { selections } = useMenuSelect();

  // Placeholder components
  const Analysis: React.FC = () => {
    return <div>Analysis</div>;
  };
  const Markets: React.FC = () => {
    return <div>Markets</div>;
  };

  const Intel: React.FC = () => {
    return <div>Intel</div>;
  };
  const Portfolio: React.FC = () => {
    return <div>Portfolio</div>;
  };

  const components = [
    { name: "analysis", component: <Analysis key="analysis" /> },
    {
      name: "currencies",
      component: <Currencies key="currencies" />,
    },
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
