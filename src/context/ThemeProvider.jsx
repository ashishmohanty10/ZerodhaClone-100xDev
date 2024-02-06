import React, { useState, useEffect } from "react";

export const ThemeContext = React.createContext(null);

const ThemeProvider = ({ children }) => {
  const savedDarkTheme = localStorage.getItem("darkTheme") === "true";
  const [darkTheme, setDarkTheme] = useState(savedDarkTheme);

  useEffect(() => {
    localStorage.setItem("darkTheme", darkTheme);
  }, [darkTheme]);

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
