import React from "react";
import Analysis from "./Analysis";
import ForExWatched from "./ForExWatched";
import Intel from "./Intel";
import Markets from "./Markets";
import Portfolio from "./Portfolio";
import { findMultipleCurrencies } from "@/app/api/forex/route";
import useMenuSelect from "@/app/hooks/useMenuSelect";

interface Rate {
  quote: string;
  base: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

const DashboardComponents: React.FC = () => {
  const [rates, setRates] = React.useState<Rate[]>([]);
  const { selections } = useMenuSelect();

  const components = [
    { name: "analysis", component: <Analysis key="analysis" /> },
    {
      name: "forex",
      component: <ForExWatched key="forex" rates={rates} />,
    },
    { name: "intel", component: <Intel key="intel" /> },
    { name: "markets", component: <Markets key="markets" /> },
    { name: "portfolio", component: <Portfolio key="portfolio" /> },
  ];

  React.useEffect(() => {
    //fetchSymbols();
    // fetchUserRates(["USD", "EUR"]);
    fetchRates();
  }, []);

  const fetchRates = async () => {
    const latestRates = await findMultipleCurrencies();
    setRates(latestRates);
  };

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
