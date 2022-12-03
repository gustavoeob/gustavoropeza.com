import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const changeTheme = (theme) => {
    setTheme((theme) => theme === "light" ? "dark" : "light");
    return theme;
  };

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
