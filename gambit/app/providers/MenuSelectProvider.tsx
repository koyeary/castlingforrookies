"use client";
import React, {
  useContext,
  createContext,
  useState,
  ReactNode,
  JSX,
} from "react";

import {
  BarChart,
  CurrencyExchange,
  Newspaper,
  LineAxis,
  DonutSmall,
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
    icon: <BarChart />,
    selected: true,
  },
  {
    name: "currencies",
    text: "Currencies",
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

export const useMenuSelect = () => {
  const context = useContext(MenuSelectContext);

  if (!context) {
    throw new Error("useMenuSelect must be used within a MenuSelectProvider");
  }

  return context;
};

//export const MenuSelectConsumer = MenuSelectContext.Consumer;

export default MenuSelectProvider;
