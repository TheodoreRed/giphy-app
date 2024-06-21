import { createContext } from "react";

interface DarkModeContextModel {
  darkMode: boolean;
  flipDarkMode: () => void;
}

const defaultValues: DarkModeContextModel = {
  darkMode: false,
  flipDarkMode: () => {},
};

const DarkModeContext = createContext(defaultValues);
export default DarkModeContext;
