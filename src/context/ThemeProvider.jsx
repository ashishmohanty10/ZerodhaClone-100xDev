export const ThemeContext = React.createContext();

import React, { Children, useState } from "react";

const ThemeProvider = ({ Children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleDarkMode = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <ThemeContext.Provider value={(darkTheme, toggleDarkMode)}>
      {Children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
