import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface Selections {
  analysis: boolean;
  forex: boolean;
  intel: boolean;
  markets: boolean;
  portfolio: boolean;
}

interface MenuSelectContextType {
  selections: Selections;
  setSelections: Dispatch<SetStateAction<Selections>>;
}

const defaultSelections: Selections = {
  analysis: true,
  forex: true,
  intel: true,
  markets: true,
  portfolio: true,
};

const MenuSelectContext = createContext<MenuSelectContextType | undefined>(
  undefined
);

interface MenuSelectProviderProps {
  children: ReactNode;
}

export const MenuSelectProvider: React.FC<MenuSelectProviderProps> = ({
  children,
}) => {
  const [selections, setSelections] = useState<Selections>(defaultSelections);

  return (
    <MenuSelectContext.Provider value={{ selections, setSelections }}>
      {children}
    </MenuSelectContext.Provider>
  );
};

export const MenuSelectConsumer = MenuSelectContext.Consumer;

export default MenuSelectContext;
