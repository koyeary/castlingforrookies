import React from "react";
import Analysis from "./Analysis";
import ForEx from "./ForEx";
import Intel from "./Intel";
import Markets from "./Markets";
import Portfolio from "./Portfolio";

const DashboardComponents: React.FC = () => {
  return (
    <div>
      <h1>Dashboard Components</h1>
      <Analysis />
      <ForEx />
      <Intel />
      <Markets />
      <Portfolio />
    </div>
  );
};

export default DashboardComponents;
