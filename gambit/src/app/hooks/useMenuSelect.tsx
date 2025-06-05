import { useContext } from "react";
import MenuSelectContext from "../contexts/MenuSelectContext";

const useMenuSelect = () => {
  const context = useContext(MenuSelectContext);

  if (!context) {
    throw new Error("useMenuSelect must be used within a MenuSelectProvider");
  }

  return context;
};

export default useMenuSelect;
