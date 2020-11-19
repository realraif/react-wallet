import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import getTheme from "themes/index";

export const CustomThemeContext = React.createContext({
  currentTheme: "normal",
  setTheme: null,
});

const CustomThemeProvider = ({ children }) => {
  const currentTheme = localStorage.getItem("appTheme") || null;
  const [themeName, setThemeName] = useState(currentTheme);
  const theme = getTheme(themeName);

  const setThemeHandler = (name) => {
    localStorage.setItem("appTheme", name);
    setThemeName(name);
  };

  const contextValue = {
    currentTheme: themeName,
    setTheme: setThemeHandler,
  };

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export default CustomThemeProvider;
