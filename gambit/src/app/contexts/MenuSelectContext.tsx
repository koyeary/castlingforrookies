import React, { createContext, useState, ReactNode, JSX } from "react";

import {
  BarChart as BarChartIcon,
  CurrencyExchange as CurrencyExchangeIcon,
  DonutSmall as DonutSmallIcon,
  LineAxis as LineAxisIcon,
  Newspaper as NewspaperIcon,
} from "@mui/icons-material";

interface Selection {
  name: string;
  text: string;
  icon: JSX.Element;
  selected: boolean;
}

type Selections = Selection[];

const menuItems = [
  {
    name: "analysis",
    text: "Analysis",
    icon: <BarChartIcon />,
    selected: true,
  },
  {
    name: "forex",
    text: "ForEx",
    icon: <CurrencyExchangeIcon />,
    selected: true,
  },
  { name: "intel", text: "Intel", icon: <NewspaperIcon />, selected: true },
  { name: "markets", text: "Markets", icon: <LineAxisIcon />, selected: true },
  {
    name: "portfolio",
    text: "My Portfolio",
    icon: <DonutSmallIcon />,
    selected: true,
  },
];

interface MenuSelectContextType {
  menuItems: typeof menuItems;
  selections: Selections;
  handleSelect: (item: Selection) => void;
}

const MenuSelectContext = createContext<MenuSelectContextType>({
  menuItems: menuItems,
  selections: [],
  handleSelect: () => {},
});

interface MenuSelectProviderProps {
  children: ReactNode;
}

export const MenuSelectProvider: React.FC<MenuSelectProviderProps> = ({
  children,
}) => {
  const [selections, setSelections] = useState<Selections>(menuItems);

  const handleSelect = (item: Selection): void => {
    console.log("clicked", item.name);

    setSelections((prevSelections) => {
      const updatedSelections = prevSelections.map((selection) =>
        selection.name === item.name
          ? { ...selection, selected: !selection.selected }
          : selection
      );
      console.log("Updated selections:", updatedSelections);
      return updatedSelections;
    });
  };

  return (
    <MenuSelectContext.Provider value={{ menuItems, selections, handleSelect }}>
      {children}
    </MenuSelectContext.Provider>
  );
};

export const MenuSelectConsumer = MenuSelectContext.Consumer;

export default MenuSelectContext;
