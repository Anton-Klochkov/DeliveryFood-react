import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const colorLocalStorage = localStorage.getItem('preferred-theme');


const ThemeProvider = ({ children, ...props }) => {
  const [themeMode, setThemeMode] = useState(colorLocalStorage);

  const change = (name) => {
    setThemeMode(name);
  };
  return (
    <>
      <ThemeContext.Provider
        value={{ themeMode, setThemeMode, change }}
        {...props}
      >
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;
