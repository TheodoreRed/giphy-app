import { ReactNode, useState } from "react";
import DarkModeContext from "./DarkModeContext";

interface Props {
  children: ReactNode;
}

const DarkModeContextProvider = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState(false);

  const flipDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, flipDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
