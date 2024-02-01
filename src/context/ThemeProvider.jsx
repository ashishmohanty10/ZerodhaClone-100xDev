import React, { useState } from "react";

export const ThemeContext = React.createContext(null);

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleDarkMode = () => {
    setDarkTheme(!darkTheme);
  };
  console.log(darkTheme);

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
